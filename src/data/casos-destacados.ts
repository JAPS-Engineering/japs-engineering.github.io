import type { IndustrySlug } from '../i18n/routes';

/** Shared cases: assets, client identity and all reader-facing versions live here. */
export const fullCaseIds = ['barron-vieyra', 'axam', 'dinv-uc', 'ciuc'] as const;
export type CaseId = (typeof fullCaseIds)[number];
export const homeCaseIds: readonly CaseId[] = ['barron-vieyra', 'axam', 'dinv-uc'];

export interface Caso {
  id: CaseId;
  industry: IndustrySlug;
  eyebrow: string;
  client: { name: string; logo: { src: string; alt: string; height: number } };
  image: string;
  title: string;
  project: string;
  summary: string;
  teaser: string;
  paragraphs: string[];
  footnote?: string;
  aside: { kicker: string; items: string[] };
}

export type CatalogoCasos = Record<CaseId, Caso>;

export interface CasoDestacado {
  id: CaseId;
  eyebrow: string;
  title: string;
  text: string;
  logoSrc: string;
}

export const casosCatalogo: CatalogoCasos = {
  "barron-vieyra": {
    "id": "barron-vieyra",
    "industry": "manufactura",
    "eyebrow": "Manufactura",
    "client": {
      "name": "Barron Vieyra",
      "logo": {
        "src": "/logo/partners/BV.avif",
        "alt": "Barron Vieyra",
        "height": 40
      }
    },
    "image": "/hero/bv.jpg",
    "title": "Cómo Barron Vieyra logró mejorar su planificación de producción de máquinas servilleteras",
    "project": "planificación de producción de máquinas servilleteras",
    "summary": "Menos tiempo manual de planificación, mejor cumplimiento de plazos y menos reprogramaciones críticas, con lógica de priorización automática.",
    "teaser": "Planificación automática de producción de máquinas servilleteras.",
    "paragraphs": [
      "Modelo de eficiencia productiva que integra variables críticas: desde la extracción de notas de venta en el ERP hasta el stock de materia prima y los tiempos de recambio, para generar secuencias óptimas de trabajo de forma automática. Un dashboard web intuitivo digitalizó el apoyo a la toma de decisiones y compara rendimientos reales versus estimados mediante KPIs directos de las máquinas, permitiendo a Barron Vieyra escalar su eficiencia productiva y validar la lógica de automatización para sus futuros proyectos de expansión."
    ],
    "footnote": "Barrón Vieyra International: más de 29 años como especialista en telas no tejidas de alta tecnología para salud, retail y minería, con presencia en Chile, Perú y Colombia.",
    "aside": {
      "kicker": "Impacto",
      "items": [
        "Menos tiempo manual de planificación y elaboración de órdenes de trabajo",
        "Mejor cumplimiento de plazos de entrega",
        "Menos reprogramaciones críticas de último minuto",
        "Capacidad instalada optimizada con priorización automática"
      ]
    }
  },
  "axam": {
    "id": "axam",
    "industry": "retail",
    "eyebrow": "Retail y comercio · Distribución",
    "client": {
      "name": "AXAM",
      "logo": {
        "src": "/logo/partners/axam.png",
        "alt": "AXAM",
        "height": 30
      }
    },
    "image": "/hero/bg3.jpg",
    "title": "AXAM: automatización e IA para la operación comercial",
    "project": "automatización e IA para la operación comercial",
    "summary": "Distribuidor de higiene y limpieza en Chile y España: integramos Mercado Libre y Manager+, construimos un asistente de ventas con IA sobre su catálogo y una herramienta de comisiones y márgenes.",
    "teaser": "Automatización e IA para la operación comercial.",
    "paragraphs": [
      "AXAM distribuye productos de higiene y limpieza en Chile y España: miles de productos, múltiples canales de venta y proveedores internacionales de primer nivel. En un rubro donde los márgenes importan, la velocidad es fundamental y los errores cuestan, gran parte de su operación diaria consistía en procesos manuales que no escalaban."
    ],
    "aside": {
      "kicker": "Proyectos ejecutados",
      "items": [
        "Gestión e integración de Mercado Libre y Manager+",
        "Asistente de ventas con IA sobre su catálogo",
        "Plataforma de gestión",
        "Herramienta de cálculo de comisiones y márgenes"
      ]
    }
  },
  "dinv-uc": {
    "id": "dinv-uc",
    "industry": "educacion",
    "eyebrow": "Centros educativos",
    "client": {
      "name": "Universidad Católica",
      "logo": {
        "src": "/logo/partners/universidad-catolica.png",
        "alt": "Universidad Católica",
        "height": 64
      }
    },
    "image": "/hero/uc.jpg",
    "title": "Universidad Católica: Automatizaciones programa AVANZA UC",
    "project": "Automatizaciones programa AVANZA UC",
    "summary": "Automatizamos procesos del programa AVANZA UC de la Universidad Católica, en conjunto con DINV UC.",
    "teaser": "Automatizaciones para el programa AVANZA UC.",
    "paragraphs": [
      "Desarrollamos automatizaciones para el programa AVANZA UC de la Universidad Católica, en conjunto con DINV UC."
    ],
    "aside": {
      "kicker": "Cliente y proyecto",
      "items": [
        "Universidad Católica",
        "Programa AVANZA UC",
        "Automatización de procesos"
      ]
    }
  },
  "ciuc": {
    "id": "ciuc",
    "industry": "educacion",
    "eyebrow": "Centros educativos",
    "client": {
      "name": "CIUC",
      "logo": {
        "src": "/logo/partners/ciuc.svg",
        "alt": "CIUC",
        "height": 34
      }
    },
    "image": "/hero/ciuc2.jpg",
    "title": "CIUC: plataforma de red de mentores",
    "project": "plataforma de red de mentores",
    "summary": "Junto al Centro de Innovación UC creamos una plataforma que conecta mentores, emprendedores y facilitadores en más de 10 concursos, con cada mentoría trazada y resumida.",
    "teaser": "Plataforma de red de mentores para el ecosistema de emprendimiento UC.",
    "paragraphs": [
      "Junto al área de emprendimiento del Centro de Innovación UC creamos una plataforma de mentorías que conecta mentores, emprendedores y facilitadores en el contexto de más de 10 concursos. Cada mentoría queda trazada y resumida, para que no se pierda información."
    ],
    "aside": {
      "kicker": "Organización",
      "items": [
        "El CIUC promueve una cultura pro innovación y emprendimiento en la universidad y el país, conectando academia, sector privado y sector público."
      ]
    }
  }
};

/** Preserve the caller's order and report broken references during the build. */
export function selectCases(ids: readonly CaseId[], source: readonly Caso[]): Caso[] {
  return ids.map((id) => {
    const caso = source.find((item) => item.id === id);
    if (!caso) throw new Error(`[casos] Caso inexistente: ${id}`);
    return caso;
  });
}

export const caseTeaser = (caso: Caso): CasoDestacado => ({
  id: caso.id,
  eyebrow: caso.eyebrow.split(' · ')[0],
  title: caso.client.name,
  text: caso.teaser,
  logoSrc: caso.client.logo.src,
});
