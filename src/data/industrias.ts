import type { IconName } from '../components/ds/types';

/**
 * The five industry pages. Structurally identical — hero, optional draft
 * notice, a capability grid, an optional highlight block and a CTA band — so
 * they are generated from here by src/pages/industrias/[slug].astro.
 *
 * Retail is the one page with three columns and six capabilities; Educación
 * is the one with an `intro` split and feature-variant cards. Both are
 * modelled as fields rather than as separate templates.
 */

export interface Capability {
  icon: IconName;
  title: string;
  text: string;
}

export interface Industria {
  slug: string;
  /** Label used in the home tiles and the /industrias listing. */
  name: string;
  /** 44px mark on the home tile. */
  icon: IconName;
  /** One-line summary for the home tile and the listing card. */
  summary: string;
  eyebrow: string;
  title: string;
  lead: string;
  /** Content the design marks as preliminary, pending validation. */
  draft?: boolean;
  intro?: { title: string; text: string };
  capabilitiesTitle: string;
  capabilitiesCols: 2 | 3;
  capabilitiesVariant?: 'base' | 'feature';
  capabilities: Capability[];
  highlight?: {
    kicker: string;
    title: string;
    text: string;
    linkLabel: string;
    href: string;
  };
  cta: { title: string; text: string };
  /** Exact max-widths from the source artboards, so lines break as designed. */
  titleMax?: number;
  leadMax?: number;
}

