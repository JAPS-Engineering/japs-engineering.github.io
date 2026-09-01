---
version: alpha
name: JAPS-design-system
description: Sistema de marca de JAPS derivado del análisis de MiniMax — premium, editorial, dual entre CTAs negras en píldora y canvas blanco, con tarjetas de producto en gradientes vibrantes. Se conserva íntegramente el sistema tipográfico (DM Sans), de color, spacing y componentes de MiniMax, pero la navegación y el hero se rediseñan tomando la estructura de Mastercard — nav flotante en píldora y marco de hero en "stadium" redondeado — sin importar la paleta cálida ni la tipografía propietaria de Mastercard.
notes: "Documento de trabajo derivado de ref/DESIGN-minimax.md + ref/DESIGN-mastercard.md (solo header/nav y hero). No editar minimax/mastercard originales; iterar aquí."

colors:
  primary: "#0a0a0a"
  on-primary: "#ffffff"
  primary-soft: "#181e25"
  brand-coral: "#ff5530"
  brand-magenta: "#ea5ec1"
  brand-blue: "#1456f0"
  brand-blue-mid: "#3b82f6"
  brand-blue-deep: "#1d4ed8"
  brand-blue-700: "#17437d"
  brand-cyan: "#3daeff"
  brand-blue-200: "#bfdbfe"
  brand-purple: "#a855f7"
  canvas: "#ffffff"
  surface: "#f7f8fa"
  surface-soft: "#f2f3f5"
  hairline: "#e5e7eb"
  hairline-soft: "#eaecf0"
  ink: "#0a0a0a"
  ink-strong: "#000000"
  charcoal: "#222222"
  slate: "#45515e"
  steel: "#5f5f5f"
  stone: "#8e8e93"
  muted: "#a8aab2"
  success-bg: "#e8ffea"
  success-text: "#1ba673"
  on-dark: "#ffffff"
  footer-bg: "#0a0a0a"

typography:
  hero-display:
    fontFamily: DM Sans
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -2px
  display-lg:
    fontFamily: DM Sans
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1.5px
  heading-lg:
    fontFamily: DM Sans
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -1px
  heading-md:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.5px
  heading-sm:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.30
  card-title:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.40
  subtitle:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.50
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
  body-md-bold:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.50
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  body-sm-medium:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.50
  caption:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.70
  caption-bold:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.50
  micro:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
  button-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.40

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  xxxl: 24px
  hero: 32px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section-sm: 48px
  section: 64px
  section-lg: 80px
  hero: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
  button-primary-pressed:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
    border: "1px solid {colors.ink}"
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "11px 24px"
    border: "1px solid {colors.hairline}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    padding: "8px 0"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
    border: "1px solid {colors.hairline}"
  product-card-coral:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-magenta:
    backgroundColor: "{colors.brand-magenta}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-blue:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-purple:
    backgroundColor: "{colors.brand-purple}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  product-card-photo:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-feature:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
  card-recommendation:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  promo-cta-card:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.hero}"
    padding: "{spacing.section}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline}"
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "2px solid {colors.brand-blue-deep}"
  text-input-error:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px solid #d45656"
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
    height: 36px
    border: "1px solid {colors.hairline}"
  segmented-tab:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.button-md}"
    rounded: "0"
    padding: "{spacing.md} {spacing.lg}"
    border: "0 0 2px transparent solid"
  segmented-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    border: "0 0 2px {colors.ink} solid"
  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline}"
  pill-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.primary}"
  badge-success:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success-text}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-new:
    backgroundColor: "{colors.brand-coral}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-beta:
    backgroundColor: "{colors.brand-blue-200}"
    textColor: "{colors.brand-blue-deep}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-code:
    backgroundColor: "{colors.brand-blue-200}"
    textColor: "{colors.brand-blue-deep}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  promo-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.lg}"
  data-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  data-table-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.steel}"
    typography: "{typography.caption-bold}"
    padding: "{spacing.sm} {spacing.md}"
  data-table-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
    border: "0 0 1px {colors.hairline-soft} solid"
  sidebar-nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
  sidebar-nav-item-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
  doc-toc-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xs} 0"
  ai-product-tile:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  footer-region:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
  nav-pill-floating:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "16px 40px"
    border: "1px solid {colors.hairline-soft}"
    shadow: "rgba(0, 0, 0, 0.04) 0px 4px 24px 0px"
    topOffset: "24px"
  hero-band-marketing:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.hero}"
    padding: "{spacing.hero}"
  product-matrix-grid:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.hero}"
    padding: "{spacing.xxl}"
  ai-product-matrix:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  docs-prose-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.charcoal}"
    typography: "{typography.body-md}"
    padding: "{spacing.xxl}"
  models-comparison-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
  testimonial-stat-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    padding: "{spacing.xl}"
