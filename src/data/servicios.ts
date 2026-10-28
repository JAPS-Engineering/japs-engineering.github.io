/** Animated per-stage glyph drawn by HowHelpMark.astro. */
export type HowHelpMarkName = 'entendemos' | 'construimos' | 'conectamos' | 'capacitamos';

export interface ServicioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Numbered rows of the services catalog. */
export interface Servicio {
  index: string;
  title: string;
  text: string;
  audience: string;
  relatedCase?: string;
  image?: ServicioImage;
}

export const servicios: Servicio[] = [
  {
    index: '01',
    title: 'Consultoría de transformación digital',
    text: 'Consultoría de punta a punta, desde la estrategia de tu organización hasta el desarrollo de tecnología transformadora. Levantamos los procesos críticos que hacen funcionar tu negocio e implementamos tecnología de punta para transformarlo.',
    audience:
      'Organizaciones con procesos críticos que aún dependen de planillas, correos o sistemas desconectados.',
    relatedCase: 'Caso relacionado: Barron Vieyra →',
  },
  {
    index: '02',
    title: 'Desarrollo full-stack y modernización de legacy',
    text: 'Construcción de portales corporativos, plataformas web y móviles escalables, y migración de sistemas antiguos a arquitecturas modernas en la nube.',
    audience:
      'Empresas que necesitan una plataforma nueva — o que su sistema actual dejó de acompañar el crecimiento.',
    relatedCase: 'Caso relacionado: CIUC →',
  },
  {
    index: '03',
    title: 'Orquestación e integración de APIs',
    text: 'Conectamos software fragmentado y bases de datos aisladas mediante middleware robusto, para que toda tu empresa hable el mismo idioma.',
    audience: 'Operaciones con ERP, canales de venta y herramientas que no conversan entre sí.',
    relatedCase: 'Caso relacionado: AXAM →',
  },
  {
    index: '04',
    title: 'Capacitación y adopción tecnológica',
    text: 'Tu equipo aprende a usar las herramientas que construimos y a sacar más provecho de las que ya tiene. Acompañamos la adopción con capacitaciones prácticas y material de apoyo, para que la tecnología se use con confianza desde el primer día.',
    audience:
      'Equipos que estrenan herramientas nuevas o que no están aprovechando los sistemas, planillas y licencias que ya pagan.',
  },
];

/** The home page "¿Cómo te ayudamos?" stepper — a shorter cut of the same offer,
 *  one step per service. */
export interface ServicioResumen {
  mark: HowHelpMarkName;
  /** Stepper eyebrow: the verb for this service. */
  step: string;
  title: string;
  text: string;
  image?: ServicioImage;
  /** Subtitle for the "Diagnóstico gratis" CTA band in this step's detail panel. */
  ctaSub: string;
  bullets: string[];
  entregables: { label: string; hint: string }[];
}

export const serviciosResumen: ServicioResumen[] = [
  {
    mark: 'entendemos',
    step: 'Entendemos',
    title: 'Hoja de ruta digital',
    text: 'Entendemos tu operación junto a tu equipo, definimos qué tecnología construir, en qué orden y su impacto en tu negocio.',
    ctaSub: 'Revisamos tus procesos y te decimos por dónde partir.',
    bullets: [
      'Diagnóstico de procesos y levantamiento en terreno',
      'Hoja de ruta priorizada por impacto',
      'Casos de uso con IA evaluados y validados',
    ],
    entregables: [
      { label: 'Mapa de procesos', hint: 'Dónde se pierden tiempo, dinero y control hoy.' },
      { label: 'Oportunidades priorizadas', hint: 'Por ahorro, riesgo y esfuerzo.' },
      { label: 'Diseño de las soluciones', hint: 'Qué sistemas construir y cómo se conectan con tu operación.' },
      { label: 'Plan y caso de negocio', hint: 'Etapas, costos e impacto.' },
    ],
  },
  {
    mark: 'construimos',
    step: 'Construimos',
    title: 'Desarrollo de software a medida',
    text: 'A partir de un diseño hecho junto a tu equipo, construimos el software que tu operación necesita y modernizamos tus sistemas antiguos.',
    ctaSub: 'Cuéntanos qué proceso quieres automatizar.',
    bullets: [
      'Aplicaciones web y móviles a la medida',
      'Automatización de procesos críticos',
      'Modelos de IA en producción',
    ],
    entregables: [
      { label: 'Plataforma exclusiva', hint: 'Diseñada y construida para tu operación.' },
      { label: 'Sistemas modernizados', hint: 'Conservamos lo que funciona y reemplazamos lo que te frena.' },
      { label: 'Métricas de desempeño', hint: 'Para evaluar cómo rinde la solución en el tiempo.' },
    ],
  },
  {
    mark: 'conectamos',
    step: 'Conectamos',
    title: 'Integración de sistemas',
    text: 'Hacemos que tus sistemas trabajen juntos: los que construimos y los que ya tienes.',
    ctaSub: '¿Tus sistemas no se hablan? Lo revisamos contigo.',
    bullets: [
      'APIs e integración con ERP',
      'Datos unificados y trazables',
      'Monitoreo y soporte continuo',
    ],
    entregables: [
      { label: 'Integraciones a la medida', hint: 'Tu ERP, canales de venta y herramientas, conectados.' },
      { label: 'Datos unificados', hint: 'Una sola fuente de verdad, sin duplicar planillas.' },
      { label: 'Información que fluye sola', hint: 'Menos traspasos manuales entre áreas y sistemas.' },
      { label: 'Monitoreo y alertas', hint: 'Te avisamos antes de que una conexión falle.' },
    ],
  },
  {
    mark: 'capacitamos',
    step: 'Capacitamos',
    title: 'Capacitación y adopción tecnológica',
    text: 'Tu equipo aprende a usar las herramientas que construimos y a sacar más provecho de las que ya tiene.',
    ctaSub: 'Cuéntanos qué herramientas usa tu equipo y armamos la capacitación.',
    bullets: [
      'Capacitaciones prácticas por rol',
      'Acompañamiento durante la adopción',
      'Guías y material de consulta',
    ],
    entregables: [
      { label: 'Dominio de tus nuevas herramientas', hint: 'Tu equipo las usa con confianza desde el primer día.' },
      { label: 'Más valor de lo que ya pagas', hint: 'Aprovechas mejor tus sistemas, planillas y licencias actuales.' },
      { label: 'Material de apoyo', hint: 'Guías para consultar cuando las necesiten.' },
    ],
  },
];
