import type { LogoWallItem } from '../components/ds/types';

/** Misión y visión — the two feature cards. `icon`/`iconColor` drive the
 *  large low-opacity Material Symbols glyph in the card background. */
export const proposito = [
  {
    eyebrow: 'Misión',
    icon: 'explore',
    iconColor: '#31715b',
    text: 'Entender los desafíos de nuestros clientes, diseñar e implementar soluciones mediante ingeniería de vanguardia, generando resultados de excelencia con velocidad.',
  },
  {
    eyebrow: 'Visión',
    icon: 'visibility',
    iconColor: '#34649a',
    text: 'Ser una firma de ingeniería referente a nivel mundial en soluciones de vanguardia, generando mediante nuestros proyectos un impacto real y positivo a nivel económico, social y ambiental.',
  },
];

/** The four beliefs, as base cards under misión/visión. `chipBg`/`chipFg`
 *  reuse the same soft-color pairs as the founders' TeamCardHover tones. */
export const creencias = [
  {
    icon: 'accessibility_new',
    chipBg: '#edf7f3',
    chipFg: '#31715b',
    title: 'La ingeniería para el progreso humano.',
    text: 'La tecnología y la ciencia existen para aumentar la capacidad de las personas de resolver problemas reales y vivir mejor.',
  },
  {
    icon: 'trending_up',
    chipBg: '#faf4e8',
    chipFg: '#8a682b',
    title: 'Impacto y rentabilidad no son objetivos opuestos',
    text: 'El crecimiento económico sostenible es el mecanismo más efectivo para crear empleo, riqueza e innovación.',
  },
  {
    icon: 'hub',
    chipBg: '#edf4fc',
    chipFg: '#34649a',
    title: 'Triple hélice en acción',
    text: 'Creemos en el poder integrador de la industria, la academia y el Estado. JAPS busca ser el puente que transforma investigación científica en productos comerciales de alto impacto.',
  },
  {
    icon: 'query_stats',
    chipBg: '#f2eefb',
    chipFg: '#70549e',
    title: 'El poder del altruismo efectivo',
    text: 'Las tecnologías para resolver los grandes desafíos de la humanidad ya existen: nuestro rol es usar datos para implementarlas de la mejor manera en nuestras regiones.',
  },
];

/** Nuestra historia — one entry per timeline step. */
export interface HistoriaHito {
  icon: string;
  chipBg: string;
  chipFg: string;
  eyebrow: string;
  text: string;
}

export const historia: HistoriaHito[] = [
  {
    icon: 'school',
    chipBg: '#edf4fc',
    chipFg: '#34649a',
    eyebrow: 'El origen',
    text: 'Somos un grupo de amigos ingenieros apasionados por la innovación, que decidimos apalancar nuestras habilidades para construir una empresa con propósito, en medio del auge de la inteligencia artificial.',
  },
  {
    icon: 'emoji_events',
    chipBg: '#faf4e8',
    chipFg: '#8a682b',
    eyebrow: 'Sonicali y los premios',
    text: 'Todo comenzó en la universidad con Sonicali, un proyecto deeptech que buscó desarrollar un dispositivo de ultrasonido para combatir el piojo de mar, uno de los grandes desafíos de la industria salmonera. Ese proyecto nos llevó a ganar Jump Chile 2023, Brain Chile 2024 y HUC Social Ideas Challenge 2024, y a recorrer ecosistemas de emprendimiento en distintas partes del mundo.',
  },
  {
    icon: 'rocket_launch',
    chipBg: '#edf7f3',
    chipFg: '#31715b',
    eyebrow: 'Hoy, desde el CIUC',
    text: 'Hoy, con más de tres años trabajando juntos, seguimos ese mismo camino desde el Centro de Innovación UC Anacleto Angelini: impulsamos proyectos de alto impacto a través de nuestra consultoría y construimos las tecnologías del futuro a través de nuestro venture studio.',
  },
];

