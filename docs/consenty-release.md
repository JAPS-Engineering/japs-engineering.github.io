# Contacto real con Consenty

## Decisión de publicación — 2026-09-18

El operador pidió publicar en la landing y omitir la última prueba manual
Turnstile → OTP → preferencias → comprobante → Twenty. Después eligió **contacto real**,
no una demo pública. La omisión se registra como riesgo aceptado; no equivale a una
prueba aprobada ni demuestra entrega, idempotencia o revocación de punta a punta.

Tras revisar el texto con el asistente de Gestión y autenticarse con su TOTP, el operador
confirmó «Configuración de contacto real verificada». La API pública confirma:

- Integración activa `f1abbaaf-a42e-4f8b-ab15-ad83f4e25a21`, nombre `Contacto JAPS`.
- Finalidad `japs-contacto`, distinta de la finalidad histórica de prueba interna.
- Nombre/apellido/correo reutilizados; RUT solicitado por Consenty si falta.
- Turnstile Invisible administrado por Consenty; ninguna clave secreta en esta landing.

El asistente verificó mediante la API MFA la retención mínima de **365 días** para nuevos
comprobantes, en vez de 730; no se cambia evidencia anterior. La política conserva
**12 meses desde el último contacto** para consultas sin relación comercial y distingue
**12 meses desde la emisión** para los comprobantes del formulario. Son categorías diferentes.
La retención mínima protege integridad: **no implementa borrado automático**. JAPS debe
revisar vencimientos y gestionar la supresión; cuentas, otros tenants y expedientes de
derechos se tratan separadamente. No presentar este release como certificación legal.

## Verificación y despliegue

```sh
node --test scripts/check-contact-build.test.mjs
pnpm check
```

El PR ejecuta build de ambas configuraciones (`legacy` y `consenty`). El release de Pages
repite check/build y verifica que home y contacto tengan el mismo modo, endpoint correcto,
aviso de conservación y ningún checkbox/widget Cloudflare adicional en modo Consenty.

Variables GitHub para el release:

```text
PUBLIC_CONSENTY_INTEGRATION_ID=f1abbaaf-a42e-4f8b-ab15-ad83f4e25a21
PUBLIC_CONSENTY_TENANT=japs
PUBLIC_CONSENTY_SDK_URL=https://app.consenty.japs.ing/sdk/v1.js
PUBLIC_CONSENTY_CONTACT_WEBHOOK_URL=https://n8n.gestion.japs.ing/webhook/contacto-japs-consenty
```

**Conservar** `PUBLIC_CONTACT_WEBHOOK_URL=https://n8n.gestion.japs.ing/webhook/contacto-japs`
para el modo anterior. El workflow selecciona el webhook nuevo únicamente cuando existe
el ID Consenty; preparar estas nuevas variables no rompe una ejecución del workflow viejo.
La variable específica de webhook Consenty es del workflow; en builds locales se pasa
el endpoint elegido como `PUBLIC_CONTACT_WEBHOOK_URL`.

No mezclar los endpoints: el antiguo espera su token Turnstile y el nuevo espera un
comprobante Consenty. Fusionar el PR aprobado a main y comprobar la ejecución de Pages.
Después verificar las dos páginas públicas en navegador, sin solicitar OTP ni enviar datos
si continúa vigente la decisión de omitir esa prueba.

## Operación y reversión

Publicación inicial completada desde main `bcd63dd2f1730e6b0bb2c04faa4272cb748b37a4`,
[Pages 35405894840](https://github.com/JAPS-Engineering/japs-engineering.github.io/actions/runs/35405894840).
La comprobación pública detectó además el beacon preexistente de Cloudflare RUM
(`POST /cdn-cgi/rum`), que no aparecía al servir el build local sin CDN. No era un envío
del formulario. Se corrige la afirmación anterior de «sin analítica web» en la política
1.2.1 para declarar esta medición técnica, sin habilitar ni deshabilitar servicios de Cloudflare.

- Mantener el workflow anterior activo para clientes con la página antigua en caché.
- Ante fallo del nuevo recorrido, vaciar `PUBLIC_CONSENTY_INTEGRATION_ID` y ejecutar
  el workflow de Pages de main. Regresa al endpoint y verificación anteriores; no borrar
  contactos, pruebas, finalidades, claves ni workflows. Verificar la página publicada.
- La alternativa por correo `contacto@japs.ing` permanece visible.
- Revisar las entregas fallidas en Consenty y los errores de contacto; no habilitar
  el guardado de cuerpos con datos personales/tokens en n8n para diagnosticar.
- Revisión mensual de conservación a cargo de JAPS: distinguir consultas, comprobantes
  y cuentas; identificar plazos cumplidos y excepciones justificadas, planificar supresión
  o anonimización con aprobación y registrar el resultado. No ejecutar borrados masivos
  basados sólo en el valor `retention_days` ni eliminar evidencia todavía protegida.
- Permanecen pendientes el recorrido real, repetición/concurrencia, revocación y eventos
  fuera de orden. No utilizar este formulario para información clínica o de menores.
