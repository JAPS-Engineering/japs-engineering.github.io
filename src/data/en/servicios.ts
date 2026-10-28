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
    title: 'Training and technology adoption',
    text: 'Your team learns to use the tools we build and to get more out of the ones it already has. We support adoption with hands-on training and reference material, so the technology is used with confidence from day one.',
    audience:
      'Teams rolling out new tools, or not getting the most out of the systems, spreadsheets and licenses they already pay for.',
  },
];

export const serviciosResumen: ServicioResumen[] = [
  {
    ...resumenEs[0],
    step: 'We understand',
    title: 'Digital roadmap',
    text: 'We understand your operation together with your team and define which technology to build, in what order and its impact on your business.',
    ctaSub: 'We review your processes and tell you where to start.',
    bullets: [
      'Process diagnosis and on-site discovery',
      'Roadmap prioritized by impact',
      'AI use cases evaluated and validated',
    ],
    entregables: [
      { label: 'Process map', hint: 'Where time, money and control are lost today.' },
      { label: 'Prioritized opportunities', hint: 'By savings, risk and effort.' },
      { label: 'Solution design', hint: 'Which systems to build and how they connect to your operation.' },
      { label: 'Plan and business case', hint: 'Stages, costs and impact.' },
    ],
  },
  {
    ...resumenEs[1],
    step: 'We build',
    title: 'Custom software development',
    text: 'Starting from a design made with your team, we build the software your operation needs and modernize your legacy systems.',
    ctaSub: 'Tell us which process you want to automate.',
    bullets: [
      'Custom web and mobile applications',
      'Automation of critical processes',
      'AI models in production',
    ],
    entregables: [
      { label: 'Exclusive platform', hint: 'Designed and built for your operation.' },
      { label: 'Modernized systems', hint: 'We keep what works and replace what holds you back.' },
      { label: 'Performance metrics', hint: 'To evaluate how the solution performs over time.' },
    ],
  },
  {
    ...resumenEs[2],
    step: 'We connect',
    title: 'Systems integration',
    text: 'We make your systems work together: the ones we build and the ones you already have.',
    ctaSub: 'Your systems don\'t talk to each other? We\'ll review them with you.',
    bullets: [
      'APIs and ERP integration',
      'Unified, traceable data',
      'Continuous monitoring and support',
    ],
    entregables: [
      { label: 'Tailored integrations', hint: 'Your ERP, sales channels and tools, connected.' },
      { label: 'Unified data', hint: 'A single source of truth, no duplicated spreadsheets.' },
      { label: 'Information that flows on its own', hint: 'Fewer manual handoffs between teams and systems.' },
      { label: 'Monitoring and alerts', hint: 'We warn you before a connection fails.' },
    ],
  },
  {
    ...resumenEs[3],
    step: 'We train',
    title: 'Training and technology adoption',
    text: 'Your team learns to use the tools we build and to get more out of the ones it already has.',
    ctaSub: 'Tell us which tools your team uses and we will put the training together.',
    bullets: [
      'Hands-on training by role',
      'Support throughout adoption',
      'Guides and reference material',
    ],
    entregables: [
      { label: 'Command of your new tools', hint: 'Your team uses them with confidence from day one.' },
      { label: 'More value from what you already pay for', hint: 'Get more out of your current systems, spreadsheets and licenses.' },
      { label: 'Support material', hint: 'Guides to consult whenever they need them.' },
    ],
  },
];
