import type { IconName } from '../components/ds/types';

/** Misión y visión — the two feature cards. */
export const proposito = [
  {
    eyebrow: 'Misión',
    text: 'Entender los desafíos de nuestros clientes, diseñar e implementar soluciones mediante ingeniería de vanguardia, generando resultados de excelencia con velocidad.',
  },
  {
    eyebrow: 'Visión',
    text: 'Ser una firma de ingeniería referente a nivel mundial en soluciones de vanguardia, generando mediante nuestros proyectos un impacto real y positivo a nivel económico, social y ambiental.',
  },
];

/** The four beliefs, as base cards under misión/visión. */
export const creencias = [
  {
    title: 'La ingeniería es para el progreso humano',
    text: 'La tecnología y la ciencia existen para aumentar la capacidad de las personas de resolver problemas reales y vivir mejor.',
  },
  {
    title: 'Impacto y rentabilidad no son objetivos opuestos',
    text: 'El crecimiento económico sostenible es el mecanismo más efectivo para crear empleo, riqueza e innovación.',
  },
  {
    title: 'Triple hélice en acción',
    text: 'Creemos en el poder integrador de la industria, la academia y el Estado. JAPS busca ser el puente que transforma investigación científica en productos comerciales de alto impacto.',
  },
  {
    title: 'El poder del altruismo efectivo',
    text: 'Las tecnologías para resolver los grandes desafíos de la humanidad ya existen: nuestro rol es usar datos para implementarlas de la mejor manera en nuestras regiones.',
  },
];

export const pilares: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'layers',
    title: 'Excelencia multidisciplinaria',
    text: 'Software, automatización, IA agéntica, robótica, ciencias aplicadas y visión de procesos en una sola arquitectura de ingeniería.',
  },
  {
    icon: 'sparkles',
    title: 'Mentalidad de founder',
    text: 'No actuamos como consultores tradicionales: asumimos riesgos, validamos rápido y acompañamos en la operación.',
  },
  {
    icon: 'play',
    title: 'Ciclo de vida end-to-end',
    text: 'Cubrimos todo el trayecto: Explore (descubrimiento y validación), Build (desarrollo de software e IA) y Scale (escalamiento y venture building).',
  },
  {
    icon: 'sliders-horizontal',
    title: 'Innovación aplicada y datos',
    text: 'No innovamos por tendencia: implementamos IA, automatización y datos donde generan retorno económico inmediato y medible.',
  },
  {
    icon: 'shield',
    title: 'Sostenibilidad como ventaja competitiva',
    text: 'Los criterios ESG y ODS no son un costo normativo: son diferenciación y eficiencia operativa.',
  },
  {
    icon: 'message-square',
    title: 'Humano',
    text: 'Entendimiento profundo del cliente y foco en el usuario.',
  },
];

export const historia = [
  'Somos un grupo de amigos ingenieros apasionados por la innovación, que decidimos apalancar nuestras habilidades para construir una empresa con propósito, en medio del auge de la inteligencia artificial.',
  'Todo comenzó en la universidad con Sonicali, un proyecto deeptech que buscó desarrollar un dispositivo de ultrasonido para combatir el piojo de mar, uno de los grandes desafíos de la industria salmonera. Ese proyecto nos llevó a ganar Jump Chile 2023, Brain Chile 2024 y HUC Social Ideas Challenge 2024, y a recorrer ecosistemas de emprendimiento en distintas partes del mundo.',
  'Hoy, con más de tres años trabajando juntos, seguimos ese mismo camino desde el Centro de Innovación UC Anacleto Angelini: impulsamos proyectos de alto impacto a través de nuestra consultoría y construimos las tecnologías del futuro a través de nuestro venture builder.',
];

/** No portraits were supplied with the design system; ImageSlot renders the
 *  system's grey placeholder until a `photo` path is added here. */
export interface Persona {
  slug: string;
  name: string;
  role: string;
  /** One-sentence hook for the profile band — shorter than `bio`. */
  lead: string;
  /** Sólo para la meta description, cuando el `lead` de diseño la desborda
   *  el límite que muestra un buscador. Por defecto se usa el `lead`. */
  seoLead?: string;
  bio: string;
  skills: string[];
  email: string;
  photo?: string;
}