---

## Overview

JAPS toma como base el sistema de MiniMax: dualidad entre canvas blanco / negro editorial para marketing y tarjetas de producto en gradiente vibrante para cada línea de producto. Se conserva íntegro el sistema de color, tipografía (DM Sans), spacing, radios y todos los componentes de MiniMax — **excepto dos piezas puntuales**, rediseñadas con la estructura de Mastercard:

1. **Navegación** — en vez del nav sticky full-width con borde inferior de MiniMax, se usa un **nav pill flotante** (`nav-pill-floating`): contenedor en píldora blanca, separado ~24px del borde superior del viewport, con sombra sutil nivel 1 y logo + links + CTA dentro.
2. **Hero / "face"** — en vez del hero centrado sobre canvas plano de MiniMax, el hero se enmarca en un **contenedor "stadium"** (`hero-band-marketing` rediseñado): fondo `{colors.ink}` (negro, para imagen/video de marca), radio `{rounded.hero}` (32px) en las cuatro esquinas, sin sombra, ocupando ~60-70% de la altura del viewport con gutter lateral.

> **Nota de diseño**: se reutiliza `{rounded.hero}` (32px, ya definido en la escala de MiniMax) para el marco del hero en vez de introducir el 40px propio de Mastercard — mantiene una única escala de radios coherente. No se importa la paleta cálida (Ink Black `#141413`, Canvas Cream `#F3F0EE`, Signal Orange) ni la tipografía MarkForMC de Mastercard: toda la superficie sigue en DM Sans sobre la paleta de MiniMax.

**Key Characteristics:**
- Stark monochrome palette — black ({colors.primary}) and white ({colors.canvas}) — broken open by saturated brand-color gradient cards
- Distinct product-color encoding: each model line has its own vibrant brand color (coral, magenta, blue, purple)
- DM Sans across the entire system; Inter as fallback
- Pill-shaped buttons ({rounded.full}) and pill-shaped tabs everywhere; rectangular forms only inside data tables and dense docs
- **Nav flotante en píldora** (tomado de Mastercard) en vez de barra sticky full-width
- **Hero enmarcado en "stadium"** de 32px de radio (estructura de Mastercard, tipografía y color de MiniMax) en vez de hero sobre canvas plano
- Documentation surfaces use a 3-column layout: left sidebar nav, center prose body, right table-of-contents
- Black promo banners ({colors.primary}) above the nav for time-bound brand moments

## Colors

> Heredado íntegro de MiniMax — ver `ref/DESIGN-minimax.md` para el detalle completo de uso por token. Ningún color de Mastercard (Ink Black, Canvas Cream, Signal Orange, Link Blue) se incorpora a este sistema.

### Brand & Accent
- **Brand Coral** ({colors.brand-coral}): Signature high-impact accent, producto insignia y badges "NEW".
- **Brand Magenta** ({colors.brand-magenta}): Identidad secundaria de producto (audio/música).
- **Brand Blue** ({colors.brand-blue}): Identidad de producto de video; accento azul primario.
- **Brand Blue Deep** ({colors.brand-blue-deep}): Activación de formularios, énfasis de enlaces.
- **Brand Blue 700** ({colors.brand-blue-700}): Texto de tags y referencias en documentación.
- **Brand Cyan** ({colors.brand-cyan}): Azul atmosférico para gradientes y decoración.
- **Brand Blue 200** ({colors.brand-blue-200}): Badges de código, fondos de tags informativos.
- **Brand Purple** ({colors.brand-purple}): Identidad de producto minoritaria; pareja de gradiente con magenta.

### Surface
- **Canvas White** ({colors.canvas}): Fondo de página y superficie de tarjeta primaria.
- **Surface** ({colors.surface}): Fondos de sección sutiles, estado reposo de search-pill, nav-item activo.
- **Surface Soft** ({colors.surface-soft}): Divisiones de sección más silenciosas.
- **Hairline** ({colors.hairline}): Borde de input de 1px y divisor primario.
- **Hairline Soft** ({colors.hairline-soft}): Divisor de fila de tabla y borde del nav pill flotante.

