/**
 * Enlaces de nav y footer, derivados de routes.ts + ui.ts + los datos de
 * industrias. Antes eran arrays escritos a mano en site.ts; derivarlos evita
 * que una ruta viva en dos sitios y se desincronice al traducirla.
 */
import type { NavLink } from '../data/site';
import { content } from '../data/content';
import { industryPath, localizePath, type Lang, type RouteKey } from './routes';
import { useTranslations } from './ui';

const link = (key: RouteKey, lang: Lang): NavLink => ({
  label: useTranslations(lang)(`route.${key}`),
  href: localizePath(key, lang),
});

/** Los cinco enlaces de la pill, en el orden de SiteNav.dc.html. */
export const navLinks = (lang: Lang): NavLink[] =>
  (['about', 'services', 'industries', 'solutions', 'cases'] as const).map((key) => link(key, lang));

export const footerSiteLinks = (lang: Lang): NavLink[] =>
  (['about', 'services', 'solutions', 'cases', 'contact'] as const).map((key) => link(key, lang));

export const footerIndustryLinks = (lang: Lang): NavLink[] =>
  content(lang).industrias.map((industria) => ({
    label: industria.name,
    href: industryPath(industria.slug, lang),
  }));

export const legalLinks = (lang: Lang): NavLink[] =>
  (['terms', 'privacy'] as const).map((key) => link(key, lang));
