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
  // { name: 'Play in One', relationship: 'Partner' },
  { name: 'Barron Vieyra', relationship: 'Cliente', src: '/logo/partners/BV.avif' },
  { name: 'AXAM', relationship: 'Cliente', src: '/logo/partners/axam.png' },
  { name: 'CIUC', relationship: 'Cliente' },
  { name: 'Perired', relationship: 'Cliente' },
  { name: 'Skillia', relationship: 'Cliente' },
  { name: 'Due Green', relationship: 'Partner' },
  { name: 'Lumisreg', relationship: 'Partner' },
  { name: 'Imaginería', relationship: 'Partner' },
  { name: 'Flow Extend', relationship: 'Partner' },
  { name: 'Go Farmer', relationship: 'Partner', src: '/logo/partners/go-farmer.png' },
  {
    name: 'Consenty',
    relationship: 'Producto',
    src: '/logo/partners/consenty-logo.png',
    href: 'https://consenty.japs.ing/',
  },
];