### Text
- **Ink** ({colors.ink}): Texto de titular y CTA primario — el ancla casi-negra de la marca.
- **Ink Strong** ({colors.ink-strong}): Negro puro para banners promo y displays hero.
- **Charcoal** ({colors.charcoal}): Texto de cuerpo sobre superficies claras.
- **Slate** ({colors.slate}): Texto secundario, metadata.
- **Steel** ({colors.steel}): Texto terciario, headers de tabla, items inactivos de sidebar.
- **Stone** ({colors.stone}): Captions apagados y labels de tab inactivos.
- **Muted** ({colors.muted}): Texto de enlaces de footer y labels des-enfatizados.

### Semantic
- **Success Background** ({colors.success-bg}): Verde pálido para badges de éxito y confirmaciones.
- **Success Text** ({colors.success-text}): Verde profundo para labels de badge de éxito.
- Tonos de error derivan de un rojo `#d45656` usado en el borde de input en estado error.

## Typography

### Font Family
**DM Sans** (primaria): Sans geométrica variable. Usada en cada superficie, cada rol. Fallbacks: Inter, Helvetica Neue, Helvetica, Arial.

DM Sans se mantiene como única tipografía del sistema — no se introduce MarkForMC ni Sofia Sans de Mastercard, ni siquiera en el nav o el hero rediseñados. Escala limpiamente desde displays hero de 80px (donde el tracking de -2px crea densidad tipo revista) hasta labels micro de 12px.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 600 | 1.10 | -2px | Headline dentro del hero-frame en stadium |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.5px | Section openers, major page heroes |
| `{typography.heading-lg}` | 40px | 600 | 1.20 | -1px | Sub-page headlines |
| `{typography.heading-md}` | 32px | 600 | 1.25 | -0.5px | Subsection headers |
| `{typography.heading-sm}` | 24px | 600 | 1.30 | 0 | Card titles, feature headers |
| `{typography.card-title}` | 20px | 600 | 1.40 | 0 | Product-card titles, feature-tile headers |
| `{typography.subtitle}` | 18px | 500 | 1.50 | 0 | Section subtitles, lead body |
| `{typography.body-md}` | 16px | 400 | 1.50 | 0 | Primary body text |
| `{typography.body-md-bold}` | 16px | 700 | 1.50 | 0 | Body emphasis |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Secondary body, table cells, navigation |
| `{typography.body-sm-medium}` | 14px | 500 | 1.50 | 0 | Nav pill links, active sidebar nav, button labels |
| `{typography.caption}` | 13px | 400 | 1.70 | 0 | Documentation captions, fine print |
| `{typography.caption-bold}` | 13px | 600 | 1.50 | 0 | Badge labels, table-header text |
| `{typography.micro}` | 12px | 400 | 1.50 | 0 | Footer microcopy, chip labels |
| `{typography.button-md}` | 14px | 600 | 1.40 | 0 | Pill button labels |

### Principles
- **Tight hero leading** (1.10) y tracking negativo agresivo en tamaños display crean un despliegue tipográfico de calidad revista.
- **Generous body leading** (1.50) mantiene cómoda la documentación de formato largo.
- **Weight discipline:** 400 (body), 500 (medium emphasis), 600 (headings/buttons), 700 (strong inline emphasis).
- **Single typeface** strategy — nunca mezclar DM Sans con otra sans-serif, tampoco al adoptar la estructura de Mastercard.

## Layout

### Spacing System
- **Base unit**: 4px (incremento primario de 8px).
- **Tokens**: `{spacing.xxs}` (4px) · `{spacing.xs}` (8px) · `{spacing.sm}` (12px) · `{spacing.md}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.xxxl}` (40px) · `{spacing.section-sm}` (48px) · `{spacing.section}` (64px) · `{spacing.section-lg}` (80px) · `{spacing.hero}` (96px).
- **Section rhythm**: páginas de marketing separan en `{spacing.hero}` (96px) sobre el fold, luego `{spacing.section-lg}` (80px) debajo; documentación se ajusta a `{spacing.section}` (64px).
- **Nav pill**: padding interno `16px 40px`, separado 24px del borde superior del viewport (patrón tomado de Mastercard).
- **Hero-frame**: padding `{spacing.hero}` (96px), altura ~60-70% del viewport, gutter lateral ~48px (patrón tomado de Mastercard, valores propios de MiniMax).

