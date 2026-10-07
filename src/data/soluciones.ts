/**
 * The SaaS products shown on the home page and /soluciones.
 * `short` is the one-liner the home page uses;
 * `text` is the full paragraph on /soluciones.
 * Each tone is that product's identity colour across the site, the docs and
 * the console — accent (lime) carries ink text, the rest carry white.
 */
export interface Solucion {
  tone: 'accent' | 'magenta' | 'blue';
  meta: string;
  title: string;
  /** Home page card description. */
  short: string;
  /** /soluciones card description — deliberately terser than `short`. */
  cardText: string;
  text: string;
  credit: string;
  /** External product URL. Without one, home links to /soluciones and its card there links to /contacto. */
  href?: string;
  /** Bold one-liner inside the spotlight card's callout box. */
  highlight?: string;
  /** Brand skin for SpotlightCard. Without it the product gets a ProductCard. */
  spotlight?: 'consenty' | 'project-check' | 'melian';
  /** Short signature on the spotlight card's bottom row, e.g. 'ft. DueGreen'.
   *  `credit` is the long form, used in the /soluciones prose. */
  signature?: string;
}

export const soluciones: Solucion[] = [
  {
    tone: 'magenta',
    meta: 'SaaS · Ley 21.719',
    title: 'Consenty',
    short: 'Gestión de consentimientos segura y sencilla, con evidencia auditable.',
    cardText: 'Gestión de consentimientos según la Ley 21.719.',
    text: 'Plataforma para gestionar consentimientos de manera segura y sencilla según la Ley 21.719 de Protección de Datos: registro, trazabilidad y evidencia de cada consentimiento en un solo lugar.',
    credit: 'Desarrollada en colaboración con Lumisreg Consulting.',
    href: 'https://consenty.japs.ing/',
    highlight: 'Cumple la nueva ley de protección de datos personales',
    spotlight: 'consenty',
  },
  {
    tone: 'accent',
    meta: 'SaaS · Documentación',
    title: 'Project Check',
    short: 'Informes de prefactibilidad ambiental para cualquier predio en Chile, con fuentes oficiales del Estado, en el mismo día.',
    cardText: 'Prefactibilidad ambiental para predios en Chile.',
    text: 'Informe de prefactibilidad ambiental para predios en Chile: consulta en vivo las fuentes oficiales del Estado (MINVU, DGA, SERNAGEOMIN, CMN, CONAF, CIREN, MOP, MMA), consolida las afectaciones y entrega un PDF con cartografía y KMZ el mismo día.',
    credit: 'Desarrollado en colaboración con Due Green.',
    href: 'https://projectcheck.japs.ing/',
    highlight: 'Sepa lo que su terreno permite, antes de invertir',
    spotlight: 'project-check',
    signature: 'ft. DueGreen',
  },
  {
    tone: 'blue',
    meta: 'SaaS · Minería',
    title: 'Melian',
    short: 'Gestiona controles críticos, matrices de riesgo y riesgos de fatalidad en operaciones mineras.',
    cardText: 'Controles críticos, matrices de riesgo y riesgos de fatalidad para minería.',
    text: 'Melian centraliza la gestión de controles críticos, matrices de riesgo y riesgos de fatalidad en operaciones mineras, con seguimiento de tareas, verificaciones y evidencias en terreno.',
    credit: 'Desarrollado en colaboración con Imaginería.',
    highlight: 'Gestiona los riesgos críticos de tu operación minera',
    spotlight: 'melian',
    signature: 'ft. Imaginería',
  },
];
