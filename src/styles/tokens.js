// ─── Haikrom Design Tokens ────────────────────────────────────────────────────
// Single source of truth. Import { type, colors, spacing } anywhere.
// Changes here reflect automatically across all components.

// ── Typography ────────────────────────────────────────────────────────────────
// Clash Display → headings  |  Montserrat → everything else
export const type = {
  h1:       'font-clash text-5xl md:text-[64px] leading-[1.2]',
  h2:       'font-clash text-4xl md:text-5xl leading-[1.2]',
  h3:       'font-clash text-[28px] md:text-[32px] leading-[1.2]',
  h4:       'font-clash text-xl md:text-2xl leading-[1.3]',
  h5:       'font-clash text-lg leading-[1.4]',
  h6:       'font-clash text-base leading-[1.4]',
  bodyLg:   'font-montserrat text-xl leading-[1.6]',
  body:     'font-montserrat text-base leading-[1.5]',
  bodySm:   'font-montserrat text-sm leading-[1.5]',
  label:    'font-montserrat font-medium text-[18px] leading-[1.4]',
  caption:  'font-montserrat text-xs leading-[1.5]',
  overline: 'font-montserrat text-sm tracking-widest uppercase',
}

// ── Colors ────────────────────────────────────────────────────────────────────
export const colors = {
  darkBlue: '#0e375d',
  brown:    '#834f31',
  red:      '#ee3e23',
  gray:     '#b9b9b9',
  gold:     '#edb038',
  cream:    '#f9f6f4',
  light:    '#fffcfb',
}

// ── Layout ────────────────────────────────────────────────────────────────────
export const layout = {
  section:        'px-4 py-16 md:px-16',
  sectionLg:      'px-4 py-24 md:px-16',
  container:      'max-w-[1280px] mx-auto',
  containerWide:  'max-w-[1400px] mx-auto',
}

// ── Radius ────────────────────────────────────────────────────────────────────
export const radius = {
  sm:   'rounded',
  md:   'rounded-lg',
  lg:   'rounded-xl',
  full: 'rounded-full',
}

// ── Semantic mappings: what each token is used for ────────────────────────────
export const semantics = {
  type: {
    h1:       { label: 'H1 — Hero / Page Title',           example: 'Soluciones de Pintura de Vanguardia' },
    h2:       { label: 'H2 — Section Title',               example: 'Casos de éxito' },
    h3:       { label: 'H3 — Card / Article Title',        example: 'Pintura Arquitectónica' },
    h4:       { label: 'H4 — Subsection / Product Name',   example: 'Características Principales' },
    h5:       { label: 'H5 — Small Heading',               example: 'Productos destacados' },
    h6:       { label: 'H6 — Label Heading',               example: 'Ver más detalles' },
    bodyLg:   { label: 'Body LG — Lead copy, callouts, result highlights', example: 'Resultado: El proyecto mantiene su aspecto original tras más de dos años sin repintar.' },
    body:     { label: 'Body — Paragraphs, tags, links, form inputs',     example: 'Nuestra pintura 100% acrílica ofrece alta resistencia y acabado satinado lavable.' },
    bodySm:   { label: 'Body SM — Footer links, secondary copy',          example: 'Política de privacidad' },
    label:    { label: 'Label — Button text, form labels',                example: 'Descargar Ficha Técnica' },
    caption:  { label: 'Caption — Legal text, meta, footnotes',           example: '© 2026 Haikrom. Todos los derechos reservados.' },
    overline: { label: 'Overline — Eyebrow tags, section labels, callout labels (e.g. "Resultado")', example: 'Más de 25 años de experiencia' },
    h6:       { label: 'H6 — Footer column titles, small headings',       example: 'Empresa' },
  },
}