### Grid & Container
- Marketing pages usan max-width 1280px con gutters de 32px.
- Homepage product matrix: fila de 4 columnas de tarjetas gradiente con radio 32px, cada una ~280–320px de ancho.
- AI Product Matrix: grid de 4 columnas con tarjetas blancas de radio 16px.
- Documentation surfaces: layout de 3 columnas — sidebar nav (~220px), prose body (~720px max-width), TOC (~180px).
- Token Plan / pricing: tabs de 2 columnas sobre grid de tarjetas de 3 columnas.

### Whitespace Philosophy
Las páginas de marketing dan a la fotografía de producto y a las tarjetas de color un respiro generoso — `{spacing.hero}` (96px) sobre el fold crea oxígeno visual para el hero-frame. Dentro de documentación, el whitespace se ajusta drásticamente.

## Elevation & Depth

El sistema corre predominantemente plano. La elevación se reserva para paneles sticky, dropdowns, el nav pill flotante y la rara CTA flotante.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | Sin sombra; borde `{colors.hairline}` | Tarjetas por defecto, filas de tabla, form inputs |
| 1 (subtle) | `rgba(0, 0, 0, 0.04) 0px 4px 24px 0px` | **`nav-pill-floating`** (patrón Mastercard), card-recommendation, tiles con hover-elevated |
| 2 (card) | `rgba(0, 0, 0, 0.08) 0px 4px 6px 0px` | Standard feature cards, dropdowns |
| 3 (atmospheric) | `rgba(0, 0, 0, 0.08) 0px 0px 22px 0px` | Glow difuso en tarjetas de producto destacadas |
| 4 (modal) | `rgba(36, 36, 36, 0.08) 0px 12px 16px -4px` | Modals, confirmation dialogs, sticky panels |

### Decorative Depth
- Las tarjetas de producto gradiente cargan su propia profundidad atmosférica vía gradientes radiales internos — sin sombra necesaria.
- El **hero-frame** no lleva sombra (patrón Mastercard): se apoya directamente sobre el canvas, la fuerza visual viene del radio de 32px y el contraste de fondo negro/canvas.
- El **nav-pill-floating** lleva sombra nivel 1 — "apenas ahí", suficiente para despegarlo del canvas.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Code chips, micro-controls |
| `{rounded.sm}` | 6px | Compact controls, table cells |
| `{rounded.md}` | 8px | Inputs, secondary buttons, search pill |
| `{rounded.lg}` | 12px | Documentation cards, recommendation tiles |
| `{rounded.xl}` | 16px | Standard feature cards, AI product tiles |
| `{rounded.xxl}` | 20px | Larger feature panels |
| `{rounded.xxxl}` | 24px | AI product tile feature variants |
| `{rounded.hero}` | 32px | Vibrant gradient product cards, promo CTA strip, **hero-frame marketing (stadium)** |
| `{rounded.full}` | 9999px | All buttons, all pill tabs, badges, **nav-pill-floating** |

No se introduce un radio de 40px propio de Mastercard: el hero-frame reutiliza `{rounded.hero}` (32px) para mantener una única escala coherente.

### Photography Geometry
- Vibrant product cards use 32px corner softening — distinto de los 16px de las tarjetas blancas quietas.
- El hero-frame usa el mismo 32px que las tarjetas de producto — refuerza que es "un momento de marca destacado", igual que el patrón de Mastercard (donde el hero comparte radio con sus tarjetas de servicio pill).
- Avatar circles (raro, en testimonios) son `{rounded.full}` — círculos perfectos.

## Components

> Per the no-hover policy, hover states are NOT documented. Default and pressed/active states only.

### Buttons

**`button-primary`** — Black pill primary CTA, la acción dominante en todas las superficies.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.
- Pressed state `button-primary-pressed` sube a `{colors.charcoal}`.
- Disabled state `button-primary-disabled` usa fondo `{colors.hairline}` y texto `{colors.muted}`.

**`button-secondary`** — Pill outlined secundaria, emparejada con primary en patrones dual-CTA de hero.
- Background transparent, text `{colors.ink}`, border `1px solid {colors.ink}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.

**`button-tertiary`** — Pill blanca más silenciosa, usada para nav terciaria y CTAs informativas. Se reutiliza como CTA dentro del `nav-pill-floating`.
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, typography `{typography.button-md}`, padding `11px 24px`, rounded `{rounded.full}`.

**`button-link`** — Enlace de texto inline estilizado como botón sutil.
- Background transparent, text `{colors.ink}`, typography `{typography.body-sm-medium}`, padding `8px 0`.

**`button-icon-circular`** — Botón circular utilitario de 36×36px (flechas de carrusel, compartir, copiar).
- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.full}`.

