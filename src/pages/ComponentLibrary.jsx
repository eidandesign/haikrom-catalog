import { useState } from 'react'
import { type as t, colors, layout, semantics } from '../styles/tokens'

const productRowColors = [
  { id: 'interior',          name: 'Interior',          bg: '#0e375d', text: 'white', tag: '#124677' },
  { id: 'exterior',          name: 'Exterior',          bg: '#834f31', text: 'white', tag: 'rgba(255,255,255,0.15)' },
  { id: 'metalicas',         name: 'Metalicas',         bg: '#626c79', text: 'white', tag: 'rgba(255,255,255,0.15)' },
  { id: 'impermeabilizante', name: 'Impermeabilizante', bg: '#b33634', text: 'white', tag: 'rgba(255,255,255,0.15)' },
  { id: 'trafico',           name: 'Tráfico',           bg: '#cf8a00', text: 'white', tag: 'rgba(255,255,255,0.15)' },
]

const buttonVariants = [
  { name: 'Primary',   cls: 'btn btn-primary',                                  bg: 'bg-white',                 note: 'Main CTA — fills with dark red on hover' },
  { name: 'Secondary', cls: 'btn btn-secondary',                                 bg: 'bg-white',                 note: 'Secondary CTA — fills with red on hover' },
  { name: 'Outline',   cls: 'btn btn-outline',                                   bg: 'bg-haikrom-dark-blue',     note: 'Used on dark backgrounds' },
  { name: 'Text',      cls: 'btn btn-text text-haikrom-dark-blue underline-none', bg: 'bg-white',                 note: 'Ghost — accordion toggle, links' },
]

function Section({ title, children }) {
  return (
    <section className="space-y-6">
      <div className="border-b border-gray-200 pb-3">
        <h2 className={`${t.h3} text-haikrom-dark-blue`}>{title}</h2>
      </div>
      {children}
    </section>
  )
}

function TokenBadge({ value }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500) }}
      title="Copy class string"
      className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-montserrat transition-colors"
    >
      <span className="font-mono">{value}</span>
      <span className="text-gray-400">{copied ? '✓' : '⧉'}</span>
    </button>
  )
}

