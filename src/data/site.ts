/**
 * Site-wide constants: navigation, external destinations and legal copy.
 *
 * TODO — placeholders carried over from the design project. None of these
 * were resolved in the source `.dc.html` files; confirm before launch:
 *   · whatsapp      → the number is 56900000000 in SiteFooter.dc.html
 *   · instagram     → default prop, likely a placeholder handle
 *   · linkedin      → default prop, likely a placeholder handle
 *   · calendarUrl   → Contacto.dc.html ships it as href="#"
 *   · contactAction → no form endpoint was specified anywhere in the project
 */

export const site = {
  name: 'JAPS Engineering',
  studioUrl: 'https://studio.japs.ing',
  whatsapp: 'https://wa.me/56900000000',
  instagram: 'https://instagram.com/japs.engineering',
  linkedin: 'https://linkedin.com/company/japs-engineering',
  email: 'contacto@japs.ing',
  calendarUrl: '#',
  contactAction: undefined as string | undefined,
  incubator: 'Incubados en el Centro de Innovación UC Anacleto Angelini',
  awards: 'Jump Chile 2023 · Brain Chile 2024 · HUC Social Ideas Challenge 2024',
  copyright: '© 2026 JAPS Engineering. Todos los derechos reservados.',
  dataNotice: 'Datos personales tratados conforme a la Ley 21.719.',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

/** The five pill links, in the order SiteNav.dc.html sets them. */
export const navLinks: NavLink[] = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Industrias', href: '/industrias' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Casos de éxito', href: '/casos-de-exito' },
];

export const footerSections: { title: string; links: NavLink[] }[] = [
  {
    title: 'Sitio',
    links: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Soluciones', href: '/soluciones' },
      { label: 'Casos de éxito', href: '/casos-de-exito' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  {
    title: 'Industrias',
    links: [
      { label: 'Minería', href: '/industrias/mineria' },
      { label: 'Manufactura', href: '/industrias/manufactura' },
      { label: 'Retail y comercio', href: '/industrias/retail' },
      { label: 'Educación', href: '/industrias/educacion' },
      { label: 'Transporte y logística', href: '/industrias/transporte' },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: 'Términos de servicio', href: '/terminos' },
  { label: 'Política de privacidad y manejo de datos', href: '/privacidad' },
];

/** Options for the "Industria" select in both contact forms. */
export const industryOptions = [
  'Minería',
  'Manufactura',
  'Retail y comercio',
  'Educación',
  'Transporte y logística',
  'Otra',
];
