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
- Clash Display  → font-clash      (headings: h1–h6)
- Montserrat     → font-montserrat (todo lo demás: body, labels, captions)
- Roboto fue eliminado — ya no se usa en ningún componente

## Design Token System

### Archivo: `src/styles/tokens.js`
Fuente única de verdad. Todos los componentes importan desde aquí.

```js
import { type as t, colors, layout, radius, semantics } from './styles/tokens'
```

### Tokens de tipografía (`type`)
| Token      | Clase Tailwind                                          | Uso semántico                                       |
|------------|--------------------------------------------------------|-----------------------------------------------------|
| `t.h1`     | `font-clash text-5xl md:text-[64px] leading-[1.2]`    | Hero / título de página                             |
| `t.h2`     | `font-clash text-4xl md:text-5xl leading-[1.2]`        | Título de sección                                   |
| `t.h3`     | `font-clash text-[28px] md:text-[32px] leading-[1.2]`  | Card / título de artículo                           |
| `t.h4`     | `font-clash text-xl md:text-2xl leading-[1.3]`         | Subsección / nombre de producto                     |
| `t.h5`     | `font-clash text-lg leading-[1.4]`                     | Heading pequeño                                     |
| `t.h6`     | `font-clash text-base leading-[1.4]`                   | Títulos de columna en footer                        |
| `t.bodyLg` | `font-montserrat text-xl leading-[1.6]`                | Copy principal, callouts, highlights de resultados  |
| `t.body`   | `font-montserrat text-base leading-[1.5]`              | Párrafos, tags, links, inputs                       |
| `t.bodySm` | `font-montserrat text-sm leading-[1.5]`                | Links de footer, copy secundario                    |
| `t.label`  | `font-montserrat font-medium text-[18px] leading-[1.4]`| Texto de botones, labels de formulario              |
| `t.caption`| `font-montserrat text-xs leading-[1.5]`                | Texto legal, meta, notas al pie                     |
| `t.overline`| `font-montserrat text-sm tracking-widest uppercase`   | Eyebrow tags, labels de sección, callout labels (ej. "RESULTADO") |

### Regla: No existen tokens `ui.*`
El objeto `ui` fue eliminado. Todo el texto usa `type` tokens directamente.
Si un estilo parece "especial" (callout, form label, button text), mapea al token `type` más cercano.

### Layout tokens (`layout`)
- `layout.section`       → `px-4 py-16 md:px-16`
- `layout.sectionLg`     → `px-4 py-24 md:px-16`
- `layout.container`     → `max-w-[1280px] mx-auto`
- `layout.containerWide` → `max-w-[1400px] mx-auto`

## Estructura de archivos clave
```
src/
├── App.jsx                  → Routing hash-based + Home + ComponentLibrary
├── index.css                → @import fonts ANTES de @tailwind
├── styles/
│   └── tokens.js            → Design tokens (type, colors, layout, radius, semantics)
├── data/products.json       → 15 productos, 5 categorías
├── pages/
│   └── ComponentLibrary.jsx → Design system vivo (acceso: /#design-system)
└── components/
    ├── ProductDetail.jsx    → Página de producto (acceso: /#product/{id})
    ├── MobileMenu.jsx       → Menú lateral animado (Framer Motion)
    └── ...otros
```

## Navegación (hash-based routing en App.jsx)
| URL                      | Vista                  |
|--------------------------|------------------------|
| `/`                      | Home / Landing         |
| `/#design-system`        | ComponentLibrary        |
| `/#product/interior`     | Detalle producto       |
| `/#product/exterior`     | Detalle producto       |
| `/#product/metalicas`    | Detalle producto       |
| `/#product/impermeabilizante` | Detalle producto  |
| `/#product/trafico`      | Detalle producto       |

## Design System (ComponentLibrary)
Página viva en `/#design-system` que documenta y renderiza en tiempo real:
- Token Configuration (clases exactas por token)
- Color Palette (7 colores con hex)
- Typography System — All Elements (todos los `type` tokens con preview real)
- Button Variants (primary, secondary, outline, text)
- Product Row Colors (5 categorías con sus colores exactos)
- Layout Tokens
- Form Elements
- How to Use Tokens (guía de importación)

**Si cambias un token en `tokens.js`, el cambio se refleja simultáneamente en:**
1. La página de ComponentLibrary (preview live)
2. Todos los componentes de producción (App.jsx, ProductDetail.jsx, etc.)

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
- Hero (background image): 316:9200
- Categorías (5 filas):    316:9232
- Beneficios / 24%:        316:9283
- Casos de éxito:          316:9301
- Tendencias arq.:         316:9336
- Formulario contacto:     316:9372
- Footer / Credits:        316:9413

## Estado actual
- [x] Proyecto creado y corriendo en localhost:5173
- [x] Logo haikrom_logo.svg en /public
- [x] 15 productos en products.json
- [x] Home con todas las secciones del Figma
- [x] Catálogo con filtros funcionando
- [x] Design token system (src/styles/tokens.js)
- [x] ComponentLibrary vivo en /#design-system
- [x] Tipografía 100% tokens (sin Roboto, sin hardcoding)
- [x] Hash-based routing (Home / Design System / Product Detail)
- [x] 5 páginas de producto con ProductDetail.jsx
- [x] MobileMenu con Framer Motion
- [ ] Imágenes reales conectadas (hero, categorías, contacto)
- [ ] Subir a Vercel

## Convenciones
- **Nunca** hardcodear clases de fuente o tamaño de texto — usar siempre `t.*` de tokens.js
- Colores directos con `#hex` o `bg-[#hex]` solo cuando no hay clase Tailwind disponible
- El token `t.overline` se usa para eyebrows, section labels Y callout labels (ej. "RESULTADO")
- El token `t.label` cubre button text Y form labels — es el mismo estilo
- No usar localStorage todavía (futuro: carrito)
- Animaciones de entrada: AOS (`data-aos="fade-up"`) para scroll reveals
- Animaciones de interacción: Framer Motion (`motion.button`, `AnimatePresence`) para hover/tap
