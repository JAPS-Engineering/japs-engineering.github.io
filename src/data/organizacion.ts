/**
 * Identidad de la entidad JAPS Engineering: el único lugar del proyecto que
 * describe *quién* es la empresa ante un buscador o un motor generativo.
 *
 * `site.ts` es para navegación y destinos externos; esto es para identidad.
 * Los constructores de src/lib/schema.ts omiten del JSON-LD cualquier campo
 * que quede vacío, así que un valor pendiente nunca emite basura — sólo deja
 * de aportar señal.
 */

import { site } from './site';

export interface Direccion {
  /** Calle y número. */
  streetAddress?: string;
  /** Comuna. */
  addressLocality?: string;
  /** Región. */
  addressRegion?: string;
  postalCode?: string;
}

export const organizacion = {
  /** Nombre comercial. El que se muestra en todas partes. */
  name: site.name,
  /** Razón social ante el SII. */
  legalName: 'JAPS ENGINEERING SpA',
  /** RUT. En Chile es la señal más fuerte para desambiguar una empresa. */
  taxID: '78.205.427-9',
  url: 'https://japs.ing',
  email: site.email,
  /** E.164. Mismo número que `site.whatsapp`. */
  telephone: '+56951019283',
  /** ISO 8601. Constitución de la SpA. */
  foundingDate: '2025-10-22',
  /** Centro de Innovación UC Anacleto Angelini, campus San Joaquín. */
  address: {
    streetAddress: 'Avenida Vicuña Mackenna 4860',
    addressLocality: 'Macul',
    addressRegion: 'Región Metropolitana',
  } as Direccion,
  /** Descripción de una línea, autocontenida: la cita un motor generativo tal cual. */
  description:
    'JAPS Engineering es una consultora chilena de transformación digital que diseña software a medida, integra sistemas y desarrolla productos SaaS para minería, manufactura, retail, educación y logística.',
  /** País servido, en ISO 3166-1 alpha-2. */
  areaServed: 'CL',
  /** Idioma de atención, para ContactPoint. */
  availableLanguage: ['es', 'en'],
} as const satisfies {
  name: string;
  legalName: string;
  taxID: string;
  url: string;
  email: string;
  telephone: string;
  foundingDate: string;
  address: Direccion;
  description: string;
  areaServed: string;
  availableLanguage: readonly string[];
};

/**
 * `sameAs`: los perfiles y dominios que un motor usa para unificar menciones
 * dispersas en una sola entidad. Los subdominios de producto cuentan — son
 * propiedad de la misma organización.
 *
 * Van las URLs canónicas de cada red, no los redirects de marca que usa la
 * interfaz (`site.linkedin` es instagram.japs.ing y compañía): un motor
 * resuelve el redirect, pero coteja la entidad contra la URL que el propio
 * perfil publica de sí mismo.
 */
export const sameAs: string[] = [
  'https://www.linkedin.com/company/japsing',
  'https://www.instagram.com/japs.ing',
  site.studioUrl,
  'https://consenty.japs.ing',
];

/** Domicilio en una línea, para los perfiles del equipo y el pie de página. */
export const baseOperativa = 'Centro de Innovación UC Anacleto Angelini · Santiago, Chile';
