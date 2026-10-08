import { selectCases, type Caso, type CaseId } from './casos-destacados';
import type { IconName } from '../components/ds/types';
import type { IndustrySlug } from '../i18n/routes';

/**
 * The five industry pages ("Páginas de industria 2a"). Structurally identical
 * — photo hero, optional draft notice, optional intro, the capability list
 * with the industry's question pinned beside it, an optional featured case,
 * the other industries and a CTA band — so they are generated from here by
 * src/pages/industrias/[slug].astro.
 *
 * Centros educativos is the one with an `intro` split and no capabilities heading.
 * Both are modelled as fields rather than as separate templates.
 */

export interface Capability {
  icon: IconName;
  title: string;
  text: string;
}

export interface Industria {
  /** Identidad de la industria en ambos idiomas; el slug EN sale de i18n/routes. */
  slug: IndustrySlug;
  /** Label used in the home tiles and the /industrias listing. */
  name: string;
  /** <title> de la página, sin el sufijo de marca. El h1 de diseño se queda
   *  como está: title y h1 pueden diferir, y ahí está el margen para nombrar
   *  la industria con las palabras por las que alguien busca. */
  seoTitle: string;
  /** Meta description. El `lead` es copy de hero — bueno de leer, corto para
   *  un resultado de búsqueda y sin nombrar la industria ni el país. */
  seoDescription: string;
  /** Short description shown in the home accordion and /industrias tab subtitles. */
  short: string;
  /** Industry color (`.ind-tone--<tone>`), from "Industrias 1c". */
  tone: 'yellow' | 'orange' | 'purple' | 'blue' | 'green';
  eyebrow: string;
  title: string;
  lead: string;
  /** Hero photograph (path under public/). Generic hero shots until each
   *  industry has its own. */
  heroImage: string;
  /** Content the design marks as preliminary, pending validation. */
  draft?: boolean;
  intro?: { title: string; text: string };
  capabilitiesTitle: string;
  capabilities: Capability[];
  /** Featured cases in display order, resolved from the shared catalog. */
  caseIds?: CaseId[];
  /** The industry's question: pinned beside the capabilities. */
  cta: { title: string; text: string };
  /** Exact max-widths from the source artboards, so lines break as designed. */
  titleMax?: number;
  leadMax?: number;
}

