/**
 * Fachada de contenido por idioma: `content(lang)` devuelve el mismo conjunto
 * de datos en español (src/data/*.ts) o en inglés (src/data/en/*.ts), con las
 * mismas interfaces, así que los componentes no saben en qué idioma están.
 *
 * Los archivos EN *spreadean* el objeto ES y sobreescriben sólo lo
 * traducible, así que slugs, íconos, fotos, tonos y URLs no pueden divergir.
 * `assertParity()` comprueba al importar que la estructura coincide y rompe
 * el build si no — la misma convención que Seo.astro con el origen.
 */
import type { LogoWallItem } from '../components/ds/types';
import type { Lang } from '../i18n/routes';
import { casos, casosDestacados, casosEnRedaccion, type Caso, type CasoDestacado, type CasosEnRedaccion } from './casos';
import { industrias, type Industria } from './industrias';
import { logos } from './logos';
import {
  asesores,
  creencias,
  equipo,
  historia,
  hitosHistoria,
  partnersCocreacion,
  partnersColaboracion,
  proposito,
  type Asesor,
  type Creencia,
  type HistoriaHito,
  type PartnerCocreacion,
  type PartnerColaboracion,
  type Persona,
  type Proposito,
} from './nosotros';
import { servicios, serviciosResumen, type Servicio, type ServicioResumen } from './servicios';
import { soluciones, type Solucion } from './soluciones';
import { content as en } from './en';

export interface Content {
  industrias: Industria[];
  servicios: Servicio[];
  serviciosResumen: ServicioResumen[];
  soluciones: Solucion[];
  casos: Caso[];
  casosDestacados: CasoDestacado[];
  casosEnRedaccion: CasosEnRedaccion;
  proposito: Proposito[];
  creencias: Creencia[];
  historia: HistoriaHito[];
  hitosHistoria: LogoWallItem[];
  equipo: Persona[];
  partnersCocreacion: PartnerCocreacion[];
  partnersColaboracion: PartnerColaboracion[];
  asesores: Asesor[];
  logos: LogoWallItem[];
}

const es: Content = {
  industrias,
  servicios,
  serviciosResumen,
  soluciones,
  casos,
  casosDestacados,
  casosEnRedaccion,
  proposito,
  creencias,
  historia,
  hitosHistoria,
  equipo,
  partnersCocreacion,
  partnersColaboracion,
  asesores,
  logos,
};

const all: Record<Lang, Content> = { es, en };

export const content = (lang: Lang): Content => all[lang];

export const industriaBySlug = (lang: Lang, slug: string): Industria | undefined =>
  all[lang].industrias.find((industria) => industria.slug === slug);

/* ------------------------------------------------------------------ *
 * Paridad ES/EN.
 * ------------------------------------------------------------------ */

const PLACEHOLDER = 'TODO-EN';

function fail(message: string): never {
  throw new Error(`[i18n] data/en no coincide con data/: ${message}`);
}

function sameList<T>(label: string, a: readonly T[], b: readonly T[], key: (item: T) => string) {
  const ka = a.map(key);
  const kb = b.map(key);
  if (ka.join('|') !== kb.join('|')) fail(`${label}: ES [${ka.join(', ')}] vs EN [${kb.join(', ')}]`);
}

function findPlaceholders(value: unknown, path: string, out: string[]) {
  if (typeof value === 'string') {
    if (value.includes(PLACEHOLDER)) out.push(path);
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => findPlaceholders(item, `${path}[${index}]`, out));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) findPlaceholders(v, `${path}.${k}`, out);
  }
}

function assertParity(a: Content, b: Content) {
  sameList('industrias', a.industrias, b.industrias, (i) => i.slug);
  a.industrias.forEach((industria, index) => {
    const twin = b.industrias[index];
    sameList(`industrias[${industria.slug}].capabilities`, industria.capabilities, twin.capabilities, (c) => c.icon);
    if (Boolean(industria.highlight) !== Boolean(twin.highlight))
      fail(`industrias[${industria.slug}].highlight presente sólo en un idioma`);
    if (industria.highlight?.kind !== twin.highlight?.kind)
      fail(`industrias[${industria.slug}].highlight.kind difiere`);
    if ((industria.highlight?.items?.length ?? 0) !== (twin.highlight?.items?.length ?? 0))
      fail(`industrias[${industria.slug}].highlight.items: distinto largo`);
    if (industria.tone !== twin.tone || industria.icon !== twin.icon || industria.heroImage !== twin.heroImage)
      fail(`industrias[${industria.slug}]: tone/icon/heroImage difieren`);
  });
  sameList('servicios', a.servicios, b.servicios, (s) => s.index);
  sameList('serviciosResumen', a.serviciosResumen, b.serviciosResumen, (s) => s.mark);
  a.serviciosResumen.forEach((servicio, index) => {
    const twin = b.serviciosResumen[index];
    if (servicio.bullets.length !== twin.bullets.length || servicio.entregables.length !== twin.entregables.length)
      fail(`serviciosResumen[${servicio.mark}]: bullets/entregables de distinto largo`);
  });
  sameList('soluciones', a.soluciones, b.soluciones, (s) => `${s.title}:${s.tone}:${s.spotlight ?? ''}`);
  sameList('casos', a.casos, b.casos, (_, ) => 'caso');
  a.casos.forEach((caso, index) => {
    if (caso.aside.items.length !== b.casos[index].aside.items.length)
      fail(`casos[${index}].aside.items: distinto largo`);
  });
  sameList('casosDestacados', a.casosDestacados, b.casosDestacados, (c) => c.logoSrc);
  sameList('proposito', a.proposito, b.proposito, (p) => p.icon);
  sameList('creencias', a.creencias, b.creencias, (c) => c.icon);
  sameList('historia', a.historia, b.historia, (h) => h.icon);
  sameList('hitosHistoria', a.hitosHistoria, b.hitosHistoria, (h) => h.src ?? h.name);
  sameList('equipo', a.equipo, b.equipo, (p) => `${p.slug}:${p.photo ?? ''}:${p.linkedin ?? ''}`);
  a.equipo.forEach((persona, index) => {
    if (persona.skills.length !== b.equipo[index].skills.length)
      fail(`equipo[${persona.slug}].skills: distinto largo`);
  });
  sameList('partnersCocreacion', a.partnersCocreacion, b.partnersCocreacion, (p) => `${p.name}:${p.logo}`);
  sameList('partnersColaboracion', a.partnersColaboracion, b.partnersColaboracion, (p) => `${p.name}:${p.logo}`);
  sameList('asesores', a.asesores, b.asesores, (p) => p.name);
  sameList('logos', a.logos, b.logos, (l) => l.src ?? l.name);

  if (import.meta.env.PROD) {
    const pending: string[] = [];
    findPlaceholders(b, 'en', pending);
    if (pending.length) fail(`traducciones pendientes (${PLACEHOLDER}): ${pending.join(', ')}`);
  }
}

assertParity(es, en);
