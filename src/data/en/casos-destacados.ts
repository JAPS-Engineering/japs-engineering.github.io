/** English case copy; client identity, IDs, photos and logos are inherited. */
import { casosCatalogo as es, type CatalogoCasos } from '../casos-destacados';

export const casosCatalogo: CatalogoCasos = {
  "barron-vieyra": {
    ...es["barron-vieyra"],
    eyebrow: "Manufacturing",
    imageAlt: "An operator reviews the production plan on screen next to a napkin machine on the plant floor.",
    title: "How Barron Vieyra improved its production planning for napkin machines",
    project: "production planning for napkin machines",
    summary: "Less manual planning time, better on-time delivery and fewer critical reschedules, with automatic prioritization logic.",
    teaser: "Automatic production planning for napkin machines.",
    services: "Custom development · ERP integration",
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
    seo: {
      title: "Barron Vieyra: production planning",
      description: "How Barron Vieyra automated production planning for its napkin machines with an ERP-connected efficiency model and a web dashboard of machine KPIs.",
    },
    detail: {
      industry: "Manufacturing · nonwoven fabrics",
      deliverables: "Production-efficiency model · Web dashboard",
      challenge: {
        title: "Planning by hand could no longer keep up.",
        text: "Production plans and work orders were put together by hand, cross-checking sales orders, raw-material stock and the changeover times of each machine. Every change forced last-minute rescheduling and put delivery dates at risk.",
      },
      solution: {
        title: "Automatic prioritization, connected to the ERP.",
        paragraphs: [
          "We built a production-efficiency model that brings together the critical variables — from sales orders pulled from the ERP to raw-material stock and changeover times — and automatically generates optimal work sequences.",
          "A web dashboard digitized decision support: it compares actual versus estimated performance with KPIs taken directly from the machines, and validates the automation logic for upcoming expansion projects.",
        ],
        steps: [
          { title: "Sales orders", text: "Pulled directly from the ERP." },
          { title: "Raw-material stock", text: "Inputs available for production." },
          { title: "Changeover times", text: "Format changes on each machine." },
          { title: "Optimal work sequence", text: "Generated automatically by the production-efficiency model.", highlight: true },
          { title: "Actual vs. estimated performance", text: "Web dashboard with KPIs taken directly from the machines.", highlight: true },
        ],
      },
      impactTitle: "What changed on the plant floor",
      about: {
        text: "A specialist in high-tech nonwoven fabrics for healthcare, retail and mining.",
        stats: [
          { value: "+29", label: "years as a nonwoven fabrics specialist" },
          { value: "3", label: "countries: Chile, Peru and Colombia" },
          { value: "3", label: "sectors: healthcare, retail and mining" },
        ],
      },
    },
  },
  "axam": {
    ...es["axam"],
    eyebrow: "Retail and commerce · Distribution",
    imageAlt: "A person works on a laptop in AXAM’s office, next to the warehouse of hygiene and cleaning products.",
    title: "AXAM: automation and AI for commercial operations",
    project: "automation and AI for the commercial operation",
    summary: "Hygiene and cleaning distributor in Chile and Spain: we integrated Mercado Libre and Manager+, built an AI sales assistant over their catalog and a commissions and margins tool.",
    teaser: "Automation and AI for commercial operations.",
    services: "API integration · Custom development",
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
    seo: {
      title: "AXAM: automation and AI for sales",
      description: "How AXAM, a hygiene and cleaning distributor in Chile and Spain, integrated Mercado Libre and Manager+ and added an AI sales assistant over its catalog.",
    },
    detail: {
      industry: "Retail and commerce · Distribution",
      deliverables: "Integrations · AI sales assistant · Management platform",
      challenge: {
        title: "Manual processes that did not scale.",
        text: "AXAM distributes hygiene and cleaning products in Chile and Spain: thousands of products, multiple sales channels and top-tier international suppliers. In an industry where margins matter, speed is essential and mistakes are costly, much of its daily operation consisted of manual processes that did not scale.",
      },
      solution: {
        title: "Integrations and AI on top of the existing operation.",
        paragraphs: [
          "We tackled the commercial operation piece by piece, with projects that connect the systems AXAM already used and automate work that used to be done by hand.",
          "Every project was built on the existing channels and systems, so the team spends less time on repetitive tasks and more time selling.",
        ],
        steps: [
          { title: "Mercado Libre and Manager+", text: "Sales channel management and integration with its management system." },
          { title: "Management platform", text: "Commercial operation data in one place." },
          { title: "AI sales assistant", text: "Answers questions about its catalog to support the sales team.", highlight: true },
          { title: "Commissions and margins", text: "A tool that calculates them without manual spreadsheets.", highlight: true },
        ],
      },
      impactTitle: "Four projects on one operation",
      about: {
        text: "A distributor of hygiene and cleaning products in Chile and Spain, with thousands of products, multiple sales channels and top-tier international suppliers.",
        stats: [
          { value: "2", label: "countries: Chile and Spain" },
          { value: "4", label: "projects delivered with JAPS" },
        ],
      },
    },
  },
  "dinv-uc": {
    ...es["dinv-uc"],
    eyebrow: "Educational institutions",
    imageAlt: "Facade of Universidad Católica’s Casa Central building in Santiago.",
    title: "Universidad Católica: AVANZA UC program automations",
    project: "AVANZA UC program automations",
    summary: "We automate processes for Universidad Católica’s AVANZA UC program, working with DINV UC.",
    teaser: "AVANZA UC program automations.",
    services: "Process automation",
    paragraphs: [
      "We developed automations for Universidad Católica’s AVANZA UC program, working with DINV UC."
    ],
    aside: {
      "kicker": "Client and project",
      "items": [
        "Universidad Católica, with DINV UC",
        "AVANZA UC program",
        "Process automation"
      ]
    },
    seo: {
      title: "UC: AVANZA UC program automations",
      description: "We automated processes for Universidad Católica’s AVANZA UC program together with DINV UC. See the challenge, the solution and how we worked.",
    },
    detail: {
      industry: "Education · Educational institutions",
      deliverables: "AVANZA UC program automations",
      challenge: {
        title: "A program with processes to automate.",
        text: "Universidad Católica’s AVANZA UC program brings together operational processes that the team in charge handled manually, alongside DINV UC.",
      },
      solution: {
        title: "Automations built around the program.",
        paragraphs: [
          "We worked with DINV UC to identify which program processes could be automated, and developed the corresponding automations.",
        ],
        steps: [
          { title: "Discovery with DINV UC", text: "We identified the program processes that could be automated." },
          { title: "Automation development", text: "We built the automations on the prioritized processes.", highlight: true },
          { title: "Go-live", text: "The automations run for the program team.", highlight: true },
        ],
      },
      impactTitle: "A project with DINV UC",
      about: {
        text: "Pontificia Universidad Católica de Chile is one of the country’s leading universities. AVANZA UC is one of its programs, developed together with DINV UC.",
      },
    },
  },
  "ciuc": {
    ...es["ciuc"],
    eyebrow: "Educational institutions",
    client: { ...es["ciuc"].client, fullName: "UC Innovation Center" },
    imageAlt: "Exposed-concrete building of the UC Anacleto Angelini Innovation Center.",
    title: "CIUC: mentor network platform",
    project: "mentor network platform",
    summary: "Together with the UC Innovation Center we created a platform that connects mentors, entrepreneurs and facilitators across more than 10 calls, with every mentoring session tracked and summarized.",
    teaser: "Mentor network platform for the UC entrepreneurship ecosystem.",
    services: "Custom development",
    paragraphs: [
      "Together with the entrepreneurship area of the UC Innovation Center, we built a mentoring platform that connects mentors, entrepreneurs and facilitators across more than 10 competitions. Every mentoring session is tracked and summarized, so no information is lost."
    ],
    aside: {
      "kicker": "Impact",
      "items": [
        "More than 10 competitions on a single platform",
        "Every mentoring session tracked and summarized",
        "Mentors, entrepreneurs and facilitators connected"
      ]
    },
    seo: {
      title: "CIUC: mentor network platform",
      description: "With the UC Innovation Center we built a platform that connects mentors, entrepreneurs and facilitators across 10+ competitions, with every session tracked.",
    },
    detail: {
      industry: "Education · Entrepreneurship",
      deliverables: "Mentoring platform",
      challenge: {
        title: "Mentoring spread across more than 10 competitions.",
        text: "The entrepreneurship area of the UC Innovation Center coordinates mentors, entrepreneurs and facilitators across more than 10 competitions. Without a shared platform, the information from each mentoring session was at risk of being lost.",
      },
      solution: {
        title: "One platform for the whole mentor network.",
        paragraphs: [
          "We created a mentoring platform that brings mentors, entrepreneurs and facilitators together in one place, for every competition.",
          "Every mentoring session is tracked and summarized, so the CIUC team keeps the history of each venture.",
        ],
        steps: [
          { title: "Competitions", text: "More than 10 calls on a single platform." },
          { title: "Mentors and entrepreneurs", text: "Connected within each competition." },
          { title: "Facilitators", text: "Support and coordinate the process." },
          { title: "Tracked mentoring", text: "Every session is recorded on the platform.", highlight: true },
          { title: "A summary of every session", text: "So no information is lost.", highlight: true },
        ],
      },
      impactTitle: "What changed in the mentor network",
      about: {
        text: "CIUC promotes a culture of innovation and entrepreneurship at the university and across the country, connecting academia, the private sector and the public sector.",
        stats: [
          { value: "+10", label: "competitions on a single platform" },
          { value: "3", label: "roles connected: mentors, entrepreneurs and facilitators" },
        ],
      },
    },
  },
};
