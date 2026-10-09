/**
 * Genera la firma de correo de JAPS: los activos que se sirven desde
 * https://japs.ing/email/ (public/email/) y el HTML de cada firma
 * (ref/firmas/, fuera del sitio para no publicar teléfonos).
 *
 *   · japs.gif / japs-claro.gif — el imagotipo con el loop G6 «Tuerca con
 *     caída» del laboratorio (ref/logo-motion-lab.html), a 50 fps y a la
 *     misma velocidad, con la pausa en el imagotipo alargada a 10 s por ciclo.
 *   · nombre-<slug>.png / -claro.png — nombre y cargo en Michroma; la inicial
 *     es la letra del logo (J, A, P, S). Va como imagen porque Gmail ignora
 *     las fuentes web.
 *   · icon-phone.png, icon-mail.png — gris medio, sirven en ambos modos.
 *   · ref/firmas/firma-<slug>.html — la firma lista para Apple Mail/Outlook.
 *   · ref/firmas/index.html — vista previa en ambos modos y botón para copiar
 *     la firma a Gmail.
 *
 * Modo claro/oscuro: la tarjeta contrasta con el fondo del cliente. Por
 * defecto es negra (la referencia), que es lo que se ve en modo claro y en
 * Gmail, que descarta los <style> de las firmas. Los clientes que respetan
 * prefers-color-scheme (Apple Mail, iOS, Outlook para Mac) muestran la
 * tarjeta blanca en modo oscuro.
 *
 * Se ejecuta a mano — `pnpm assets:email`, o `node scripts/email.mjs gif`
 * para una sola salida — y los archivos se commitean, igual que og.mjs.
 * Necesita ImageMagick con librsvg (`magick` o MAGICK) y Chromium
 * (`chromium` o CHROMIUM).
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MAGICK = process.env.MAGICK ?? 'magick';
const CHROMIUM = process.env.CHROMIUM ?? 'chromium';
const BASE = 'https://japs.ing/email/';
const PUBLIC = 'public/email';

/* --- Personas ------------------------------------------------------------- *
   Nombres y correos de src/data/nosotros.ts; el cargo de Jean, de la firma
   de referencia. phone en formato E.164; null omite la fila del teléfono. */
const PEOPLE = [
  { slug: 'pablo', name: 'Pablo Landerretche', role: 'CEO', email: 'pablo@japs.ing', phone: '+56993183282' },
  { slug: 'alonso', name: 'Alonso Rivera', role: 'CTO', email: 'alonso@japs.ing', phone: '+56942857734' },
  { slug: 'sergio', name: 'Sergio Urzúa', role: 'CFO', email: 'sergio@japs.ing', phone: '+56931729260' },
  { slug: 'jean', name: 'Jean Fuentes', role: 'Lead Developer', email: 'jean@japs.ing', phone: '+56937335557' },
];

/* --- Temas ---------------------------------------------------------------- *
   Nombrados por el color de la tarjeta. oscuro = la referencia
   (ref/firmas/referencia.svg), para el modo claro del cliente; claro =
   colores originales del imagotipo, para el modo oscuro. */
const THEMES = {
  oscuro: { suffix: '', bg: '#000000', frame: '#1D1D1D', ink: '#EBEBEB', name: '#FFFFFF', role: '#C4C4C4', text: '#CDCDCD', border: '#000000' },
  claro: { suffix: '-claro', bg: '#FFFFFF', frame: '#EDEDED', ink: '#0F0F0F', name: '#0F0F0F', role: '#6B6B6B', text: '#3A3A3A', border: '#E5E5E5' },
};
const ICON_FILL = '#9A9A9A';
const ICON_SIZE = 20; // tamaño mostrado; el PNG es 2×

/* --- Geometría de marca --------------------------------------------------- */

const paths = (file) =>
  [...readFileSync(resolve(ROOT, file), 'utf8').matchAll(/<path[^>]*\sd="([^"]+)"/g)].map((m) => m[1]);

