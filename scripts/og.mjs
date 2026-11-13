/**
 * Genera las imágenes que no puede generar el build: la tarjeta social
 * (public/og/default.png, 1200×630), el apple-touch-icon (180×180) y la
 * vista previa propia de cada página (public/og/pages/*.jpg, 1200×630).
 *
 * Se ejecuta a mano — `node scripts/og.mjs` — y los PNG resultantes se
 * commitean. Es deliberado: son activos estables, y meter Chromium en el
 * pipeline de deploy por dos imágenes que cambian una vez al año no se paga.
 *
 * Vuelve a correrlo si cambia el wordmark, el isotipo o el color de marca.
 *
 * Las vistas previas por página (`node scripts/og.mjs pages`) se arman desde
 * el sitio ya construido: corre `pnpm build` antes. Toman de cada página su
 * foto de encabezado, su antetítulo y su título, así que hay que volver a
 * generarlas cuando cambie alguno de los tres. Los perfiles usan su retrato,
 * su nombre y su cargo (JAPS-301). Las páginas sin foto (legales) no tienen
 * vista previa propia y usan default.png.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHROMIUM = process.env.CHROMIUM ?? 'chromium';

const INK = '#0a0a0a';
const ACCENT = '#a9eb59';
const FONTS =
  'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600&display=swap';

/** SVG en línea como data URI: Chromium no necesita resolver rutas relativas. */
const dataUri = (path) =>
  `data:image/svg+xml;base64,${readFileSync(resolve(ROOT, path)).toString('base64')}`;

/** Copy de la tarjeta social por idioma; el resto del layout es el mismo. */
const OG_COPY = {
  es: {
    title: 'Software a medida y transformación digital.',
    lead: 'Ingeniería e innovación al servicio de las personas y el planeta.',
  },
  en: {
    title: 'Custom software and digital transformation.',
    lead: 'Engineering and innovation in service of people and the planet.',
  },
};

const ogCard = (lang) => `<!doctype html>
<html><head><meta charset="utf-8" />
<link rel="stylesheet" href="${FONTS}" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: ${INK}; color: #fff;
    font-family: "DM Sans", Helvetica, Arial, sans-serif;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 72px 80px; position: relative; overflow: hidden;
  }
  /* Resplandor lima en la esquina: la misma firma de color del hero. */
  body::after {
    content: ""; position: absolute; right: -180px; bottom: -260px;
    width: 620px; height: 620px; border-radius: 50%;
    background: radial-gradient(circle, ${ACCENT}33 0%, transparent 70%);
  }
  img { width: 420px; display: block; }
  h1 {
    font-size: 62px; font-weight: 600; line-height: 1.1; letter-spacing: -1.8px;
    max-width: 880px;
  }
  p { font-size: 26px; font-weight: 400; color: #b8b8b8; margin-top: 20px; }
  .rule { width: 96px; height: 6px; background: ${ACCENT}; border-radius: 3px; margin-bottom: 32px; }
</style></head>
<body>
  <img src="${dataUri('public/logo/wordmark-inverse.svg')}" alt="" />
  <div>
    <div class="rule"></div>
    <h1>${OG_COPY[lang].title}</h1>
    <p>${OG_COPY[lang].lead}</p>
  </div>
</body></html>`;

/** El isotipo blanco centrado sobre tinta, con el margen que piden iOS y
 *  Android para no recortar la marca al enmascarar el ícono. */
const appIcon = (size) => `<!doctype html>
<html><head><meta charset="utf-8" /><style>
  * { margin: 0; padding: 0; }
  body {
    width: ${size}px; height: ${size}px; background: ${INK};
    display: flex; align-items: center; justify-content: center;
  }
  img { width: ${Math.round(size * 0.64)}px; }
</style></head>
<body><img src="${dataUri('public/logo/iso_white.svg')}" alt="" /></body></html>`;

function shoot(html, out, width, height) {
  const tmp = resolve(ROOT, `.og-tmp-${width}x${height}.html`);
  const target = resolve(ROOT, out);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(tmp, html);
  try {
    execFileSync(
      CHROMIUM,
      [
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        '--force-device-scale-factor=1',
        `--window-size=${width},${height}`,
        `--screenshot=${target}`,
        /* Las fuentes de Google se descargan; sin espera se captura el fallback. */
        '--virtual-time-budget=4000',
        `file://${tmp}`,
      ],
      { stdio: 'ignore' },
    );
  } finally {
    rmSync(tmp, { force: true });
  }
  console.log(`✓ ${out} (${width}×${height})`);
}

