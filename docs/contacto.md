# Contacto y campañas

El formulario de inicio y contacto, en ES/EN, envía datos a
`https://core.japs.ing/api/publico/contacto/` mediante URLSearchParams.
`PUBLIC_CONTACT_WEBHOOK_URL` configura ese destino al compilar.

Los campos de contacto mantienen su contrato y se añaden `consentVersion=1.2.4` y los cinco
UTM estándar presentes en la primera campaña de la pestaña. `src/lib/contact-attribution.mjs`
captura la campaña en todas las páginas, conserva su valor en sessionStorage y la añade a enlaces
entre JAPS y Studio. Un enlace con campaña explícita mantiene sus propios parámetros completos.
La implementación y las pruebas de atribución se mantienen iguales en ambos repositorios.

El sitio donde se envía la consulta lo determina Core a partir de Origin; no se confunde con la
campaña. Sin almacenamiento se utilizan únicamente los parámetros de la página actual.

Publicar primero Core con `relaciones.0011_contacto_sitio_idea_campana`, luego este sitio
(incluida la política de privacidad ES/EN 1.2.4), y después el formulario estructurado de Studio.

Verificación local:

```sh
node scripts/contact-attribution.test.mjs
node scripts/check-contact-build.test.mjs
npm run check
PUBLIC_CONTACT_WEBHOOK_URL=https://core.japs.ing/api/publico/contacto/ npm run build
node scripts/check-contact-build.mjs
```