export const industrias: Industria[] = [
  {
    slug: 'mineria',
    seoTitle: 'Software para minería en Chile',
    seoDescription:
      'JAPS Engineering digitaliza la gestión de riesgo operacional y los datos de faena para la minería en Chile: dashboards, KPI de operación e integración con el ERP.',
    name: 'Minería',
    short: 'Riesgo operacional, datos de faena y eficiencia en terreno.',
    tone: 'yellow',
    eyebrow: 'Industria · Minería',
    title: 'Menos riesgo, más eficiencia operacional.',
    lead: 'Digitalizamos la gestión de riesgo y los datos de faena para decisiones más seguras y una operación más eficiente.',
    heroImage: '/hero/mina.jpg',
    capabilitiesTitle: 'Qué hacemos en minería',
    capabilities: [
      {
        icon: 'shield',
        title: 'Sistema de gestión de riesgos',
        text: 'Con Melian, centralizamos controles críticos, matrices de riesgo y riesgos de fatalidad, con seguimiento de tareas, verificaciones y evidencias en terreno.',
      },
      // {
      //   icon: 'settings',
      //   title: 'Optimización de procesos e insumos',
      //   text: 'Experiencia en insumos de seguridad industrial y de salud para minería junto a Barron Vieyra.',
      // },
      {
        icon: 'sliders-horizontal',
        title: 'Dashboards y KPI de operación',
        text: 'Datos de faena y de insumos críticos visibles en tiempo real, para decidir con evidencia y no con planillas.',
      },
      {
        icon: 'layers',
        title: 'Integración de datos de terreno y ERP',
        text: 'Conectamos sistemas de terreno, mantenimiento y ERP para una sola versión de la verdad.',
      },
      {
        icon: 'file-text',
        title: 'Recolección de datos en localidades sin señal',
        text: 'Desarrollamos soluciones para registrar datos en terreno sin conexión a internet y sincronizarlos al recuperar señal.',
      },
    ],
    cta: {
      title: '¿Estas usando datos para mejorar tu operación?',
      text: 'Conversemos: te mostramos cómo se ve digitalizado.',
    },
    titleMax: 900,
    leadMax: 640,
  },

  {
    slug: 'retail',
    seoTitle: 'Software para retail y comercio',
    seoDescription:
      'JAPS Engineering automatiza el ciclo comercial del retail chileno: del sitio web a la cotización y del ERP al despacho, para vender en vez de administrar.',
    name: 'Retail y comercio',
    short: 'Ventas, cotizaciones, ERP y canales en un solo flujo.',
    tone: 'orange',
    eyebrow: 'Industria · Retail y comercio',
    title: 'Vende más rápido, con menos fricción.',
    lead: 'Automatizamos el ciclo comercial completo de tu negocio: manejo de inventario, gestion de clientes y dudas, hasta el despacho para que tu equipo se enfoque en lo que hace mejor.',
    heroImage: '/hero/retail.jpg',
    capabilitiesTitle: 'Qué hacemos en retail y comercio',
    capabilities: [
      {
        icon: 'sparkles',
        title: 'Sitios web inteligentes',
        text: 'Experiencias web dinámicas de alta velocidad que adaptan sus contenidos según la navegación del usuario para maximizar la conversión.',
      },
      {
        icon: 'settings',
        title: 'Forecasting y optimización',
        text: 'Proyección de demanda, dashboards de KPI, optimización de procesos y producción, sistemas recomendadores.',
      },
      {
        icon: 'layers',
        title: 'Conexión con ERP y canales de venta',
        text: 'Bsale, Manager, MercadoLibre y Shopify hablando el mismo idioma que tu operación.',
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
        icon: 'sliders-horizontal',
        title: 'Dashboard y analítica de ventas',
        text: 'Visibilidad completa del embudo comercial: seguimiento por ejecutivo, velocidad del pipeline y proyecciones de ingresos automatizadas.',
      },
    ],
    caseIds: ["axam"],
    cta: {
      title: '¿Dónde pierde tiempo tu operación comercial?',
      text: 'Agenda una reunión y lo revisamos proceso por proceso.',
    },
    titleMax: 900,
    leadMax: 640,
  },

  {
    slug: 'educacion',
    seoTitle: 'Software para centros educativos',
    seoDescription:
      'JAPS Engineering desarrolla tecnología para universidades chilenas: gestión académica, datos institucionales y apoyo a la investigación y la docencia.',
    name: 'Centros educativos',
    short: 'Plataformas a la medida y sistemas de matching académico.',
    tone: 'purple',
    eyebrow: 'Industria · Centros educativos',
    title: 'Universidades al servicio del país.',
    lead: 'Trabajamos en conjunto con instituciones educacionales analizando cómo hacer más eficientes sus procesos para que cada esfuerzo se destine a formar profesionales de alta excelencia, con conocimiento relevante para solucionar los desafíos locales y globales.',
    heroImage: '/hero/nosotros.jpg',
    intro: {
      title: 'Todos los recursos, al progreso del país.',
      text: 'Trabajamos en conjunto con instituciones educacionales analizando cómo eficientar sus procesos: que cada hora y cada peso vayan a formar profesionales de alta excelencia y a crear conocimiento relevante para los desafíos locales y globales.',
    },
    capabilitiesTitle: '',
    capabilities: [
      {
        icon: 'search',
        title: 'Sistemas de matching',
        text: 'Diseño a medida de algoritmos para conectar las capacidades de la universidad con necesidades reales: conectar mentores con emprendimientos, académicos con industrias, co investigación internacional, entre otros.',
      },
      {
        icon: 'layers',
        title: 'Plataformas universitarias a la medida',
        text: 'Postulación de concursos, apoyo administrativo, comunicación y seguimiento de estudiantes, en una sola plataforma.',
      },
    ],
    caseIds: ["dinv-uc","ciuc"],
    cta: {
      title: '¿Qué proceso quieres automatizar?',
      text: 'Conversemos: partimos por donde el ahorro de tiempo es más evidente.',
    },
    titleMax: 940,
    leadMax: 680,
  },

  {
    slug: 'manufactura',
    seoTitle: 'Software para manufactura y producción',
    seoDescription:
      'JAPS Engineering conecta el ERP con el piso de planta: secuencias de trabajo automáticas, KPI directos de máquina y forecasting de demanda para la manufactura.',
    name: 'Manufactura',
    short: 'Planificación automática y decisiones con datos de máquina.',
    tone: 'blue',
    eyebrow: 'Industria · Manufactura',
    title: 'Planifica tu producción con datos, no con planillas.',
    lead: 'Del ERP al piso de planta: secuencias de trabajo óptimas, generadas de forma automática.',
    heroImage: '/hero/manufactura.jpg',
    draft: false,
    capabilitiesTitle: 'Qué hacemos en manufactura',
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
    caseIds: ["barron-vieyra"],
    cta: {
      title: '¿Cuánto cuesta cada reprogramación de último minuto?',
      text: 'Conversemos: partimos por medir tu planificación actual.',
    },
    titleMax: 940,
    leadMax: 640,
  },

  {
    slug: 'transporte',
    seoTitle: 'Software para transporte y logística',
    seoDescription:
      'JAPS Engineering reúne flota, despachos y cumplimiento en un solo panel conectado a los sistemas de venta, para operaciones de transporte y logística en Chile.',
    name: 'Transporte y logística',
    short: 'Visibilidad de flota, despachos e integración con ventas.',
    tone: 'green',
    eyebrow: 'Industria · Transporte y logística',
    title: 'Visibilidad total de tu operación logística.',
    lead: 'Flota, despachos y cumplimiento en un solo panel, conectado a tus sistemas de venta.',
    heroImage: '/hero/transporte.jpg',
    draft: false,
    capabilitiesTitle: 'Qué hacemos en transporte y logística',
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
        icon: 'sparkles',
        title: 'Forecasting de stock',
        text: 'Proyecciones de demanda para anticipar necesidades de inventario, planificar la reposición y reducir quiebres de stock y sobrestock.',
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

export const industriaBySlug = (slug: string, source: readonly Industria[] = industrias) =>
  source.find((industria) => industria.slug === slug);

/** Resolve the industry's ordered case references in the current language. */
export const featuredCases = (industria: Industria, source: readonly Caso[]) =>
  selectCases(industria.caseIds ?? [], source);
