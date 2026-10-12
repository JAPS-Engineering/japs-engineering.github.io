import type { IndustrySlug } from '../i18n/routes';

/** Shared cases: assets, client identity and all reader-facing versions live here. */
export const fullCaseIds = ['dinv-uc', 'ciuc', 'barron-vieyra', 'axam'] as const;
export type CaseId = (typeof fullCaseIds)[number];
export const homeCaseIds: readonly CaseId[] = ['dinv-uc', 'barron-vieyra', 'axam'];

export interface CasoPaso {
  title: string;
  text: string;
  /** Pasos que entrega JAPS (modelo, dashboard…), resaltados en el color de la industria. */
  highlight?: boolean;
}

export interface CasoCifra {
  value: string;
  label: string;
}

/** Lectura completa de /casos-de-exito/<id>: cuatro capítulos y la ficha lateral. */
export interface CasoDetalle {
  /** Ficha: la etiqueta de cada fila vive en ui.ts; aquí, solo los valores. */
  industry: string;
  deliverables: string;
  challenge: { title: string; text: string };
  /** El primer párrafo va antes de los pasos; el resto, después. */
  solution: { title: string; paragraphs: string[]; steps: CasoPaso[] };
  impactTitle: string;
  about: { text: string; stats?: CasoCifra[] };
}

export interface Caso {
  id: CaseId;
  industry: IndustrySlug;
  eyebrow: string;
  client: { name: string; fullName: string; logo: { src: string; alt: string; height: number } };
  image: string;
  imageAlt: string;
  title: string;
  project: string;
  summary: string;
  teaser: string;
  services: string;
  paragraphs: string[];
  footnote?: string;
  aside: { kicker: string; items: string[] };
  /** Sin sufijo de marca: ≤46 car. de título y 110–165 de descripción (seo-audit). */
  seo: { title: string; description: string };
  detail: CasoDetalle;
}

export type CatalogoCasos = Record<CaseId, Caso>;

