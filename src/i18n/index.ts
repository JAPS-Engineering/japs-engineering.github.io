/**
 * Punto de entrada de i18n para componentes y vistas:
 *
 *   const { lang, t, p, alt } = i18n(Astro.url);
 *
 * `lang` sale de la URL (no se pasa por props), `t` traduce claves de ui.ts,
 * `p('contact')` da la ruta localizada y `alt` la URL equivalente en el otro
 * idioma (para el selector y los hreflang).
 */
import {
  alternatePath,
  getLangFromUrl,
  localizePath,
  other,
  type Lang,
  type RouteKey,
} from './routes';
import { useTranslations, type Translate } from './ui';

export * from './routes';
export * from './ui';

export interface I18n {
  lang: Lang;
  t: Translate;
  /** Ruta localizada de una página estática. */
  p: (key: RouteKey) => string;
  /** Misma página en el otro idioma, si existe. */
  alt: string | undefined;
}

export function i18n(url: URL | string): I18n {
  const lang = getLangFromUrl(url);
  const pathname = typeof url === 'string' ? url : url.pathname;
  return {
    lang,
    t: useTranslations(lang),
    p: (key) => localizePath(key, lang),
    alt: alternatePath(pathname, other(lang)),
  };
}

/**
 * Copy propio de una vista: `es` define las claves y `en` debe tener
 * exactamente las mismas. Devuelve el objeto tal cual, ya tipado.
 *
 *   const copy = pageCopy({ es: { title: '…' }, en: { title: '…' } });
 *   const c = copy[lang];
 */
export function pageCopy<T extends Record<string, string>>(copy: {
  es: T;
  en: Record<keyof T, string>;
}): Record<Lang, Record<keyof T, string>> {
  return copy;
}
