import type { LogoWallItem } from '../components/ds/types';

/**
 * Client and partner marks for the shared LogoBar. If an image is missing,
 * LogoWall falls back to the name set in DM Sans.
 *
 * To add real artwork for an item:
 *   1. Drop a transparent logo at public/logo/partners/<slug>.<ext>
 *   2. Set `src: '/logo/partners/<slug>.<ext>'` on that item.
 *   3. Optionally set `href` to make the mark clickable — an internal route
 *      (e.g. '/casos-de-exito/<slug>') opens in the same tab, an external
 *      URL (http/https) opens in a new tab automatically. Leave it unset to
 *      keep the cell non-interactive.
 */
export const logos: LogoWallItem[] = [
  {
    name: 'Go Farmer',
    relationship: 'Partner',
    src: '/logo/partners/go-farmer.png',
    href: 'https://gofarmer.ai/',
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
    name: 'Orbe Ambiental & Legal',
    relationship: 'Cliente',
    src: '/logo/partners/orbe.webp',
    href: 'https://www.orbeconsultores.com/',
    height: 36,
  },
  {
    name: 'Laku',
    relationship: 'Cliente',
    src: '/logo/partners/laku.svg',
    href: 'https://www.laku.ai/',
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
    name: 'Pontificia Universidad Católica de Chile',
    relationship: 'Cliente',
    src: '/logo/partners/universidad-catolica.png',
    href: 'https://www.uc.cl/',
    height: 64,
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
    name: 'Lumisreg',
    relationship: 'Partner',
    src: '/logo/partners/lumisreg.png',
    href: 'https://www.lumisreg.com/',
  },
  {
    name: 'Traro Group',
    relationship: 'Cliente',
    src: '/logo/partners/traro-group.png',
    href: 'https://www.trarogroup.com/',
    height: 56,
  },
  {
    name: 'Due Green',
    relationship: 'Partner',
    src: '/logo/partners/duegreen.png',
    href: 'https://duegreen.cl/',
    height: 32,
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
    name: 'Play in One',
    relationship: 'Partner',
    src: '/logo/partners/playinone.png',
    href: 'https://playinone.cl/',
  },
];