/* --- Vista previa por página ------------------------------------------- *
   La foto del encabezado de la página, desenfocada bajo un velo oscuro como
   en el sitio; el wordmark arriba, el antetítulo y el título abajo, y el
   marco octogonal del isotipo, translúcido, asomando por la esquina
   superior derecha. Mismo trazo que el marco de PageLoader. */
const OCTAGON =
  'M119.761 108.364C116.717 111.318 115 115.375 115 119.611V288.389C115 292.625 116.717 296.682 119.761 299.636L226.835 403.556C229.771 406.406 233.707 408 237.805 408H508.195C512.292 408 516.228 406.406 519.166 403.556L626.24 299.636C629.282 296.682 631 292.625 631 288.389V119.611C631 115.375 629.282 111.318 626.24 108.364L519.166 4.44522C516.228 1.59483 512.292 0 508.195 0H237.805C233.707 0 229.771 1.59484 226.835 4.44522L119.761 108.364ZM564.927 263.631C564.927 315.632 522.668 357.785 470.537 357.785H275.463C223.333 357.785 181.073 315.632 181.073 263.631V144.369C181.073 92.3696 223.333 50.2154 275.463 50.2154H470.537C522.668 50.2154 564.927 92.3696 564.927 144.369V263.631Z';

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const pageCard = ({ eyebrow, title, photo }) => `<!doctype html>
<html><head><meta charset="utf-8" />
<link rel="stylesheet" href="${FONTS}" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: ${INK}; color: #fff;
    font-family: "DM Sans", Helvetica, Arial, sans-serif;
    position: relative; overflow: hidden;
  }
  .bg { position: absolute; inset: 0; background: url("${photo}") center / cover; filter: blur(3px); transform: scale(1.06); }
  .veil { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10, 10, 10, .45), rgba(10, 10, 10, .85)); }
  .frame { position: absolute; width: 460px; right: -110px; top: -130px; opacity: .16; }
  .copy {
    position: relative; height: 100%; padding: 64px 72px;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .logo { width: 280px; display: block; }
  .eyebrow { font-size: 18px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; opacity: .75; margin-bottom: 18px; }
  h1 { font-size: ${title.length > 70 ? 52 : 60}px; line-height: 1.08; letter-spacing: -1.8px; font-weight: 600; max-width: 1000px; }
  .url { font-size: 20px; opacity: .7; margin-top: 22px; }
</style></head>
<body>
  <div class="bg"></div>
  <div class="veil"></div>
  <svg class="frame" viewBox="115 0 516 408" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="evenodd" d="${OCTAGON}" /></svg>
  <div class="copy">
    <img class="logo" src="${dataUri('public/logo/wordmark-inverse.svg')}" alt="" />
    <div>
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h1>${escapeHtml(title)}</h1>
      <p class="url">japs.ing</p>
    </div>
  </div>
</body></html>`;

/* Perfil: el retrato a la derecha, fundido con la tinta, y a la izquierda el
   nombre y el cargo. El retrato no se desenfoca: la cara es la noticia. */
const profileCard = ({ eyebrow, title, role, photo }) => `<!doctype html>
<html><head><meta charset="utf-8" />
<link rel="stylesheet" href="${FONTS}" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: ${INK}; color: #fff;
    font-family: "DM Sans", Helvetica, Arial, sans-serif;
    position: relative; overflow: hidden;
  }
  .portrait { position: absolute; top: 0; right: 0; width: 520px; height: 630px; background: url("${photo}") center 20% / cover; }
  .portrait::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, ${INK} 0%, rgba(10, 10, 10, .55) 22%, rgba(10, 10, 10, 0) 55%); }
  .frame { position: absolute; width: 460px; right: -110px; top: -130px; opacity: .16; }
  .copy {
    position: relative; height: 100%; width: 760px; padding: 64px 72px;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .logo { width: 280px; display: block; }
  .eyebrow { font-size: 18px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; opacity: .75; margin-bottom: 18px; }
  h1 { font-size: 72px; line-height: 1.04; letter-spacing: -2px; font-weight: 600; }
  .role { font-size: 30px; color: ${ACCENT}; margin-top: 18px; }
  .url { font-size: 20px; opacity: .7; margin-top: 22px; }
</style></head>
<body>
  <div class="portrait"></div>
  <svg class="frame" viewBox="115 0 516 408" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="evenodd" d="${OCTAGON}" /></svg>
  <div class="copy">
    <img class="logo" src="${dataUri('public/logo/wordmark-inverse.svg')}" alt="" />
    <div>
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h1>${escapeHtml(title)}</h1>
      <p class="role">${escapeHtml(role)}</p>
      <p class="url">japs.ing</p>
    </div>
  </div>
</body></html>`;

