// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * `site` es la única fuente del origen canónico para Astro. Debe coincidir
 * con `organizacion.url` en src/data/organizacion.ts, de donde el JSON-LD
 * saca sus URLs absolutas; Seo.astro rompe el build si divergen.
 */
export default defineConfig({
  site: 'https://japs.ing',
  output: 'static',
  integrations: [
    sitemap({
      /**
       * Prioridad por sección, no plana: la home y una ficha de perfil no
       * compiten por la misma atención de rastreo.
       *
       * Sólo `priority`, sin `changefreq`: Google declara ignorar ambos, y
       * los rastreadores que sí los leen sacan más de una jerarquía honesta
       * que de una frecuencia inventada para veinte páginas estáticas.
       */
      serialize(item) {
        const path = new URL(item.url).pathname;

        if (path === '/') item.priority = 1.0;
        else if (/^\/(servicios|soluciones|casos-de-exito|contacto)\/?$/.test(path))
          item.priority = 0.9;
        else if (path.startsWith('/industrias')) item.priority = 0.8;
        else if (path.startsWith('/nosotros') || path.startsWith('/profile'))
          item.priority = 0.7;
        else if (/^\/(terminos|privacidad)\/?$/.test(path)) item.priority = 0.3;
        else item.priority = 0.5;

        return item;
      },
    }),
  ],
});