export const casosCatalogo: CatalogoCasos = {
  "barron-vieyra": {
    "id": "barron-vieyra",
    "industry": "manufactura",
    "eyebrow": "Manufactura",
    "client": {
      "name": "Barron Vieyra",
      "fullName": "Barron Vieyra International",
      "logo": {
        "src": "/logo/partners/BV.avif",
        "alt": "Barron Vieyra",
        "height": 40
      }
    },
    "image": "/hero/bv.jpg",
    "imageAlt": "Operario revisa la planificación en pantalla junto a una máquina servilletera en planta.",
    "title": "Cómo Barron Vieyra logró mejorar su planificación de producción de máquinas servilleteras",
    "project": "planificación de producción de máquinas servilleteras",
    "summary": "Menos tiempo manual de planificación, mejor cumplimiento de plazos y menos reprogramaciones críticas, con lógica de priorización automática.",
    "teaser": "Planificación automática de producción de máquinas servilleteras.",
    "services": "Desarrollo a medida · Integración con ERP",
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
    },
    "seo": {
      "title": "Barron Vieyra: planificación de producción",
      "description": "Cómo Barron Vieyra automatizó la planificación de producción de sus máquinas servilleteras con un modelo conectado al ERP y un dashboard web de KPIs."
    },
    "detail": {
      "industry": "Manufactura · telas no tejidas",
      "deliverables": "Modelo de eficiencia productiva · Dashboard web",
      "challenge": {
        "title": "Planificar a mano ya no daba abasto.",
        "text": "La planificación de producción y las órdenes de trabajo se armaban a mano, cruzando notas de venta, stock de materia prima y tiempos de recambio de cada máquina. Cada cambio obligaba a reprogramar a última hora y ponía en riesgo los plazos de entrega."
      },
      "solution": {
        "title": "Priorización automática, conectada al ERP.",
        "paragraphs": [
          "Construimos un modelo de eficiencia productiva que integra las variables críticas — desde las notas de venta extraídas del ERP hasta el stock de materia prima y los tiempos de recambio — y genera secuencias óptimas de trabajo de forma automática.",
          "Un dashboard web digitalizó el apoyo a la toma de decisiones: compara rendimientos reales versus estimados con KPIs directos de las máquinas y deja validada la lógica de automatización para los próximos proyectos de expansión."
        ],
        "steps": [
          { "title": "Notas de venta", "text": "Extraídas directamente del ERP." },
          { "title": "Stock de materia prima", "text": "Insumos disponibles para producir." },
          { "title": "Tiempos de recambio", "text": "Cambios de formato en cada máquina." },
          { "title": "Secuencia óptima de trabajo", "text": "Generada de forma automática por el modelo de eficiencia productiva.", "highlight": true },
          { "title": "Rendimiento real vs. estimado", "text": "Dashboard web con KPIs directos de las máquinas.", "highlight": true }
        ]
      },
      "impactTitle": "Lo que cambió en la planta",
      "about": {
        "text": "Especialista en telas no tejidas de alta tecnología para salud, retail y minería.",
        "stats": [
          { "value": "+29", "label": "años como especialista en telas no tejidas" },
          { "value": "3", "label": "países: Chile, Perú y Colombia" },
          { "value": "3", "label": "sectores: salud, retail y minería" }
        ]
      }
    }
  },
  "axam": {
    "id": "axam",
    "industry": "retail",
    "eyebrow": "Retail y comercio · Distribución",
    "client": {
      "name": "AXAM",
      "fullName": "AXAM",
      "logo": {
        "src": "/logo/partners/axam.png",
        "alt": "AXAM",
        "height": 30
      }
    },
    "image": "/hero/axam.jpg",
    "imageAlt": "Persona trabaja en un notebook en la oficina de AXAM, junto a la bodega de productos de higiene y limpieza.",
    "title": "AXAM: automatización e IA para la operación comercial",
    "project": "automatización e IA para la operación comercial",
    "summary": "Distribuidor de higiene y limpieza en Chile y España: integramos Mercado Libre y Manager+, construimos un asistente de ventas con IA sobre su catálogo y una herramienta de comisiones y márgenes.",
    "teaser": "Automatización e IA para la operación comercial.",
    "services": "Integración de APIs · Desarrollo a medida",
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
    },
    "seo": {
      "title": "AXAM: automatización e IA comercial",
      "description": "Cómo AXAM, distribuidor de higiene y limpieza en Chile y España, integró Mercado Libre y Manager+ y sumó un asistente de ventas con IA sobre su catálogo."
    },
    "detail": {
      "industry": "Retail y comercio · Distribución",
      "deliverables": "Integraciones · Asistente de ventas con IA · Plataforma de gestión",
      "challenge": {
        "title": "Procesos manuales que no escalaban.",
        "text": "AXAM distribuye productos de higiene y limpieza en Chile y España: miles de productos, múltiples canales de venta y proveedores internacionales de primer nivel. En un rubro donde los márgenes importan, la velocidad es fundamental y los errores cuestan, gran parte de su operación diaria consistía en procesos manuales que no escalaban."
      },
      "solution": {
        "title": "Integraciones e IA sobre la operación que ya existía.",
        "paragraphs": [
          "Abordamos la operación comercial por partes, con proyectos que conectan los sistemas que AXAM ya usaba y automatizan el trabajo que antes se hacía a mano.",
          "Cada proyecto se construyó sobre los canales y sistemas existentes, para que el equipo dedique menos tiempo a tareas repetitivas y más a vender."
        ],
        "steps": [
          { "title": "Mercado Libre y Manager+", "text": "Gestión e integración del canal de venta con su sistema de gestión." },
          { "title": "Plataforma de gestión", "text": "La información de la operación comercial en un solo lugar." },
          { "title": "Asistente de ventas con IA", "text": "Responde sobre su catálogo para apoyar al equipo comercial.", "highlight": true },
          { "title": "Comisiones y márgenes", "text": "Una herramienta que los calcula sin planillas manuales.", "highlight": true }
        ]
      },
      "impactTitle": "Cuatro proyectos sobre una misma operación",
      "about": {
        "text": "Distribuidor de productos de higiene y limpieza en Chile y España, con miles de productos, múltiples canales de venta y proveedores internacionales de primer nivel.",
        "stats": [
          { "value": "2", "label": "países: Chile y España" },
          { "value": "4", "label": "proyectos ejecutados con JAPS" }
        ]
      }
    }
  },
  "dinv-uc": {
    "id": "dinv-uc",
    "industry": "educacion",
    "eyebrow": "Centros educativos",
    "client": {
      "name": "Universidad Católica",
      "fullName": "Universidad Católica · DINV UC",
      "logo": {
        "src": "/logo/partners/universidad-catolica.png",
        "alt": "Universidad Católica",
        "height": 64
      }
    },
    "image": "/hero/uc.jpg",
    "imageAlt": "Fachada de la Casa Central de la Universidad Católica, en Santiago.",
    "title": "Universidad Católica: Automatizaciones programa AVANZA UC",
    "project": "Automatizaciones programa AVANZA UC",
    "summary": "Automatizamos procesos del programa AVANZA UC de la Universidad Católica, en conjunto con DINV UC.",
    "teaser": "Automatizaciones para el programa AVANZA UC.",
    "services": "Automatización de procesos",
    "paragraphs": [
      "Desarrollamos automatizaciones para el programa AVANZA UC de la Universidad Católica, en conjunto con DINV UC."
    ],
    "aside": {
      "kicker": "Cliente y proyecto",
      "items": [
        "Universidad Católica, junto a DINV UC",
        "Programa AVANZA UC",
        "Automatización de procesos"
      ]
    },
    "seo": {
      "title": "UC: automatizaciones del programa AVANZA UC",
      "description": "Automatizamos procesos del programa AVANZA UC de la Universidad Católica en conjunto con DINV UC. Conoce el desafío, la solución y cómo trabajamos."
    },
    "detail": {
      "industry": "Educación · Centros educativos",
      "deliverables": "Automatizaciones del programa AVANZA UC",
      "challenge": {
        "title": "Un programa con procesos por automatizar.",
        "text": "El programa AVANZA UC de la Universidad Católica reúne procesos operativos que el equipo a cargo resolvía de forma manual, junto a DINV UC."
      },
      "solution": {
        "title": "Automatizaciones a la medida del programa.",
        "paragraphs": [
          "Trabajamos en conjunto con DINV UC para identificar los procesos del programa que podían automatizarse y desarrollamos las automatizaciones correspondientes."
        ],
        "steps": [
          { "title": "Levantamiento junto a DINV UC", "text": "Identificamos los procesos del programa que se podían automatizar." },
          { "title": "Desarrollo de automatizaciones", "text": "Construimos las automatizaciones sobre los procesos priorizados.", "highlight": true },
          { "title": "Puesta en marcha", "text": "Las automatizaciones quedan operando para el equipo del programa.", "highlight": true }
        ]
      },
      "impactTitle": "Un proyecto junto a DINV UC",
      "about": {
        "text": "La Pontificia Universidad Católica de Chile es una de las principales universidades del país. AVANZA UC es uno de sus programas, desarrollado en conjunto con DINV UC."
      }
    }
  },
  "ciuc": {
    "id": "ciuc",
    "industry": "educacion",
    "eyebrow": "Centros educativos",
    "client": {
      "name": "CIUC",
      "fullName": "Centro de Innovación UC",
      "logo": {
        "src": "/logo/partners/ciuc.svg",
        "alt": "CIUC",
        "height": 34
      }
    },
    "image": "/hero/ciuc2.jpg",
    "imageAlt": "Edificio de hormigón a la vista del Centro de Innovación UC Anacleto Angelini.",
    "title": "CIUC: plataforma de red de mentores",
    "project": "plataforma de red de mentores",
    "summary": "Junto al Centro de Innovación UC creamos una plataforma que conecta mentores, emprendedores y facilitadores en más de 10 concursos, con cada mentoría trazada y resumida.",
    "teaser": "Plataforma de red de mentores para el ecosistema de emprendimiento UC.",
    "services": "Desarrollo a medida",
    "paragraphs": [
      "Junto al área de emprendimiento del Centro de Innovación UC creamos una plataforma de mentorías que conecta mentores, emprendedores y facilitadores en el contexto de más de 10 concursos. Cada mentoría queda trazada y resumida, para que no se pierda información."
    ],
    "aside": {
      "kicker": "Impacto",
      "items": [
        "Más de 10 concursos en una sola plataforma",
        "Cada mentoría queda trazada y resumida",
        "Mentores, emprendedores y facilitadores conectados"
      ]
    },
    "seo": {
      "title": "CIUC: plataforma de red de mentores",
      "description": "Junto al Centro de Innovación UC creamos una plataforma que conecta mentores, emprendedores y facilitadores en más de 10 concursos, con cada mentoría trazada."
    },
    "detail": {
      "industry": "Educación · Emprendimiento",
      "deliverables": "Plataforma de mentorías",
      "challenge": {
        "title": "Mentorías repartidas en más de 10 concursos.",
        "text": "El área de emprendimiento del Centro de Innovación UC coordina mentores, emprendedores y facilitadores en más de 10 concursos. Sin una plataforma común, la información de cada mentoría corría el riesgo de perderse."
      },
      "solution": {
        "title": "Una plataforma para toda la red de mentores.",
        "paragraphs": [
          "Creamos una plataforma de mentorías que reúne a mentores, emprendedores y facilitadores en un mismo lugar, para todos los concursos.",
          "Cada mentoría queda trazada y resumida, de modo que el equipo del CIUC conserva el historial de cada emprendimiento."
        ],
        "steps": [
          { "title": "Concursos", "text": "Más de 10 convocatorias en una sola plataforma." },
          { "title": "Mentores y emprendedores", "text": "Se conectan dentro de cada concurso." },
          { "title": "Facilitadores", "text": "Acompañan y coordinan el proceso." },
          { "title": "Mentoría trazada", "text": "Cada sesión queda registrada en la plataforma.", "highlight": true },
          { "title": "Resumen de cada mentoría", "text": "Para que no se pierda información.", "highlight": true }
        ]
      },
      "impactTitle": "Lo que cambió en la red de mentores",
      "about": {
        "text": "El CIUC promueve una cultura pro innovación y emprendimiento en la universidad y el país, conectando academia, sector privado y sector público.",
        "stats": [
          { "value": "+10", "label": "concursos en una sola plataforma" },
          { "value": "3", "label": "roles conectados: mentores, emprendedores y facilitadores" }
        ]
      }
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

/** Los `project` van en minúscula para leerse tras «Cliente:»; como titular, con mayúscula. */
export const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);
