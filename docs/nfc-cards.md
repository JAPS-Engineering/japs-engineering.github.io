# Tarjetas NFC

Grabar en cada tarjeta su URL estable: `https://japs.ing/card/1` hasta
`https://japs.ing/card/6`. El alojamiento puede añadir la barra final.

Los destinos se administran en `src/data/cards.ts`. Para cambiar una tarjeta,
editar su registro, validar localmente e integrar por PR; publicar mediante
el despliegue manual autorizado del sitio. No se necesita volver a grabar la NFC.

- `redirect`: abre `href`, con enlace manual y respaldo sin JavaScript.
- `contact`: abre el archivo `.vcf` indicado en `href` y ofrece descarga manual.
  Mantener sincronizados los datos visibles del registro y el `.vcf` de
  `public/media/contactos/`. Usar UTF-8 y finales de línea CRLF para vCard 3.0.
- `pending`: muestra «Por configurar».

La tarjeta 1 abre Soluciones. La 2 abre el contacto de Andrés Ovalle, CEO de
Brixor. Las tarjetas 3–6 están pendientes. Las seis páginas usan `noindex`
y quedan excluidas del sitemap. La importación del contacto depende de la
interfaz nativa del teléfono; el botón permite volver a abrir o descargar el archivo.

Verificación local: `pnpm check`, `pnpm build`, `pnpm seo:audit` y
`node --test scripts/*.test.mjs`. Revisar también redirección, descarga y
presentación móvil con Playwright.
