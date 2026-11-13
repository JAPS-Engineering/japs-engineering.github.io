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
    "title": "Barron Vieyra: planificación automática de producción de máquinas servilleteras",
    "project": "planificación automática de producción de máquinas servilleteras",
    "summary": "Menos tiempo manual de planificación, mejor cumplimiento de plazos y menos reprogramaciones críticas, con lógica de priorización automática.",
    "teaser": "Planificación automática de producción de máquinas servilleteras.",
    "services": "Desarrollo de software a medida · Integración de sistemas",
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
      "industry": "Manufactura",
      "deliverables": "Modelo de eficiencia productiva · Dashboard web",
      "challenge": {
        "title": "Planificar a mano ya no daba abasto.",
        "text": "Con 4 servilleteras y más de 700 clientes, la planificación de producción y las órdenes de trabajo de cada máquina se armaban a mano todos los días, cruzando notas de venta, stock de materia prima y tiempos de recambio. Cada cambio obligaba a reprogramar a última hora y ponía en riesgo los plazos de entrega."
      },
      "solution": {
        "title": "Priorización automática, conectada al ERP.",
        "paragraphs": [
          "Construimos un modelo de eficiencia productiva que integra las variables críticas, desde las notas de venta extraídas del ERP hasta el stock de materia prima y los tiempos de recambio, y genera secuencias óptimas de trabajo de forma automática."
        ],
        "steps": [
          { "title": "Notas de venta", "text": "Extraídas directamente del ERP." },
          { "title": "Stock de materia prima", "text": "Insumos disponibles para producir." },
          { "title": "Restricciones de planta", "text": "Capacidad de cada máquina, recambios, jornada, horas extra y multas por atraso." },
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
    "eyebrow": "Retail y comercio",
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
    "title": "AXAM: CRM y plataforma de gestión comercial conectada a su ERP",
    "project": "CRM y plataforma de gestión comercial conectada a su ERP",
    "summary": "Distribuidor de higiene y limpieza en Chile y España: construimos su CRM con agentes de IA, la integración con Mercado Libre y una plataforma de compras, márgenes y comisiones conectada a su ERP.",
    "teaser": "CRM y plataforma de gestión comercial conectada a su ERP.",
    "services": "Integración de sistemas · Desarrollo de software a medida",
    "paragraphs": [
      "AXAM distribuye productos de higiene y limpieza en Chile y España: miles de productos, múltiples canales de venta y proveedores internacionales de primer nivel. En un rubro donde los márgenes importan, la velocidad es fundamental y los errores cuestan, gran parte de su operación diaria consistía en procesos manuales que no escalaban."
    ],
    "aside": {
      "kicker": "Impacto",
      "items": [
        "Atención y cotización 24/7 en la web, WhatsApp y teléfono.",
        "Notas de venta y órdenes de compra sin digitación manual.",
        "Compras basadas en proyección de demanda, no en cálculos a mano.",
        "Comisiones y márgenes calculados sobre lo efectivamente cobrado.",
        "De 300 a más de 2.000 acuerdos con proveedores bajo control en una sola plataforma.",
        "Millones de pesos reclamables detectados en un solo mes, que la revisión fila por fila en planilla no había encontrado."
      ]
    },
    "seo": {
      "title": "AXAM: CRM y gestión comercial con IA",
      "description": "Para AXAM, distribuidor de higiene y limpieza, construimos su CRM con agentes de IA, la integración con Mercado Libre y una plataforma conectada a su ERP."
    },
    "detail": {
      "industry": "Retail y comercio",
      "deliverables": "CRM y agentes de IA · Integración Mercado Libre · Plataforma de gestión · Comisiones y márgenes",
      "challenge": {
        "title": "Procesos manuales que no escalaban.",
        "text": "AXAM distribuye productos de higiene y limpieza en Chile y España: miles de productos, múltiples canales de venta y proveedores internacionales de primer nivel. En un rubro donde los márgenes importan, la velocidad es fundamental y los errores cuestan, gran parte de su operación diaria consistía en procesos manuales que no escalaban."
      },
      "solution": {
        "title": "Todo el ciclo comercial en un sistema conectado al ERP.",
        "paragraphs": [
          "Abordamos la operación comercial por partes, con proyectos que conectan los sistemas que AXAM ya usaba y automatizan el trabajo que antes se hacía a mano.",
          "Cada proyecto se construyó sobre los canales y sistemas existentes, para que el equipo dedique menos tiempo a tareas repetitivas y más a vender."
        ],
        "steps": [
          { "title": "Mercado Libre y Manager+", "text": "Tienda oficial; clientes, precios, stock y notas de venta se sincronizan solos con el ERP." },
          { "title": "CRM y agentes de IA", "text": "Pipeline de ventas, seguimiento por correo y WhatsApp, y agentes en la web, WhatsApp y teléfono que recomiendan productos y envían cotizaciones.", "highlight": true },
          { "title": "Plataforma de gestión", "text": "Proyección de demanda, compras sugeridas y órdenes de compra cargadas directo en Manager+.", "highlight": true },
          { "title": "Comisiones y márgenes", "text": "Comisiones por vendedor y margen real sobre lo cobrado, sin planillas.", "highlight": true }
        ]
      },
      "impactTitle": "Lo que cambió en la operación",
      "about": {
        "text": "Distribuidor de higiene y limpieza con miles de productos y proveedores internacionales.",
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
      "fullName": "Dirección de Investigación",
      "logo": {
        "src": "/logo/partners/universidad-catolica.png",
        "alt": "Universidad Católica",
        "height": 64
      }
    },
    "image": "/hero/uc.jpg",
    "imageAlt": "Fachada de la Casa Central de la Universidad Católica, en Santiago.",
    "title": "Universidad Católica (DINV UC): automatización e IA para los concursos de investigación",
    "project": "automatización e IA para los concursos de investigación",
    "summary": "Diagnóstico, automatización del concurso Avanza UC y una plataforma para el resto de los concursos de la Dirección de Investigación UC.",
    "teaser": "Automatización e IA para los concursos de investigación.",
    "services": "Consultoría de transformación digital · Desarrollo de software a medida",
    "paragraphs": [
      "Diagnóstico, automatización del concurso Avanza UC y una plataforma para el resto de los concursos de la Dirección de Investigación UC."
    ],
    "aside": {
      "kicker": "Impacto",
      "items": [
        "De semanas a minutos: la admisibilidad y la asignación de más de 500 postulaciones corren en unos 15 minutos y se repiten cada vez que cambia un criterio.",
        "Más de 400 horas de trabajo manual liberadas en un solo concurso.",
        "Todas las propuestas con dos evaluadores asignados a tiempo, pese a recibir un 50% más de postulaciones con el mismo plazo.",
        "Más de un 35% mejor calce entre cada postulación y sus evaluadores respecto del año anterior."
      ]
    },
    "seo": {
      "title": "UC: automatización e IA para concursos",
      "description": "Diagnóstico, automatización del concurso Avanza UC y una plataforma para los concursos de investigación de la Dirección de Investigación de la UC."
    },
    "detail": {
      "industry": "Centros educativos",
      "deliverables": "Diagnóstico y hoja de ruta · Automatización de Avanza UC · Asistente de postulaciones · Dashboard de gestión",
      "challenge": {
        "title": "Semanas de trabajo manual de todo un equipo.",
        "text": "La Dirección de Investigación (DINV) de la UC administra concursos internos y externos: Avanza UC, Fondecyt, ANID, Corfo. Solo en Avanza llegaron este año más de 500 postulaciones, un 50% más que el anterior, con el mismo plazo. Revisar la admisibilidad de cada una contra las bases, con más de 1.400 cartas de respaldo, y asignarle dos evaluadores sin conflictos de interés entre más de 350 candidatos, tomaba semanas de trabajo de un equipo completo, con la información repartida entre Airtable, Excel y correos."
      },
      "solution": {
        "title": "De un diagnóstico a un sistema para todos los concursos.",
        "paragraphs": [
          "Partimos con un diagnóstico de los procesos de la DINV y una hoja de ruta priorizada. El primer proyecto automatizó Avanza UC; los siguientes llevan lo aprendido al resto de los concursos y a la dirección."
        ],
        "steps": [
          { "title": "Diagnóstico y hoja de ruta", "text": "Mapa de procesos y fuentes de datos, y un portafolio de soluciones con costos y plazos." },
          { "title": "Admisibilidad automática", "text": "Cada postulación se revisa contra las bases del concurso." },
          { "title": "Asignación de evaluadores", "text": "Automática, detectando conflictos de interés y coautorías a partir de publicaciones reales.", "highlight": true },
          { "title": "Pre-evaluación con IA", "text": "Un puntaje inicial para apoyar a los evaluadores.", "highlight": true },
          { "title": "Próximas etapas", "text": "Asistente de postulaciones con credencial UC para Fondecyt, ANID y Corfo, y un dashboard de concursos y fondos adjudicados para la dirección (en desarrollo)." }
        ]
      },
      "impactTitle": "Lo que cambió en la Dirección de Investigación",
      "about": {
        "text": "La Dirección de Investigación de la Pontificia Universidad Católica de Chile apoya a los académicos de sus facultades a postular y gestionar fondos de investigación.",
        "stats": [
          { "value": "20", "label": "facultades" },
          { "value": "4", "label": "proyectos con JAPS" }
        ]
      }
    }
  },
  "ciuc": {
    "id": "ciuc",
    "industry": "educacion",
    "eyebrow": "Centros educativos",
    "client": {
      "name": "Centro de Innovación UC",
      "fullName": "Centro de Innovación UC",
      "logo": {
        "src": "/logo/partners/ciuc.svg",
        "alt": "Centro de Innovación UC",
        "height": 34
      }
    },
    "image": "/hero/ciuc2.jpg",
    "imageAlt": "Edificio de hormigón a la vista del Centro de Innovación UC Anacleto Angelini.",
    "title": "Centro de Innovación UC: IA para su red de mentores y sus informes CORFO",
    "project": "IA para su red de mentores y sus informes CORFO",
    "summary": "Dos proyectos para el área de emprendimiento: matching automático entre emprendimientos y mentores en más de 10 concursos, y los informes de rendición CORFO generados automáticamente.",
    "teaser": "IA para su red de mentores y sus informes CORFO.",
    "services": "Desarrollo de software a medida",
    "paragraphs": [
      "Dos proyectos para el área de emprendimiento: matching automático entre emprendimientos y mentores en más de 10 concursos, y los informes de rendición CORFO generados automáticamente."
    ],
    "aside": {
      "kicker": "Impacto",
      "items": [
        "El matching de mentores deja de hacerse a mano: el sistema propone y asigna al mejor mentor para cada emprendimiento.",
        "Cada mentoría queda trazada y resumida.",
        "Informe CORFO generado automáticamente para cada uno de los 15 a 18 proyectos anuales, desde datos ya validados por el director."
      ]
    },
    "seo": {
      "title": "Centro de Innovación UC: mentores y CORFO",
      "description": "Matching con IA entre emprendimientos y mentores en más de 10 concursos, e informes de rendición CORFO automáticos para el Centro de Innovación UC."
    },
    "detail": {
      "industry": "Centros educativos",
      "deliverables": "Matching de mentores con IA · Plataforma de informes CORFO",
      "challenge": {
        "title": "Mentorías y rendiciones armadas a mano.",
        "text": "El área de emprendimiento del Centro de Innovación UC coordina mentores, emprendedores y facilitadores en más de 10 concursos. Elegir el mentor adecuado para cada emprendimiento se hacía a mano. Además, el centro ejecuta entre 15 y 18 proyectos CORFO al año, y cada informe de rendición se compilaba a mano desde correos, planillas y conversaciones."
      },
      "solution": {
        "title": "Matching con IA y rendiciones que se arman solas.",
        "paragraphs": [
          "Construimos dos sistemas sobre el Airtable que el centro ya usaba."
        ],
        "steps": [
          { "title": "Perfiles de mentores y emprendimientos", "text": "Se leen directo desde Airtable." },
          { "title": "Matching con IA", "text": "Ordena los mejores mentores para cada emprendimiento según su perfil y asigna respetando los cupos de cada mentor.", "highlight": true },
          { "title": "Mentoría trazada", "text": "Cada sesión queda registrada y resumida." },
          { "title": "Registro para CORFO", "text": "Los equipos cargan actividades, evidencias, indicadores y flujo de caja." },
          { "title": "Informe CORFO automático", "text": "La IA redacta las glosas de las evidencias, el director las aprueba y el informe en Word se genera solo.", "highlight": true }
        ]
      },
      "impactTitle": "Lo que cambió en el área de emprendimiento",
      "about": {
        "text": "El Centro de Innovación UC promueve una cultura pro innovación y emprendimiento en la universidad y el país, conectando academia, sector privado y sector público.",
        "stats": [
          { "value": "+10", "label": "concursos con matching de mentores" },
          { "value": "2", "label": "proyectos con JAPS" }
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
