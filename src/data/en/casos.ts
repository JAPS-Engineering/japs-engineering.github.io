/** Case studies in English; spreads the Spanish source so logos stay aligned. */
import {
  casos as es,
  casosDestacados as destacadosEs,
  casosEnRedaccion as redaccionEs,
  type Caso,
  type CasoDestacado,
  type CasosEnRedaccion,
} from '../casos';

export const casos: Caso[] = [
  {
    ...es[0],
    eyebrow: 'Manufacturing',
    title: 'How Barron Vieyra improved its production planning for napkin machines',
    paragraphs: [
      'A production-efficiency model that integrates critical variables — from extracting sales orders out of the ERP to raw-material stock and changeover times — to automatically generate optimal work sequences. An intuitive web dashboard digitized decision support and compares actual versus estimated performance through KPIs taken directly from the machines, allowing Barron Vieyra to scale its production efficiency and validate the automation logic for its future expansion projects.',
    ],
    footnote:
      'Barrón Vieyra International: over 29 years as a specialist in high-tech nonwoven fabrics for healthcare, retail and mining, with operations in Chile, Peru and Colombia.',
    aside: {
      kicker: 'Impact',
      items: [
        'Less manual time spent on planning and preparing work orders',
        'Better on-time delivery',
        'Fewer critical last-minute rescheduling events',
        'Installed capacity optimized through automatic prioritization',
      ],
    },
  },
  {
    ...es[1],
    eyebrow: 'Retail and commerce · Distribution',
    title: 'AXAM: automation and AI for commercial operations',
    paragraphs: [
      'AXAM distributes hygiene and cleaning products in Chile and Spain: thousands of products, multiple sales channels and top-tier international suppliers. In an industry where margins matter, speed is essential and mistakes are costly, much of its daily operation consisted of manual processes that did not scale.',
    ],
    aside: {
      kicker: 'Projects delivered',
      items: [
        'Mercado Libre and Manager+ management and integration',
        'AI sales assistant over its product catalog',
        'Management platform',
        'Commission and margin calculation tool',
      ],
    },
  },
  {
    ...es[2],
    eyebrow: 'Education',
    title: 'CIUC: mentor network platform',
    paragraphs: [
      'Together with the entrepreneurship area of the UC Innovation Center, we built a mentoring platform that connects mentors, entrepreneurs and facilitators across more than 10 competitions. Every mentoring session is tracked and summarized, so no information is lost.',
    ],
    aside: {
      kicker: 'Organization',
      items: [
        'CIUC promotes a culture of innovation and entrepreneurship at the university and across the country, connecting academia, the private sector and the public sector.',
      ],
    },
  },
  {
    ...es[3],
    eyebrow: 'Judicial services · LegalTech',
    title: 'CynthIA (Perired): AI-powered forensic expert management platform',
    paragraphs: [
      'A digital platform for managing forensic expert services with artificial intelligence, which digitizes and automates coordination between clients, lawyers and expert witnesses, as well as the management of requests, information and documents associated with each case.',
    ],
    aside: {
      kicker: 'Company',
      items: [
        'PERIRED connects lawyers and clients with a network of expert witnesses and professionals across Chile, making it easier to hire experts for forensic assessments and court reports.',
      ],
    },
  },
];

export const casosEnRedaccion: CasosEnRedaccion = {
  ...redaccionEs,
  badge: 'In progress',
  text: 'Don Maxi — case study in preparation, coming soon.',
};

export const casosDestacados: CasoDestacado[] = [
  {
    ...destacadosEs[0],
    eyebrow: 'Manufacturing',
    title: 'Barron Vieyra',
    text: 'Automatic production planning for napkin machines.',
  },
  {
    ...destacadosEs[1],
    eyebrow: 'Retail and commerce',
    title: 'AXAM',
    text: 'Automation and AI for commercial operations.',
  },
  {
    ...destacadosEs[2],
    eyebrow: 'Education',
    title: 'CIUC',
    text: 'Mentor network platform for the UC entrepreneurship ecosystem.',
  },
];
