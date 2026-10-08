/** SaaS products in English; spreads the Spanish source so tones, hrefs and spotlight skins stay aligned. */
import { soluciones as es, type Solucion } from '../soluciones';

export const soluciones: Solucion[] = [
  {
    ...es[0],
    meta: 'SaaS · Law 21.719',
    short: 'Secure, simple consent management with auditable evidence.',
    cardText: 'Consent management under Law 21.719.',
    text: 'A platform to manage consents securely and simply under Law 21.719, Chile\'s Personal Data Protection Law: registration, traceability and evidence of every consent in one place.',
    credit: 'Developed in collaboration with Lumisreg Consulting.',
    highlight: 'Comply with the new personal data protection law',
  },
  {
    ...es[1],
    meta: 'SaaS · Documentation',
    short: 'Environmental pre-feasibility reports for any land plot in Chile, from official government sources, on the same day.',
    cardText: 'Environmental pre-feasibility for land plots in Chile.',
    text: 'Environmental pre-feasibility report for land plots in Chile: it queries official government sources live (MINVU, DGA, SERNAGEOMIN, CMN, CONAF, CIREN, MOP, MMA), consolidates the constraints affecting the property and delivers a PDF with maps and a KMZ file the same day.',
    credit: 'Developed in collaboration with Due Green.',
    highlight: 'Know what your land allows, before you invest',
  },
  {
    ...es[2],
    meta: 'SaaS · Mining',
    short: 'Manage critical controls, risk matrices and fatality risks in mining operations.',
    cardText: 'Critical controls, risk matrices and fatality risks for mining.',
    text: 'Melian centralizes the management of critical controls, risk matrices and fatality risks in mining operations, with task tracking, verifications and field evidence.',
    credit: 'Developed in collaboration with Imaginería.',
    highlight: 'Manage the critical risks of your mining operation',
  },
];
