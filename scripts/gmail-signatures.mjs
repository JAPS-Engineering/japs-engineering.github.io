/**
 * Instala la firma de correo de JAPS en el Gmail de cada persona (PEOPLE en
 * scripts/email.mjs) con la API de Gmail, sin copiar y pegar en cada cuenta.
 * La firma es la misma que copia el botón de ref/firmas/index.html: tarjeta
 * negra, imágenes desde https://japs.ing/email/.
 *
 * Usa una cuenta de servicio de Google Cloud con delegación en todo el
 * dominio y un único permiso, gmail.settings.basic (configuración de Gmail;
 * no lee ni envía correos). La clave JSON se pasa por GMAIL_SA_KEY y nunca
 * se guarda en el repositorio.
 *
 *   GMAIL_SA_KEY=~/clave.json node scripts/gmail-signatures.mjs               simulación: muestra el cambio, no toca nada
 *   GMAIL_SA_KEY=~/clave.json node scripts/gmail-signatures.mjs --apply       aplica a todos
 *   GMAIL_SA_KEY=~/clave.json node scripts/gmail-signatures.mjs --apply jean  aplica sólo a esa persona (slug)
 *
 * Antes de aplicar guarda la firma anterior de cada persona en
 * ~/.config/japs/firmas-respaldo/ (fuera del repositorio), para poder volver a ella.
 */
import { createSign } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { BASE, PEOPLE, signatureTable } from './email.mjs';

const SCOPE = 'https://www.googleapis.com/auth/gmail.settings.basic';
const API = 'https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs';

const keyPath = process.env.GMAIL_SA_KEY;
if (!keyPath) {
  console.error('Falta GMAIL_SA_KEY: la ruta al JSON de la cuenta de servicio.');
  process.exit(1);
}
const key = JSON.parse(readFileSync(keyPath, 'utf8'));

const args = process.argv.slice(2);
const apply = args.includes('--apply');
const slugs = args.filter((a) => !a.startsWith('--'));
const people = slugs.length ? PEOPLE.filter((p) => slugs.includes(p.slug)) : PEOPLE;
if (!people.length) {
  console.error(`Nadie coincide con ${slugs.join(', ')}. Opciones: ${PEOPLE.map((p) => p.slug).join(', ')}.`);
  process.exit(1);
}

const b64url = (value) => Buffer.from(value).toString('base64url');

/** Token de acceso actuando como `subject` (delegación en todo el dominio). */
async function accessToken(subject) {
  const now = Math.floor(Date.now() / 1000);
  const aud = key.token_uri ?? 'https://oauth2.googleapis.com/token';
  const unsigned = `${b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))}.${b64url(
    JSON.stringify({ iss: key.client_email, scope: SCOPE, aud, iat: now, exp: now + 3600, sub: subject }),
  )}`;
  const signature = createSign('RSA-SHA256').update(unsigned).sign(key.private_key, 'base64url');
  const res = await fetch(aud, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${signature}` }),
  });
  const body = await res.json();
  if (!res.ok) {
    // unauthorized_client: falta la delegación del ID de cliente en admin.google.com, o el permiso no coincide.
    throw new Error(`no se pudo actuar como ${subject}: ${body.error}${body.error_description ? ` — ${body.error_description}` : ''}`);
  }
  return body.access_token;
}

async function gmail(token, method, email, body) {
  const res = await fetch(`${API}/${encodeURIComponent(email)}`, {
    method,
    headers: { authorization: `Bearer ${token}`, ...(body && { 'content-type': 'application/json' }) },
    body: body && JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`${method} ${email}: ${json.error?.message ?? res.status}`);
  return json;
}

/** Resumen legible de una firma HTML: su texto y las imágenes que usa. */
function describe(html) {
  if (!html) return '(sin firma)';
  const text = html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  const images = [...html.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1].split('/').pop().split('?')[0]);
  return `${text || '(sin texto)'}${images.length ? `  · imágenes: ${images.join(', ')}` : ''}`;
}

console.log(apply ? 'Aplicando firmas…' : 'Simulación: no se cambia nada. Agrega --apply para aplicar.');
let failed = 0;
for (const person of people) {
  try {
    const token = await accessToken(person.email);
    const current = (await gmail(token, 'GET', person.email)).signature ?? '';
    const next = signatureTable(person, BASE, { withLight: false });
    console.log(`\n${person.name} <${person.email}>`);
    console.log(`  actual: ${describe(current)}`);
    console.log(`  nueva:  ${describe(next)}`);
    if (!apply) continue;
    const backup = join(homedir(), '.config/japs/firmas-respaldo', `${person.slug}-${new Date().toISOString().replace(/[:.]/g, '-')}.html`);
    mkdirSync(join(backup, '..'), { recursive: true });
    writeFileSync(backup, current);
    console.log(`  respaldo de la firma anterior: ${backup}`);
    // Gmail limpia el HTML al guardarlo, así que se verifica por el GIF y no por igualdad exacta.
    const saved = (await gmail(token, 'PATCH', person.email, { signature: next })).signature ?? '';
    console.log(saved.includes(`${BASE}japs.gif`) ? '  ✓ firma actualizada' : '  ⚠ Gmail guardó la firma, pero sin el GIF: revisarla a mano');
  } catch (error) {
    failed++;
    console.log(`\n${person.name} <${person.email}>\n  ✗ ${error.message}`);
  }
}
process.exit(failed ? 1 : 0);
