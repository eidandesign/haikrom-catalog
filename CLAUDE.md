# Haikrom — Catálogo de Productos

Empresa de pinturas y recubrimientos arquitectónicos. Sitio web tipo landing + catálogo.

## Stack
- React + Vite + Tailwind CSS
- Sin backend (datos en JSON)
- Deploy target: Vercel

## Colores (definidos en tailwind.config.js)
- haikrom-dark-blue: #0e375d
- haikrom-brown:     #834f31
- haikrom-red:       #ee3e23
- haikrom-gray:      #b9b9b9
- haikrom-gold:      #edb038
- haikrom-cream:     #f9f6f4
- haikrom-light:     #fffcfb

## Fuentes
- **Clash Display** → `font-clash` (headings: h1–h6)
  - Self-hosted via `@font-face` en `src/index.css`
  - Archivos `.woff2` en `/public/fonts/ClashDisplay/` (Regular, Medium, Semibold, Bold, Light)
  - **NO** está en Google Fonts — nunca usar `@import` de Google Fonts para esta fuente
- **Montserrat** → `font-montserrat` (todo lo demás: body, labels, captions)
  - Cargada vía Google Fonts CDN (`@import` en `src/index.css`)
- Roboto fue eliminado — ya no se usa en ningún componente

## Design Token System

### Archivo: `src/styles/tokens.js`
Fuente única de verdad. Todos los componentes importan desde aquí.

```js
import { type as t, colors, layout, radius, semantics } from './styles/tokens'
```

### Tokens de tipografía (`type`)
| Token      | Clase Tailwind                                           | Uso semántico                                       |
|------------|----------------------------------------------------------|-----------------------------------------------------|
| `t.h1`     | `font-clash text-5xl md:text-[64px] leading-[1.2]`      | Hero / título de página                             |
| `t.h2`     | `font-clash text-4xl md:text-5xl leading-[1.2]`          | Título de sección                                   |
| `t.h3`     | `font-clash text-[28px] md:text-[32px] leading-[1.2]`   | Card / título de artículo                           |
| `t.h4`     | `font-clash text-xl md:text-2xl leading-[1.3]`           | Subsección / nombre de producto                     |
| `t.h5`     | `font-clash text-lg leading-[1.4]`                       | Heading pequeño                                     |
| `t.h6`     | `font-clash text-base leading-[1.4]`                     | Títulos de columna en footer                        |
| `t.bodyLg` | `font-montserrat text-xl leading-[1.6]`                  | Copy principal, callouts, highlights de resultados  |
| `t.body`   | `font-montserrat text-base leading-[1.5]`                | Párrafos, tags, links, inputs                       |
| `t.bodySm` | `font-montserrat text-sm leading-[1.5]`                  | Links de footer, copy secundario                    |
| `t.label`  | `font-montserrat font-medium text-[18px] leading-[1.4]`  | Texto de botones, labels de formulario              |
| `t.caption`| `font-montserrat text-xs leading-[1.5]`                  | Texto legal, meta, notas al pie                     |
| `t.overline`| `font-montserrat text-sm tracking-widest uppercase`     | Eyebrow tags, labels de sección, callout labels     |

### Regla: tokens multi-clase NO se pueden prefijar con breakpoints
`${t.h2}` es una string con múltiples clases. Tailwind no puede procesar `sm:${t.h2}`.
✅ Correcto: `className={t.h2}` o `className={`${t.h2} text-white`}`
❌ Incorrecto: `className={`sm:${t.h2}`}` (no funciona)

### Regla: No existen tokens `ui.*`
El objeto `ui` fue eliminado. Todo el texto usa `type` tokens directamente.

### Layout tokens (`layout`)
- `layout.section`       → `px-4 py-16 md:px-16`
- `layout.sectionLg`     → `px-4 py-24 md:px-16`
- `layout.container`     → `max-w-[1280px] mx-auto`
- `layout.containerWide` → `max-w-[1400px] mx-auto`

## Estructura de archivos clave
```
src/
├── App.jsx                    → Routing hash-based + Home completo
├── index.css                  → @import fonts ANTES de @tailwind
├── styles/
│   └── tokens.js              → Design tokens (type, colors, layout, radius, semantics)
├── data/
│   ├── products.json          → 15 productos, 5 categorías
│   └── site.js                → Constantes compartidas (footerColumns, LOGO)
├── pages/
│   ├── Tendencias.jsx         → Página de tendencias (acceso: /#tendencias)
│   └── ComponentLibrary.jsx   → Design system vivo (acceso: /#design-system)
└── components/
    ├── ProductDetail.jsx      → Página de producto (acceso: /#product/{id})
    ├── MobileMenu.jsx         → Menú lateral animado (Framer Motion)
    └── SocialIcons.jsx        → Íconos SVG redes sociales + SOCIAL_LINKS array
```

## Navegación (hash-based routing en App.jsx)
| URL                           | Vista                   |
|-------------------------------|-------------------------|
| `/`                           | Home / Landing          |
| `/#tendencias`                | Página de Tendencias    |
| `/#design-system`             | ComponentLibrary        |
| `/#product/interior`          | Detalle producto        |
| `/#product/exterior`          | Detalle producto        |
| `/#product/metalicas`         | Detalle producto        |
| `/#product/impermeabilizante` | Detalle producto        |
| `/#product/trafico`           | Detalle producto        |

El estado de la vista se controla con `useState` en App.jsx (`showTendencias`, `showLibrary`, `currentProduct`).
El logo en todas las páginas llama a `onBack()` para volver al home.

