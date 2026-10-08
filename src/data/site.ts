/**
 * Site-wide constants: external destinations, env-driven endpoints and the
 * brand name. Everything a visitor reads (nav labels, footer columns, legal
 * copy, form options) is bilingual and lives in src/i18n/ and
 * src/data/contactOptions.ts.
 *
 * TODO — placeholders carried over from the design project. Confirm before launch:
 *   · calendarUrl   → Contacto.dc.html ships it as href="#"
 *   · contactAction → no form endpoint was specified anywhere in the project
 *
 * La identidad legal de la empresa (razón social, RUT, domicilio) vive en
 * data/organizacion.ts, que es lo que consume el JSON-LD.
 *
 * instagram/linkedin are the real redirects used by the previous landing's
 * linktree page (legacy-v2:links.html) — not placeholders.
 */

export const contactPhoneE164 = '+56993183282';

export const site = {
  name: 'JAPS Engineering',
  studioUrl: 'https://studio.japs.ing',
  whatsapp: `https://wa.me/${contactPhoneE164.slice(1)}`,
  instagram: 'https://instagram.japs.ing',
  linkedin: 'https://linkedin.japs.ing',
  email: 'contacto@japs.ing',
  calendarUrl: '#',
  contactAction: import.meta.env.PUBLIC_CONTACT_WEBHOOK_URL?.trim() || undefined,
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY?.trim() || undefined,
  consentyIntegrationId: import.meta.env.PUBLIC_CONSENTY_INTEGRATION_ID?.trim() || undefined,
  consentyTenant: import.meta.env.PUBLIC_CONSENTY_TENANT?.trim() || 'japs',
  consentySdkUrl: import.meta.env.PUBLIC_CONSENTY_SDK_URL?.trim() || 'https://app.consenty.japs.ing/sdk/v1.js',
} as const;

export interface NavLink {
  label: string;
  href: string;
}