// assets/imagotipo.svg trae el marco y luego las letras en orden S, P, A, J.
const [FRAME, S, P, A, J] = paths('assets/imagotipo.svg');
const [ISO] = paths('public/logo/iso_black.svg');
const LETTERS = { J, A, P, S };
const ORDER = ['J', 'A', 'P', 'S'];
const X0 = { J: 0, A: 194, P: 388, S: 582 }; // borde izquierdo de cada letra en el imagotipo

const ISO_C = { cx: 149.75, cy: 149.5 }; // centro del isotipo
const IMG_C = { cx: 373, cy: 204 }; // centro del marco del imagotipo
const K = 516 / 165.5; // isotipo → marco: misma proporción, escala ×3,12
const S0 = 1.6; // tamaño del isotipo en la pausa intermedia

/* --- Coreografía G6 (función pura del tiempo, en ms) ---------------------- */

const clamp = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const mix = (a, b, k) => a + (b - a) * k;
const ease = {
  linear: (x) => x,
  in2: (x) => x * x,
  out2: (x) => 1 - (1 - x) ** 2,
  out3: (x) => 1 - (1 - x) ** 3,
  inOut4: (x) => (x < 0.5 ? 8 * x ** 4 : 1 - (-2 * x + 2) ** 4 / 2),
  back: (s) => (x) => 1 + (s + 1) * (x - 1) ** 3 + s * (x - 1) ** 2,
};
const back17 = ease.back(1.7);
const at = (t, start, dur, e = ease.linear) => e(clamp((t - start) / dur));

const transform = ({ cx = 0, cy = 0, x = 0, y = 0, s = 1, r = 0 }) =>
  `translate(${x.toFixed(2)} ${y.toFixed(2)}) translate(${cx} ${cy}) rotate(${r.toFixed(3)}) scale(${s.toFixed(4)}) translate(${-cx} ${-cy})`;

/** Estado de cada pieza en el instante t de G6 (3,8 s; t = 0 y t = 3800 son el imagotipo). */
function g6(t) {
  // Dos medias vueltas de 4 pasos de 45° = una vuelta entera.
  let rot = 0;
  for (let k = 0; k < 4; k++) rot += 45 * (at(t, 1500 + 130 * k, 90, ease.out3) + at(t, 2300 + 130 * k, 90, ease.out3));

  let s, seedOpacity, frameOpacity;
  if (t < 2200) {
    s = mix(K, S0, at(t, 1400, 360, ease.inOut4)) * (1 - 0.05 * Math.sin(Math.PI * at(t, 2020, 180)));
    seedOpacity = at(t, 1380, 60);
    frameOpacity = 1 - at(t, 1400, 80);
  } else {
    s = mix(S0, K, at(t, 2500, 360, ease.inOut4));
    seedOpacity = 1 - at(t, 2840, 100, ease.out2);
    frameOpacity = at(t, 2840, 80);
  }

  const letters = ORDER.map((k, i) => {
    if (t < 2600) {
      // Caen con gravedad, girando un poco.
      const s0 = 1100 + 50 * i;
      const p = at(t, s0, 420, ease.in2);
      return { k, opacity: 1 - at(t, s0 + 220, 200), t: { cx: X0[k] + 82, cy: 204, y: 260 * p, r: (i % 2 ? 1 : -1) * 14 * p } };
    }
    // Vuelven desde arriba con un pequeño rebote.
    const s0 = 2860 + 70 * i;
    return { k, opacity: at(t, s0, 100), t: { y: mix(-70, 0, at(t, s0, 320, back17)) } };
  });

  return {
    frameOpacity,
    seed: { opacity: seedOpacity, t: { ...ISO_C, x: IMG_C.cx - ISO_C.cx, y: IMG_C.cy - ISO_C.cy, s, r: rot } },
    letters,
  };
}

/* --- GIF ------------------------------------------------------------------ */

// Encuadre: el imagotipo (746×408) con margen para el giro y las letras que caen,
// a 2× para pantallas de alta densidad. Se muestra a 230×128 en la firma.
const GIF = { viewBox: [-43.5, -27.5, 833, 463], width: 460, height: 256 };

const opacity = (v) => (v >= 1 ? '' : ` opacity="${Math.max(0, v).toFixed(3)}"`);

