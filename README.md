# JAPS Engineering - Landing Page

Landing page oficial y sitio web principal de **JAPS Engineering**, empresa especializada en soluciones de ingeniería e inteligencia artificial.

## 🌐 Sitio Web

**URL:** [https://japs.ing](https://japs.ing)

## 📋 Descripción

Sitio web corporativo de JAPS Engineering que presenta los servicios de la empresa en inteligencia artificial, automatización de procesos y soluciones de ultrasonido a través de Sonicali. El sitio está diseñado como una landing page moderna, responsive y optimizada para SEO.

## ✨ Características Principales

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Modo Oscuro**: Soporte automático para preferencias de color del sistema
- **SEO Optimizado**: Meta tags completos, schema.org estructurado, sitemap y robots.txt
- **Accesibilidad**: Skip links, navegación por teclado y etiquetas ARIA
- **Performance**: Sitio estático sin dependencias pesadas
- **Carrusel de Clientes**: Presentación interactiva de empresas colaboradoras
- **Formulario de Contacto**: Integración con WhatsApp para contacto inmediato
- **Página de Links**: Página estilo linktree para enlaces importantes

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, Media Queries
- **JavaScript Vanilla**: Sin frameworks, código nativo
- **Feather Icons**: Iconografía ligera
- **Google Fonts**: Tipografías Inter, Poppins, Space Grotesk, Sofia Sans
- **GitHub Pages**: Hosting estático

## 📁 Estructura del Proyecto

```
japs-engineering.github.io/
├── index.html              # Página principal
├── links.html              # Página de enlaces (linktree)
├── style.css               # Estilos principales
├── linktree.css            # Estilos de la página de links
├── robots.txt              # Configuración para crawlers
├── sitemap.xml             # Sitemap para SEO
├── CNAME                   # Configuración de dominio personalizado
├── empresas/               # Logos de empresas clientes
│   ├── axam.png
│   ├── don maxi.png
│   └── sonicali.png
├── profiles/               # Fotos del equipo
│   ├── checho.png
│   ├── jean.png
│   ├── pabs.png
│   └── rir.png
├── logo_black.svg          # Logo en color negro
├── logo_white.svg          # Logo en color blanco
├── iso_black.svg           # Isotipo en color negro
└── iso_white.svg           # Isotipo en color blanco
```

## 🎨 Secciones del Sitio

### Página Principal (`index.html`)

1. **Hero Section**: Banner principal con call-to-action
2. **Clientes**: Carrusel de empresas colaboradoras
3. **Quiénes Somos**: Información sobre la empresa y equipo
4. **Servicios**: 
   - Consultoría en Inteligencia Artificial
   - Soluciones de Ultrasonido (Sonicali)
5. **Proyectos**: Casos de éxito destacados
6. **Contacto**: Formulario integrado con WhatsApp

### Página de Links (`links.html`)

Página estilo linktree con enlaces importantes y redes sociales.

## 🔧 Configuración y Desarrollo

### Requisitos

No se requieren dependencias especiales. El sitio es completamente estático.

### Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/japs-engineering/japs-engineering.github.io.git
cd japs-engineering.github.io
```

2. Abre el archivo `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

3. Accede a `http://localhost:8000` en tu navegador

## 🎯 Características Técnicas

### SEO y Optimización

- Meta tags completos (Open Graph, Twitter Cards)
- Schema.org estructurado (Organization, FAQPage)
- Sitemap XML actualizado
- Canonical URLs
- Hreflang para internacionalización
- Robots.txt configurado
- Imágenes con atributos `loading="lazy"` y `decoding="async"`

### Accesibilidad

- Skip links para navegación por teclado
- Etiquetas ARIA en elementos interactivos
- Navegación por teclado en el carrusel
- Contraste adecuado de colores
- Texto alternativo en imágenes

### Performance

- CSS y JavaScript minimalistas
- Iconos SVG ligeros (Feather Icons)
- Imágenes optimizadas
- Sin dependencias externas pesadas
- Caché de fuentes con preconnect

### Responsive Design

- Breakpoints principales:
  - Desktop: > 992px
  - Tablet: 768px - 992px
  - Mobile: < 768px
- Menú simplificado en móvil
- Grid adaptable para todas las secciones

## 🎨 Personalización

### Colores

Los colores principales están definidos en variables CSS en `style.css`:

```css
:root {
    --primary-blue: #000203;
    --accent-green: #4fa773;
    --light-gray: #F4F7F9;
    --dark-gray: #1b1b1b;
    --white: #FFFFFF;
    --black: #000000;
}
```

### Fuentes

- **Heading**: Poppins, Sofia Sans Semi Condensed
- **Body**: Inter
- **Iconos**: Feather Icons

### Modo Oscuro

El modo oscuro se activa automáticamente según las preferencias del sistema del usuario mediante `@media (prefers-color-scheme: dark)`.

## 📱 Integraciones

### WhatsApp

El formulario de contacto redirige a WhatsApp con un mensaje pre-formateado que incluye:
- Nombre
- Empresa
- Email
- Mensaje del usuario

**Número:** +569 9318 3282

### Redes Sociales

- LinkedIn: [linkedin.japs.ing](https://linkedin.japs.ing)
- Instagram: [instagram.japs.ing](https://instagram.japs.ing)

## 📧 Contacto

- **Email**: contacto@japs.ing
- **Teléfono**: +569 9318 3282
- **Sitio Web**: https://japs.ing

## 👥 Equipo

- **Pablo Landerretche** - CEO (Ingeniero Industrial Químico)
- **Alonso Rivera** - CTO (Ingeniero Eléctrico - Robótica y Automatización)
- **Sergio Urzúa** - CFO (Ingeniero Industrial Químico)
- **Jean Philipe Fuentes** - Lead Developer (Ingeniero de Software)

## 🚀 Deploy

El sitio está hosteado en **GitHub Pages** con dominio personalizado (`japs.ing`).

### Proceso de Deploy

1. Push a la rama `main` del repositorio
2. GitHub Pages despliega automáticamente
3. El dominio personalizado está configurado mediante `CNAME`

### Actualización del Sitemap

Cuando se actualiza contenido, recuerda actualizar la fecha de `lastmod` en `sitemap.xml`.

## 📝 Notas de Desarrollo

- El sitio usa JavaScript vanilla, sin frameworks
- Los iconos se inicializan con `feather.replace()` al cargar la página
- El carrusel de clientes incluye soporte para navegación por teclado
- Los botones del carrusel se ocultan automáticamente si no hay overflow

## 📄 Licencia

© 2025 JAPS Engineering SpA. Todos los derechos reservados.

## 🔗 Enlaces Relacionados

- [Página Principal](https://japs.ing)
- [Página de Links](https://japs.ing/links)
- [Sonicali](https://www.linkedin.com/company/98181195/)

---

**Desarrollado con ❤️ por el equipo de JAPS Engineering**

