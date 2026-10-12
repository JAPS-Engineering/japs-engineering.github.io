/** Animated per-stage glyph drawn by HowHelpMark.astro. */
export type HowHelpMarkName = 'entendemos' | 'construimos' | 'conectamos' | 'auditamos';

export interface ServicioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const auditoriaImage: ServicioImage = {
  src: '/services/auditoria.jpg',
  alt: 'Analista contrastando documentos impresos con tablas y gráficos en un portátil.',
  width: 1600,
  height: 900,
};

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
    title: 'Auditoría de datos y documentos',
    text: 'Revisamos en profundidad tus datos y documentos para evaluar su calidad, consistencia y trazabilidad. Contrastamos fuentes, identificamos discrepancias y analizamos patrones para entregar un informe claro de hallazgos y conclusiones respaldadas por evidencia. Las recomendaciones y los planes de acción pueden incorporarse cuando se acuerden como parte del alcance.',
    audience:
      'Organizaciones que necesitan comprender y verificar información antes de tomar decisiones, validar reportes o evaluar procesos.',
    image: auditoriaImage,
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
  {
    mark: 'auditamos',
    step: 'Auditamos',
    title: 'Auditoría de datos y documentos',
    text: 'Analizamos en profundidad tu información y entregamos hallazgos y conclusiones respaldadas por evidencia. Las recomendaciones se incorporan solo si forman parte del alcance acordado.',
    image: auditoriaImage,
    ctaSub: 'Conversemos sobre la información que necesitas revisar y el alcance de la auditoría.',
    bullets: [
      'Revisión de calidad y consistencia',
      'Contraste de fuentes y trazabilidad',
      'Análisis de patrones y discrepancias',
    ],
    entregables: [
      { label: 'Alcance y criterios de revisión', hint: 'Qué se revisa y cómo se evalúa.' },
      { label: 'Hallazgos y evidencias', hint: 'Observaciones respaldadas y trazables.' },
      { label: 'Informe de análisis y conclusiones', hint: 'Una lectura profunda de la información.' },
      { label: 'Limitaciones de la información', hint: 'Vacíos y límites del análisis.' },
    ],
  },
];