## Página de Tendencias (`/#tendencias`)

### Secciones
1. **Hero** — Video de Cloudinary (loop, muted, autoplay) con fallback `poster` PNG
   - URL: `https://res.cloudinary.com/duxnks729/video/upload/v1778214479/magnific_style-p-minimalist-archit_2944250119_bdibcj.mp4`
   - Fallback: `/images/tendencias_header.png`
   - Texto posicionado en esquina inferior derecha, alineación izquierda
2. **3 Trend Sections** — `min-h-screen` con imagen PNG de fondo
3. **Contacto** — Formulario (mismo que el del Home)
4. **Footer** — Mismo diseño que el footer del Home

### Paletas interactivas (PaletteCard)
- Al hacer clic en una tarjeta → crossfade animado al `image` de esa paleta
- Estado activo: fondo más oscuro + borde blanco `rgba(255,255,255,0.70)`
- Arquitectura lista para imágenes distintas por paleta: agregar campo `image` en cada entrada de `palettes[]`
- Scroll horizontal en móvil (`overflow-x-auto`)

### Imágenes de tendencias (PNG)
- `/images/tendencias_1.png` — Arquitectura natural y orgánica
- `/images/tendencias_2.png` — Frescura moderna
- `/images/tendencias_3.png` — Espacios Luminosos
- `/images/tendencias_header.png` — Fallback del video hero

## Datos compartidos

### `src/data/site.js`
```js
import { LOGO, footerColumns } from '../data/site'
```
- `LOGO` → ruta al logo SVG
- `footerColumns` → array con las 3 columnas de navegación del footer

### `src/components/SocialIcons.jsx`
```js
import { SOCIAL_LINKS, FacebookIcon, InstagramIcon, XIcon, LinkedInIcon, YouTubeIcon } from '../components/SocialIcons'
```
- `SOCIAL_LINKS` → array `[{ label, Icon, href }]` para iterar en footer/mobile menu
- Íconos individuales para uso directo si se necesita

## Design System (ComponentLibrary)
Página viva en `/#design-system` que documenta y renderiza en tiempo real:
- Token Configuration, Color Palette, Typography System
- Button Variants, Product Row Colors, Layout Tokens, Form Elements

## Categorías de productos
| ID                   | Nombre                              | bg        | texto   |
|----------------------|-------------------------------------|-----------|---------|
| interior             | Pintura Arquitectónica Interior     | #0e375d   | blanco  |
| exterior             | Pintura Arquitectónica Exterior     | #834f31   | blanco  |
| metalicas            | Primer Epóxico Rico en Zinc         | #626c79   | blanco  |
| impermeabilizante    | Impermeabilizante 100% acrílico     | #b33634   | blanco  |
| trafico              | Pintura de Tráfico                  | #cf8a00   | blanco  |

## Figma
- File key: 7T7PmRGSfkjwvpXBac1C7H
- Node Home: 316:9199
- URL: https://www.figma.com/design/7T7PmRGSfkjwvpXBac1C7H/Haikrom-Website?node-id=316-9199

### Secciones del Home (Figma node IDs)
- Hero (video bg):          316:9200
- Categorías (5 filas):     316:9232
- Beneficios / 24%:         316:9283
- Casos de éxito:           316:9301
- Tendencias arq.:          316:9336
- Formulario contacto:      316:9372
- Footer / Credits:         316:9413

### Secciones Tendencias (Figma node IDs)
- Página completa: 323:4187
- Hero (video):    323:4188

## Estado actual
- [x] Proyecto creado y corriendo en localhost:5173
- [x] Logo haikrom_logo.svg en /public/images
- [x] 15 productos en products.json
- [x] Home con todas las secciones del Figma
- [x] Catálogo con filtros funcionando
- [x] Design token system (src/styles/tokens.js)
- [x] ComponentLibrary vivo en /#design-system
- [x] Tipografía 100% tokens (sin Roboto, sin hardcoding)
- [x] Hash-based routing (Home / Tendencias / Design System / Product Detail)
- [x] 5 páginas de producto con ProductDetail.jsx
- [x] MobileMenu con Framer Motion
- [x] Página de Tendencias con video hero + paletas interactivas
- [x] Imágenes PNG de tendencias conectadas
- [x] Logo clickeable en todas las páginas → navega al home
- [x] Datos compartidos extraídos (SocialIcons.jsx, site.js)
- [x] Clash Display self-hosted (woff2 en /public/fonts/ClashDisplay/, @font-face en index.css)
- [ ] Imágenes distintas por paleta de color (actualmente todas apuntan a la misma PNG)
- [ ] URLs reales para redes sociales (actualmente href="#")
- [ ] Subir a Vercel

## Convenciones
- **Nunca** hardcodear clases de fuente o tamaño de texto — usar siempre `t.*` de tokens.js
- **Nunca** prefijar tokens con breakpoints (`sm:${t.h2}` no funciona — Tailwind no procesa multi-clase strings)
- Colores directos con `#hex` o `bg-[#hex]` solo cuando no hay clase Tailwind disponible
- El token `t.overline` se usa para eyebrows, section labels Y callout labels
- El token `t.label` cubre button text Y form labels — es el mismo estilo
- Animaciones de entrada: AOS (`data-aos="fade-up"`) para scroll reveals
- Animaciones de interacción: Framer Motion (`motion.button`, `AnimatePresence`) para hover/tap
- Videos: `autoPlay muted loop playsInline` + atributo `poster` como fallback visual
