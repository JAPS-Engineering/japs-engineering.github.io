# Pendón

El QR del pendón impreso «Dual 08 · QR de puntos» debe apuntar a
`https://japs.ing/pendon`. La página reproduce el pendón:

- mitad blanca (JAPS Engineering) → home `https://japs.ing`;
- mitad negra (JAPS Studio) → `site.studioUrl` (`https://studio.japs.ing`);
- franja central → WhatsApp (`site.whatsapp`, con mensaje predefinido) y
  el formulario de `/contacto`.

Los destinos y textos están en `src/pages/pendon.astro`; los enlaces
compartidos, en `src/data/site.ts`. La página usa `noindex` y queda fuera
del sitemap (`astro.config.mjs`). `scripts/check-pendon-build.test.mjs`
verifica los enlaces en el build.