export const hitosHistoria: LogoWallItem[] = [
  {
    name: 'Jump Chile',
    relationship: 'Jump Chile',
    src: '/logo/programs/jump-chile.svg',
    href: 'https://jumpchile.com/',
    height: 40,
  },
  {
    name: 'Brain Chile',
    relationship: 'Brain Chile',
    src: '/logo/programs/brain-chile.png',
    href: 'https://brainchile.cl/',
    height: 38,
    maxWidth: 180,
  },
  {
    name: 'Ignite · Cambridge Judge Business School',
    relationship: 'Ignite · Cambridge',
    src: '/logo/programs/ignite-cambridge.png',
    href: 'https://www.jbs.cam.ac.uk/entrepreneurship/programmes/ignite/',
    height: 40,
    maxWidth: 170,
  },
  {
    name: 'HUC Social Ideas Challenge',
    relationship: 'Social Ideas Challenge',
    src: '/logo/programs/huc-social-ideas.png',
    href: 'https://thehuc.org/initiative/social-ideas-challenge/',
    height: 42,
    maxWidth: 150,
  },
  {
    name: 'The Bridge · Ingeniería UC',
    relationship: 'The Bridge · Ingeniería UC',
    src: '/logo/programs/the-bridge-ingenieria.png',
    href: 'https://thebridge.ing.uc.cl/',
    height: 50,
  },
  {
    name: 'University of Miami',
    relationship: 'University of Miami',
    src: '/logo/programs/university-of-miami.png',
    href: 'https://www.miami.edu/',
    height: 40,
    maxWidth: 170,
  },
  {
    name: 'Stanford University',
    relationship: 'Stanford University',
    src: '/logo/programs/stanford-university.png',
    href: 'https://www.stanford.edu/',
    height: 46,
    maxWidth: 140,
  },
  {
    name: 'Texas A&M University',
    relationship: 'Texas A&M University',
    src: '/logo/programs/texas-am-university.svg',
    href: 'https://www.tamu.edu/',
    height: 42,
    maxWidth: 180,
  },
];

/** Fondo decorativo de las tarjetas. Usa nombres de Material Symbols Outlined:
 *  https://fonts.google.com/icons (por ejemplo: eco, auto_awesome, settings).
 *  Usa colores claros para conservar el contraste del texto; icons: [] deja
 *  sólo el color de fondo. Omitir hover conserva la tarjeta sin decoración. */
export interface TeamCardHover {
  backgroundColor: string;
  iconColor: string;
  icons: string[];
}

/** Quien no tenga `photo` cae en el placeholder gris de ImageSlot, que es el
 *  estado por defecto del design system y no un error. */
export interface Persona {
  slug: string;
  name: string;
  givenName?: string;
  role: string;
  /** Etiqueta corta para la tarjeta de /nosotros; `role` sigue siendo el
   *  cargo del perfil y del `jobTitle` en JSON-LD. */
  area?: string;
  isFounder: boolean;
  /** One-sentence hook for the profile band — shorter than `bio`. */
  lead: string;
  /** Sólo para la meta description, cuando el `lead` de diseño la desborda
   *  el límite que muestra un buscador. Por defecto se usa el `lead`. */
  seoLead?: string;
  bio: string;
  skills: string[];
  email?: string;
  /** Lugar de trabajo confirmado para mostrar en el perfil. */
  base?: string;
  /** Retrato 4:5 — el hero de /profile y el `image` del JSON-LD. */
  photo?: string;
  /** Recorte cuadrado cabeza-hombros. El círculo de TeamCard lo prefiere sobre
   *  `photo`, cuyo 4:5 le dejaría la cara en la mitad de arriba. */
  avatar?: string;
  /** URL completa del perfil de LinkedIn. Sin ella la tarjeta no muestra el
   *  botón; con ella también va al `sameAs` del JSON-LD. */
  linkedin?: string;
  hover?: TeamCardHover;
}

const baseJaps = 'Centro de Innovación UC · Santiago, Chile';

