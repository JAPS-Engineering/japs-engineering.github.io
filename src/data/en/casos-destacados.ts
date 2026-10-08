/** English case copy; client identity, IDs, photos and logos are inherited. */
import { casosCatalogo as es, type CatalogoCasos } from '../casos-destacados';

export const casosCatalogo: CatalogoCasos = {
  "barron-vieyra": {
    ...es["barron-vieyra"],
    eyebrow: "Manufacturing",
    title: "How Barron Vieyra improved its production planning for napkin machines",
    project: "production planning for napkin machines",
    summary: "Less manual planning time, better on-time delivery and fewer critical reschedules, with automatic prioritization logic.",
    teaser: "Automatic production planning for napkin machines.",
    paragraphs: [
      "A production-efficiency model that integrates critical variables — from extracting sales orders out of the ERP to raw-material stock and changeover times — to automatically generate optimal work sequences. An intuitive web dashboard digitized decision support and compares actual versus estimated performance through KPIs taken directly from the machines, allowing Barron Vieyra to scale its production efficiency and validate the automation logic for its future expansion projects."
    ],
    footnote: "Barrón Vieyra International: over 29 years as a specialist in high-tech nonwoven fabrics for healthcare, retail and mining, with operations in Chile, Peru and Colombia.",
    aside: {
      "kicker": "Impact",
      "items": [
        "Less manual time spent on planning and preparing work orders",
        "Better on-time delivery",
        "Fewer critical last-minute rescheduling events",
        "Installed capacity optimized through automatic prioritization"
      ]
    },
  },
  "axam": {
    ...es["axam"],
    eyebrow: "Retail and commerce · Distribution",
    title: "AXAM: automation and AI for commercial operations",
    project: "automation and AI for the commercial operation",
    summary: "Hygiene and cleaning distributor in Chile and Spain: we integrated Mercado Libre and Manager+, built an AI sales assistant over their catalog and a commissions and margins tool.",
    teaser: "Automation and AI for commercial operations.",
    paragraphs: [
      "AXAM distributes hygiene and cleaning products in Chile and Spain: thousands of products, multiple sales channels and top-tier international suppliers. In an industry where margins matter, speed is essential and mistakes are costly, much of its daily operation consisted of manual processes that did not scale."
    ],
    aside: {
      "kicker": "Projects delivered",
      "items": [
        "Mercado Libre and Manager+ management and integration",
        "AI sales assistant over its product catalog",
        "Management platform",
        "Commission and margin calculation tool"
      ]
    },
  },
  "dinv-uc": {
    ...es["dinv-uc"],
    eyebrow: "Educational institutions",
    title: "Universidad Católica: AVANZA UC program automations",
    project: "AVANZA UC program automations",
    summary: "We automate processes for Universidad Católica’s AVANZA UC program, working with DINV UC.",
    teaser: "AVANZA UC program automations.",
    paragraphs: [
      "We developed automations for Universidad Católica’s AVANZA UC program, working with DINV UC."
    ],
    aside: {
      "kicker": "Client and project",
      "items": [
        "Universidad Católica",
        "AVANZA UC program",
        "Process automation"
      ]
    },
  },
  "ciuc": {
    ...es["ciuc"],
    eyebrow: "Educational institutions",
    title: "CIUC: mentor network platform",
    project: "mentor network platform",
    summary: "Together with the UC Innovation Center we created a platform that connects mentors, entrepreneurs and facilitators across more than 10 calls, with every mentoring session tracked and summarized.",
    teaser: "Mentor network platform for the UC entrepreneurship ecosystem.",
    paragraphs: [
      "Together with the entrepreneurship area of the UC Innovation Center, we built a mentoring platform that connects mentors, entrepreneurs and facilitators across more than 10 competitions. Every mentoring session is tracked and summarized, so no information is lost."
    ],
    aside: {
      "kicker": "Organization",
      "items": [
        "CIUC promotes a culture of innovation and entrepreneurship at the university and across the country, connecting academia, the private sector and the public sector."
      ]
    },
  },
};
