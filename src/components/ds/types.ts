/** Shared types for the design-system primitives. */

/**
 * The glyph table from components/icon/Icon.jsx, plus `menu` — the source set
 * has no hamburger, so it is drawn on the same 24×24 single-stroke grid.
 * Add a name here only after adding its `<symbol>` to IconSprite.astro.
 */
export type IconName =
  | 'arrow-right'
  | 'check'
  | 'external-link'
  | 'file-text'
  | 'instagram'
  | 'layers'
  | 'linkedin'
  | 'mail'
  | 'menu'
  | 'message-square'
  | 'play'
  | 'search'
  | 'settings'
  | 'shield'
  | 'sliders-horizontal'
  | 'sparkles'
  | 'whatsapp'
  | 'x';

export interface LogoWallItem {
  name: string;
  relationship?: string;
  src?: string;
  href?: string;
  /** Overrides the wall's logoHeight for marks whose wordmark is too fine to read at the default size. */
  height?: number;
  /** Overrides the default 140px width cap — pair with `height` for wide wordmarks. */
  maxWidth?: number;
}