export const equipo: Persona[] = [
  {
    slug: 'pablo',
    hover: { backgroundColor: '#edf7f3', iconColor: '#31715b', icons: ['auto_awesome', 'chat_bubble', 'eco'] },
    name: 'Pablo Landerretche',
    role: 'CEO',
    isFounder: true,
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
    base: baseJaps,
    photo: '/team/pablo.webp',
    avatar: '/team/pablo-avatar.webp',
    linkedin: 'https://www.linkedin.com/in/pablo-landerretche/',
  },
  {
    slug: 'alonso',
    hover: { backgroundColor: '#edf4fc', iconColor: '#34649a', icons: ['merge', 'smart_toy', 'palette'] },
    name: 'Alonso Rivera',
    role: 'CTO',
    isFounder: true,
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
    base: baseJaps,
    photo: '/team/alonso.webp',
    avatar: '/team/alonso-avatar.webp',
    linkedin: 'https://www.linkedin.com/in/alonsodrivera/',
  },
  {
    slug: 'sergio',
    hover: { backgroundColor: '#faf4e8', iconColor: '#8a682b', icons: ['shield', 'tune', 'finance_mode'] },
    name: 'Sergio Urzúa',
    role: 'CFO',
    isFounder: true,
    lead: 'Lidera la gestión financiera y operacional, asegurando la sostenibilidad y optimización de los recursos.',
    bio: 'Lidera la gestión financiera y operacional, asegurando la sostenibilidad y optimización de los recursos. Su enfoque analítico permite proyectar un crecimiento seguro y responsable.',
    skills: [
      'Planificación financiera',
      'Gestión de recursos',
      'Definición de procesos',
      'Investigación científica',
    ],
    email: 'sergio@japs.ing',
    base: baseJaps,
    photo: '/team/sergio.webp',
    avatar: '/team/sergio-avatar.webp',
    linkedin: 'https://www.linkedin.com/in/sergio-urzua-donoso/',
  },
  {
    slug: 'jean',
    hover: { backgroundColor: '#f2eefb', iconColor: '#70549e', icons: ['layers', 'settings', 'code_xml'] },
    name: 'Jean Philipe Fuentes',
    role: 'CDO',
    isFounder: true,
    lead: 'Lidera el equipo técnico en el desarrollo de aplicaciones web y automatizaciones complejas.',
    bio: 'Lidera el equipo técnico en el desarrollo de aplicaciones web y automatizaciones complejas, con foco en experiencias de usuario excepcionales, mejores prácticas y código limpio.',
    skills: [
      'Diseño de sistemas',
      'Arquitectura de software',
      'Análisis de datos',
      'Machine learning',
    ],
    email: 'jean@japs.ing',
    base: baseJaps,
    photo: '/team/jean.webp',
    avatar: '/team/jean-avatar.webp',
    linkedin: 'https://www.linkedin.com/in/jean-philipe-fuentes-bordagaray/',
  },
  {
    slug: 'clemente',
    hover: { backgroundColor: '#edf7f8', iconColor: '#347780', icons: ['settings', 'check'] },
    name: 'Clemente Grass',
    role: 'Ingeniería de soluciones',
    isFounder: false,
    lead: 'Convierte necesidades complejas de clientes en productos funcionales y escalables.',
    bio: 'Colabora con clientes y equipos técnicos para convertir necesidades complejas en productos funcionales y escalables, combinando ingeniería, creatividad y pensamiento estratégico.',
    skills: [
      'Arquitectura de software',
      'Diseño de soluciones',
      'QA',
      'Sistemas interactivos',
      'Algoritmos',
    ],
    email: 'cgrassdev@gmail.com',
    base: baseJaps,
    photo: '/team/clemente.webp',
    avatar: '/team/clemente-avatar.webp',
    linkedin: 'https://www.linkedin.com/in/clemente-grass-briones/',
  },
  {
    slug: 'catalina',
    hover: { backgroundColor: '#fceff3', iconColor: '#a04e70', icons: ['chat_bubble', 'auto_awesome'] },
    name: 'Catalina Landerretche',
    role: 'Vendedora',
    area: 'Ventas',
    isFounder: false,
    lead: 'Conecta las necesidades de los clientes con las soluciones de JAPS Engineering.',
    bio: 'Catalina forma parte del equipo comercial de JAPS, donde trabaja en la venta de las soluciones que desarrolla la empresa.',
    skills: [],
    photo: '/team/catalina.webp',
    avatar: '/team/catalina-avatar.webp',
    linkedin: 'https://www.linkedin.com/in/catalina-landerretche-178b20219/',
  },
  {
    slug: 'jose-miguel',
    hover: { backgroundColor: '#eef2fc', iconColor: '#536da3', icons: ['layers'] },
    name: 'José Miguel Isaac',
    givenName: 'José Miguel',
    role: 'Desarrollador',
    area: 'Desarrollo',
    isFounder: false,
    lead: 'Especializado en el uso  de frameworks de agentes generativos e implementacion de soluciones con AI/ML.',
    bio: 'José Miguel forma parte del equipo de desarrollo de JAPS y contribuye a la construcción de soluciones para sus proyectos.',
    skills: [],
    photo: '/team/jose-miguel.webp',
    avatar: '/team/jose-miguel-avatar.webp',
    linkedin: 'https://www.linkedin.com/in/jos%C3%A9-miguel-isaac-d%C3%ADaz/',
  },
];

