import type { IconName } from '../components/ds/types';

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

/** The three service cards on the home page — a shorter cut of the same offer. */
export interface ServicioResumen {
  icon: IconName;
  title: string;
  text: string;
}

export const serviciosResumen: ServicioResumen[] = [
  {
    icon: 'sliders-horizontal',
    title: 'Consultoría de transformación digital',
    text: 'De la estrategia a la tecnología que transforma tu operación.',
  },
  {
    icon: 'layers',
    title: 'Desarrollo de software a medida',
    text: 'Plataformas escalables y modernización de sistemas legacy.',
  },
  {
    icon: 'settings',
    title: 'Integración de sistemas',
    text: 'Conectamos tu software para que toda tu empresa hable el mismo idioma.',
  },
];
