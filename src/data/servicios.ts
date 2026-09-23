/** Animated per-stage glyph drawn by HowHelpMark.astro. */
export type HowHelpMarkName = 'entendemos' | 'construimos' | 'conectamos';

/** The three numbered rows of Servicios.dc.html. */
export interface Servicio {
  index: string;
  title: string;
  text: string;
  audience: string;
  relatedCase: string;
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
];

/** The home page "¿Cómo te ayudamos?" stepper — a shorter cut of the same offer,
 *  one step per stage of how JAPS works (entender → construir → conectar). */
export interface ServicioResumen {
  mark: HowHelpMarkName;
  /** Stepper eyebrow: the verb for this stage (Entendemos/Construimos/Conectamos). */
  step: string;
  title: string;
  text: string;
  /** Subtitle for the "Diagnóstico gratis" CTA band in this step's detail panel. */
  ctaSub: string;
  bullets: string[];
  entregables: { label: string; hint: string }[];
}

export const serviciosResumen: ServicioResumen[] = [
  {
    mark: 'entendemos',
    step: 'Entendemos',
    title: 'Consultoría de transformación digital',
    text: 'De la estrategia a la tecnología que transforma tu operación.',
    ctaSub: 'Revisamos tus procesos y te decimos por dónde partir.',
    bullets: [
      'Diagnóstico de procesos y levantamiento en terreno',
      'Hoja de ruta priorizada por impacto',
      'Casos de uso con IA evaluados y validados',
    ],
    entregables: [
      { label: 'Mapa de procesos', hint: 'Dónde se pierde tiempo hoy.' },
      { label: 'Hoja de ruta', hint: 'Iniciativas por impacto y esfuerzo.' },
      { label: 'Casos de uso con IA', hint: 'Evaluados y estimados.' },
      { label: 'Caso de negocio', hint: 'Costos, retorno y riesgos.' },
    ],
  },
  {
    mark: 'construimos',
    step: 'Construimos',
    title: 'Desarrollo de software a medida',
    text: 'Plataformas escalables y modernización de sistemas legacy.',
    ctaSub: 'Cuéntanos qué proceso quieres automatizar.',
    bullets: [
      'Aplicaciones web y móviles a la medida',
      'Automatización de procesos críticos',
      'Modelos de IA en producción',
    ],
    entregables: [
      { label: 'Plataforma a medida', hint: 'Diseñada para tu operación real.' },
      { label: 'Procesos automatizados', hint: 'Menos trabajo manual y errores.' },
      { label: 'IA en producción', hint: 'Monitoreada y con métricas.' },
      { label: 'Entregas cada dos semanas', hint: 'Avances que puedes usar.' },
    ],
  },
  {
    mark: 'conectamos',
    step: 'Conectamos',
    title: 'Integración de sistemas',
    text: 'Conectamos tu software para que toda tu empresa hable el mismo idioma.',
    ctaSub: '¿Tus sistemas no se hablan? Lo revisamos contigo.',
    bullets: [
      'APIs e integración con ERP',
      'Datos unificados y trazables',
      'Monitoreo y soporte continuo',
    ],
    entregables: [
      { label: 'Integraciones y APIs', hint: 'Sin duplicar datos ni planillas.' },
      { label: 'Datos unificados', hint: 'Una sola fuente de verdad.' },
      { label: 'Monitoreo continuo', hint: 'Alertas antes de que falle.' },
      { label: 'Soporte y documentación', hint: 'Tu equipo queda autónomo.' },
    ],
  },
];
