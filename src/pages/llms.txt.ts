/**
 * /llms.txt — el mapa del sitio dirigido a motores generativos.
 *
 * A diferencia del sitemap XML, que sólo enumera URLs, aquí cada enlace va
 * anotado con una línea que se sostiene sola. Es lo que un modelo cita
 * cuando le preguntan por JAPS: si la anotación no dice quién, qué y dónde,
 * la respuesta que dé será la que se invente.
 *
 * Se deriva de src/data/, así que añadir una industria, un producto o una
 * persona lo actualiza en el siguiente build.
 */
import type { APIRoute } from 'astro';

import { casos } from '../data/casos';
import { industrias } from '../data/industrias';
import { equipo } from '../data/nosotros';
import { organizacion, baseOperativa } from '../data/organizacion';
import { servicios } from '../data/servicios';
import { site } from '../data/site';
import { soluciones } from '../data/soluciones';
import { abs } from '../lib/schema';

/** Una línea de enlace anotado, en el formato que espera llms.txt. */
const link = (label: string, path: string, note: string) =>
  `- [${label}](${path.startsWith('http') ? path : abs(path)}): ${note}`;

/** Colapsa saltos y espacios: una anotación por línea, siempre. */
const oneLine = (text: string) => text.replace(/\s+/g, ' ').trim();

export const GET: APIRoute = () => {
  const body = `# ${organizacion.name}

> ${organizacion.description}

${organizacion.legalName}, RUT ${organizacion.taxID}. ${baseOperativa}.
Contacto: ${organizacion.email}${organizacion.telephone ? ` · ${organizacion.telephone}` : ''}.
${site.incubator}. Reconocimientos: ${site.awards}.

Todo el contenido de este sitio está en español y describe una empresa que
opera bajo legislación chilena, incluida la Ley N° 21.719 de protección de
datos personales.

## Servicios

${servicios.map((servicio) => link(servicio.title, '/servicios', oneLine(`${servicio.text} Para: ${servicio.audience}`))).join('\n')}

## Productos SaaS

${soluciones.map((solucion) => link(solucion.title, solucion.href ?? '/soluciones', oneLine(`${solucion.text} ${solucion.credit}`))).join('\n')}

## Industrias

${industrias.map((industria) => link(industria.name, `/industrias/${industria.slug}`, oneLine(industria.seoDescription))).join('\n')}

## Casos de éxito

${casos.map((caso) => link(caso.title, '/casos-de-exito', oneLine(`${caso.eyebrow}. ${caso.paragraphs[0]}`))).join('\n')}

## Equipo

${equipo.map((persona) => link(persona.name, `/profile/${persona.slug}`, oneLine(`${persona.role} de ${organizacion.name}. ${persona.bio}`))).join('\n')}

## Páginas

${link('Inicio', '/', oneLine(organizacion.description))}
${link('Nosotros', '/nosotros', 'Propósito, historia, creencias, equipo fundador y asesores de JAPS Engineering.')}
${link('Contacto', '/contacto', `Formulario de contacto, correo ${organizacion.email} y WhatsApp.`)}
${link('Enlaces', '/links', 'Índice breve de todos los destinos de JAPS Engineering, para bio de redes sociales.')}

## Legal

${link('Términos de servicio', '/terminos', 'Condiciones de uso del sitio y de prestación de servicios, bajo ley chilena.')}
${link('Política de privacidad', '/privacidad', 'Tratamiento de datos personales conforme a la Ley N° 21.719 de Chile.')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
