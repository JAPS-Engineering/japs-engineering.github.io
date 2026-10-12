/** Services in English; spreads the Spanish source so indexes and marks stay aligned. */
import {
  servicios as es,
  serviciosResumen as resumenEs,
  type Servicio,
  type ServicioResumen,
} from '../servicios';

export const servicios: Servicio[] = [
  {
    ...es[0],
    title: 'Digital transformation consulting',
    text: 'End-to-end consulting, from your organization\'s strategy to the development of transformative technology. We map the critical processes that keep your business running and implement cutting-edge technology to transform them.',
    audience:
      'Organizations whose critical processes still depend on spreadsheets, email or disconnected systems.',
    relatedCase: 'Related case: Barron Vieyra →',
  },
  {
    ...es[1],
    title: 'Full-stack development and legacy modernization',
    text: 'We build corporate portals, scalable web and mobile platforms, and migrate legacy systems to modern cloud architectures.',
    audience:
      'Companies that need a new platform — or whose current system has stopped keeping up with their growth.',
    relatedCase: 'Related case: CIUC →',
  },
  {
    ...es[2],
    title: 'API orchestration and integration',
    text: 'We connect fragmented software and isolated databases through robust middleware, so your whole company speaks the same language.',
    audience: 'Operations with an ERP, sales channels and tools that do not talk to each other.',
    relatedCase: 'Related case: AXAM →',
  },
  {
    ...es[3],
    title: 'Data and document audit',
    text: 'We review your data and documents in depth to assess their quality, consistency and traceability. We cross-check sources, identify discrepancies and analyze patterns to deliver a clear report of evidence-backed findings and conclusions. Recommendations and action plans can be included when agreed as part of the scope.',
    audience:
      'Organizations that need to understand and verify information before making decisions, validating reports or evaluating processes.',
    image: { ...es[3].image!, alt: 'Analyst cross-checking printed documents against tables and charts on a laptop.' },
  },
];

export const serviciosResumen: ServicioResumen[] = [
  {
    ...resumenEs[0],
    step: 'We understand',
    title: 'Digital transformation consulting',
    text: 'From strategy to the technology that transforms your operation.',
    ctaSub: 'We review your processes and tell you where to start.',
    bullets: [
      'Process diagnosis and on-site discovery',
      'Roadmap prioritized by impact',
      'AI use cases evaluated and validated',
    ],
    entregables: [
      { label: 'Process map', hint: 'Where time is lost today.' },
      { label: 'Roadmap', hint: 'Initiatives by impact and effort.' },
      { label: 'AI use cases', hint: 'Evaluated and estimated.' },
      { label: 'Business case', hint: 'Costs, return and risks.' },
    ],
  },
  {
    ...resumenEs[1],
    step: 'We build',
    title: 'Custom software development',
    text: 'Scalable platforms and legacy system modernization.',
    ctaSub: 'Tell us which process you want to automate.',
    bullets: [
      'Custom web and mobile applications',
      'Automation of critical processes',
      'AI models in production',
    ],
    entregables: [
      { label: 'Custom platform', hint: 'Designed for your real operation.' },
      { label: 'Automated processes', hint: 'Less manual work and fewer errors.' },
      { label: 'AI in production', hint: 'Monitored, with metrics.' },
    ],
  },
  {
    ...resumenEs[2],
    step: 'We connect',
    title: 'Systems integration',
    text: 'We connect your software so your whole company speaks the same language.',
    ctaSub: 'Your systems don\'t talk to each other? We\'ll review them with you.',
    bullets: [
      'APIs and ERP integration',
      'Unified, traceable data',
      'Continuous monitoring and support',
    ],
    entregables: [
      { label: 'Integrations and APIs', hint: 'No duplicated data or spreadsheets.' },
      { label: 'Unified data', hint: 'A single source of truth.' },
      { label: 'Continuous monitoring', hint: 'Alerts before anything fails.' },
      { label: 'Support and documentation', hint: 'Your team stays autonomous.' },
    ],
  },
  {
    ...resumenEs[3],
    step: 'We audit',
    title: 'Data and document audit',
    text: 'We analyze your information in depth and deliver evidence-backed findings and conclusions. Recommendations are included only when they are part of the agreed scope.',
    image: servicios[3].image,
    ctaSub: 'Let’s discuss the information you need reviewed and the scope of the audit.',
    bullets: [
      'Quality and consistency review',
      'Source cross-checking and traceability',
      'Pattern and discrepancy analysis',
    ],
    entregables: [
      { label: 'Scope and review criteria', hint: 'What is reviewed and how it is assessed.' },
      { label: 'Findings and evidence', hint: 'Supported, traceable observations.' },
      { label: 'Analysis and conclusions report', hint: 'An in-depth reading of the information.' },
      { label: 'Information limitations', hint: 'Gaps and limits of the analysis.' },
    ],
  },
];
