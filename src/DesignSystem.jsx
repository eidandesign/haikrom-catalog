/* ─────────────────────────────────────────────
   Haikrom — Design System
   Acceso: añade ?ds a la URL en dev
   ───────────────────────────────────────────── */

/* ── Helpers ───────────────────────────────── */
function Section({ title, children }) {
  return (
    <section className="mb-24">
      <h2 className="font-clash text-[28px] leading-[1.2] text-haikrom-dark-blue border-b border-haikrom-gray pb-3 mb-10">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Subsection({ title, children }) {
  return (
    <div className="mb-10">
      <p className="font-clash text-[18px] text-haikrom-dark-blue mb-5 pb-1 border-b border-haikrom-cream">{title}</p>
      {children}
    </div>
  )
}

function Label({ children }) {
  return (
    <p className="font-roboto text-[11px] text-haikrom-gray mt-2 tracking-widest uppercase">{children}</p>
  )
}

function Code({ children }) {
  return (
    <code className="font-roboto text-xs bg-haikrom-cream text-haikrom-dark-blue px-2 py-0.5 rounded">{children}</code>
  )
}

function Chip({ label, value }) {
  return (
    <div className="bg-haikrom-cream rounded px-3 py-1.5 flex items-center gap-2">
      <span className="font-roboto text-xs text-haikrom-gray">{label}:</span>
      <span className="font-roboto text-xs text-haikrom-dark-blue font-medium">{value}</span>
    </div>
  )
}

/* ── DATA ──────────────────────────────────── */

const colorPalette = [
  {
    name: 'Dark Blue', token: 'haikrom-dark-blue', base: '#0e375d',
    usage: 'Primario — nav, Product Interior, textos de sección',
    shades: [
      { label: '50',  hex: '#e8f0f7' },
      { label: '100', hex: '#c4d5e7' },
      { label: '200', hex: '#7aa4c7' },
      { label: '500', hex: '#0e375d' },
      { label: '700', hex: '#0b2c4a' },
      { label: '900', hex: '#071d30' },
    ],
  },
  {
    name: 'Red', token: 'haikrom-red', base: '#ee3e23',
    usage: 'CTA principal — "Ver Producto", "Solicita asesoría"',
    shades: [
      { label: '50',  hex: '#fde9e5' },
      { label: '100', hex: '#f9bcb3' },
      { label: '200', hex: '#f48f7f' },
      { label: '500', hex: '#ee3e23' },
      { label: '700', hex: '#c9341d' },
      { label: '900', hex: '#8f2513' },
    ],
  },
  {
    name: 'Brown', token: 'haikrom-brown', base: '#834f31',
    usage: 'Product row Exterior',
    shades: [
      { label: '50',  hex: '#f3ece5' },
      { label: '100', hex: '#d9b9a3' },
      { label: '200', hex: '#b78768' },
      { label: '500', hex: '#834f31' },
      { label: '700', hex: '#6b4028' },
      { label: '900', hex: '#4a2c1b' },
    ],
  },
  {
    name: 'Crimson', token: '—', base: '#b33634',
    usage: 'Product row Impermeabilizante',
    shades: [
      { label: '50',  hex: '#f8e8e7' },
      { label: '100', hex: '#e8b0af' },
      { label: '200', hex: '#d47877' },
      { label: '500', hex: '#b33634' },
      { label: '700', hex: '#922b2a' },
      { label: '900', hex: '#661d1c' },
    ],
  },
  {
    name: 'Gold', token: 'haikrom-gold', base: '#edb038',
    usage: 'Product row Tráfico',
    shades: [
      { label: '50',  hex: '#fdf4e0' },
      { label: '100', hex: '#f9dfa3' },
      { label: '200', hex: '#f3ca66' },
      { label: '500', hex: '#edb038' },
      { label: '700', hex: '#c9942e' },
      { label: '900', hex: '#8f6820' },
    ],
  },
  {
    name: 'Gray', token: 'haikrom-gray', base: '#b9b9b9',
    usage: 'Product row Metálicas, bordes, labels',
    shades: [
      { label: '50',  hex: '#f5f5f5' },
      { label: '100', hex: '#e0e0e0' },
      { label: '200', hex: '#cccccc' },
      { label: '500', hex: '#b9b9b9' },
      { label: '700', hex: '#8a8a8a' },
      { label: '900', hex: '#5a5a5a' },
    ],
  },
  {
    name: 'Cream', token: 'haikrom-cream', base: '#f9f6f4',
    usage: 'Fondos claros, CTAs secundarios',
    shades: [
      { label: '50',  hex: '#fdfcfb' },
      { label: '100', hex: '#f9f6f4' },
      { label: '200', hex: '#ede7e2' },
      { label: '500', hex: '#d8cec7' },
      { label: '700', hex: '#b5a89e' },
      { label: '900', hex: '#8a7e76' },
    ],
  },
]

const typeScale = [
  { name: 'Display',      font: 'Clash Display', size: '64px', weight: '500', lh: '1.2', usage: 'Hero heading',              sample: 'Soluciones de Pintura de Vanguardia' },
  { name: 'Heading 1',    font: 'Clash Display', size: '48px', weight: '500', lh: '1.2', usage: 'Títulos de sección (h2)',    sample: 'Casos de éxito' },
  { name: 'Heading 2',    font: 'Clash Display', size: '32px', weight: '500', lh: '1.2', usage: 'Tarjetas producto (h2)',     sample: 'Pintura Arquitectónica' },
  { name: 'Heading 3',    font: 'Clash Display', size: '20px', weight: '500', lh: '1.5', usage: 'Usos heading / side texts',  sample: 'Usos · Más en durabilidad comparada con la competencia.' },
  { name: 'Body 1',       font: 'Montserrat',    size: '20px', weight: '400', lh: '1.5', usage: 'Tag hero, botones hero CTA', sample: 'Más de 25 años de experiencia' },
  { name: 'Body 2',       font: 'Montserrat',    size: '16px', weight: '400', lh: '1.5', usage: 'Descripción, tags, ver más', sample: 'Pintura acrílica 100% resistente, acabado satinado lavable.' },
  { name: 'Button',       font: 'Montserrat',    size: '20px', weight: '500', lh: '1.4', usage: 'Botones CTA (Ficha + Ver Producto)', sample: 'Ver Producto · Descargar Ficha Técnica' },
  { name: 'Caption',      font: 'Roboto',        size: '12px', weight: '400', lh: '1.4', usage: 'Legales / notas',           sample: 'Al suscribirte, aceptas nuestra política de privacidad.' },
]

const spacingScale = [
  { token: '1',  px: '4px',   usage: 'py-1 — padding vertical tag pill' },
  { token: '2',  px: '8px',   usage: 'gap-2 — entre icono y texto en botón' },
  { token: '4',  px: '16px',  usage: 'px-4 / gap-4 — padding horizontal pills y botones' },
  { token: '6',  px: '24px',  usage: 'gap-6 — entre thumbnails beneficios' },
  { token: '8',  px: '32px',  usage: 'gap-8 — gap columnas en mobile' },
  { token: '10', px: '40px',  usage: 'gap-10 — bloques internos product row abierto' },
  { token: '12', px: '48px',  usage: 'gap-12 — header ↔ content en beneficios' },
  { token: '14', px: '56px',  usage: 'px-14 — padding lateral sección beneficios' },
  { token: '16', px: '64px',  usage: 'py-16 — padding vertical secciones' },
  { token: '20', px: '80px',  usage: 'pl-20 / gap-20 — layout product rows' },
  { token: '[152px]', px: '152px', usage: 'py-[152px] — padding product row colapsado' },
]

const radii = [
  { name: 'Pill',     value: 'rounded-full',   px: '9999px', usage: 'Tag del hero / Beneficios label' },
  { name: 'Tag Uso',  value: 'rounded-[32px]', px: '32px',   usage: 'Pills de usos en product row' },
  { name: 'Button',   value: 'rounded-lg',     px: '8px',    usage: 'Botones CTA' },
  { name: 'Image',    value: 'rounded-lg',     px: '8px',    usage: 'Imagen beneficios, tarjetas' },
  { name: 'Thumb',    value: 'rounded-[13px]', px: '13px',   usage: 'Thumbnails beneficios' },
  { name: 'Contact',  value: 'rounded-3xl',    px: '24px',   usage: 'Imagen de contacto' },
]

const tagBgMap = [
  { row: 'Interior',         rowBg: '#0e375d', pillBg: '#124471' },
  { row: 'Exterior',         rowBg: '#834f31', pillBg: '#6b3f27' },
  { row: 'Metálicas',        rowBg: '#b9b9b9', pillBg: '#7a7a7a' },
  { row: 'Impermeabilizante',rowBg: '#b33634', pillBg: '#8f2a28' },
  { row: 'Tráfico',          rowBg: '#edb038', pillBg: '#b87a20' },
]

const motionTokens = [
  { name: 'Row expand',    prop: 'height',  duration: '550ms', ease: 'cubic-bezier(0.4, 0, 0.2, 1)', usage: 'Apertura product row' },
  { name: 'Fade content',  prop: 'opacity', duration: '300ms', ease: 'ease-out (delay 150ms)',        usage: 'Descripción/usos al expandir' },
  { name: 'Fade toggle',   prop: 'opacity', duration: '200ms', ease: 'ease',                          usage: 'Ver más / Ver menos' },
  { name: 'Row padding',   prop: 'padding', duration: '550ms', ease: 'cubic-bezier(0.4, 0, 0.2, 1)', usage: 'Centrado → alineado top' },
  { name: 'Slide crossfade', prop: 'opacity', duration: '600ms', ease: 'ease-in-out',                 usage: 'Imagen beneficios autoplay' },
  { name: 'Slide text',    prop: 'opacity + y', duration: '400ms', ease: 'ease-out',                  usage: 'Textos beneficios (mode: wait)' },
]

/* ── Chevron inline ─────────────────────────── */
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Cover ─────────────────────────────── */}
      <header className="bg-haikrom-dark-blue text-white px-8 md:px-20 py-16">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-roboto text-xs tracking-widest uppercase opacity-50">Design System v1.0</span>
          <h1 className="font-clash text-[56px] leading-[1.1] mt-2">Haikrom</h1>
          <p className="font-montserrat text-base leading-[1.6] opacity-75 mt-4 max-w-[560px]">
            Tokens de diseño, componentes y guía de estilo del sitio web de Haikrom.
            Actualizado con los cambios del sprint actual.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <span className="border border-white/20 text-white/60 font-roboto text-xs px-4 py-2 rounded-lg">React + Vite</span>
            <span className="border border-white/20 text-white/60 font-roboto text-xs px-4 py-2 rounded-lg">Tailwind CSS</span>
            <span className="border border-white/20 text-white/60 font-roboto text-xs px-4 py-2 rounded-lg">Framer Motion</span>
            <span className="border border-white/20 text-white/60 font-roboto text-xs px-4 py-2 rounded-lg">Clash Display + Montserrat + Roboto</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-8 md:px-20 py-20">

        {/* ═══════════════════════════════════════
            01. COLORES
        ═══════════════════════════════════════ */}
        <Section title="01 — Paleta de Colores">

          <Subsection title="Colores base">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {colorPalette.map((c) => (
                <div key={c.base}>
                  <div className="h-16 rounded-lg" style={{ backgroundColor: c.base }} />
                  <p className="font-clash text-sm mt-2 text-haikrom-dark-blue">{c.name}</p>
                  <Code>{c.base}</Code>
                  {c.token !== '—' && <p className="font-roboto text-[10px] text-haikrom-gray mt-1">{c.token}</p>}
                  <Label>{c.usage}</Label>
                </div>
              ))}
            </div>
          </Subsection>

          <Subsection title="Variantes por color (50 → 900)">
            <div className="space-y-6">
              {colorPalette.map((c) => (
                <div key={c.base}>
                  <p className="font-clash text-sm text-haikrom-dark-blue mb-2">{c.name}</p>
                  <div className="flex gap-1 flex-wrap">
                    {c.shades.map((s) => (
                      <div key={s.label} className="flex flex-col items-center gap-1">
                        <div className="w-14 h-14 rounded-md" style={{ backgroundColor: s.hex }} />
                        <span className="font-roboto text-[10px] text-haikrom-gray">{s.label}</span>
                        <span className="font-roboto text-[9px] text-haikrom-gray">{s.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Subsection>

          <Subsection title="Tag pills por sección de producto">
            <div className="flex flex-wrap gap-3">
              {tagBgMap.map((t) => (
                <div key={t.row} className="flex flex-col items-center gap-1">
                  <div className="px-4 py-1 rounded-[32px] font-montserrat text-sm text-white" style={{ backgroundColor: t.pillBg }}>
                    {t.row}
                  </div>
                  <span className="font-roboto text-[10px] text-haikrom-gray">{t.pillBg}</span>
                  <span className="font-roboto text-[9px] text-haikrom-gray">sobre {t.rowBg}</span>
                </div>
              ))}
            </div>
          </Subsection>

        </Section>

        {/* ═══════════════════════════════════════
            02. TIPOGRAFÍA
        ═══════════════════════════════════════ */}
        <Section title="02 — Tipografía">

          <Subsection title="Familias tipográficas">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { name: 'Clash Display', cls: 'font-clash',      role: 'Headings',        weights: ['Regular 400', 'Medium 500', 'SemiBold 600'] },
                { name: 'Montserrat',    cls: 'font-montserrat', role: 'Body / UI',        weights: ['Regular 400', 'Medium 500'] },
                { name: 'Roboto',        cls: 'font-roboto',     role: 'Labels / Captions',weights: ['Regular 400', 'Medium 500'] },
              ].map((f) => (
                <div key={f.name} className="bg-haikrom-cream rounded-lg p-6">
                  <p className="font-roboto text-[10px] uppercase tracking-widest text-haikrom-gray mb-3">{f.role}</p>
                  <p className={`${f.cls} text-[48px] leading-none text-haikrom-dark-blue`}>Aa</p>
                  <p className={`${f.cls} text-xl text-haikrom-dark-blue mt-1`}>{f.name}</p>
                  <div className="mt-3 space-y-0.5">
                    {f.weights.map((w) => <p key={w} className="font-roboto text-xs text-haikrom-gray">{w}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </Subsection>

          <Subsection title="Escala tipográfica">
            <div className="space-y-6">
              {typeScale.map((t) => (
                <div key={t.name} className="flex gap-6 items-start border-b border-haikrom-cream pb-5">
                  <div className="w-36 shrink-0">
                    <p className="font-roboto text-xs font-medium text-haikrom-dark-blue">{t.name}</p>
                    <p className="font-roboto text-[10px] text-haikrom-gray mt-0.5">{t.font} · {t.size} · {t.weight} · lh {t.lh}</p>
                    <Label>{t.usage}</Label>
                  </div>
                  <p
                    className="text-haikrom-dark-blue min-w-0 overflow-hidden"
                    style={{
                      fontFamily: t.font === 'Clash Display' ? 'Clash Display, sans-serif' : t.font === 'Montserrat' ? 'Montserrat, sans-serif' : 'Roboto, sans-serif',
                      fontSize: t.size,
                      fontWeight: t.weight,
                      lineHeight: t.lh,
                    }}
                  >
                    {t.sample}
                  </p>
                </div>
              ))}
            </div>
          </Subsection>

        </Section>

        {/* ═══════════════════════════════════════
            03. ESPACIADO
        ═══════════════════════════════════════ */}
        <Section title="03 — Espaciado">
          <div className="space-y-3">
            {spacingScale.map((s) => (
              <div key={s.token} className="flex items-center gap-5">
                <div
                  className="bg-haikrom-red/15 border-l-4 border-haikrom-red shrink-0"
                  style={{ width: s.px === '152px' ? '80px' : s.px, height: '20px', minWidth: '4px' }}
                />
                <Code>space-{s.token} · {s.px}</Code>
                <span className="font-montserrat text-sm text-haikrom-gray">{s.usage}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════
            04. BORDER RADIUS
        ═══════════════════════════════════════ */}
        <Section title="04 — Border Radius">
          <div className="flex flex-wrap gap-8">
            {radii.map((r) => (
              <div key={r.name} className="text-center">
                <div className={`w-20 h-20 bg-haikrom-dark-blue ${r.value}`} />
                <p className="font-clash text-sm text-haikrom-dark-blue mt-3">{r.name}</p>
                <Code>{r.px}</Code>
                <Label>{r.usage}</Label>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════
            05. BOTONES & ESTADOS
        ═══════════════════════════════════════ */}
        <Section title="05 — Botones & Estados">

          {/* Primary CTA */}
          <Subsection title="Primary CTA — bg-haikrom-red · Montserrat Medium 20px · px-4 py-2 · rounded-lg">
            <div className="bg-haikrom-cream rounded-lg p-6 space-y-6">
              <p className="font-roboto text-xs text-haikrom-gray mb-2">Interactivo — hover, focus y active están activos</p>
              <button className="
                bg-haikrom-red text-white font-montserrat font-medium text-xl px-4 py-2 rounded-lg
                transition-all duration-200
                hover:bg-[#c9341d] hover:shadow-lg hover:shadow-haikrom-red/30
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-haikrom-red
                active:bg-[#8f2513] active:scale-[0.97]
              ">
                Ver Producto
              </button>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                {[
                  { label: 'Default',  bg: '#ee3e23', shadow: '',       ring: '',                             scale: '' },
                  { label: 'Hover',    bg: '#c9341d', shadow: 'shadow-lg shadow-[#ee3e23]/30', ring: '',      scale: '' },
                  { label: 'Focus',    bg: '#ee3e23', shadow: '',       ring: 'ring-2 ring-offset-2 ring-[#ee3e23]', scale: '' },
                  { label: 'Active',   bg: '#8f2513', shadow: '',       ring: '',                             scale: 'scale-[0.97]' },
                  { label: 'Disabled', bg: '#ee3e23', shadow: '',       ring: '',                             scale: '', disabled: true },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-start gap-2">
                    <button
                      disabled={s.disabled}
                      style={{ backgroundColor: s.bg }}
                      className={`text-white font-montserrat font-medium text-base px-4 py-2 rounded-lg ${s.shadow} ${s.ring} ${s.scale} ${s.disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      Ver Producto
                    </button>
                    <Label>{s.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </Subsection>

          {/* Ghost CTA */}
          <Subsection title="Ghost sobre oscuro — sin fondo · texto blanco · Montserrat Medium 20px · px-4 h-[42px]">
            <div className="bg-haikrom-dark-blue rounded-lg p-6 space-y-6">
              <button className="
                h-[42px] px-4 font-montserrat font-medium text-xl text-white rounded-lg
                transition-all duration-200
                hover:bg-white/10
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-haikrom-dark-blue focus:ring-white
                active:bg-white/20
              ">
                Descargar Ficha Técnica
              </button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { label: 'Default',  extra: '' },
                  { label: 'Hover',    extra: 'bg-white/10' },
                  { label: 'Focus',    extra: 'ring-2 ring-white' },
                  { label: 'Disabled', extra: 'opacity-30 cursor-not-allowed', disabled: true },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-start gap-2">
                    <button disabled={s.disabled} className={`h-[42px] px-4 font-montserrat font-medium text-base text-white rounded-lg ${s.extra}`}>
                      Descargar Ficha
                    </button>
                    <Label>{s.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </Subsection>

          {/* Hero CTA — white bg */}
          <Subsection title="Hero CTA — bg-white · text-haikrom-dark-blue · Montserrat Medium 20px · px-4 py-2 · rounded-lg">
            <div className="rounded-lg p-6 space-y-4" style={{ background: 'linear-gradient(135deg, #0e375d 0%, #1769ac 100%)' }}>
              <button className="
                bg-white text-haikrom-dark-blue font-montserrat font-medium text-xl px-4 py-2 rounded-lg
                transition-all duration-200
                hover:bg-haikrom-cream hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                active:bg-gray-100 active:scale-[0.97]
              ">
                Ver Productos
              </button>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { label: 'Default',  bg: '#ffffff', text: '#0e375d', extra: '' },
                  { label: 'Hover',    bg: '#f9f6f4', text: '#0e375d', extra: 'shadow-lg' },
                  { label: 'Focus',    bg: '#ffffff', text: '#0e375d', extra: 'ring-2 ring-white' },
                  { label: 'Disabled', bg: '#ffffff', text: '#0e375d', extra: 'opacity-40 cursor-not-allowed', disabled: true },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-start gap-2">
                    <button disabled={s.disabled} style={{ backgroundColor: s.bg, color: s.text }} className={`font-montserrat font-medium text-base px-4 py-2 rounded-lg ${s.extra}`}>
                      Ver Productos
                    </button>
                    <Label>{s.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </Subsection>

          {/* Text button */}
          <Subsection title="Text Button — Montserrat Regular 16px + chevron · sin fondo">
            <div className="bg-haikrom-dark-blue rounded-lg p-6">
              <div className="flex flex-wrap gap-10 items-center mb-6">
                <button className="flex items-center gap-2 font-montserrat text-base text-white transition-opacity hover:opacity-70 focus:outline-none focus:opacity-70">
                  Ver más <ChevronDown />
                </button>
                <button className="flex items-center gap-2 font-montserrat text-base text-white transition-opacity hover:opacity-70 focus:outline-none focus:opacity-70">
                  Ver menos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Default',  cls: 'text-white' },
                  { label: 'Hover',    cls: 'text-white opacity-70' },
                  { label: 'Disabled', cls: 'text-white opacity-30 cursor-not-allowed' },
                ].map((s) => (
                  <div key={s.label}>
                    <button className={`flex items-center gap-2 font-montserrat text-base ${s.cls}`}>
                      Ver más <ChevronDown />
                    </button>
                    <Label>{s.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </Subsection>

          {/* Beneficios thumbnail */}
          <Subsection title="Thumbnail button — 82×82 · rounded-[13px] · border-4 activo">
            <div className="flex gap-4 items-start">
              {[
                { label: 'Activo',   border: 'border-4 border-haikrom-red' },
                { label: 'Inactivo', border: 'border-4 border-transparent' },
                { label: 'Hover',    border: 'border-4 border-haikrom-gray' },
                { label: 'Focus',    border: 'border-4 border-haikrom-dark-blue ring-2 ring-offset-1 ring-haikrom-dark-blue' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div className={`w-[82px] h-[82px] rounded-[13px] overflow-hidden ${s.border}`}>
                    <img src="/images/porque_1.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <Label>{s.label}</Label>
                </div>
              ))}
            </div>
          </Subsection>

        </Section>

        {/* ═══════════════════════════════════════
            06. FORMULARIOS & INPUTS
        ═══════════════════════════════════════ */}
        <Section title="06 — Formularios & Inputs">

          <Subsection title="Input de texto — border border-black · rounded-lg · p-3 · Montserrat 16px">
            <div className="grid md:grid-cols-2 gap-8 max-w-[800px]">

              <div>
                <Label>Default</Label>
                <input className="mt-2 w-full rounded-lg border border-black p-3 font-montserrat text-base" placeholder="Tu nombre completo" readOnly />
              </div>

              <div>
                <Label>Focus (outline + border azul)</Label>
                <input className="mt-2 w-full rounded-lg border-2 border-haikrom-dark-blue p-3 font-montserrat text-base outline-none ring-2 ring-haikrom-dark-blue/20" placeholder="Tu nombre completo" readOnly />
              </div>

              <div>
                <Label>Error</Label>
                <input className="mt-2 w-full rounded-lg border-2 border-haikrom-red p-3 font-montserrat text-base" placeholder="ejemplo@correo.com" readOnly />
                <p className="mt-1 font-roboto text-xs text-haikrom-red">Este campo es obligatorio.</p>
              </div>

              <div>
                <Label>Disabled</Label>
                <input disabled className="mt-2 w-full rounded-lg border border-haikrom-gray bg-haikrom-cream p-3 font-montserrat text-base text-haikrom-gray cursor-not-allowed" placeholder="Campo deshabilitado" />
              </div>

              <div>
                <Label>Filled (con valor)</Label>
                <input className="mt-2 w-full rounded-lg border border-black p-3 font-montserrat text-base" defaultValue="Ana García" readOnly />
              </div>

              <div>
                <Label>Textarea</Label>
                <textarea rows={3} className="mt-2 w-full rounded-lg border border-black p-3 font-montserrat text-base resize-none" placeholder="Cuéntanos en qué podemos ayudarte..." readOnly />
              </div>

            </div>
          </Subsection>

          <Subsection title="Checkbox & submit">
            <div className="flex flex-col gap-4 max-w-[400px]">
              <label className="flex items-center gap-2 font-montserrat text-sm cursor-pointer">
                <input type="checkbox" className="h-[18px] w-[18px] accent-haikrom-dark-blue" /> Acepto términos y condiciones
              </label>
              <button type="button" className="
                rounded-lg bg-haikrom-red px-10 py-3 font-montserrat font-medium text-white w-fit
                transition-all duration-200 hover:bg-[#c9341d] focus:outline-none focus:ring-2 focus:ring-haikrom-red focus:ring-offset-2
                active:bg-[#8f2513]
              ">
                Enviar
              </button>
            </div>
          </Subsection>

        </Section>

        {/* ═══════════════════════════════════════
            07. COMPONENTE: HERO
        ═══════════════════════════════════════ */}
        <Section title="07 — Componente: Hero">
          <p className="font-montserrat text-base text-haikrom-gray mb-8">
            h-screen · video background (autoPlay muted loop playsInline) · layout flex-col justify-between · max-w-[1312px]
          </p>

          <Subsection title="Estructura">
            <div className="rounded-lg overflow-hidden" style={{ background: 'linear-gradient(160deg,#0e375d 40%,#1769ac)' }}>
              <div className="relative px-8 py-10 flex flex-col justify-between min-h-[480px]">

                {/* Nav */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-white/10 rounded" />
                  <img src="/images/haikrom_logo.svg" alt="Haikrom" className="h-10 w-auto" />
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <img src="/images/Icon_menu.svg" alt="Menu" className="w-full h-full" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="flex flex-col gap-4 pb-2">
                  <div className="border border-white rounded-full px-4 py-1 w-fit">
                    <p className="font-montserrat text-xl text-white whitespace-nowrap">Más de 25 años de experiencia</p>
                  </div>
                  <h1 className="font-clash text-4xl md:text-[56px] leading-[1.2] text-[#fffcfb] max-w-[600px]">
                    Soluciones de Pintura de Vanguardia
                  </h1>
                  <button className="bg-white text-haikrom-dark-blue px-4 py-2 rounded-lg font-montserrat font-medium text-xl w-fit">
                    Ver Productos
                  </button>
                </div>
              </div>
            </div>
          </Subsection>

          <Subsection title="Tokens del hero">
            <div className="flex flex-wrap gap-3">
              <Chip label="Alto" value="100vh (h-screen)" />
              <Chip label="Padding" value="px-4 py-10 / md:px-16" />
              <Chip label="Nav layout" value="justify-between (spacer | logo | menu)" />
              <Chip label="Tag border" value="border-white rounded-full px-4 py-1" />
              <Chip label="Heading size" value="text-5xl / md:text-[64px]" />
              <Chip label="Heading color" value="#fffcfb (haikrom-light)" />
              <Chip label="CTA" value="bg-white text-haikrom-dark-blue rounded-lg" />
            </div>
          </Subsection>
        </Section>

        {/* ═══════════════════════════════════════
            08. COMPONENTE: PRODUCT ROW
        ═══════════════════════════════════════ */}
        <Section title="08 — Componente: Product Row">
          <p className="font-montserrat text-base text-haikrom-gray mb-8">
            Dos estados: colapsado y expandido. Transición animada con framer-motion en padding y height.
          </p>

          <Subsection title="Estado colapsado — py-[152px] · items-center">
            <article className="bg-haikrom-dark-blue text-white">
              <div className="flex gap-20 pl-8 md:pl-20 items-center">
                <div className="w-full md:w-[600px] shrink-0 flex flex-col gap-4 py-[60px] md:py-[152px]">
                  <p className="font-montserrat text-base leading-[1.5]">Interior</p>
                  <h2 className="font-clash text-[32px] leading-[1.2]">Pintura Arquitectónica</h2>
                  <button className="flex items-center gap-2 font-montserrat text-base leading-[1.5] w-fit">
                    Ver más <ChevronDown />
                  </button>
                </div>
                <div className="flex-1 self-stretch relative overflow-hidden min-h-[180px] md:min-h-[304px]">
                  <img src="/images/Product_Image_1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </article>
          </Subsection>

          <Subsection title="Estado expandido — py-[64px] · items-start · gap-10 entre bloques">
            <article className="bg-haikrom-dark-blue text-white">
              <div className="flex gap-20 pl-8 md:pl-20 items-start">
                <div className="w-full md:w-[600px] shrink-0 flex flex-col gap-10 py-16">
                  <div className="flex flex-col gap-4">
                    <p className="font-montserrat text-base leading-[1.5]">Interior</p>
                    <h2 className="font-clash text-[32px] leading-[1.2]">Pintura Arquitectónica</h2>
                    <p className="font-montserrat text-base leading-[1.5]">
                      Pintura acrílica 100% resistente, acabado satinado lavable. Ideal para interiores y exteriores, con colores vibrantes.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 py-4">
                    <h3 className="font-clash text-[20px] leading-[1.5]">Usos</h3>
                    <div className="flex flex-wrap gap-4">
                      {['Muros Interiores', 'Muros Exteriores', 'Fachadas', 'Tablaroca', 'Durock', 'Plafones'].map((uso) => (
                        <span key={uso} style={{ backgroundColor: '#124471' }} className="text-white rounded-[32px] px-4 py-1 font-montserrat text-base leading-[1.5] whitespace-nowrap">
                          {uso}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center flex-wrap">
                    <button className="h-[42px] px-4 font-montserrat font-medium text-xl leading-[1.4] text-white hover:bg-white/10 rounded-lg transition-colors">
                      Descargar Ficha Técnica
                    </button>
                    <button className="bg-haikrom-red text-white px-4 py-2 rounded-lg font-montserrat font-medium text-xl leading-[1.4] hover:bg-[#c9341d] transition-colors">
                      Ver Producto
                    </button>
                  </div>
                  <button className="flex items-center gap-2 font-montserrat text-base leading-[1.5] w-fit hover:opacity-70 transition-opacity">
                    Ver menos
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 self-stretch relative overflow-hidden min-h-[400px]">
                  <img src="/images/Product_Image_1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </article>
          </Subsection>

          <Subsection title="Tokens del componente">
            <div className="flex flex-wrap gap-3">
              <Chip label="Layout" value="flex gap-20 pl-20" />
              <Chip label="Left col" value="w-[600px] shrink-0" />
              <Chip label="Right col" value="flex-1 self-stretch" />
              <Chip label="Padding cerrado" value="py-[152px]" />
              <Chip label="Padding abierto" value="py-[64px]" />
              <Chip label="Gap bloques" value="gap-10" />
              <Chip label="Tag font" value="Montserrat Regular 16px" />
              <Chip label="Title font" value="Clash Display 32px" />
              <Chip label="Usos title" value="Clash Display 20px" />
              <Chip label="Animation" value="framer-motion height + opacity + padding" />
            </div>
          </Subsection>
        </Section>

        {/* ═══════════════════════════════════════
            09. COMPONENTE: BENEFICIOS SLIDESHOW
        ═══════════════════════════════════════ */}
        <Section title="09 — Componente: Beneficios Slideshow">
          <p className="font-montserrat text-base text-haikrom-gray mb-8">
            Autoplay 3s con setInterval. Crossfade de imagen (stacked opacity). Textos AnimatePresence mode="wait". Thumbnails clickeables.
          </p>

          <Subsection title="Vista previa (static)">
            <div className="flex flex-col items-center gap-12 py-10 px-4 border border-haikrom-cream rounded-lg">
              {/* Header */}
              <div className="flex flex-col items-center gap-4 text-center max-w-[480px]">
                <div className="border border-haikrom-dark-blue rounded-full px-4 py-1">
                  <span className="font-montserrat text-base text-haikrom-dark-blue">Beneficios</span>
                </div>
                <h2 className="font-clash text-[32px] leading-[1.2] text-haikrom-dark-blue">Por qué elegirnos</h2>
                <p className="font-montserrat text-base text-black">Tecnología de punta para resultados superiores</p>
              </div>
              {/* Content */}
              <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full">
                <p className="font-clash text-[20px] leading-[1.5] text-haikrom-dark-blue text-center md:w-[240px]">
                  Más en durabilidad comparada con la competencia.
                </p>
                <div className="relative h-[260px] w-full md:w-[300px] rounded-lg overflow-hidden shrink-0">
                  <img src="/images/porque_1.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <p className="font-clash text-[20px] leading-[1.5] text-haikrom-dark-blue text-center md:w-[240px]">
                  La innovación está presente en cada uno de nuestros productos.
                </p>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-6">
                {['/images/porque_1.jpg', '/images/porque_2.jpg', '/images/porque_3.jpg'].map((src, i) => (
                  <div key={i} className={`relative rounded-[13px] overflow-hidden w-[60px] h-[60px] shrink-0 border-4 ${i === 0 ? 'border-haikrom-red' : 'border-transparent'}`}>
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </Subsection>

          <Subsection title="Tokens del componente">
            <div className="flex flex-wrap gap-3">
              <Chip label="Intervalo" value="3000ms setInterval" />
              <Chip label="Image transition" value="opacity 600ms ease-in-out (stacked)" />
              <Chip label="Text transition" value="opacity + y:6 → 0, 400ms, mode=wait" />
              <Chip label="Thumb tamaño" value="82×82px rounded-[13px]" />
              <Chip label="Thumb activo" value="border-4 border-haikrom-red" />
              <Chip label="Thumb inactivo" value="border-4 border-transparent" />
              <Chip label="Side text font" value="Clash Display Medium 20px" />
              <Chip label="Image size" value="433×432 (h-[280px] mobile / h-[432px] desktop)" />
            </div>
          </Subsection>
        </Section>

        {/* ═══════════════════════════════════════
            10. MOTION
        ═══════════════════════════════════════ */}
        <Section title="10 — Motion / Animación">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {motionTokens.map((m) => (
              <div key={m.name} className="bg-haikrom-cream rounded-lg p-5">
                <p className="font-clash text-base text-haikrom-dark-blue">{m.name}</p>
                <div className="mt-3 space-y-1">
                  <div className="flex gap-2">
                    <span className="font-roboto text-xs text-haikrom-gray w-16 shrink-0">property</span>
                    <span className="font-roboto text-xs text-haikrom-dark-blue">{m.prop}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-roboto text-xs text-haikrom-gray w-16 shrink-0">duration</span>
                    <span className="font-roboto text-xs text-haikrom-dark-blue">{m.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-roboto text-xs text-haikrom-gray w-16 shrink-0">ease</span>
                    <span className="font-roboto text-xs text-haikrom-dark-blue">{m.ease}</span>
                  </div>
                </div>
                <Label>{m.usage}</Label>
              </div>
            ))}
          </div>
        </Section>

      </main>

      {/* ── Footer ────────────────────────────── */}
      <footer className="bg-haikrom-dark-blue text-white px-8 md:px-20 py-10">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <p className="font-montserrat text-sm opacity-50">Haikrom Design System · v1.0 · 2026</p>
          <span className="font-roboto text-xs opacity-40">React + Vite + Tailwind CSS</span>
        </div>
      </footer>

    </div>
  )
}