### Vibrant Product Cards

**`product-card-coral`**, **`product-card-magenta`**, **`product-card-blue`**, **`product-card-purple`**, **`product-card-photo`** — heredados sin cambios de MiniMax. Background en color de marca respectivo, text `{colors.on-dark}`, rounded `{rounded.hero}`, padding `{spacing.xxl}`.

### Cards & Containers

**`card-base`**, **`card-feature`**, **`card-recommendation`**, **`promo-cta-card`**, **`ai-product-tile`** — heredados sin cambios de MiniMax.

### Inputs & Forms

**`text-input`**, **`text-input-focused`**, **`text-input-error`**, **`search-pill`** — heredados sin cambios de MiniMax.

### Tabs

**`segmented-tab`** + **`segmented-tab-active`**, **`pill-tab`** + **`pill-tab-active`** — heredados sin cambios de MiniMax.

### Badges & Status

**`badge-success`**, **`badge-new`**, **`badge-beta`**, **`badge-code`**, **`promo-banner`** — heredados sin cambios de MiniMax.

### Data Tables

**`data-table`**, **`data-table-header`**, **`data-table-row`** — heredados sin cambios de MiniMax.

### Navigation *(rediseñado — estructura de Mastercard)*

**`nav-pill-floating`** — Barra de navegación principal, en píldora flotante en vez del nav sticky full-width de MiniMax.
- Background `{colors.canvas}`, border `1px solid {colors.hairline-soft}`, rounded `{rounded.full}`, padding `16px 40px`, shadow nivel 1 (`rgba(0, 0, 0, 0.04) 0px 4px 24px 0px`).
- Flota separada ~24px del borde superior del viewport (no toca y=0), centrada horizontalmente, max-width alineado al container de 1280px.
- Contenido: logo/wordmark JAPS a la izquierda, grupo de links centrado en `{typography.body-sm-medium}` `{colors.ink}` (sin subrayado), CTA a la derecha usando `button-primary` (acción principal) o `button-tertiary` (acción secundaria).
- Reemplaza tanto al "Top Navigation (Marketing)" como al "Top Navigation (Documentation/Platform)" de MiniMax — en superficies de documentación, el pill incorpora el `search-pill` centrado igual que antes, solo cambia el contenedor de barra sticky a píldora flotante.

**`sidebar-nav-item`** + **`sidebar-nav-item-active`**, **`doc-toc-item`** — heredados sin cambios de MiniMax (no forman parte del "header").

### Signature Components

**`hero-band-marketing`** *(rediseñado — estructura de Mastercard, tipografía/color MiniMax)* — Marco de hero tipo "stadium".
- Background `{colors.ink}` (negro, superficie para imagen/video de marca o gradiente de producto destacado), text `{colors.on-dark}`, rounded `{rounded.hero}` (32px en las cuatro esquinas), padding `{spacing.hero}` (96px).
- Full-bleed con gutter lateral ~48px (viewport width menos gutters), altura ~60–70% del viewport en desktop.
- Sin sombra — se apoya directamente sobre el canvas, igual que el hero de Mastercard.
- Headline centrado dentro del frame en `{typography.hero-display}` (80px, -2px tracking), subtítulo en `{typography.subtitle}` `{colors.on-dark}` a 80% de opacidad, fila de botones centrada (`button-primary` + `button-secondary`, ambos con variante clara para contraste sobre fondo oscuro).
- Reemplaza el hero centrado sobre canvas plano de MiniMax — la headline ya no flota libre sobre blanco, vive dentro de un contenedor enmarcado.

**`product-matrix-grid`**, **`ai-product-matrix`**, **`docs-prose-block`**, **`models-comparison-table`**, **`testimonial-stat-row`**, **`footer-region`**, **`footer-link`** — heredados sin cambios de MiniMax.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (black) as the dominant CTA.
- Reserve product brand colors ONLY for product-identity moments.
- Pair `{rounded.hero}` (32px) gradient cards / hero-frame with `{rounded.xl}` (16px) white cards in the same viewport.
- Apply `{rounded.full}` to every button, every pill tab, every badge, **y al nav-pill-floating**.
- Use `{typography.hero-display}` (80px) con -2px letter-spacing para hero displays, ahora dentro del marco stadium.
- **Flotar el nav en píldora, separado del borde superior** — no anclarlo full-width a y=0.
- **Enmarcar el hero en un contenedor de 32px de radio sin sombra** — no dejarlo full-bleed cuadrado sobre canvas plano.

