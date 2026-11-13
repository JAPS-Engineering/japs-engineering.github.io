/** English case copy; client identity, IDs, photos and logos are inherited. */
import { casosCatalogo as es, type CatalogoCasos } from '../casos-destacados';

export const casosCatalogo: CatalogoCasos = {
  "barron-vieyra": {
    ...es["barron-vieyra"],
    eyebrow: "Manufacturing",
    imageAlt: "An operator reviews the production plan on screen next to a napkin machine on the plant floor.",
    title: "Barron Vieyra: automatic production planning for napkin machines",
    project: "automatic production planning for napkin machines",
    summary: "Less manual planning time, better on-time delivery and fewer critical reschedules, with automatic prioritization logic.",
    teaser: "Automatic production planning for napkin machines.",
    services: "Custom software development · Systems integration",
    paragraphs: [
      "A production-efficiency model that integrates critical variables, from extracting sales orders out of the ERP to raw-material stock and changeover times, to automatically generate optimal work sequences. An intuitive web dashboard digitized decision support and compares actual versus estimated performance through KPIs taken directly from the machines, allowing Barron Vieyra to scale its production efficiency and validate the automation logic for its future expansion projects."
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
      industry: "Manufacturing",
      deliverables: "Production-efficiency model · Web dashboard",
      challenge: {
        title: "Planning by hand could no longer keep up.",
        text: "With 4 napkin machines and more than 700 customers, production plans and the work orders for each machine were put together by hand every day, cross-checking sales orders, raw-material stock and changeover times. Every change forced last-minute rescheduling and put delivery dates at risk.",
      },
      solution: {
        title: "Automatic prioritization, connected to the ERP.",
        paragraphs: [
          "We built a production-efficiency model that brings together the critical variables, from sales orders pulled from the ERP to raw-material stock and changeover times, and automatically generates optimal work sequences.",
        ],
        steps: [
          { title: "Sales orders", text: "Pulled directly from the ERP." },
          { title: "Raw-material stock", text: "Inputs available for production." },
          { title: "Plant constraints", text: "Capacity of each machine, changeovers, shifts, overtime and late-delivery penalties." },
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
    eyebrow: "Retail and commerce",
    imageAlt: "A person works on a laptop in AXAM’s office, next to the warehouse of hygiene and cleaning products.",
    title: "AXAM: CRM and commercial management platform connected to its ERP",
    project: "CRM and commercial management platform connected to its ERP",
    summary: "Hygiene and cleaning distributor in Chile and Spain: we built its CRM with AI agents, the Mercado Libre integration and a purchasing, margins and commissions platform connected to its ERP.",
    teaser: "CRM and commercial management platform connected to its ERP.",
    services: "Systems integration · Custom software development",
    paragraphs: [
      "AXAM distributes hygiene and cleaning products in Chile and Spain: thousands of products, multiple sales channels and top-tier international suppliers. In an industry where margins matter, speed is essential and mistakes are costly, much of its daily operation consisted of manual processes that did not scale."
    ],
    aside: {
      "kicker": "Impact",
      "items": [
        "24/7 customer service and quotes on the web, WhatsApp and phone.",
        "Sales orders and purchase orders with no manual data entry.",
        "Purchasing based on demand forecasts, not on calculations by hand.",
        "Commissions and margins calculated on what was actually collected.",
        "From 300 to more than 2,000 supplier agreements under control on a single platform.",
        "Millions of pesos in recoverable claims found in a single month, which the row-by-row spreadsheet review had missed."
      ]
    },
    seo: {
      title: "AXAM: CRM and AI commercial platform",
      description: "For AXAM, a hygiene and cleaning distributor, we built its CRM with AI agents, the Mercado Libre integration and a platform connected to its ERP.",
    },
    detail: {
      industry: "Retail and commerce",
      deliverables: "CRM and AI agents · Mercado Libre integration · Management platform · Commissions and margins",
      challenge: {
        title: "Manual processes that did not scale.",
        text: "AXAM distributes hygiene and cleaning products in Chile and Spain: thousands of products, multiple sales channels and top-tier international suppliers. In an industry where margins matter, speed is essential and mistakes are costly, much of its daily operation consisted of manual processes that did not scale.",
      },
      solution: {
        title: "The whole commercial cycle in one system connected to the ERP.",
        paragraphs: [
          "We tackled the commercial operation piece by piece, with projects that connect the systems AXAM already used and automate work that used to be done by hand.",
          "Every project was built on the existing channels and systems, so the team spends less time on repetitive tasks and more time selling.",
        ],
        steps: [
          { title: "Mercado Libre and Manager+", text: "Official store; customers, prices, stock and sales orders sync with the ERP on their own." },
          { title: "CRM and AI agents", text: "Sales pipeline, follow-up by email and WhatsApp, and agents on the web, WhatsApp and phone that recommend products and send quotes.", highlight: true },
          { title: "Management platform", text: "Demand forecasting, suggested purchases and purchase orders loaded straight into Manager+.", highlight: true },
          { title: "Commissions and margins", text: "Commissions per salesperson and real margin on what was collected, without spreadsheets.", highlight: true },
        ],
      },
      impactTitle: "What changed in the operation",
      about: {
        text: "A hygiene and cleaning distributor with thousands of products and international suppliers.",
        stats: [
          { value: "2", label: "countries: Chile and Spain" },
          { value: "4", label: "projects delivered with JAPS" },
        ],
      },
    },
  },
  "dinv-uc": {
    ...es["dinv-uc"],
    client: { ...es["dinv-uc"].client, fullName: "Research Office" },
    eyebrow: "Educational institutions",
    imageAlt: "Facade of Universidad Católica’s Casa Central building in Santiago.",
    title: "Universidad Católica (DINV UC): automation and AI for research funding calls",
    project: "automation and AI for research funding calls",
    summary: "An assessment, the automation of the Avanza UC funding call and a platform for the rest of the UC Research Office’s funding calls.",
    teaser: "Automation and AI for research funding calls.",
    services: "Digital transformation consulting · Custom software development",
    paragraphs: [
      "An assessment, the automation of the Avanza UC funding call and a platform for the rest of the UC Research Office’s funding calls."
    ],
    aside: {
      "kicker": "Impact",
      "items": [
        "From weeks to minutes: eligibility checks and reviewer assignment for more than 500 applications run in about 15 minutes, and rerun whenever a criterion changes.",
        "More than 400 hours of manual work freed up in a single funding call.",
        "Every proposal assigned two reviewers on time, despite 50% more applications with the same deadline.",
        "More than 35% better match between each application and its reviewers compared with the previous year."
      ]
    },
    seo: {
      title: "UC: automation and AI for research calls",
      description: "An assessment, the automation of the Avanza UC funding call and a platform for the research funding calls managed by Universidad Católica’s Research Office.",
    },
    detail: {
      industry: "Educational institutions",
      deliverables: "Assessment and roadmap · Avanza UC automation · Application assistant · Management dashboard",
      challenge: {
        title: "Weeks of manual work for an entire team.",
        text: "The UC Research Office (DINV) runs internal and external funding calls: Avanza UC, Fondecyt, ANID, Corfo. Avanza alone received more than 500 applications this year, 50% more than the previous one, with the same deadline. Checking each one against the call’s rules, with more than 1,400 letters of support, and assigning it two reviewers free of conflicts of interest from more than 350 candidates took an entire team weeks of work, with the information spread across Airtable, Excel and email.",
      },
      solution: {
        title: "From an assessment to a system for every funding call.",
        paragraphs: [
          "We started with an assessment of the DINV’s processes and a prioritized roadmap. The first project automated Avanza UC; the next ones bring what we learned to the rest of the funding calls and to the office’s leadership.",
        ],
        steps: [
          { title: "Assessment and roadmap", text: "A map of processes and data sources, and a portfolio of solutions with costs and timelines." },
          { title: "Automatic eligibility checks", text: "Each application is checked against the call’s rules." },
          { title: "Reviewer assignment", text: "Automatic, detecting conflicts of interest and co-authorships from actual publications.", highlight: true },
          { title: "AI pre-evaluation", text: "An initial score to support the reviewers.", highlight: true },
          { title: "Next stages", text: "An application assistant with UC sign-in for Fondecyt, ANID and Corfo, and a dashboard of funding calls and awarded funds for the office’s leadership (in development)." },
        ],
      },
      impactTitle: "What changed at the Research Office",
      about: {
        text: "The Research Office of Pontificia Universidad Católica de Chile helps faculty across its schools apply for and manage research funding.",
        stats: [
          { value: "20", label: "faculties" },
          { value: "4", label: "projects with JAPS" },
        ],
      },
    },
  },
  "ciuc": {
    ...es["ciuc"],
    eyebrow: "Educational institutions",
    client: {
      ...es["ciuc"].client,
      name: "UC Innovation Center",
      fullName: "UC Innovation Center",
      logo: { ...es["ciuc"].client.logo, alt: "UC Innovation Center" },
    },
    imageAlt: "Exposed-concrete building of the UC Anacleto Angelini Innovation Center.",
    title: "UC Innovation Center: AI for its mentor network and its CORFO reports",
    project: "AI for its mentor network and its CORFO reports",
    summary: "Two projects for the entrepreneurship area: automatic matching between ventures and mentors across more than 10 competitions, and CORFO expense reports generated automatically.",
    teaser: "AI for its mentor network and its CORFO reports.",
    services: "Custom software development",
    paragraphs: [
      "Two projects for the entrepreneurship area: automatic matching between ventures and mentors across more than 10 competitions, and CORFO expense reports generated automatically."
    ],
    aside: {
      "kicker": "Impact",
      "items": [
        "Mentor matching is no longer done by hand: the system proposes and assigns the best mentor for each venture.",
        "Every mentoring session is tracked and summarized.",
        "A CORFO report generated automatically for each of the 15 to 18 projects a year, from data already validated by the director."
      ]
    },
    seo: {
      title: "UC Innovation Center: mentors and CORFO",
      description: "AI matching between ventures and mentors across more than 10 competitions, and automatic CORFO expense reports for the UC Innovation Center.",
    },
    detail: {
      industry: "Educational institutions",
      deliverables: "AI mentor matching · CORFO reporting platform",
      challenge: {
        title: "Mentoring and expense reports put together by hand.",
        text: "The entrepreneurship area of the UC Innovation Center coordinates mentors, entrepreneurs and facilitators across more than 10 competitions. Choosing the right mentor for each venture was done by hand. On top of that, the center runs 15 to 18 CORFO projects a year, and each expense report was compiled by hand from emails, spreadsheets and conversations.",
      },
      solution: {
        title: "AI matching and expense reports that put themselves together.",
        paragraphs: [
          "We built two systems on top of the Airtable the center already used.",
        ],
        steps: [
          { title: "Mentor and venture profiles", text: "Read directly from Airtable." },
          { title: "AI matching", text: "Ranks the best mentors for each venture by profile and assigns them within each mentor’s availability.", highlight: true },
          { title: "Tracked mentoring", text: "Every session is recorded and summarized." },
          { title: "CORFO records", text: "Teams log activities, evidence, indicators and cash flow." },
          { title: "Automatic CORFO report", text: "AI drafts the descriptions of the evidence, the director approves them and the Word report is generated on its own.", highlight: true },
        ],
      },
      impactTitle: "What changed in the entrepreneurship area",
      about: {
        text: "The UC Innovation Center promotes a culture of innovation and entrepreneurship at the university and across the country, connecting academia, the private sector and the public sector.",
        stats: [
          { value: "+10", label: "competitions with mentor matching" },
          { value: "2", label: "projects with JAPS" },
        ],
      },
    },
  },
};
