/**
 * Case studies. The `aside` panel changes label per case — "Impacto",
 * "Proyectos ejecutados", "Organización", "Empresa" — so the kicker is data,
 * not a constant.
 */
export interface Caso {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** Second paragraph in a quieter grey, where the source sets one. */
  footnote?: string;
  aside: { kicker: string; items: string[] };
}

export const casos: Caso[] = [
  {
    eyebrow: 'Manufactura',
    title:
      'Cómo Barron Vieyra logró mejorar su planificación de producción de máquinas servilleteras',
    paragraphs: [
      'Modelo de eficiencia productiva que integra variables críticas: desde la extracción de notas de venta en el ERP hasta el stock de materia prima y los tiempos de recambio, para generar secuencias óptimas de trabajo de forma automática. Un dashboard web intuitivo digitalizó el apoyo a la toma de decisiones y compara rendimientos reales versus estimados mediante KPIs directos de las máquinas, permitiendo a Barron Vieyra escalar su eficiencia productiva y validar la lógica de automatización para sus futuros proyectos de expansión.',
    ],
    footnote:
      'Barrón Vieyra International: más de 29 años como especialista en telas no tejidas de alta tecnología para salud, retail y minería, con presencia en Chile, Perú y Colombia.',
    aside: {
      kicker: 'Impacto',
      items: [
        'Menos tiempo manual de planificación y elaboración de órdenes de trabajo',
        'Mejor cumplimiento de plazos de entrega',
        'Menos reprogramaciones críticas de último minuto',
        'Capacidad instalada optimizada con priorización automática',
      ],
    },
  },
  {
    eyebrow: 'Retail y comercio · Distribución',
    title: 'AXAM: automatización e IA para la operación comercial',
    paragraphs: [
      'AXAM distribuye productos de higiene y limpieza en Chile y España: miles de productos, múltiples canales de venta y proveedores internacionales de primer nivel. En un rubro donde los márgenes importan, la velocidad es fundamental y los errores cuestan, gran parte de su operación diaria consistía en procesos manuales que no escalaban.',
    ],
    aside: {
      kicker: 'Proyectos ejecutados',
      items: [
        'Gestión e integración de Mercado Libre y Manager+',
        'Asistente de ventas con IA sobre su catálogo',
        'Plataforma de gestión',
        'Herramienta de cálculo de comisiones y márgenes',
      ],
    },
  },
  {
    eyebrow: 'Educación',
    title: 'CIUC: plataforma de red de mentores',
    paragraphs: [
      'Junto al área de emprendimiento del Centro de Innovación UC creamos una plataforma de mentorías que conecta mentores, emprendedores y facilitadores en el contexto de más de 10 concursos. Cada mentoría queda trazada y resumida, para que no se pierda información.',
    ],
    aside: {
      kicker: 'Organización',
      items: [
        'El CIUC promueve una cultura pro innovación y emprendimiento en la universidad y el país, conectando academia, sector privado y sector público.',
      ],
    },
  },
  {
    eyebrow: 'Servicios judiciales · LegalTech',
    title: 'CynthIA (Perired): plataforma de gestión pericial con IA',
    paragraphs: [
      'Plataforma digital de gestión pericial con inteligencia artificial, que digitaliza y automatiza la coordinación entre clientes, abogados y peritos, y la gestión de solicitudes, información y documentos asociados a cada caso.',
    ],
    aside: {
      kicker: 'Empresa',
      items: [
        'PERIRED conecta abogados y clientes con una red de peritos y profesionales a lo largo de Chile, facilitando la contratación para peritajes e informes judiciales.',
      ],
    },
  },
];

/** Cases the design marks as still being written. */
export const casosEnRedaccion = {
  badge: 'En redacción',
  text: 'Don Maxi — caso en preparación, disponible próximamente.',
};

/** The three-up teaser on the home page. */
export const casosDestacados = [
  {
    eyebrow: 'Manufactura',
    title: 'Barron Vieyra',
    text: 'Planificación automática de producción de máquinas servilleteras.',
    logoSrc: '/logo/partners/BV.avif',
  },
  {
    eyebrow: 'Retail y comercio',
    title: 'AXAM',
    text: 'Automatización e IA para la operación comercial.',
    logoSrc: '/logo/partners/axam.png',
  },
  {
    eyebrow: 'Educación',
    title: 'CIUC',
    text: 'Plataforma de red de mentores para el ecosistema de emprendimiento UC.',
    logoSrc: '/logo/partners/ciuc.svg',
  },
];