### Don't
- Don't use brand-coral or brand-magenta on body text or large surfaces.
- Don't soften corners on buttons (anything less than `{rounded.full}`).
- Don't introduce a second display typeface — ni siquiera al adoptar la estructura de Mastercard (nada de MarkForMC/Sofia Sans).
- Don't reduce hero leading below 1.10.
- Don't apply heavy shadows on white cards.
- Don't put gradient backgrounds on standard buttons.
- **Don't** importar la paleta cálida de Mastercard (Ink Black `#141413`, Canvas Cream `#F3F0EE`, Signal Orange `#CF4500`) — la paleta sigue siendo la de MiniMax.
- **Don't** volver el nav-pill-floating full-width ni pegarlo al borde superior — pierde el gesto flotante que se tomó de Mastercard.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero drops to 40px. Nav pill colapsa a logo + hamburguesa. Product matrix horizontal-scroll. Footer 1-column accordion. |
| Mobile (large) | 480 – 767px | Igual que small pero AI product matrix renderiza 2-up. |
| Tablet | 768 – 1023px | 2-column AI product matrix. Nav pill muestra logo + 2–3 links + CTA. Documentation sidebar colapsa a drawer. |
| Desktop | 1024 – 1279px | Full 4-column product matrix; 3-column docs grid; nav pill completo con todos los links. |
| Wide Desktop | ≥ 1280px | Gutters de hero más anchos, fotografía de producto más grande, sidebar fija de 220px. |

### Touch Targets
- Pill buttons rendean a 38–40px de altura efectiva — sube a 44px en mobile vía padding override.
- Circular icon buttons: 36×36px desktop → 44×44px en mobile.
- Form inputs a 40px de altura; sube a 44px en mobile.
- **Nav-pill-floating**: ~48px de altura efectiva en todos los breakpoints; en mobile colapsa a logo + hamburguesa + CTA, manteniendo la forma pill.

### Collapsing Strategy
- **Promo banner** se mantiene full-width; colapsa a una línea en < 480px con truncado.
- **Nav pill flotante**: pill completo (logo + links + CTA) → pill compacto (logo + hamburguesa) bajo 1024px. La forma pill se preserva en todos los breakpoints — nunca se vuelve barra full-width.
- **Documentation grid**: 3-column desktop → sidebar-drawer en < 1024px → single-column con sidebar colapsable en < 768px.
- **Product matrix**: 4-column desktop → horizontal-scroll en < 1024px.
- **AI Product Matrix**: 4-column → 2-column en tablet → 1-column en mobile.
- **Hero-frame**: mantiene su radio de 32px en todos los breakpoints; la altura y el padding interno se reducen, y `{typography.hero-display}` (80px) → 56px en < 1024px → 40px en < 768px → 32px en < 480px.
- **Stats strip**: 4-column → 2×2 en < 768px → 1-column en < 480px.

### Image Behavior
- Product card imagery usa contenido fotográfico con overlays de gradiente interno; lazy-loaded bajo el fold.
- AI product tile illustrations son SVG-based.
- El fondo del hero-frame (imagen/video de marca) respeta el radio de 32px en todos los tamaños — nunca se recorta a esquinas cuadradas.

## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly (`{colors.primary}`, `{component-name}-pressed`, `{rounded.full}`) — do not paraphrase.
3. Add new variants as separate `components:` entries (`-pressed`, `-disabled`, `-active`).
4. Default to `{typography.body-md}` for body and `{typography.subtitle}` for emphasis.
5. Keep brand colors confined to product-card identity.
6. Pill-shaped buttons (`{rounded.full}`) always.
7. **Al iterar sobre nav o hero, mantener el gesto estructural de Mastercard (flotante / enmarcado) pero nunca su paleta o tipografía** — cualquier ajuste de color/tipo debe volver a los tokens de este documento.

## Known Gaps

- Valores específicos de dark-mode no están definidos aún.
- Timings de animación/transición no extraídos; recomendado 150–200ms ease.
- Estado de éxito de validación de formularios no capturado explícitamente más allá de defaults.
- Paleta de resaltado de sintaxis de código no formalizada.
- El comportamiento exacto de transición del nav pill al hacer scroll (si se oculta, se compacta, o permanece fijo) no está definido — a decidir en la siguiente iteración.