function frameSvg(t, theme) {
  const st = g6(t);
  const [x, y, w, h] = GIF.viewBox;
  const letters = st.letters
    .map(({ k, opacity: o, t: tr }) => (o <= 0 ? '' : `<path d="${LETTERS[k]}" fill="${theme.ink}" transform="${transform(tr)}"${opacity(o)}/>`))
    .join('');
  // El fondo desborda el encuadre: el viewBox no tiene la proporción exacta del
  // GIF y, sin esto, quedaría una franja sin pintar arriba y abajo.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${GIF.width}" height="${GIF.height}" viewBox="${x} ${y} ${w} ${h}">
<rect x="${x - w}" y="${y - h}" width="${3 * w}" height="${3 * h}" fill="${theme.bg}"/>
${st.frameOpacity > 0 ? `<path d="${FRAME}" fill="${theme.frame}" fill-rule="evenodd"${opacity(st.frameOpacity)}/>` : ''}
${st.seed.opacity > 0 ? `<path d="${ISO}" fill="${theme.ink}" fill-rule="evenodd" transform="${transform(st.seed.t)}"${opacity(st.seed.opacity)}/>` : ''}
${letters}
</svg>`;
}

/**
 * 10 s por ciclo: 1,1 s quieto en el imagotipo, la animación G6 a 50 fps
 * (1,1–3,4 s) y el resto otra vez quieto. 50 fps (retardo de 2 centésimas)
 * es lo más fluido que respetan los navegadores: con retardos menores, la
 * mayoría los fuerza a 10 centésimas. Cada pausa es un solo cuadro con
 * retardo largo, así el archivo pesa poco. El primer cuadro es el imagotipo:
 * es lo que muestran los clientes que no animan GIF (Outlook de escritorio).
 */
function buildGif(theme) {
  const out = `${PUBLIC}/japs${theme.suffix}.gif`;
  const STEP = 20; // ms por cuadro = 50 fps; los retardos de GIF van en centésimas
  const frames = [{ t: 0, delay: 110 }];
  for (let t = 1100 + STEP; t <= 3380; t += STEP) frames.push({ t, delay: STEP / 10 });
  const used = frames.reduce((sum, f) => sum + f.delay, 0);
  frames.push({ t: 3800, delay: 1000 - used }); // reposo final = imagotipo

  const dir = mkdtempSync(join(tmpdir(), 'japs-gif-'));
  try {
    const args = ['-background', theme.bg];
    frames.forEach((f, i) => {
      const file = join(dir, `f${String(i).padStart(3, '0')}.svg`);
      writeFileSync(file, frameSvg(f.t, theme));
      args.push('-delay', String(f.delay), file);
    });
    // Paleta fija con los colores exactos del tema y sus mezclas: así el fondo
    // del GIF es idéntico al de la tarjeta y no aparece un recuadro alrededor.
    const palette = join(dir, 'palette.png');
    execFileSync(MAGICK, [
      '-size', '1x32',
      `gradient:${theme.bg}-${theme.ink}`, `gradient:${theme.frame}-${theme.ink}`, `gradient:${theme.bg}-${theme.frame}`,
      '+append', palette,
    ]);
    const target = resolve(ROOT, out);
    mkdirSync(dirname(target), { recursive: true });
    execFileSync(MAGICK, [...args, '-dither', 'None', '-remap', palette, '-loop', '0', '-layers', 'Optimize', target], { stdio: 'inherit' });
    const total = frames.reduce((sum, f) => sum + f.delay, 0) / 100;
    console.log(`✓ ${out} (${frames.length} cuadros, ${total} s, ${(statSync(target).size / 1024).toFixed(0)} KB)`);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/* --- Nombre y cargo (Chromium) -------------------------------------------- */

const NAME_BOX = { width: 320, height: 64 }; // tamaño mostrado; el PNG es 2×

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** La inicial del nombre, si es J, A, P o S, se dibuja con la letra del logo. */
function nameMarkup(name) {
  const k = name[0].toUpperCase();
  if (!LETTERS[k]) return escapeHtml(name);
  const glyph = `<svg class="initial" viewBox="${X0[k]} 139 164 130" aria-hidden="true"><path d="${LETTERS[k]}"/></svg>`;
  return glyph + escapeHtml(name.slice(1));
}

const nameCard = (person, theme) => `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Michroma&display=block">
<style>
  html, body { margin: 0; background: transparent; }
  .box { width: ${NAME_BOX.width}px; height: ${NAME_BOX.height}px; overflow: hidden; font-family: 'Michroma', sans-serif; }
  p { margin: 0; white-space: nowrap; }
  /* Medidas de la referencia a 600 px de ancho. */
  .name { font-size: 24px; line-height: 1.2; color: ${theme.name}; }
  .role { font-size: 18.6px; line-height: 1.3; color: ${theme.role}; margin-top: 4px; }
  /* Inicial del logo: alto de mayúscula, apoyada en la línea base. */
  .initial { display: inline-block; height: 1cap; width: calc(1cap * 164 / 130); vertical-align: baseline; margin-right: 0.06em; fill: currentColor; }
</style></head>
<body><div class="box"><p class="name">${nameMarkup(person.name)}</p><p class="role">${escapeHtml(person.role)}</p></div>
<script>
  // Los nombres largos se achican hasta caber en el ancho, sin cortar.
  document.fonts.ready.then(() => {
    for (const el of document.querySelectorAll('p')) {
      let size = parseFloat(getComputedStyle(el).fontSize);
      while (el.scrollWidth > el.clientWidth && size > 10) el.style.fontSize = (size -= 0.5) + 'px';
    }
  });
</script></body></html>`;

function shoot(html, out, width, height) {
  const dir = mkdtempSync(join(tmpdir(), 'japs-shot-'));
  const tmp = join(dir, 'page.html');
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
        '--force-device-scale-factor=2',
        '--default-background-color=00000000',
        `--window-size=${width},${height}`,
        `--screenshot=${target}`,
        /* Michroma se descarga de Google Fonts; sin espera se captura el fallback. */
        '--virtual-time-budget=5000',
        `file://${tmp}`,
      ],
      { stdio: 'ignore' },
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
  console.log(`✓ ${out} (${width * 2}×${height * 2})`);
}

