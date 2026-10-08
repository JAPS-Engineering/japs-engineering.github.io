/**
 * /llms.txt — el mapa del sitio dirigido a motores generativos.
 *
 * A diferencia del sitemap XML, que sólo enumera URLs, aquí cada enlace va
 * anotado con una línea que se sostiene sola. Es lo que un modelo cita
 * cuando le preguntan por JAPS: si la anotación no dice quién, qué y dónde,
 * la respuesta que dé será la que se invente.
 *
 * Un solo archivo para los dos idiomas: la convención llms.txt es un archivo
 * en la raíz y nadie busca /en/llms.txt. Primero el español, que es la
 * versión que prevalece legalmente; después la sección en inglés.
 *
 * Se deriva de src/data/, así que añadir una industria, un producto o una
 * persona lo actualiza en el siguiente build.
 */
import type { APIRoute } from 'astro';

import { content } from '../data/content';
import { organizacion } from '../data/organizacion';
import { industryPath, localizePath, profilePath, type Lang } from '../i18n/routes';
import { useTranslations } from '../i18n/ui';
import { abs } from '../lib/schema';

/** Una línea de enlace anotado, en el formato que espera llms.txt. */
const link = (label: string, path: string, note: string) =>
  `- [${label}](${path.startsWith('http') ? path : abs(path)}): ${note}`;

/** Colapsa saltos y espacios: una anotación por línea, siempre. */
const oneLine = (text: string) => text.replace(/\s+/g, ' ').trim();

function section(lang: Lang): string {
  const t = useTranslations(lang);
  const { casos, equipo, industrias, servicios, soluciones } = content(lang);
  const p = (key: Parameters<typeof localizePath>[0]) => localizePath(key, lang);
  const en = lang === 'en';

  return `## ${en ? 'Services' : 'Servicios'}

${servicios.map((servicio) => link(servicio.title, p('services'), oneLine(`${servicio.text} ${en ? 'For' : 'Para'}: ${servicio.audience}`))).join('\n')}

## ${en ? 'SaaS products' : 'Productos SaaS'}

${soluciones.map((solucion) => link(solucion.title, solucion.href ?? p('solutions'), oneLine(`${solucion.text} ${solucion.credit}`))).join('\n')}

## ${t('route.industries')}

${industrias.map((industria) => link(industria.name, industryPath(industria.slug, lang), oneLine(industria.seoDescription))).join('\n')}

## ${t('route.cases')}

${casos.map((caso) => link(caso.title, p('cases'), oneLine(`${caso.eyebrow}. ${caso.paragraphs[0]}`))).join('\n')}

## ${en ? 'Team' : 'Equipo'}

${equipo.map((persona) => link(persona.name, profilePath(persona.slug, lang), oneLine(`${persona.role} ${en ? 'at' : 'de'} ${organizacion.name}. ${persona.bio}`))).join('\n')}

## ${en ? 'Pages' : 'Páginas'}

${link(t('route.home'), p('home'), oneLine(en ? organizacion.descriptionEn : organizacion.description))}
${link(t('route.about'), p('about'), en ? 'Purpose, story, beliefs, founders, team and advisors of JAPS Engineering.' : 'Propósito, historia, creencias, fundadores, equipo y asesores de JAPS Engineering.')}
${link(t('route.contact'), p('contact'), en ? `Contact form, email ${organizacion.email} and WhatsApp.` : `Formulario de contacto, correo ${organizacion.email} y WhatsApp.`)}
${link(t('route.links'), p('links'), en ? 'Short index of every JAPS Engineering destination, for social media bios.' : 'Índice breve de todos los destinos de JAPS Engineering, para bio de redes sociales.')}

## Legal

${link(t('route.terms'), p('terms'), en ? 'Terms of use of the site and of service delivery, under Chilean law. English translation; the Spanish version prevails.' : 'Condiciones de uso del sitio y de prestación de servicios, bajo ley chilena.')}
${link(t('crumb.privacy'), p('privacy'), en ? 'Processing of personal data under Chilean Law No. 21,719. English translation; the Spanish version prevails.' : 'Tratamiento de datos personales conforme a la Ley N° 21.719 de Chile.')}`;
}

export const GET: APIRoute = () => {
  const es = useTranslations('es');
  const body = `# ${organizacion.name}

> ${organizacion.description}

${organizacion.legalName}, RUT ${organizacion.taxID}. ${es('site.base')}.
Contacto: ${organizacion.email}${organizacion.telephone ? ` · ${organizacion.telephone}` : ''}.
${es('site.incubator')}. Reconocimientos: ${es('site.awards')}.

Este sitio está disponible en español (raíz) e inglés (/en/). Describe una
empresa que opera bajo legislación chilena, incluida la Ley N° 21.719 de
protección de datos personales; en los documentos legales prevalece la
versión en español.

${section('es')}

---

# ${organizacion.name} (English)

> ${organizacion.descriptionEn}

This site is available in Spanish (root) and English (/en/). JAPS Engineering
operates under Chilean law, including Law No. 21,719 on personal data
protection; for legal documents the Spanish version prevails.

${section('en')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
