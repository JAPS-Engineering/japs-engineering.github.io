/**
 * Constructores de JSON-LD. Devuelven objetos planos; serializarlos es cosa
 * de Seo.astro, que emite un único <script type="application/ld+json"> por
 * página con todos los nodos dentro de un `@graph`.
 *
 * Por qué un solo grafo y no un bloque por sección: las entidades se
 * referencian por `@id` en vez de repetirse. Sin eso, tres bloques sueltos
 * declaran tres `Organization` ligeramente distintas y ni Google ni un motor
 * generativo saben cuál es la buena.
 *
 * Todo nodo se pasa por `clean()`: un campo pendiente en organizacion.ts
 * desaparece del grafo en vez de emitirse vacío. Vale más callar un dato que
 * afirmar uno falso — un motor generativo cita lo que encuentra.
 */

import { organizacion, sameAs } from '../data/organizacion';
import type { Caso } from '../data/casos';
import type { Industria } from '../data/industrias';
import type { Persona } from '../data/nosotros';
import type { Servicio } from '../data/servicios';
import type { Solucion } from '../data/soluciones';

export type Node = Record<string, unknown>;

/** Origen canónico. Seo.astro verifica que coincida con `site` de astro.config. */
export const ORIGIN = organizacion.url;

/** `@id` estables: son la dirección de cada entidad dentro del grafo. */
export const ID = {
  organization: `${ORIGIN}/#organization`,
  website: `${ORIGIN}/#website`,
} as const;

export const abs = (path: string): string => new URL(path, ORIGIN).href;

/** Referencia a un nodo ya declarado, en vez de repetir su cuerpo. */
const ref = (id: string): Node => ({ '@id': id });

/**
 * Poda recursiva de `undefined`, strings vacíos, arrays vacíos y objetos que
 * quedaron sin claves. Es lo que permite que organizacion.ts tenga campos
 * pendientes sin ensuciar la salida.
 */
export function clean<T>(value: T): T {
  if (Array.isArray(value)) {
    const items = value.map(clean).filter((item) => item !== undefined);
    return (items.length ? items : undefined) as T;
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Node)
      .map(([key, val]) => [key, clean(val)] as const)
      .filter(([, val]) => val !== undefined);
    return (entries.length ? Object.fromEntries(entries) : undefined) as T;
  }
  if (value === '' || value === null) return undefined as T;
  return value;
}

/* ------------------------------------------------------------------ *
 * Nodos globales — en todas las páginas.
 * ------------------------------------------------------------------ */

function direccion(): Node | undefined {
  const { address } = organizacion;
  return clean({
    '@type': 'PostalAddress',
    streetAddress: address.streetAddress,
    addressLocality: address.addressLocality,
    addressRegion: address.addressRegion,
    postalCode: address.postalCode,
    addressCountry: organizacion.areaServed,
  });
}

export function organizationNode(extra: Node = {}): Node {
  return clean({
    '@type': 'Organization',
    '@id': ID.organization,
    name: organizacion.name,
    legalName: organizacion.legalName,
    taxID: organizacion.taxID,
    url: ORIGIN,
    email: organizacion.email,
    telephone: organizacion.telephone,
    foundingDate: organizacion.foundingDate,
    description: organizacion.description,
    logo: {
      '@type': 'ImageObject',
      url: abs('/logo/iso_black.svg'),
      caption: organizacion.name,
    },
    image: abs('/og/default.png'),
    address: direccion(),
    areaServed: { '@type': 'Country', name: 'Chile' },
    sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: organizacion.email,
      telephone: organizacion.telephone,
      areaServed: organizacion.areaServed,
      availableLanguage: [...organizacion.availableLanguage],
    },
    ...extra,
  });
}

export function websiteNode(): Node {
  return clean({
    '@type': 'WebSite',
    '@id': ID.website,
    url: ORIGIN,
    name: organizacion.name,
    description: organizacion.description,
    inLanguage: 'es-CL',
    publisher: ref(ID.organization),
  });
}

/* ------------------------------------------------------------------ *
 * Migas de pan — derivadas de la ruta.
 * ------------------------------------------------------------------ */

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbNode(crumbs: Crumb[]): Node | undefined {
  if (crumbs.length < 2) return undefined;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

/* ------------------------------------------------------------------ *
 * Nodos por tipo de página.
 * ------------------------------------------------------------------ */

/** La home: la entidad como servicio, no sólo como organización. */
export function professionalServiceNode(knowsAbout: string[]): Node {
  return clean({
    '@type': 'ProfessionalService',
    '@id': `${ORIGIN}/#service`,
    name: organizacion.name,
    description: organizacion.description,
    url: ORIGIN,
    parentOrganization: ref(ID.organization),
    address: direccion(),
    telephone: organizacion.telephone,
    email: organizacion.email,
    areaServed: { '@type': 'Country', name: 'Chile' },
    knowsAbout,
  });
}

export function serviceNodes(servicios: readonly Servicio[]): Node[] {
  return servicios.map((servicio) =>
    clean({
      '@type': 'Service',
      '@id': `${abs('/servicios')}#${servicio.index}`,
      name: servicio.title,
      description: servicio.text,
      serviceType: servicio.title,
      audience: { '@type': 'Audience', audienceType: servicio.audience },
      provider: ref(ID.organization),
      areaServed: { '@type': 'Country', name: 'Chile' },
    }),
  );
}

export function softwareApplicationNodes(soluciones: readonly Solucion[]): Node[] {
  return soluciones.map((solucion) =>
    clean({
      '@type': 'SoftwareApplication',
      '@id': `${abs('/soluciones')}#${solucion.title.toLowerCase()}`,
      name: solucion.title,
      description: solucion.text,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: solucion.href ?? abs('/soluciones'),
      publisher: ref(ID.organization),
      inLanguage: 'es-CL',
    }),
  );
}

export function industryServiceNode(industria: Industria): Node {
  return clean({
    '@type': 'Service',
    '@id': `${abs(`/industrias/${industria.slug}`)}#service`,
    name: `${industria.name} — ${industria.title}`,
    description: industria.lead,
    serviceType: industria.name,
    provider: ref(ID.organization),
    areaServed: { '@type': 'Country', name: 'Chile' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: industria.capabilitiesTitle,
      itemListElement: industria.capabilities.map((capability) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: capability.title,
          description: capability.text,
        },
      })),
    },
  });
}