/** Iniciales para el avatar sin foto: primera y última palabra del nombre,
 *  así "Mateo de la Cuadra" da "MC" y no arrastra las partículas. */
export function iniciales(name: string): string {
  const palabras = name.trim().split(/\s+/);
  const primera = palabras[0] ?? '';
  const ultima = palabras.length > 1 ? palabras[palabras.length - 1] : '';
  return (primera.charAt(0) + ultima.charAt(0)).toUpperCase();
}

/** Partners con los que construimos un producto: el logo va a color y en
 *  lockup `logo × producto`, que ya dice lo de "juntos creamos". */
export interface PartnerCocreacion {
  name: string;
  logo: string;
  text: string;
  product: string;
  productHref?: string;
}

/** Partners de tecnología y ecosistema; `aporte` cierra la tarjeta. */
export interface PartnerColaboracion {
  name: string;
  logo: string;
  text: string;
  aporte: string;
}

export const partnersCocreacion: PartnerCocreacion[] = [
  {
    name: 'Due Green',
    logo: '/logo/partners/duegreen.png',
    text: 'Consultora ambiental, expertos en gestión de proyectos y permisos para sectores productivos.',
    product: 'Project Check',
  },
  {
    name: 'Lumisreg Consulting',
    logo: '/logo/partners/lumisreg.png',
    text: 'Especialistas en cumplimiento tributario y legal.',
    product: 'Consenty',
    productHref: 'https://consenty.japs.ing/',
  },
  {
    name: 'Imaginería',
    logo: '/logo/partners/imagineria.svg',
    text: 'Consultora especializada en excelencia operacional.',
    product: 'Melian',
    productHref: '/soluciones',
  },
];

export const partnersColaboracion: PartnerColaboracion[] = [
  {
    name: 'Aeonix',
    logo: '/logo/partners/aeonix.svg',
    text: 'Sistemas de ultrasonido que sensan, interpretan e intervienen fluidos y materiales.',
    aporte: 'Know-how compartido a través de Sonicali',
  },
  {
    name: 'Skilia',
    logo: '/logo/partners/skilia.png',
    text: 'Software para colegios que conecta estudiantes con oportunidades de desarrollo.',
    aporte: 'Desarrollamos su motor tecnológico',
  },
  {
    name: 'Go Farmer',
    logo: '/logo/partners/go-farmer.png',
    text: 'Sistema para simplificar y automatizar el riego en campos.',
    aporte: 'Colaboramos en la innovación tecnológica del sistema',
  },
  {
    name: 'CIUC',
    logo: '/logo/partners/ciuc.svg',
    text: 'El ecosistema donde JAPS se formó. Hoy automatizamos sus procesos y operamos como perk para sus startups.',
    aporte: 'Ecosistema · Automatización',
  },
];

export const asesores: { name: string; photo?: string; hover?: TeamCardHover }[] = [
  // { name: 'Gustavo Blanco', hover: { backgroundColor: '#edf4fc', iconColor: '#34649a', icons: ['auto_awesome'] } },
  // { name: 'Mateo de la Cuadra', hover: { backgroundColor: '#edf7f3', iconColor: '#31715b', icons: ['layers', 'auto_awesome'] } },
  // { name: 'Ernesto Ayala', hover: { backgroundColor: '#fceff3', iconColor: '#a04e70', icons: ['auto_awesome', 'layers'] } },
  { name: 'Álvaro Escárate', photo: '/team/alvaro-escarate-avatar.webp', hover: { backgroundColor: '#faf4e8', iconColor: '#8a682b', icons: ['auto_awesome', 'search'] } },
  { name: 'Santiago Severin', photo: '/team/santiago-severin-avatar.webp', hover: { backgroundColor: '#f2eefb', iconColor: '#70549e', icons: ['layers'] } },
  { name: 'Francisco Sáez', photo: '/team/francisco-saez-avatar.webp', hover: { backgroundColor: '#edf7f8', iconColor: '#347780', icons: ['chat_bubble', 'auto_awesome'] } },
  { name: 'Ariel Espinoza', photo: '/team/ariel-espinoza-avatar.webp', hover: { backgroundColor: '#edf7f8', iconColor: '#347780', icons: ['settings'] } },
  // { name: 'Fernando Parcerisas', hover: { backgroundColor: '#eef2fc', iconColor: '#536da3', icons: ['search', 'layers'] } },
];
