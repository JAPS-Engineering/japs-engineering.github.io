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
import {
  dynamicRoutes,
  industryPath,
  industrySlugs,
  langTag,
  localizePath,
  profilePath,
  routes,
  type Lang,
} from '../i18n/routes';
import { useTranslations } from '../i18n/ui';
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

/** Descripción de la organización en el idioma de la página. */
const describe = (lang: Lang) => (lang === 'en' ? organizacion.descriptionEn : organizacion.description);
const COUNTRY = { '@type': 'Country', name: 'Chile' };

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

export function organizationNode(lang: Lang, extra: Node = {}): Node {
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
    description: describe(lang),
    logo: {
      '@type': 'ImageObject',
      url: abs('/logo/iso_black.svg'),
      caption: organizacion.name,
    },
    image: abs('/og/default.png'),
    address: direccion(),
    areaServed: COUNTRY,
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

export function websiteNode(lang: Lang): Node {
  return clean({
    '@type': 'WebSite',
    '@id': ID.website,
    url: ORIGIN,
    name: organizacion.name,
    description: describe(lang),
    inLanguage: langTag[lang],
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
export function professionalServiceNode(knowsAbout: string[], lang: Lang): Node {
  return clean({
    '@type': 'ProfessionalService',
    '@id': `${ORIGIN}/#service`,
    name: organizacion.name,
    description: describe(lang),
    url: ORIGIN,
    parentOrganization: ref(ID.organization),
    address: direccion(),
    telephone: organizacion.telephone,
    email: organizacion.email,
    areaServed: COUNTRY,
    knowsAbout,
  });
}

export function serviceNodes(servicios: readonly Servicio[], lang: Lang): Node[] {
  return servicios.map((servicio) =>
    clean({
      '@type': 'Service',
      '@id': `${abs(localizePath('services', lang))}#${servicio.index}`,
      name: servicio.title,
      description: servicio.text,
      serviceType: servicio.title,
      audience: { '@type': 'Audience', audienceType: servicio.audience },
      provider: ref(ID.organization),
      areaServed: COUNTRY,
    }),
  );
}

export function softwareApplicationNodes(soluciones: readonly Solucion[], lang: Lang): Node[] {
  const page = abs(localizePath('solutions', lang));
  return soluciones.map((solucion) =>
    clean({
      '@type': 'SoftwareApplication',
      '@id': `${page}#${solucion.title.toLowerCase().replace(/\s+/g, '-')}`,
      name: solucion.title,
      description: solucion.text,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: solucion.href ?? page,
      publisher: ref(ID.organization),
      inLanguage: langTag[lang],
    }),
  );
}

export function industryServiceNode(industria: Industria, lang: Lang): Node {
  return clean({
    '@type': 'Service',
    '@id': `${abs(industryPath(industria.slug, lang))}#service`,
    name: `${industria.name} — ${industria.title}`,
    description: industria.lead,
    serviceType: industria.name,
    provider: ref(ID.organization),
    areaServed: COUNTRY,
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

export function caseNodes(casos: readonly Caso[], lang: Lang): Node[] {
  return casos.map((caso) =>
    clean({
      '@type': 'CreativeWork',
      '@id': `${abs(localizePath('cases', lang))}#${caso.id}`,
      name: caso.title,
      description: caso.paragraphs.join(' '),
      image: abs(caso.image),
      about: caso.eyebrow,
      creator: ref(ID.organization),
      inLanguage: langTag[lang],
    }),
  );
}

export function personNode(persona: Persona, lang: Lang): Node {
  const url = abs(profilePath(persona.slug, lang));
  return clean({
    '@type': 'Person',
    '@id': `${url}#person`,
    name: persona.name,
    jobTitle: persona.role,
    description: persona.bio,
    email: persona.email,
    url,
    image: persona.photo ? abs(persona.photo) : undefined,
    sameAs: persona.linkedin ? [persona.linkedin] : undefined,
    knowsAbout: persona.skills.length > 0 ? [...persona.skills] : undefined,
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
  lang: Lang;
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
    inLanguage: langTag[input.lang],
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
  lang: Lang;
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
        inLanguage: langTag[input.lang],
        isPartOf: ref(ID.website),
        about: ref(ID.organization),
      });

  const nodes = [
    organizationNode(input.lang),
    websiteNode(input.lang),
    page,
    breadcrumbNode(input.crumbs),
    ...extra,
  ].filter((node): node is Node => node !== undefined);

  return { '@context': 'https://schema.org', '@graph': nodes };
}

/**
 * Etiquetas legibles por segmento de ruta, para las migas de pan. Se derivan
 * de los datos y de las rutas del idioma, así que una industria o un perfil
 * nuevo aparece solo. Los segmentos sin entrada caen a una versión
 * capitalizada del slug.
 */
export function crumbLabels(
  lang: Lang,
  industrias: readonly Industria[],
  equipo: readonly Persona[],
): Record<string, string> {
  const t = useTranslations(lang);
  const seg = (path: string) => path.split('/').filter(Boolean).pop() ?? '';
  return {
    [seg(routes.services[lang])]: t('route.services'),
    [seg(routes.solutions[lang])]: t('route.solutions'),
    [seg(routes.industries[lang])]: t('route.industries'),
    [seg(routes.cases[lang])]: t('route.cases'),
    [seg(routes.about[lang])]: t('route.about'),
    [seg(routes.contact[lang])]: t('route.contact'),
    [seg(routes.links[lang])]: t('route.links'),
    [seg(routes.terms[lang])]: t('route.terms'),
    [seg(routes.privacy[lang])]: t('crumb.privacy'),
    [seg(dynamicRoutes.profile[lang])]: t('crumb.team'),
    ...Object.fromEntries(
      industrias.map((industria) => [
        lang === 'en' ? industrySlugs[industria.slug] : industria.slug,
        industria.name,
      ]),
    ),
    ...Object.fromEntries(equipo.map((persona) => [persona.slug, persona.name])),
  };
}

/** Construye la miga de pan desde el pathname. La home del idioma siempre
 *  encabeza; el prefijo `/en` no es una página y se omite. `/profile` y
 *  `/en/team` tampoco tienen índice: su miga sube a Nosotros/About, que es
 *  donde vive el equipo. Una miga que apunta a un 404 es peor que no tenerla. */
export function crumbsFrom(pathname: string, labels: Record<string, string>, lang: Lang): Crumb[] {
  const t = useTranslations(lang);
  const segments = pathname.split('/').filter(Boolean);
  if (lang === 'en' && segments[0] === 'en') segments.shift();
  const prefix = lang === 'en' ? '/en' : '';
  const teamSegment = dynamicRoutes.profile[lang].split('/').filter(Boolean).pop();
  const crumbs: Crumb[] = [{ name: t('route.home'), path: routes.home[lang] }];

  segments.forEach((segment, index) => {
    crumbs.push({
      name: labels[segment] ?? segment.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()),
      path:
        segment === teamSegment
          ? routes.about[lang]
          : `${prefix}/${segments.slice(0, index + 1).join('/')}`,
    });
  });

  return crumbs;
}