export const industrias: Industria[] = [
  {
    slug: 'mineria',
    name: 'Minería',
    icon: 'shield',
    summary: 'Gestión de riesgo operacional, datos de faena y eficiencia en terreno.',
    eyebrow: 'Industria · Minería',
    title: 'Menos riesgo, más control operacional.',
    lead: 'Digitalizamos la gestión de riesgo y los datos de faena para decisiones más seguras y una operación más eficiente.',
    draft: true,
    capabilitiesTitle: 'Qué hacemos en minería',
    capabilitiesCols: 2,
    capabilities: [
      {
        icon: 'shield',
        title: 'Gestión de riesgo operacional',
        text: 'Identificación, seguimiento y control de riesgos en una sola plataforma, con Shackleton como base.',
      },
      {
        icon: 'sliders-horizontal',
        title: 'Dashboards y KPI de operación',
        text: 'Datos de faena y de insumos críticos visibles en tiempo real, para decidir con evidencia y no con planillas.',
      },
      {
        icon: 'settings',
        title: 'Optimización de procesos e insumos',
        text: 'Experiencia en insumos de seguridad industrial y de salud para minería junto a Barron Vieyra.',
      },
      {
        icon: 'layers',
        title: 'Integración de datos de terreno y ERP',
        text: 'Conectamos sistemas de terreno, mantenimiento y ERP para una sola versión de la verdad.',
      },
    ],
    highlight: {
      kicker: 'Solución destacada',
      title: 'Shackleton: gestión de riesgo minero',
      text: 'Software desarrollado junto a Imaginería, expertos en excelencia operacional, que facilita la gestión de riesgo en el sector minero.',
      linkLabel: 'Conocer Shackleton →',
      href: '/soluciones',
    },
    cta: {
      title: '¿Dónde está el riesgo que aún vive en planillas?',
      text: 'Conversemos: te mostramos cómo se ve digitalizado.',
    },
    titleMax: 900,
    leadMax: 640,
  },

  {
    slug: 'manufactura',
    name: 'Manufactura',
    icon: 'settings',
    summary: 'Planificación automática de producción y decisiones con datos directos de máquina.',
    eyebrow: 'Industria · Manufactura',
    title: 'Planifica tu producción con datos, no con planillas.',
    lead: 'Del ERP al piso de planta: secuencias de trabajo óptimas, generadas de forma automática.',
    draft: true,
    capabilitiesTitle: 'Qué hacemos en manufactura',
    capabilitiesCols: 2,
    capabilities: [
      {
        icon: 'settings',
        title: 'Planificación automática de producción',
        text: 'Modelos que integran notas de venta, stock de materia prima y tiempos de recambio para generar secuencias óptimas de trabajo.',
      },
      {
        icon: 'sliders-horizontal',
        title: 'KPIs directos de máquina',
        text: 'Dashboards que comparan rendimiento real versus estimado, sin digitación manual.',
      },
      {
        icon: 'sparkles',
        title: 'Forecasting de demanda',
        text: 'Proyecciones que anticipan pedidos y evitan quiebres de stock y reprogramaciones de último minuto.',
      },
      {
        icon: 'layers',
        title: 'Integración ERP – piso de planta',
        text: 'Una sola fuente de verdad entre ventas, bodega y producción.',
      },
    ],
    highlight: {
      kicker: 'Caso destacado',
      title: 'Barron Vieyra: planificación de producción de máquinas servilleteras',
      text: 'Menos tiempo manual de planificación, mejor cumplimiento de plazos y menos reprogramaciones críticas, con lógica de priorización automática.',
      linkLabel: 'Ver el caso completo →',
      href: '/casos-de-exito',
    },
    cta: {
      title: '¿Cuánto cuesta cada reprogramación de último minuto?',
      text: 'Conversemos: partimos por medir tu planificación actual.',
    },
    titleMax: 940,
    leadMax: 640,
  },

  {
    slug: 'retail',
    name: 'Retail y comercio',
    icon: 'sliders-horizontal',
    summary: 'Ventas, cotizaciones, ERP y canales conectados en un solo flujo comercial.',
    eyebrow: 'Industria · Retail y comercio',
    title: 'Vende más rápido, con menos fricción.',
    lead: 'Automatizamos el ciclo comercial completo — del sitio web a la cotización, del ERP al despacho — para que tu equipo venda en vez de administrar.',
    capabilitiesTitle: 'Qué hacemos en retail y comercio',
    capabilitiesCols: 3,
    capabilities: [
      {
        icon: 'sparkles',
        title: 'Sitios web inteligentes',
        text: 'Experiencias web dinámicas de alta velocidad que adaptan sus contenidos según la navegación del usuario para maximizar la conversión.',
      },
      {
        icon: 'sliders-horizontal',
        title: 'Dashboard y analítica de ventas',
        text: 'Visibilidad completa del embudo comercial: seguimiento por ejecutivo, velocidad del pipeline y proyecciones de ingresos automatizadas.',
      },
      {
        icon: 'file-text',
        title: 'Cotizaciones automáticas',
        text: 'Presupuestos técnicos y comerciales en PDF en segundos, con reglas de precio avanzadas y stock en tiempo real.',
      },
      {
        icon: 'check',
        title: 'Calendarios e integración',
        text: 'Flujos de agendamiento inteligente que califican al prospecto antes de coordinar una llamada con el equipo comercial.',
      },
      {
        icon: 'layers',
        title: 'Conexión con ERP y canales de venta',
        text: 'Bsale, Manager, MercadoLibre y Shopify hablando el mismo idioma que tu operación.',
      },
      {
        icon: 'settings',
        title: 'Forecasting y optimización',
        text: 'Proyección de demanda, dashboards de KPI, optimización de procesos y producción, sistemas recomendadores.',
      },
    ],
    highlight: {
      kicker: 'Caso destacado',
      title: 'AXAM: automatización e IA para la operación comercial',
      text: 'Distribuidor de higiene y limpieza en Chile y España: integramos Mercado Libre y Manager+, construimos un asistente de ventas con IA sobre su catálogo y una herramienta de comisiones y márgenes.',
      linkLabel: 'Ver el caso completo →',
      href: '/casos-de-exito',
    },
    cta: {
      title: '¿Dónde pierde tiempo tu operación comercial?',
      text: 'Agenda una reunión y lo revisamos proceso por proceso.',
    },
    titleMax: 900,
    leadMax: 640,
  },

  {
    slug: 'educacion',
    name: 'Educación',
    icon: 'file-text',
    summary:
      'Plataformas a la medida y sistemas de matching para instituciones que forman y generan conocimiento.',
    eyebrow: 'Industria · Educación',
    title: 'Universidades autoimpulsadas por IA.',
    lead: 'Creemos firmemente en el uso de la tecnología para facilitar a las universidades su camino de cultivar futuros profesionales y generar conocimiento.',
    intro: {
      title: 'Todos los recursos, al progreso del país.',
      text: 'Trabajamos en conjunto con instituciones educacionales analizando cómo eficientar sus procesos: que cada hora y cada peso vayan a formar profesionales de alta excelencia y a crear conocimiento relevante para los desafíos locales y globales.',
    },
    capabilitiesTitle: '',
    capabilitiesCols: 2,
    capabilitiesVariant: 'feature',
    capabilities: [
      {
        icon: 'search',
        title: 'Sistemas de matching',
        text: 'Algoritmos del estado del arte para conectar las capacidades de la universidad con necesidades reales: por ejemplo, recibir emprendimientos y empresas y darles mentorías y capacitación.',
      },
      {
        icon: 'layers',
        title: 'Plataformas universitarias a la medida',
        text: 'Postulación de concursos, apoyo administrativo, comunicación y seguimiento de estudiantes, en una sola plataforma.',
      },
    ],
    highlight: {
      kicker: 'Caso destacado',
      title: 'CIUC: plataforma de red de mentores',
      text: 'Junto al Centro de Innovación UC creamos una plataforma que conecta mentores, emprendedores y facilitadores en más de 10 concursos, con cada mentoría trazada y resumida.',
      linkLabel: 'Ver el caso completo →',
      href: '/casos-de-exito',
    },
    cta: {
      title: '¿Qué proceso de tu institución merece IA?',
      text: 'Conversemos: partimos por donde el ahorro de tiempo es más evidente.',
    },
    titleMax: 940,
    leadMax: 680,
  },

  {
    slug: 'transporte',
    name: 'Transporte y logística',
    icon: 'layers',
    summary: 'Visibilidad de flota, optimización de despachos e integración con tus sistemas de venta.',
    eyebrow: 'Industria · Transporte y logística',
    title: 'Visibilidad total de tu operación logística.',
    lead: 'Flota, despachos y cumplimiento en un solo panel, conectado a tus sistemas de venta.',
    draft: true,
    capabilitiesTitle: 'Qué hacemos en transporte y logística',
    capabilitiesCols: 2,
    capabilities: [
      {
        icon: 'search',
        title: 'Seguimiento de flota y rutas',
        text: 'Estado de cada vehículo y cada entrega, en tiempo real y sin llamadas.',
      },
      {
        icon: 'settings',
        title: 'Optimización de despachos',
        text: 'Asignación y secuenciación automática de entregas según capacidad, ventanas y prioridad.',
      },
      {
        icon: 'sliders-horizontal',
        title: 'Dashboards de cumplimiento',
        text: 'KPIs de puntualidad, costo por entrega y utilización de flota para decidir con evidencia.',
      },
      {
        icon: 'layers',
        title: 'Integración con ERP y canales de venta',
        text: 'Los pedidos fluyen del canal de venta al despacho sin redigitación.',
      },
    ],
    cta: {
      title: '¿Cuántas entregas pierdes de vista cada semana?',
      text: 'Conversemos: la visibilidad es el primer proyecto y el más rápido de implementar.',
    },
    titleMax: 940,
    leadMax: 640,
  },
];

export const industriaBySlug = (slug: string) =>
  industrias.find((industria) => industria.slug === slug);
