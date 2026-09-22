import type { LogoWallItem } from '../components/ds/types';

/**
 * The ten marks from LogoBar.dc.html. No logo files were supplied with the
 * design system, so LogoWall falls back to each name set in DM Sans.
 *
 * To add real artwork for an item:
 *   1. Drop an SVG (transparent background) at public/logo/partners/<slug>.svg
 *   2. Set `src: '/logo/partners/<slug>.svg'` on that item.
 *   3. Optionally set `href` to make the mark clickable — an internal route
 *      (e.g. '/casos-de-exito/<slug>') opens in the same tab, an external
 *      URL (http/https) opens in a new tab automatically. Leave it unset to
 *      keep the cell non-interactive.
 */
export const logos: LogoWallItem[] = [
  {
    name: 'Play in One',
    relationship: 'Partner',
    src: '/logo/partners/playinone.png',
    href: 'https://playinone.cl/',
  },
  {
    name: 'Barron Vieyra',
    relationship: 'Cliente',
    src: '/logo/partners/BV.avif',
    href: 'https://barronvieyra.com/',
  },
  {
    name: 'AXAM',
    relationship: 'Cliente',
    src: '/logo/partners/axam.png',
    href: 'https://axam.cl/',
  },
  {
    name: 'CIUC',
    relationship: 'Cliente',
    src: '/logo/partners/ciuc.svg',
    href: 'https://centrodeinnovacion.uc.cl/',
    height: 48,
    maxWidth: 320,
  },
  {
    name: 'Perired',
    relationship: 'Cliente',
    src: '/logo/partners/perired.svg',
    href: 'https://perired.cl/home',
  },
  {
    name: 'Skilia',
    relationship: 'Partner',
    src: '/logo/partners/skilia.png',
    href: 'https://skilia.cl/',
  },
  {
    name: 'Due Green',
    relationship: 'Partner',
    src: '/logo/partners/duegreen.png',
    href: 'https://duegreen.cl/',
    height: 32,
  },
  {
    name: 'Lumisreg',
    relationship: 'Partner',
    src: '/logo/partners/lumisreg.png',
    href: 'https://www.lumisreg.com/',
  },
  {
    name: 'Imaginería',
    relationship: 'Partner',
    src: '/logo/partners/imagineria.svg',
    href: 'http://imagineria.consulting/',
    height: 32,
    maxWidth: 220,
  },
  {
    name: 'Aeonix',
    relationship: 'Partner',
    src: '/logo/partners/aeonix.svg',
    href: 'https://www.aeonix-us.tech/',
    height: 32,
    maxWidth: 220,
  },
  {
    name: 'Go Farmer',
    relationship: 'Partner',
    src: '/logo/partners/go-farmer.png',
    href: 'https://gofarmer.ai/',
  },
  {
    name: 'Laku',
    relationship: 'Cliente',
    src: '/logo/partners/laku.svg',
    href: 'https://www.laku.ai/',
  },
];
