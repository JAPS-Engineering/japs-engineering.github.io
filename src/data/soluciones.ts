/**
 * The SaaS products (Shackleton is commented out for now — see below).
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
  /** External product URL. Falls back to /soluciones when unset. */
  href?: string;
  /** Bold one-liner inside the home card's callout box — ConsentyCard only for now. */
  highlight?: string;
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
  },
  {
    tone: 'accent',
    meta: 'SaaS · Energía',
    title: 'SolarCheck',
    short: 'Prefactibilidad de proyectos solares sobre cualquier terreno, en minutos.',
    cardText: 'Prefactibilidad de proyectos solares.',
    text: 'Sistema que permite revisar rápidamente la factibilidad de usar un terreno para un proyecto solar: en minutos, en vez de semanas de estudio preliminar.',
    credit: 'Desarrollado en colaboración con Due Green.',
  },
  // Oculto por ahora — reactivar cuando Shackleton esté listo para lanzar.
  // {
  //   tone: 'blue',
  //   meta: 'SaaS · Minería',
  //   title: 'Shackleton',
  //   short: 'Gestión de riesgo operacional para el sector minero.',
  //   cardText: 'Gestión de riesgo para el sector minero.',
  //   text: 'Software que facilita la gestión de riesgo en el sector minero: identificación, seguimiento y control de riesgos operacionales en una sola plataforma.',
  //   credit: 'Desarrollado en colaboración con Imaginería.',
  // },
];
