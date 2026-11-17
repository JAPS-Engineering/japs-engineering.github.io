/** Stable NFC URLs. Change a card here and republish to update its destination. */
export type Card = { n: number } & (
  | { kind: 'redirect'; href: string }
  | { kind: 'contact'; href: string; name: string; company: string; role: string; email: string; phone: string; website: string; photo?: string; logo?: string }
  | { kind: 'pending' }
);

export const cards: Card[] = [
  { n: 1, kind: 'redirect', href: 'https://japs.ing/soluciones/' },
  { n: 2, kind: 'redirect', href: 'http://brixor.cl/lista-de-espera' },
  { n: 3, kind: 'pending' },
  { n: 4, kind: 'pending' },
  { n: 5, kind: 'pending' },
  { n: 6, kind: 'pending' },
];
