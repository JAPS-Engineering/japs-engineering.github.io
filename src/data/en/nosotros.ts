/** "About" content in English. Each list spreads its Spanish twin so icons,
 *  colours, photos, slugs and links cannot diverge; only reader-facing text
 *  is overridden. data/content.ts asserts parity at build time. */
import type { LogoWallItem } from '../../components/ds/types';
import {
  asesores as asesoresEs,
  creencias as creenciasEs,
  equipo as equipoEs,
  historia as historiaEs,
  hitosHistoria as hitosHistoriaEs,
  partnersCocreacion as partnersCocreacionEs,
  partnersColaboracion as partnersColaboracionEs,
  proposito as propositoEs,
  type Asesor,
  type Creencia,
  type HistoriaHito,
  type PartnerCocreacion,
  type PartnerColaboracion,
  type Persona,
  type Proposito,
} from '../nosotros';

export const proposito: Proposito[] = [
  {
    ...propositoEs[0],
    eyebrow: 'Mission',
    text: 'To understand our clients’ challenges and to design and implement solutions through cutting-edge engineering, delivering excellent results with speed.',
  },
  {
    ...propositoEs[1],
    eyebrow: 'Vision',
    text: 'To be a globally recognised engineering firm in cutting-edge solutions, generating real and positive economic, social and environmental impact through our projects.',
  },
];

export const creencias: Creencia[] = [
  {
    ...creenciasEs[0],
    title: 'Engineering for human progress.',
    text: 'Technology and science exist to expand people’s capacity to solve real problems and live better lives.',
  },
  {
    ...creenciasEs[1],
    title: 'Impact and profitability are not opposing goals',
    text: 'Sustainable economic growth is the most effective mechanism for creating jobs, wealth and innovation.',
  },
  {
    ...creenciasEs[2],
    title: 'Triple helix in action',
    text: 'We believe in the integrating power of industry, academia and the State. JAPS aims to be the bridge that turns scientific research into high-impact commercial products.',
  },
  {
    ...creenciasEs[3],
    title: 'The power of effective altruism',
    text: 'The technologies to solve humanity’s greatest challenges already exist: our role is to use data to deploy them in the best possible way across our regions.',
  },
];

export const historia: HistoriaHito[] = [
  {
    ...historiaEs[0],
    eyebrow: 'The origin',
    text: 'We are a group of engineer friends passionate about innovation who decided to leverage our skills to build a purpose-driven company, right in the midst of the artificial intelligence boom.',
  },
  {
    ...historiaEs[1],
    eyebrow: 'Sonicali and the awards',
    text: 'It all began at university with Sonicali, a deeptech project that set out to develop an ultrasound device to fight sea lice, one of the salmon industry’s biggest challenges. That project led us to win Jump Chile 2023, Brain Chile 2024 and the HUC Social Ideas Challenge 2024, and to explore entrepreneurship ecosystems around the world.',
  },
  {
    ...historiaEs[2],
    eyebrow: 'Today, from CIUC',
    text: 'Today, after more than three years working together, we continue down that same path from the UC Anacleto Angelini Innovation Center: we drive high-impact projects through our consultancy and build the technologies of the future through our venture studio.',
  },
];

/** Programme logos: proper nouns, unchanged. */
export const hitosHistoria: LogoWallItem[] = hitosHistoriaEs;

const baseJaps = 'UC Anacleto Angelini Innovation Center · Santiago, Chile';

const byPerson = Object.fromEntries(equipoEs.map((persona) => [persona.slug, persona])) as Record<string, Persona>;