export default function ComponentLibrary() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className={`${layout.containerWide} px-8 py-5 flex items-end justify-between`}>
          <div>
            <h1 className={`${t.h2} text-haikrom-dark-blue`}>Haikrom Design System</h1>
            <p className={`${t.bodySm} text-gray-500 mt-1`}>Component Library & Design Tokens — v1.0</p>
          </div>
          <span className={`${t.caption} text-gray-400`}>src/styles/tokens.js</span>
        </div>
      </header>

      <main className={`${layout.containerWide} px-8 py-16 space-y-24`}>

        {/* ── Token Configuration ──────────────────────────────────────────── */}
        <Section title="Token Configuration">
          <div className="bg-gray-900 text-gray-100 rounded-xl p-8 font-mono text-sm overflow-x-auto">
            <pre>{`// src/styles/tokens.js — single source of truth
import { type, colors, layout, radius } from '../styles/tokens'

// Typography
type.h1       → '${t.h1}'
type.h2       → '${t.h2}'
type.h3       → '${t.h3}'
type.h4       → '${t.h4}'
type.bodyLg   → '${t.bodyLg}'
type.body     → '${t.body}'
type.bodySm   → '${t.bodySm}'
type.label    → '${t.label}'
type.caption  → '${t.caption}'
type.overline → '${t.overline}'

// Layout
layout.section       → '${layout.section}'
layout.container     → '${layout.container}'`}</pre>
          </div>
        </Section>

        {/* ── Colors ──────────────────────────────────────────────────────── */}
        <Section title="Color Palette">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Object.entries(colors).map(([name, hex]) => (
              <div key={name} className="group">
                <div className="h-20 rounded-lg shadow-sm mb-3 border border-black/5" style={{ backgroundColor: hex }} />
                <p className={`${t.bodySm} font-semibold text-gray-900`}>{name}</p>
                <p className={`${t.caption} text-gray-500 mt-0.5`}>{hex}</p>
                <p className={`${t.caption} text-gray-400 mt-1`}>haikrom-{name.replace(/([A-Z])/g, '-$1').toLowerCase().replace('dark-b', 'dark-b')}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Typography ───────────────────────────────────────────────────── */}
        <Section title="Typography System — All Elements">
          <div className="space-y-3">
            {Object.entries(semantics.type).map(([key, { label, example }]) => (
              <div key={key} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-4">
                {/* Meta */}
                <div className="md:w-72 shrink-0 space-y-2">
                  <p className={`${t.caption} font-semibold text-haikrom-dark-blue uppercase tracking-wider`}>{key}</p>
                  <p className={`${t.caption} text-gray-500`}>{label}</p>
                  <TokenBadge value={t[key]} />
                </div>
                {/* Preview */}
                <div className="flex-1 min-w-0">
                  <p className={t[key]}>{example}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Buttons ──────────────────────────────────────────────────────── */}
        <Section title="Button Variants">
          <div className="space-y-4">
            {buttonVariants.map((btn) => (
              <div key={btn.name} className={`flex flex-wrap items-center gap-6 p-8 rounded-xl border border-gray-200 ${btn.bg}`}>
                <div className="md:w-64 shrink-0">
                  <p className={`${t.bodySm} font-semibold text-gray-900 ${btn.bg === 'bg-haikrom-dark-blue' ? 'text-white' : ''}`}>{btn.name}</p>
                  <p className={`${t.caption} text-gray-400 mt-1 ${btn.bg === 'bg-haikrom-dark-blue' ? 'text-white/50' : ''}`}>{btn.note}</p>
                </div>
                <button className={`${btn.cls} px-6 py-3 rounded-lg`}>{btn.name} Button</button>
                <code className={`${t.caption} bg-black/10 px-3 py-1.5 rounded font-mono ${btn.bg === 'bg-haikrom-dark-blue' ? 'text-white' : 'text-gray-600'}`}>
                  {btn.cls.split(' ').slice(0, 2).join(' ')}
                </code>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Product Row Colors ───────────────────────────────────────────── */}
        <Section title="Product Row Colors">
          <div className="space-y-4">
            {productRowColors.map((row) => (
              <div key={row.id} className="rounded-xl overflow-hidden border border-gray-200">
                <div className="flex items-center justify-between px-8 py-6" style={{ backgroundColor: row.bg }}>
                  <div>
                    <p className={`${t.overline} text-white/60`}>product / {row.id}</p>
                    <h3 className={`${t.h4} text-white mt-1`}>{row.name}</h3>
                  </div>
                  <span
                    className={`${t.bodySm} text-white px-4 py-1.5 rounded-full`}
                    style={{ backgroundColor: row.tag }}
                  >
                    Tag Example
                  </span>
                </div>
                <div className="bg-white px-8 py-4 flex flex-wrap gap-8 text-sm font-montserrat">
                  <span><strong>bg:</strong> <code>{row.bg}</code></span>
                  <span><strong>text:</strong> {row.text}</span>
                  <span><strong>tag:</strong> <code>{row.tag}</code></span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Layout Tokens ────────────────────────────────────────────────── */}
        <Section title="Layout Tokens">
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(layout).map(([name, cls]) => (
              <div key={name} className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between gap-4">
                <div>
                  <p className={`${t.bodySm} font-semibold text-gray-900`}>layout.{name}</p>
                  <p className={`${t.caption} text-gray-400 mt-1 font-mono`}>{cls}</p>
                </div>
                <TokenBadge value={`layout.${name}`} />
              </div>
            ))}
          </div>
        </Section>

        {/* ── Form Elements ────────────────────────────────────────────────── */}
        <Section title="Form Elements">
          <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6 max-w-2xl">
            <div>
              <label className={`${t.bodySm} font-medium text-gray-900 block mb-2`}>Text Input</label>
              <input type="text" placeholder="Example input" className="w-full rounded-lg border border-black p-3 font-montserrat text-base" />
            </div>
            <div>
              <label className={`${t.bodySm} font-medium text-gray-900 block mb-2`}>Textarea</label>
              <textarea rows={3} placeholder="Example textarea" className="w-full rounded-lg border border-black p-3 font-montserrat text-base" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="cb" className="h-4 w-4" />
              <label htmlFor="cb" className={`${t.bodySm} text-gray-900`}>Checkbox option</label>
            </div>
          </div>
        </Section>

        {/* ── Usage Guide ──────────────────────────────────────────────────── */}
        <Section title="How to Use Tokens">
          <div className="bg-gray-900 text-gray-100 rounded-xl p-8 font-mono text-sm space-y-6">
            <div>
              <p className="text-haikrom-gold mb-2">// Import tokens</p>
              <p>{`import { type as t, colors, layout } from '../styles/tokens'`}</p>
            </div>
            <div>
              <p className="text-haikrom-gold mb-2">// Apply in JSX</p>
              <p>{`<h1 className={t.h1}>Titulo principal</h1>`}</p>
              <p>{`<p className={t.body}>Párrafo de cuerpo</p>`}</p>
              <p>{`<p className={t.overline}>Etiqueta superior</p>`}</p>
            </div>
            <div>
              <p className="text-haikrom-gold mb-2">// Combine with Tailwind</p>
              <p>{`<h2 className={\`\${t.h2} text-haikrom-dark-blue\`}>Sección</h2>`}</p>
            </div>
          </div>
        </Section>

      </main>

      <footer className="bg-haikrom-dark-blue mt-24 py-10 px-8">
        <div className={`${layout.containerWide} flex items-center justify-between`}>
          <p className={`${t.bodySm} text-white/70`}>Haikrom Design System v1.0</p>
          <p className={`${t.caption} text-white/40`}>src/styles/tokens.js · May 2026</p>
        </div>
      </footer>
    </div>
  )
}