/** Texto plano de un fragmento del HTML construido. */
const plain = (html) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

/** Clave del archivo de una página: sus segmentos de ruta unidos por «_»
 *  (/casos-de-exito/axam/ → casos-de-exito_axam; la raíz es «index»).
 *  Seo.astro deriva la misma clave del pathname. */
const pageKey = (route) => route.split('/').filter(Boolean).join('_') || 'index';

/** Antetítulo, título y foto del encabezado de una página construida. */
function readPage(html, route) {
  const title = plain(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '');
  const crumb = html.match(/class="case-crumb"[\s\S]*?<\/nav>/)?.[0];
  if (crumb) {
    const links = [...crumb.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)].map(([, text]) => plain(text));
    const photo = html.match(/class="case-hero__img"[^>]*src="([^"]+)"/)?.[1] ?? html.match(/src="([^"]+)"[^>]*class="case-hero__img"/)?.[1];
    const kicker = route.startsWith('/en/') ? 'Case study' : 'Caso de éxito';
    return { title, eyebrow: `${kicker} · ${links.at(-1)}`, photo };
  }
  const eyebrow = plain(html.match(/class="hero__eyebrow"[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? '');
  const role = html.match(/class="profile-hero__role"[^>]*>([\s\S]*?)<\/div>/)?.[1];
  if (role) {
    const portrait = html.match(/profile-hero__photo"[^>]*>\s*<img\b[^>]*src="([^"]+)"/)?.[1];
    return { title, eyebrow, role: plain(role), photo: portrait };
  }
  const photo = html.match(/hero__bg-slide"[^>]*background-image:url\(([^)]+)\)/)?.[1];
  return { title, eyebrow, photo };
}

function* builtPages(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* builtPages(path);
    else if (entry.name === 'index.html') yield path;
  }
}

function pageCards() {
  const dist = resolve(ROOT, 'dist');
  if (!existsSync(dist)) throw new Error('Falta dist/: corre `pnpm build` antes de `node scripts/og.mjs pages`.');
  rmSync(resolve(ROOT, 'public/og/pages'), { recursive: true, force: true });
  for (const file of builtPages(dist)) {
    const route = `/${relative(dist, dirname(file)).split(sep).join('/')}/`.replace(/^\/\/$/, '/');
    const { title, eyebrow, role, photo } = readPage(readFileSync(file, 'utf8'), route);
    const source = photo && resolve(ROOT, 'public', photo.replace(/^\//, ''));
    if (!title || !source || !existsSync(source)) {
      console.log(`· ${route} sin foto de encabezado: usa default.png`);
      continue;
    }
    const card = role ? profileCard({ eyebrow, title, role, photo: `file://${source}` }) : pageCard({ eyebrow, title, photo: `file://${source}` });
    shoot(card, `public/og/pages/${pageKey(route)}.jpg`, 1200, 630);
  }
}

/* `node scripts/og.mjs og-en` regenera sólo esa salida; sin argumento, todas
   menos las vistas previas por página, que dependen del build:
   `node scripts/og.mjs pages`. */
const only = process.argv[2];
const want = (name) => !only || only === name;

if (want('og')) shoot(ogCard('es'), 'public/og/default.png', 1200, 630);
if (want('og-en')) shoot(ogCard('en'), 'public/og/default-en.png', 1200, 630);
if (only === 'pages') pageCards();
if (want('icons')) {
  shoot(appIcon(180), 'public/icon/apple-touch-icon.png', 180, 180);
  shoot(appIcon(192), 'public/icon/icon-192.png', 192, 192);
  shoot(appIcon(512), 'public/icon/icon-512.png', 512, 512);
}
