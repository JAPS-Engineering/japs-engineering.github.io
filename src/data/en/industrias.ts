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
    short: 'Operational risk, mine site data and efficiency in the field.',
    eyebrow: 'Industry · Mining',
    title: 'Less risk, more operational efficiency.',
    lead: 'We digitize risk management and mine site data for safer decisions and a more efficient operation.',
    capabilitiesTitle: 'What we do in mining',
    capabilities: [
      {
        icon: 'shield',
        title: 'Risk management system',
        text: 'With Melian, we centralize critical controls, risk matrices and fatality risks, with task tracking, verifications and field evidence.',
      },
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
      {
        icon: 'file-text',
        title: 'Data collection in areas without connectivity',
        text: 'We build solutions to capture field data without an internet connection and sync it when connectivity returns.',
      },
    ],
    cta: {
      title: 'Are you using data to improve your operation?',
      text: "Let's talk: we'll show you what it looks like digitized.",
    },
  },

  {
    ...base.retail,
    seoTitle: 'Software for retail and commerce',
    seoDescription:
      'JAPS Engineering automates the sales cycle for Chilean retailers: from website to quote and from ERP to dispatch, so your team sells instead of administering.',
    name: 'Retail and commerce',
    short: 'Sales, quotes, ERP and channels in a single flow.',
    eyebrow: 'Industry · Retail and commerce',
    title: 'Sell faster, with less friction.',
    lead: 'We automate the full sales cycle of your business: inventory management, customer service and inquiries, to dispatch so your team can focus on what they do best.',
    capabilitiesTitle: 'What we do in retail and commerce',
    capabilities: [
      {
        icon: 'sparkles',
        title: 'Smart websites',
        text: 'High-speed, dynamic web experiences that adapt their content to how each visitor browses, to maximize conversion.',
      },
      {
        icon: 'settings',
        title: 'Forecasting and optimization',
        text: 'Demand forecasting, KPI dashboards, process and production optimization, recommender systems.',
      },
      {
        icon: 'layers',
        title: 'ERP and sales channel connection',
        text: 'Bsale, Manager, MercadoLibre and Shopify speaking the same language as your operation.',
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
        icon: 'sliders-horizontal',
        title: 'Sales dashboards and analytics',
        text: 'Full visibility of the sales funnel: tracking per rep, pipeline velocity and automated revenue projections.',
      },
    ],
    cta: {
      title: 'Where does your sales operation lose time?',
      text: "Book a meeting and we'll review it process by process.",
    },
  },

  {
    ...base.educacion,
    seoTitle: 'Software for educational institutions',
    seoDescription:
      'JAPS Engineering builds technology for Chilean universities: academic management, institutional data and support for research and teaching.',
    name: 'Educational institutions',
    short: 'Tailor-made platforms and academic matching systems.',
    eyebrow: 'Industry · Educational institutions',
    title: 'Universities serving the country.',
    lead: 'We work alongside educational institutions to identify ways to make their processes more efficient, so every effort goes toward educating outstanding professionals with the knowledge to address local and global challenges.',
    intro: {
      title: "Every resource, toward the country's progress.",
      text: 'We work alongside educational institutions analyzing how to make their processes more efficient: so that every hour and every peso goes to training professionals of high excellence and to creating knowledge relevant to local and global challenges.',
    },
    capabilitiesTitle: '',
    capabilities: [
      {
        icon: 'search',
        title: 'Matching systems',
        text: "Custom algorithm design to connect the university's capabilities with real-world needs: matching mentors with startups, academics with industries, international research collaboration, and more.",
      },
      {
        icon: 'layers',
        title: 'Tailor-made university platforms',
        text: 'Call applications, administrative support, communication and student tracking, in a single platform.',
      },
    ],
    cta: {
      title: 'Which process would you like to automate?',
      text: "Let's talk: we start where the time savings are most evident.",
    },
  },

  {
    ...base.manufactura,
    seoTitle: 'Software for manufacturing and production',
    seoDescription:
      'JAPS Engineering connects the ERP with the shop floor for manufacturers in Chile: automatic work sequences, KPIs straight from the machine and demand forecasting.',
    name: 'Manufacturing',
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
        icon: 'sparkles',
        title: 'Inventory forecasting',
        text: 'Demand forecasts to anticipate inventory needs, plan replenishment and reduce stockouts and excess inventory.',
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
