/**
 * Idiomas y rutas del sitio: la única tabla que sabe que `/servicios` y
 * `/en/services` son la misma página.
 *
 * HOJA SIN DEPENDENCIAS. La importa astro.config.mjs para escribir los
 * `hreflang` del sitemap, así que no puede importar nada de `data/` (site.ts
 * lee import.meta.env, que no existe al cargar la config) ni de `astro:*`.
 * Si necesitas datos aquí, es que la función va en otro archivo.
 *
 * Convención de URLs: español en la raíz, inglés bajo `/en/` con slugs
 * traducidos. Los slugs de personas (`/profile/pablo` → `/en/team/pablo`)
 * no se traducen: son nombres.
 */

export type Lang = 'es' | 'en';

export const defaultLang: Lang = 'es';
export const langs: readonly Lang[] = ['es', 'en'];

/** BCP 47 para `<html lang>` y `hreflang`. */
export const langTag: Record<Lang, string> = { es: 'es-CL', en: 'en' };
/** Para `og:locale`. */
export const ogLocale: Record<Lang, string> = { es: 'es_CL', en: 'en_US' };
/** Nombre nativo de cada idioma, para el selector. */
export const langName: Record<Lang, string> = { es: 'Español', en: 'English' };

export const other = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

/** Páginas estáticas: clave canónica → path por idioma. */
export const routes = {
  home: { es: '/', en: '/en/' },
  about: { es: '/nosotros', en: '/en/about' },
  services: { es: '/servicios', en: '/en/services' },
  solutions: { es: '/soluciones', en: '/en/solutions' },
  industries: { es: '/industrias', en: '/en/industries' },
  cases: { es: '/casos-de-exito', en: '/en/case-studies' },
  contact: { es: '/contacto', en: '/en/contact' },
  privacy: { es: '/privacidad', en: '/en/privacy' },
  terms: { es: '/terminos', en: '/en/terms' },
  links: { es: '/links', en: '/en/links' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Prefijos de las rutas dinámicas. */
export const dynamicRoutes = {
  industry: { es: '/industrias/', en: '/en/industries/' },
  profile: { es: '/profile/', en: '/en/team/' },
} as const satisfies Record<string, Record<Lang, string>>;

/** Slug ES (la identidad de cada industria en los datos) → slug EN. */
export const industrySlugs = {
  mineria: 'mining',
  manufactura: 'manufacturing',
  retail: 'retail',
  educacion: 'education',
  transporte: 'transport',
} as const satisfies Record<string, string>;

export type IndustrySlug = keyof typeof industrySlugs;

const industrySlugsEn: Record<string, IndustrySlug> = Object.fromEntries(
  Object.entries(industrySlugs).map(([es, en]) => [en, es as IndustrySlug]),
);

export const isIndustrySlug = (slug: string): slug is IndustrySlug => slug in industrySlugs;

/** Sin barra final (salvo `/` y `/en/`), para comparar paths. */
export function normalizePath(pathname: string): string {
  let path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (path === '/en') path = '/en/';
  return path || '/';
}

export function getLangFromUrl(url: URL | string): Lang {
  const path = normalizePath(typeof url === 'string' ? url : url.pathname);
  return path.startsWith('/en/') ? 'en' : 'es';
}

export const localizePath = (key: RouteKey, lang: Lang): string => routes[key][lang];

export const industryPath = (slugEs: IndustrySlug, lang: Lang): string =>
  `${dynamicRoutes.industry[lang]}${lang === 'en' ? industrySlugs[slugEs] : slugEs}`;

export const profilePath = (slug: string, lang: Lang): string =>
  `${dynamicRoutes.profile[lang]}${slug}`;

/** Slug canónico (ES) a partir del slug que aparece en la URL en `lang`. */
export const industrySlugFromUrl = (slug: string, lang: Lang): IndustrySlug | undefined =>
  lang === 'en' ? industrySlugsEn[slug] : isIndustrySlug(slug) ? slug : undefined;

/**
 * Equivalente de `pathname` en el idioma `target`, o `undefined` si la
 * página no tiene par (y entonces no hay hreflang ni selector que ofrecer).
 */
export function alternatePath(pathname: string, target: Lang): string | undefined {
  const path = normalizePath(pathname);
  const from = getLangFromUrl(path);
  if (from === target) return path;

  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key][from] === path) return routes[key][target];
  }

  const industry = dynamicRoutes.industry;
  if (path.startsWith(industry[from])) {
    const slug = industrySlugFromUrl(path.slice(industry[from].length), from);
    return slug ? industryPath(slug, target) : undefined;
  }

  const profile = dynamicRoutes.profile;
  if (path.startsWith(profile[from])) {
    return `${profile[target]}${path.slice(profile[from].length)}`;
  }

  return undefined;
}

/**
 * Un href escrito en los datos con su ruta en español (`/casos-de-exito`,
 * `/soluciones`) pasa al idioma de la página. Las URLs externas, los anclas y
 * los assets vuelven tal cual.
 */
export function localizeHref(href: string, lang: Lang): string {
  if (!href.startsWith('/') || /\.[a-z0-9]+$/i.test(href)) return href;
  const [path, hash] = href.split('#');
  const localized = alternatePath(path, lang) ?? path;
  return hash ? `${localized}#${hash}` : localized;
}

/** Sección del nav que debe marcarse activa: un perfil pertenece a Nosotros. */
export function sectionOf(pathname: string, lang: Lang): string {
  const path = normalizePath(pathname);
  return path.startsWith(dynamicRoutes.profile[lang]) ? routes.about[lang] : path;
}