export const equipo: Persona[] = [
  {
    ...byPerson.pablo,
    role: 'CEO',
    lead: 'Guides JAPS’s strategic vision: understanding the biggest pain points of the global economy and tackling them with best-in-class engineering practices.',
    seoLead: 'Guides the strategic vision: the biggest pain points of the global economy, tackled with engineering.',
    bio: 'Guides the company’s strategic vision: deeply understanding the biggest pain points of the global economy and tackling them with best-in-class engineering practices, building, as a company, the world we want.',
    skills: [
      'Strategic leadership',
      'Business vision',
      'Triple impact',
      'Technological innovation',
      'Negotiation',
    ],
    base: baseJaps,
  },
  {
    ...byPerson.alonso,
    role: 'CTO',
    lead: 'Responsible for the technology architecture and the development of software, hardware and artificial intelligence solutions.',
    bio: 'Responsible for the technology architecture and the development of software, hardware and artificial intelligence solutions. His mission: robust, scalable and secure systems that power our clients’ growth.',
    skills: [
      'Robotics',
      'Full stack',
      'Artificial intelligence',
      'Hardware and IoT',
      'Mechanical design',
    ],
    base: baseJaps,
  },
  {
    ...byPerson.sergio,
    role: 'CFO',
    lead: 'Leads financial and operational management, ensuring sustainability and the optimal use of resources.',
    bio: 'Leads financial and operational management, ensuring sustainability and the optimal use of resources. His analytical approach makes it possible to plan for safe, responsible growth.',
    skills: [
      'Financial planning',
      'Resource management',
      'Process definition',
      'Scientific research',
    ],
    base: baseJaps,
  },
  {
    ...byPerson.jean,
    role: 'CDO',
    lead: 'Leads the technical team in the development of web applications and complex automations.',
    bio: 'Leads the technical team in the development of web applications and complex automations, with a focus on exceptional user experiences, best practices and clean code.',
    skills: [
      'Systems design',
      'Software architecture',
      'Data analysis',
      'Machine learning',
    ],
    base: baseJaps,
  },
  {
    ...byPerson.clemente,
    role: 'Solutions engineering',
    lead: 'Turns complex client needs into functional, scalable products.',
    bio: 'Works with clients and technical teams to turn complex needs into functional, scalable products, combining engineering, creativity and strategic thinking.',
    skills: [
      'Software architecture',
      'Solution design',
      'QA',
      'Interactive systems',
      'Algorithms',
    ],
    base: baseJaps,
  },
  {
    ...byPerson.catalina,
    role: 'Sales',
    area: 'Sales',
    lead: 'Connects client needs with JAPS Engineering’s solutions.',
    seoLead:
      'Connects client needs with the solutions JAPS Engineering builds, from the first conversation to the proposal.',
    bio: 'Catalina is part of the JAPS commercial team, where she works on selling the solutions the company develops.',
    skills: [],
  },
  {
    ...byPerson['jose-miguel'],
    role: 'Developer',
    area: 'Development',
    lead: 'Specializes in generative agent frameworks and AI/ML solution delivery.',
    bio: 'José Miguel is part of the JAPS development team and contributes to building solutions for its projects.',
    skills: [],
  },
];

export const partnersCocreacion: PartnerCocreacion[] = [
  {
    ...partnersCocreacionEs[0],
    text: 'Environmental consultancy, experts in project management and permitting for productive sectors.',
  },
  {
    ...partnersCocreacionEs[1],
    text: 'Specialists in tax and legal compliance.',
  },
  {
    ...partnersCocreacionEs[2],
    text: 'Consultancy specialising in operational excellence.',
  },
];

export const partnersColaboracion: PartnerColaboracion[] = [
  {
    ...partnersColaboracionEs[0],
    text: 'Ultrasound systems that sense, interpret and act on fluids and materials.',
    aporte: 'Know-how shared through Sonicali',
  },
  {
    ...partnersColaboracionEs[1],
    text: 'Software for schools that connects students with development opportunities.',
    aporte: 'We build their technology engine',
  },
  {
    ...partnersColaboracionEs[2],
    text: 'A system to simplify and automate irrigation on farms.',
    aporte: 'We collaborate on the system’s technological innovation',
  },
  {
    ...partnersColaboracionEs[3],
    text: 'The ecosystem where JAPS was formed. Today we automate its processes and operate as a perk for its startups.',
    aporte: 'Ecosystem · Automation',
  },
];

/** Advisors: names and photos only. */
export const asesores: Asesor[] = asesoresEs;
