/** Stable NFC URLs. Change a card here and republish to update its destination. */
export type Card = { n: number } & (
  | { kind: 'redirect'; href: string }
  | { kind: 'contact'; href: string; name: string; company: string; role: string; email: string; phone: string; website: string; photo?: string }
  | { kind: 'pending' }
);

export const cards: Card[] = [
  { n: 1, kind: 'redirect', href: 'https://japs.ing/soluciones/' },
  {
    n: 2,
    kind: 'contact',
    href: '/media/contactos/andres-ovalle.vcf',
    name: 'Andrés Ovalle',
    company: 'Brixor',
    role: 'CEO',
    email: 'andres@brixor.cl',
    phone: '+56994164496',
    website: 'https://brixor.cl/',
    photo: '/media/contactos/andres-ovalle.jpg',
  },
  { n: 3, kind: 'pending' },
  { n: 4, kind: 'pending' },
  { n: 5, kind: 'pending' },
  { n: 6, kind: 'pending' },
];