export function caseNodes(casos: readonly Caso[]): Node[] {
  return casos.map((caso, index) =>
    clean({
      '@type': 'CreativeWork',
      '@id': `${abs('/casos-de-exito')}#caso-${index + 1}`,
      name: caso.title,
      description: caso.paragraphs.join(' '),
      about: caso.eyebrow,
      creator: ref(ID.organization),
      inLanguage: 'es-CL',
    }),
  );
}

export function personNode(persona: Persona): Node {
  return clean({
    '@type': 'Person',
    '@id': `${abs(`/profile/${persona.slug}`)}#person`,
    name: persona.name,
    jobTitle: persona.role,
    description: persona.bio,
    email: persona.email,
    url: abs(`/profile/${persona.slug}`),
    image: persona.photo ? abs(persona.photo) : undefined,
    knowsAbout: [...persona.skills],
    worksFor: ref(ID.organization),
  });
}

/** Documentos legales: la fecha de vigencia es la señal que importa. */
export function legalPageNode(input: {
  url: string;
  name: string;
  description: string;
  datePublished: string;
  dateModified: string;
  version?: string;
}): Node {
  return clean({
    '@type': 'WebPage',
    '@id': `${input.url}#page`,
    url: input.url,
    name: input.name,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    version: input.version,
    inLanguage: 'es-CL',
    isPartOf: ref(ID.website),
    publisher: ref(ID.organization),
    about: ref(ID.organization),
  });
}

/* ------------------------------------------------------------------ *
 * Ensamblado.
 * ------------------------------------------------------------------ */

/**
 * El grafo completo de una página: los dos nodos globales, la miga de pan y
 * lo que aporte la página. `WebPage` va aquí y no en cada llamada porque toda
 * página es una — salvo las legales, que traen la suya con fechas.
 */
export function graph(input: {
  canonical: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  nodes?: Node[];
}): Node {
  const extra = input.nodes ?? [];
  const hasOwnPage = extra.some((node) => node['@type'] === 'WebPage');

  const page: Node | undefined = hasOwnPage
    ? undefined
    : clean({
        '@type': 'WebPage',
        '@id': `${input.canonical}#page`,
        url: input.canonical,
        name: input.title,
        description: input.description,
        inLanguage: 'es-CL',
        isPartOf: ref(ID.website),
        about: ref(ID.organization),
      });

  const nodes = [
    organizationNode(),
    websiteNode(),
    page,
    breadcrumbNode(input.crumbs),
    ...extra,
  ].filter((node): node is Node => node !== undefined);

  return { '@context': 'https://schema.org', '@graph': nodes };
}

/**
 * Etiquetas legibles por segmento de ruta, para las migas de pan. Se derivan
 * de los datos, así que una industria o un perfil nuevo aparece solo. Los
 * segmentos sin entrada caen a una versión capitalizada del slug.
 */
export function crumbLabels(
  industrias: readonly Industria[],
  equipo: readonly Persona[],
): Record<string, string> {
  return {
    servicios: 'Servicios',
    soluciones: 'Soluciones',
    industrias: 'Industrias',
    'casos-de-exito': 'Casos de éxito',
    nosotros: 'Nosotros',
    contacto: 'Contacto',
    links: 'Enlaces',
    terminos: 'Términos de servicio',
    privacidad: 'Política de privacidad',
    profile: 'Equipo',
    ...Object.fromEntries(industrias.map((industria) => [industria.slug, industria.name])),
    ...Object.fromEntries(equipo.map((persona) => [persona.slug, persona.name])),
  };
}

/**
 * Segmentos que existen en la ruta pero no como página. `/profile` no tiene
 * índice: la miga de un perfil sube a /nosotros, que es donde vive el equipo.
 * Una miga que apunta a un 404 es peor que no tenerla.
 */
const CRUMB_PATHS: Record<string, string> = {
  profile: '/nosotros',
};

/** Construye la miga de pan desde el pathname. `/` siempre encabeza. */
export function crumbsFrom(pathname: string, labels: Record<string, string>): Crumb[] {
  const segments = pathname.split('/').filter(Boolean);
  const crumbs: Crumb[] = [{ name: 'Inicio', path: '/' }];

  segments.forEach((segment, index) => {
    crumbs.push({
      name: labels[segment] ?? segment.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()),
      path: CRUMB_PATHS[segment] ?? `/${segments.slice(0, index + 1).join('/')}`,
    });
  });

  return crumbs;
}
