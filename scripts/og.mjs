/**
 * Genera las imágenes que no puede generar el build: la tarjeta social
 * (public/og/default.png, 1200×630) y el apple-touch-icon (180×180).
 *
 * Se ejecuta a mano — `node scripts/og.mjs` — y los PNG resultantes se
 * commitean. Es deliberado: son activos estables, y meter Chromium en el
 * pipeline de deploy por dos imágenes que cambian una vez al año no se paga.
 *
 * Vuelve a correrlo si cambia el wordmark, el isotipo o el color de marca.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
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

const ogCard = `<!doctype html>
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
    <h1>Software a medida y transformación digital.</h1>
    <p>Ingeniería e innovación al servicio de las personas y el planeta.</p>
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

shoot(ogCard, 'public/og/default.png', 1200, 630);
shoot(appIcon(180), 'public/icon/apple-touch-icon.png', 180, 180);
shoot(appIcon(192), 'public/icon/icon-192.png', 192, 192);
shoot(appIcon(512), 'public/icon/icon-512.png', 512, 512);
