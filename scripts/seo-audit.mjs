/**
 * Audita dist/ tras un build: es la única forma de comprobar lo que de
 * verdad se publica, en vez de lo que las plantillas prometen.
 *
 * Comprueba, por página: canonical, og:image, twitter:card, un único bloque
 * JSON-LD que parsea, y que toda referencia `@id` dentro de un @graph apunte
 * a un nodo declarado en ese mismo grafo. Además, a nivel de sitio: títulos
 * y descripciones únicos y dentro de las longitudes que un buscador muestra.
 *
 *   pnpm build && node scripts/seo-audit.mjs
 *
 * Sale con código 1 si algo falla, para poder colgarlo de CI.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

/* Google corta el título alrededor de los 60 caracteres y la descripción
   alrededor de los 160. Un margen holgado en el título evita falsos
   positivos por un nombre propio largo. */
const TITLE_MAX = 65;
const DESC_MIN = 110;
const DESC_MAX = 165;

const problems = [];
const fail = (page, message) => problems.push(`${page}: ${message}`);

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith('.html') ? [path] : [];
  });
}

const attr = (html, re) => html.match(re)?.[1];

/** Recolecta todo `@id` que aparece como referencia, y todo el que se declara. */
function idsOf(graph) {
  const declared = new Set();
  const referenced = new Set();

  for (const node of graph) if (typeof node['@id'] === 'string') declared.add(node['@id']);

  const walk = (value, isRoot) => {
    if (Array.isArray(value)) return value.forEach((item) => walk(item, false));
    if (!value || typeof value !== 'object') return;
    const keys = Object.keys(value);
    /* Un objeto que sólo trae `@id` es una referencia; si trae más, es una
       declaración con cuerpo propio. */
    if (!isRoot && keys.length === 1 && keys[0] === '@id') referenced.add(value['@id']);
    for (const [key, val] of Object.entries(value)) if (key !== '@id') walk(val, false);
  };
  graph.forEach((node) => walk(node, true));

  return { declared, referenced };
}

if (!existsSync(DIST)) {
  console.error('No existe dist/. Corre `pnpm build` primero.');
  process.exit(1);
}

const pages = htmlFiles(DIST);
const titles = new Map();
const descriptions = new Map();

for (const file of pages) {
  const page = '/' + relative(DIST, file).replace(/(index)?\.html$/, '').replace(/\/$/, '');
  const html = readFileSync(file, 'utf8');

  const title = attr(html, /<title>([^<]*)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]*)"/);
  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const ogImage = attr(html, /<meta property="og:image" content="([^"]*)"/);
  const twitter = attr(html, /<meta name="twitter:card" content="([^"]*)"/);
  const robots = attr(html, /<meta name="robots" content="([^"]*)"/);

  if (!title) fail(page, 'sin <title>');
  if (!description) fail(page, 'sin meta description');
  if (!canonical) fail(page, 'sin canonical');
  if (!ogImage) fail(page, 'sin og:image');
  if (!twitter) fail(page, 'sin twitter:card');
  if (!robots) fail(page, 'sin meta robots');

  if (ogImage && !/\.(png|jpe?g|webp)$/i.test(ogImage))
    fail(page, `og:image no es un raster: ${ogImage}`);

  if (title) {
    const decoded = title.replace(/&#8212;/g, '—').replace(/&amp;/g, '&');
    if (decoded.length > TITLE_MAX) fail(page, `título de ${decoded.length} car. (máx ${TITLE_MAX}): ${decoded}`);
    if (titles.has(decoded)) fail(page, `título duplicado de ${titles.get(decoded)}`);
    else titles.set(decoded, page);
  }

  if (description) {
    const len = description.replace(/&#\d+;/g, 'x').length;
    if (len < DESC_MIN || len > DESC_MAX)
      fail(page, `descripción de ${len} car. (rango ${DESC_MIN}–${DESC_MAX})`);
    if (descriptions.has(description)) fail(page, `descripción duplicada de ${descriptions.get(description)}`);
    else descriptions.set(description, page);
  }

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (blocks.length !== 1) {
    fail(page, `${blocks.length} bloques JSON-LD (debe haber exactamente 1)`);
    continue;
  }

  let parsed;
  try {
    parsed = JSON.parse(blocks[0][1]);
  } catch (error) {
    fail(page, `JSON-LD no parsea: ${error.message}`);
    continue;
  }

  const graph = parsed['@graph'];
  if (!Array.isArray(graph) || !graph.length) {
    fail(page, 'JSON-LD sin @graph');
    continue;
  }

  const { declared, referenced } = idsOf(graph);
  for (const id of referenced)
    if (!declared.has(id)) fail(page, `@id referenciado y no declarado: ${id}`);

  for (const node of graph)
    if (!node['@type']) fail(page, `nodo sin @type: ${JSON.stringify(node).slice(0, 80)}`);
}

for (const asset of ['robots.txt', 'llms.txt', 'sitemap-index.xml', 'og/default.png'])
  if (!existsSync(join(DIST, asset))) problems.push(`falta dist/${asset}`);

console.log(`Auditadas ${pages.length} páginas.`);
if (problems.length) {
  console.error(`\n${problems.length} problema(s):\n`);
  for (const problem of problems) console.error(`  · ${problem}`);
  process.exit(1);
}
console.log('Sin problemas.');