/* --- Íconos --------------------------------------------------------------- */

// Material Symbols (Apache 2.0), variante rellena, como en la referencia.
const ICONS = {
  phone: 'M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z',
  mail: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z',
};

function buildIcon(name) {
  const out = `${PUBLIC}/icon-${name}.png`;
  const dir = mkdtempSync(join(tmpdir(), 'japs-icon-'));
  try {
    const svg = join(dir, 'icon.svg');
    const px = ICON_SIZE * 2;
    writeFileSync(svg, `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 -960 960 960"><path d="${ICONS[name]}" fill="${ICON_FILL}"/></svg>`);
    execFileSync(MAGICK, ['-background', 'none', svg, resolve(ROOT, out)]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
  console.log(`✓ ${out} (${ICON_SIZE * 2}×${ICON_SIZE * 2})`);
}

/* --- HTML de la firma ----------------------------------------------------- */

const FONT = "Michroma, Verdana, Arial, sans-serif";

/** (+56) 9 3733 5557 a partir de +56937335557. */
const phoneLabel = (e164) => `(${e164.slice(0, 3)}) ${e164.slice(3, 4)} ${e164.slice(4, 8)} ${e164.slice(8)}`;

/** La imagen de la tarjeta negra (por defecto) y su par de la tarjeta blanca, oculto salvo en modo oscuro. Outlook de Windows no ve el par. */
const imagePair = (base, dark, light, w, h, alt) =>
  `<img class="japs-dark" src="${base}${dark}" width="${w}" height="${h}" alt="${escapeHtml(alt)}" style="display:block;border:0;width:${w}px;height:${h}px;">` +
  `<!--[if !mso]><!--><img class="japs-light" src="${base}${light}" width="${w}" height="${h}" alt="${escapeHtml(alt)}" style="display:none;max-height:0;overflow:hidden;border:0;width:${w}px;height:${h}px;"><!--<![endif]-->`;

function signatureTable(person, base) {
  const rows = [
    person.phone && { icon: 'icon-phone.png', alt: 'Teléfono', href: `tel:${person.phone}`, label: phoneLabel(person.phone) },
    { icon: 'icon-mail.png', alt: 'Correo', href: `mailto:${person.email}`, label: person.email },
  ].filter(Boolean);
  const rowHtml = rows
    .map((r, i) => {
      const pad = i < rows.length - 1 ? '0 0 8px 0' : '0';
      const s = ICON_SIZE;
      return `<tr><td width="${s + 11}" valign="middle" style="width:${s + 11}px;padding:${pad};"><img src="${base}${r.icon}" width="${s}" height="${s}" alt="${r.alt}" style="display:block;border:0;width:${s}px;height:${s}px;"></td>` +
        `<td valign="middle" style="padding:${pad};font-family:${FONT};font-size:14px;line-height:${s}px;white-space:nowrap;"><a class="japs-text" href="${r.href}" style="color:${THEMES.oscuro.text};text-decoration:none;">${escapeHtml(r.label)}</a></td></tr>`;
    })
    .join('');
  const s = THEMES.oscuro;
  return `<table class="japs-card" role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" bgcolor="${s.bg}" style="width:600px;max-width:600px;background-color:${s.bg};border:1px solid ${s.border};border-radius:19px;border-collapse:separate;">
<tr>
<td valign="top" style="padding:20px 0 20px 34px;">
${imagePair(base, `nombre-${person.slug}.png`, `nombre-${person.slug}-claro.png`, NAME_BOX.width, NAME_BOX.height, `${person.name} — ${person.role}`)}
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;">${rowHtml}</table>
</td>
<td valign="middle" align="right" width="248" style="width:248px;padding:16px 18px 16px 0;">
<a href="https://japs.ing" style="text-decoration:none;">${imagePair(base, 'japs.gif', 'japs-claro.gif', 230, 128, 'JAPS Engineering')}</a>
</td>
</tr>
</table>`;
}

/** Reglas de la tarjeta blanca (modo oscuro); `scope` las limita a un contenedor en la vista previa. */
const whiteCardRules = (scope = '') => `
  ${scope}.japs-card { background-color: ${THEMES.claro.bg} !important; border-color: ${THEMES.claro.border} !important; }
  ${scope}.japs-dark { display: none !important; max-height: 0 !important; }
  ${scope}.japs-light { display: block !important; max-height: none !important; }
  ${scope}.japs-text { color: ${THEMES.claro.text} !important; }`;

const signatureFile = (person) => `<!doctype html>
<!-- Firma de correo JAPS — ${person.name}. Generada por scripts/email.mjs; no editar a mano.
     Tarjeta negra por defecto (modo claro y Gmail); los clientes que respetan el modo oscuro
     (Apple Mail, iOS, Outlook para Mac) muestran la tarjeta blanca, para que siempre contraste.
     Para Gmail, copiarla desde ref/firmas/index.html. -->
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>Firma — ${escapeHtml(person.name)}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  .japs-light { display: none; max-height: 0; overflow: hidden; }
  @media (prefers-color-scheme: dark) {${whiteCardRules()}
  }
</style>
</head>
<body>
${signatureTable(person, BASE)}
</body>
</html>
`;

/** Vista previa local: cada firma en oscuro y en claro, y un botón que copia la versión para Gmail. */
const indexFile = () => `<!doctype html>
<!-- Generado por scripts/email.mjs; no editar a mano. -->
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Firmas de correo JAPS</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Michroma&family=DM+Sans:opsz,wght@9..40,400;9..40,600&display=swap">
<style>
  :root { --bg: #f3f4f6; --ink: #0a0a0a; --muted: #5c626a; --hairline: #e1e3e7; --panel: #ffffff; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font: 400 15px/1.55 "DM Sans", Arial, sans-serif; }
  main { max-width: 1320px; margin: 0 auto; padding: 40px 20px 64px; display: grid; gap: 32px; }
  h1 { margin: 0; font-size: 32px; letter-spacing: -0.02em; }
  .lede { margin: 6px 0 0; color: var(--muted); max-width: 70ch; }
  .lede code { font-size: 13px; }
  section { display: grid; gap: 12px; }
  .head { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
  h2 { margin: 0; font-size: 20px; }
  button { font: 600 13px/1 "DM Sans", Arial, sans-serif; padding: 9px 14px; border-radius: 999px; border: 1px solid var(--ink); background: var(--ink); color: #fff; cursor: pointer; }
  .head a { color: var(--muted); font-size: 13px; }
  .modes { display: flex; flex-wrap: wrap; gap: 16px; }
  .mode { display: grid; gap: 8px; padding: 16px; border-radius: 14px; overflow-x: auto; max-width: 100%; }
  .mode span { font-size: 12px; color: var(--muted); }
  .mode.dark-bg { background: #1b1c1f; }
  .mode.dark-bg span { color: #a0a4aa; }
  .mode.light-bg { background: #ffffff; border: 1px solid var(--hairline); }
  .japs-light { display: none; max-height: 0; overflow: hidden; }
  ${whiteCardRules('.white-card ')}
</style>
</head>
<body>
<main>
  <header>
    <h1>Firmas de correo JAPS</h1>
    <p class="lede">Cada firma en sus dos modos: la tarjeta siempre contrasta con el fondo del correo. <strong>Gmail:</strong> pulsa «Copiar firma» y pégala en Configuración → Ver todos los ajustes → Firma. Gmail usa siempre la tarjeta negra. <strong>Apple Mail y Outlook:</strong> usa el archivo <code>firma-&lt;nombre&gt;.html</code>, que cambia sola a la tarjeta blanca en modo oscuro. Las imágenes se cargan desde <code>japs.ing/email/</code>; aquí se ven las copias locales de <code>public/email/</code>.</p>
  </header>
${PEOPLE.map((p) => `  <section>
    <div class="head">
      <h2>${escapeHtml(p.name)}</h2>
      <button type="button" data-copy="sig-${p.slug}">Copiar firma</button>
      <a href="firma-${p.slug}.html">firma-${p.slug}.html</a>
    </div>
    <div class="modes">
      <div class="mode light-bg"><span>Modo claro · también Gmail en cualquier modo</span>${signatureTable(p, '../../public/email/')}</div>
      <div class="mode dark-bg white-card"><span>Modo oscuro (Apple Mail, iOS, Outlook para Mac)</span>${signatureTable(p, '../../public/email/')}</div>
    </div>
    <template id="sig-${p.slug}">${signatureTable(p, BASE)}</template>
  </section>`).join('\n')}
</main>
<script>
  // Copia el HTML con las URLs públicas (no las copias locales de la vista previa).
  for (const btn of document.querySelectorAll('[data-copy]')) {
    btn.addEventListener('click', async () => {
      const html = document.getElementById(btn.dataset.copy).innerHTML;
      const done = () => { btn.textContent = 'Copiada'; setTimeout(() => (btn.textContent = 'Copiar firma'), 1600); };
      try {
        await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }) })]);
        done();
      } catch {
        const box = document.createElement('div');
        box.contentEditable = 'true';
        box.style.cssText = 'position:fixed;left:-9999px;top:0;';
        box.innerHTML = html;
        document.body.appendChild(box);
        const range = document.createRange();
        range.selectNodeContents(box);
        const sel = getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        sel.removeAllRanges();
        box.remove();
        done();
      }
    });
  }
</script>
</body>
</html>
`;

function writeOut(out, content) {
  const target = resolve(ROOT, out);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content);
  console.log(`✓ ${out}`);
}

/* --- Salidas -------------------------------------------------------------- *
   `node scripts/email.mjs gif|nombres|iconos|firmas` regenera sólo esa parte. */
const only = process.argv[2];
const want = (name) => !only || only === name;

if (want('gif')) for (const theme of Object.values(THEMES)) buildGif(theme);
if (want('nombres')) {
  for (const person of PEOPLE) {
    for (const theme of Object.values(THEMES)) {
      shoot(nameCard(person, theme), `${PUBLIC}/nombre-${person.slug}${theme.suffix}.png`, NAME_BOX.width, NAME_BOX.height);
    }
  }
}
if (want('iconos')) for (const name of Object.keys(ICONS)) buildIcon(name);
if (want('firmas')) {
  for (const person of PEOPLE) writeOut(`ref/firmas/firma-${person.slug}.html`, signatureFile(person));
  writeOut('ref/firmas/index.html', indexFile());
}