export const equipo: Persona[] = [
  {
    slug: 'pablo',
    name: 'Pablo Landerretche',
    role: 'Fundador y CEO',
    lead: 'Guía la visión estratégica de JAPS: entender los mayores dolores de la economía global y abordarlos con las mejores prácticas de ingeniería.',
    seoLead:
      'Guía la visión estratégica: los mayores dolores de la economía global, abordados con ingeniería.',
    bio: 'Guía la visión estratégica de la compañía: entender a fondo los mayores dolores de la economía global y abordarlos con las mejores prácticas de ingeniería, construyendo, como empresa, el mundo que queremos.',
    skills: [
      'Liderazgo estratégico',
      'Visión empresarial',
      'Triple impacto',
      'Innovación tecnológica',
      'Negociación',
    ],
    email: 'pablo@japs.ing',
  },
  {
    slug: 'alonso',
    name: 'Alonso Rivera',
    role: 'CTO',
    lead: 'Responsable de la arquitectura tecnológica y del desarrollo de soluciones de software, hardware e inteligencia artificial.',
    bio: 'Responsable de la arquitectura tecnológica y del desarrollo de soluciones de software, hardware e inteligencia artificial. Su misión: sistemas robustos, escalables y seguros que potencien el crecimiento de nuestros clientes.',
    skills: [
      'Robótica',
      'Full stack',
      'Inteligencia artificial',
      'Hardware e IoT',
      'Diseño mecánico',
    ],
    email: 'alonso@japs.ing',
  },
  {
    slug: 'sergio',
    name: 'Sergio Urzúa',
    role: 'Finanzas y operaciones',
    lead: 'Lidera la gestión financiera y operacional, asegurando la sostenibilidad y optimización de los recursos.',
    bio: 'Lidera la gestión financiera y operacional, asegurando la sostenibilidad y optimización de los recursos. Su enfoque analítico permite proyectar un crecimiento seguro y responsable.',
    skills: [
      'Planificación financiera',
      'Gestión de recursos',
      'Definición de procesos',
      'Investigación científica',
    ],
    email: 'sergio@japs.ing',
  },
  {
    slug: 'jean',
    name: 'Jean Philipe Fuentes',
    role: 'Líder técnico',
    lead: 'Lidera el equipo técnico en el desarrollo de aplicaciones web y automatizaciones complejas.',
    bio: 'Lidera el equipo técnico en el desarrollo de aplicaciones web y automatizaciones complejas, con foco en experiencias de usuario excepcionales, mejores prácticas y código limpio.',
    skills: [
      'Diseño de sistemas',
      'Arquitectura de software',
      'Análisis de datos',
      'Machine learning',
    ],
    email: 'jean@japs.ing',
  },
  {
    slug: 'clemente',
    name: 'Clemente Grass',
    role: 'Ingeniería de soluciones',
    lead: 'Convierte necesidades complejas de clientes en productos funcionales y escalables.',
    bio: 'Colabora con clientes y equipos técnicos para convertir necesidades complejas en productos funcionales y escalables, combinando ingeniería, creatividad y pensamiento estratégico.',
    skills: [
      'Arquitectura de software',
      'Diseño de soluciones',
      'QA',
      'Sistemas interactivos',
      'Algoritmos',
    ],
    email: 'clemente@japs.ing',
  },
];

export const partners = [
  {
    title: 'Due Green',
    text: 'Consultora ambiental, expertos en gestión de proyectos y permisos para sectores productivos. Juntos creamos SolarCheck.',
  },
  {
    title: 'Lumisreg Consulting',
    text: 'Especialistas en cumplimiento tributario y legal. Juntos creamos <a href="https://consenty.japs.ing/" target="_blank" rel="noopener">Consenty</a>.',
  },
  {
    title: 'Imaginería',
    text: 'Consultora especializada en excelencia operacional. Juntos creamos Shackleton.',
  },
  {
    title: 'Flow Extend',
    text: 'Sistemas de ultrasonido que sensan, interpretan e intervienen fluidos y materiales. Know-how compartido a través de Sonicali.',
  },
  {
    title: 'Skillia',
    text: 'Software para colegios que conecta estudiantes con oportunidades de desarrollo. Desarrollamos su motor tecnológico.',
  },
  {
    title: 'Go Farmer',
    text: 'Sistema para simplificar y automatizar el riego en campos. Colaboramos en la innovación tecnológica del sistema.',
  },
  {
    title: 'CIUC',
    text: 'El ecosistema donde JAPS se formó. Hoy automatizamos sus procesos y operamos como perk para las startups del centro.',
  },
];

export const asesores =
  'Gustavo Blanco · Mateo de la Cuadra · Álvaro Escárate · Santiago Severin · Francisco García · Ernesto Ayala · Fernando Parcerisas';
