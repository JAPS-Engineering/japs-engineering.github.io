/** Industry pages in English. Each entry spreads its Spanish twin so slugs,
 *  icons, tones, images and hrefs cannot diverge; only reader-facing text is
 *  overridden. data/content.ts asserts parity at build time. */
import { industrias as es, type Industria } from '../industrias';
import type { IndustrySlug } from '../../i18n/routes';

const base = Object.fromEntries(es.map((industria) => [industria.slug, industria])) as Record<IndustrySlug, Industria>;

export const industrias: Industria[] = [
  {
    ...base.mineria,
    seoTitle: 'Software for mining in Chile',
    seoDescription:
      'JAPS Engineering digitizes operational risk management and mine site data for mining in Chile: dashboards, operating KPIs and ERP integration.',
    name: 'Mining',
    summary: 'Operational risk management, mine site data and efficiency in the field.',
    short: 'Operational risk, mine site data and efficiency in the field.',
    eyebrow: 'Industry · Mining',
    title: 'Less risk, more operational control.',
    lead: 'We digitize risk management and mine site data for safer decisions and a more efficient operation.',
    capabilitiesTitle: 'What we do in mining',
    capabilities: [
      {
        icon: 'sliders-horizontal',
        title: 'Operating dashboards and KPIs',
        text: 'Mine site data and critical supplies visible in real time, so you decide on evidence rather than spreadsheets.',
      },
      {
        icon: 'layers',
        title: 'Field data and ERP integration',
        text: 'We connect field systems, maintenance and ERP into a single version of the truth.',
      },
    ],
    cta: {
      title: 'Where is the risk that still lives in spreadsheets?',
      text: "Let's talk: we'll show you what it looks like digitized.",
    },
  },

  {
    ...base.retail,
    seoTitle: 'Software for retail and commerce',
    seoDescription:
      'JAPS Engineering automates the sales cycle for Chilean retailers: from website to quote and from ERP to dispatch, so your team sells instead of administering.',
    name: 'Retail and commerce',
    summary: 'Sales, quotes, ERP and channels connected in a single commercial flow.',
    short: 'Sales, quotes, ERP and channels in a single flow.',
    eyebrow: 'Industry · Retail and commerce',
    title: 'Sell faster, with less friction.',
    lead: 'We automate the full sales cycle — from website to quote, from ERP to dispatch — so your team sells instead of administering.',
    capabilitiesTitle: 'What we do in retail and commerce',
    capabilities: [
      {
        icon: 'sparkles',
        title: 'Smart websites',
        text: 'High-speed, dynamic web experiences that adapt their content to how each visitor browses, to maximize conversion.',
      },
      {
        icon: 'sliders-horizontal',
        title: 'Sales dashboards and analytics',
        text: 'Full visibility of the sales funnel: tracking per rep, pipeline velocity and automated revenue projections.',
      },
      {
        icon: 'file-text',
        title: 'Automated quotes',
        text: 'Technical and commercial quotes as PDFs in seconds, with advanced pricing rules and real-time stock.',
      },
      {
        icon: 'check',
        title: 'Calendars and integration',
        text: 'Smart scheduling flows that qualify the prospect before booking a call with the sales team.',
      },
      {
        icon: 'layers',
        title: 'ERP and sales channel connection',
        text: 'Bsale, Manager, MercadoLibre and Shopify speaking the same language as your operation.',
      },
      {
        icon: 'settings',
        title: 'Forecasting and optimization',
        text: 'Demand forecasting, KPI dashboards, process and production optimization, recommender systems.',
      },
    ],
    highlight: {
      ...base.retail.highlight!,
      kicker: 'Featured case',
      title: 'AXAM: automation and AI for the commercial operation',
      text: 'Hygiene and cleaning distributor in Chile and Spain: we integrated Mercado Libre and Manager+, built an AI sales assistant over their catalog and a commissions and margins tool.',
      linkLabel: 'See the full case →',
      itemsKicker: 'Projects delivered',
      items: [
        'Mercado Libre and Manager+ management and integration',
        'AI sales assistant over their catalog',
        'Management platform',
        'Commissions and margins calculation tool',
      ],
    },
    cta: {
      title: 'Where does your sales operation lose time?',
      text: "Book a meeting and we'll review it process by process.",
    },
  },

  {
    ...base.educacion,
    seoTitle: 'Software for higher education',
    seoDescription:
      'JAPS Engineering builds technology for Chilean universities: academic management, institutional data and support for research and teaching.',
    name: 'Education',
    summary:
      'Tailor-made platforms and matching systems for institutions that educate and generate knowledge.',
    short: 'Tailor-made platforms and academic matching systems.',
    eyebrow: 'Industry · Education',
    title: 'Universities self-propelled by AI.',
    lead: 'We firmly believe in using technology to help universities on their path to shaping future professionals and generating knowledge.',
    intro: {
      title: "Every resource, toward the country's progress.",
      text: 'We work alongside educational institutions analyzing how to make their processes more efficient: so that every hour and every peso goes to training professionals of high excellence and to creating knowledge relevant to local and global challenges.',
    },
    capabilitiesTitle: '',
    capabilities: [
      {
        icon: 'search',
        title: 'Matching systems',
        text: "State-of-the-art algorithms to connect the university's capabilities with real needs: for example, taking in startups and companies and giving them mentoring and training.",
      },
      {
        icon: 'layers',
        title: 'Tailor-made university platforms',
        text: 'Call applications, administrative support, communication and student tracking, in a single platform.',
      },
    ],
    highlight: {
      ...base.educacion.highlight!,
      kicker: 'Featured case',
      title: 'CIUC: mentor network platform',
      text: 'Together with the UC Innovation Center we created a platform that connects mentors, entrepreneurs and facilitators across more than 10 calls, with every mentoring session tracked and summarized.',
      linkLabel: 'See the full case →',
      itemsKicker: 'Organization',
      items: [
        'CIUC promotes a culture of innovation and entrepreneurship in the university and the country, connecting academia, the private sector and the public sector.',
      ],
    },
    cta: {
      title: "Which of your institution's processes deserves AI?",
      text: "Let's talk: we start where the time savings are most evident.",
    },
  },

  {
    ...base.manufactura,
    seoTitle: 'Software for manufacturing and production',
    seoDescription:
      'JAPS Engineering connects the ERP with the shop floor for manufacturers in Chile: automatic work sequences, KPIs straight from the machine and demand forecasting.',
    name: 'Manufacturing',
    summary: 'Automatic production planning and decisions based on data straight from the machine.',
    short: 'Automatic planning and decisions with machine data.',
    eyebrow: 'Industry · Manufacturing',
    title: 'Plan your production with data, not spreadsheets.',
    lead: 'From ERP to shop floor: optimal work sequences, generated automatically.',
    capabilitiesTitle: 'What we do in manufacturing',
    capabilities: [
      {
        icon: 'settings',
        title: 'Automatic production planning',
        text: 'Models that combine sales orders, raw material stock and changeover times to generate optimal work sequences.',
      },
      {
        icon: 'sliders-horizontal',
        title: 'KPIs straight from the machine',
        text: 'Dashboards that compare actual versus estimated performance, with no manual data entry.',
      },
      {
        icon: 'sparkles',
        title: 'Demand forecasting',
        text: 'Projections that anticipate orders and prevent stockouts and last-minute rescheduling.',
      },
      {
        icon: 'layers',
        title: 'ERP – shop floor integration',
        text: 'A single source of truth across sales, warehouse and production.',
      },
    ],
    highlight: {
      ...base.manufactura.highlight!,
      kicker: 'Featured case',
      title: 'Barron Vieyra: production planning for napkin machines',
      text: 'Less manual planning time, better on-time delivery and fewer critical reschedules, with automatic prioritization logic.',
      linkLabel: 'See the full case →',
      itemsKicker: 'Impact',
      items: [
        'Less manual time spent planning and preparing work orders',
        'Better on-time delivery performance',
        'Fewer critical last-minute reschedules',
        'Installed capacity optimized with automatic prioritization',
      ],
    },
    cta: {
      title: 'How much does each last-minute reschedule cost?',
      text: "Let's talk: we start by measuring your current planning.",
    },
  },

  {
    ...base.transporte,
    seoTitle: 'Software for transport and logistics',
    seoDescription:
      'JAPS Engineering brings fleet, deliveries and compliance into a single panel connected to your sales systems, for transport and logistics operations in Chile.',
    name: 'Transport and logistics',
    summary: 'Fleet visibility, delivery optimization and integration with your sales systems.',
    short: 'Fleet visibility, deliveries and sales integration.',
    eyebrow: 'Industry · Transport and logistics',
    title: 'Total visibility of your logistics operation.',
    lead: 'Fleet, deliveries and compliance in a single panel, connected to your sales systems.',
    capabilitiesTitle: 'What we do in transport and logistics',
    capabilities: [
      {
        icon: 'search',
        title: 'Fleet and route tracking',
        text: 'The status of every vehicle and every delivery, in real time and without phone calls.',
      },
      {
        icon: 'settings',
        title: 'Dispatch optimization',
        text: 'Automatic assignment and sequencing of deliveries by capacity, time windows and priority.',
      },
      {
        icon: 'sliders-horizontal',
        title: 'Compliance dashboards',
        text: 'On-time, cost-per-delivery and fleet utilization KPIs to decide on evidence.',
      },
      {
        icon: 'layers',
        title: 'ERP and sales channel integration',
        text: 'Orders flow from the sales channel to dispatch with no re-keying.',
      },
    ],
    cta: {
      title: 'How many deliveries do you lose sight of each week?',
      text: "Let's talk: visibility is the first project and the fastest to implement.",
    },
  },
];
