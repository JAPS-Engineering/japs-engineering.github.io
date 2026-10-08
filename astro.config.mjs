// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { alternatePath, langTag, langs } from './src/i18n/routes.ts';

/**
 * `site` es la única fuente del origen canónico para Astro. Debe coincidir
 * con `organizacion.url` en src/data/organizacion.ts, de donde el JSON-LD
 * saca sus URLs absolutas; Seo.astro rompe el build si divergen.
 */
export default defineConfig({
  site: 'https://japs.ing',
  output: 'static',
  /**
   * Español en la raíz, inglés bajo /en/ con slugs traducidos. Astro no
   * genera rutas por esto — src/pages/en/** existe físicamente — pero sí
   * expone Astro.currentLocale y declara los idiomas del sitio.
   */
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      /**
       * Prioridad por sección, no plana: la home y una ficha de perfil no
       * compiten por la misma atención de rastreo.
       *
       * Sólo `priority`, sin `changefreq`: Google declara ignorar ambos, y
       * los rastreadores que sí los leen sacan más de una jerarquía honesta
       * que de una frecuencia inventada para veinte páginas estáticas.
       *
       * Los `hreflang` van a mano: la opción `i18n` del plugin empareja
       * quitando el prefijo de locale y comparando el resto del path, así
       * que con slugs traducidos (/servicios ↔ /en/services) nunca
       * encuentra el par. src/i18n/routes.ts sí sabe cuál es.
       */
      serialize(item) {
        const path = new URL(item.url).pathname;
        const bare = path.replace(/^\/en(\/|$)/, '/');

        if (bare === '/') item.priority = 1.0;
        else if (/^\/(servicios|services|soluciones|solutions|casos-de-exito|case-studies|contacto|contact)\/?$/.test(bare))
          item.priority = 0.9;
        else if (/^\/(industrias|industries)/.test(bare)) item.priority = 0.8;
        else if (/^\/(nosotros|about|profile|team)/.test(bare)) item.priority = 0.7;
        else if (/^\/(terminos|terms|privacidad|privacy)\/?$/.test(bare)) item.priority = 0.3;
        else item.priority = 0.5;

        /** @param {string} p */
        const slash = (p) => (p.endsWith('/') ? p : `${p}/`);
        const pairs = langs
          .map((lang) => ({ lang, path: alternatePath(path, lang) }))
          .filter((pair) => pair.path !== undefined)
          .map((pair) => ({ lang: pair.lang, path: slash(pair.path ?? '/') }));
        if (pairs.length === langs.length) {
          const es = pairs.find((pair) => pair.lang === 'es');
          item.links = [
            ...pairs.map((pair) => ({ lang: langTag[pair.lang], url: new URL(pair.path ?? '/', item.url).href })),
            { lang: 'x-default', url: new URL(es?.path ?? '/', item.url).href },
          ];
        }

        return item;
      },
    }),
  ],
});
