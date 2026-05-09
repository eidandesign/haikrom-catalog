import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Btn from '../components/Btn'
import MobileMenu from '../components/MobileMenu'
import { SOCIAL_LINKS } from '../components/SocialIcons'
import { LOGO, footerColumns } from '../data/site'
import { type as t } from '../styles/tokens'

// ── Assets ────────────────────────────────────────────────────────────────────
const CONTACTO  = '/images/contacto.jpg'
const FOOTER_BG = '/images/footer.jpg'
const HERO_VIDEO =
  'https://res.cloudinary.com/duxnks729/video/upload/v1778214479/magnific_style-p-minimalist-archit_2944250119_bdibcj.mp4'

// ── Trend data ────────────────────────────────────────────────────────────────
// Each palette carries its own `image` for future per-palette background swaps.
// All palettes currently share the section default — just update `image` when ready.
const trends = [
  {
    id: 'natural',
    title: 'Arquitectura natural y orgánica',
    copy: 'Superficies con acabados minerales y tonos tierra que reflejan una conexión con lo natural y lo atemporal. Ideal para proyectos residenciales o espacios de descanso.',
    image: '/images/tendencias_1.png',
    palettes: [
      { name: 'Tierra Viva',  swatches: ['#baa58d', '#e1a6ad', '#947d6f'], image: '/images/tendencias_1.png' },
      { name: 'Verde Suave',  swatches: ['#6ba539', '#c3dc93', '#a0dab3'], image: '/images/tendencias_1_2.png' },
      { name: 'Luz Natural',  swatches: ['#9b2242', '#b8ccea', '#63666a'], image: '/images/tendencias_1_3.png' },
    ],
  },
  {
    id: 'moderno',
    title: 'Frescura moderna',
    copy: 'Inspirada en la pureza y ligereza del aire. Ideal para oficinas o proyectos con una estética minimalista.',
    image: '/images/tendencias_2.png',
    palettes: [
      { name: 'Cielos claros',      swatches: ['#ffffff', '#a7a8a9', '#147bd1'], image: '/images/tendencias_2.png' },
      { name: 'Horizonte costero',  swatches: ['#ffffff', '#baa58d', '#426da9'], image: '/images/tendencias_2.png' },
      { name: 'Minimalismo cálido', swatches: ['#baa58d', '#a7a8a9', '#3111c9'], image: '/images/tendencias_2.png' },
    ],
  },
  {
    id: 'luminoso',
    title: 'Espacios Luminosos',
    copy: 'Tonos claros y cálidos que amplían visualmente los espacios, favoreciendo la calma y el bienestar. Perfecto para interiores residenciales o corporativos.',
    image: '/images/tendencias_3.png',
    palettes: [
      { name: 'Estética mediterránea', swatches: ['#ffffff', '#e9ae87', '#baa58d'], image: '/images/tendencias_3.png' },
      { name: 'Armonía natural',       swatches: ['#ffffff', '#a7a8a9', '#c3dc93'], image: '/images/tendencias_3.png' },
      { name: 'Frescura moderna',      swatches: ['#ffffff', '#baa58d', '#b8ccea'], image: '/images/tendencias_3.png' },
    ],
  },
]

// ── PaletteCard ───────────────────────────────────────────────────────────────
// Clickable card showing a palette name + 3 color swatches.
// `isActive` highlights the selected card with a white outline + darker bg.
function PaletteCard({ name, swatches, isActive, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="rounded-[12px] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 shrink-0 w-[200px] sm:w-[240px] lg:w-[270px] text-left backdrop-blur-[3.75px]"
      style={{
        backgroundColor: isActive ? '#f9f6f4' : 'rgba(249,246,244,0.24)',
        outline: isActive ? '2px solid rgba(255,255,255,0.70)' : '2px solid transparent',
        outlineOffset: '-2px',
      }}
    >
      <p className={`${t.body} sm:text-xl whitespace-nowrap`} style={{ color: isActive ? '#0e375d' : '#fffcfb' }}>{name}</p>
      <div className="grid grid-cols-3 gap-3 sm:gap-6 h-9 sm:h-11">
        {swatches.map((color, i) => (
          <div
            key={i}
            className="rounded-[2px]"
            style={{
              backgroundColor: color,
              outline: color === '#ffffff' ? '1px solid rgba(255,255,255,0.35)' : 'none',
            }}
          />
        ))}
      </div>
    </motion.button>
  )
}

// ── TrendSection ──────────────────────────────────────────────────────────────
// Full-screen section. Clicking a PaletteCard swaps the background image
// with an animated crossfade. Text + cards are anchored at the bottom-left.
function TrendSection({ trend, onVerProducto }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const bgImage = trend.palettes[activeIdx].image ?? trend.image

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image — crossfade on palette change */}
      <AnimatePresence mode="wait">
        <motion.img
          key={bgImage}
          src={bgImage}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Content — bottom-left anchor */}
      <div className="relative flex flex-col justify-end min-h-screen px-4 pb-8 sm:pb-10 md:px-16 gap-4 sm:gap-6 pt-20">

        {/* Text + CTA */}
        <div
          className="flex flex-col gap-4 sm:gap-6 max-w-full sm:max-w-[586px]"
          data-aos="fade-up"
        >
          <h2 className={`${t.h3} text-haikrom-light`}>{trend.title}</h2>
          <p className={`${t.body} sm:text-xl text-haikrom-light/90`}>{trend.copy}</p>
          <Btn variant="primary" onClick={onVerProducto} className="px-6 py-2.5 w-fit">Ver Producto</Btn>
        </div>

        {/* Palette cards — horizontal scroll on mobile */}
        <div
          className="flex gap-3 sm:gap-6 overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          {trend.palettes.map((p, i) => (
            <PaletteCard
              key={p.name}
              name={p.name}
              swatches={p.swatches}
              isActive={i === activeIdx}
              onClick={() => setActiveIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Tendencias({ onBack, onNavigateToProduct }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white"
    >

      {/* ── Fixed Header ───────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
        <button
          onClick={onBack}
          aria-label="Ir al inicio"
          className="relative hover:opacity-75 transition-opacity"
        >
          <img src={LOGO} alt="Haikrom" className="h-9 w-auto sm:h-10 md:h-[50px]" />
        </button>
        <button
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className="block w-6 h-0.5 bg-white rounded-full" />
          <span className="block w-6 h-0.5 bg-white rounded-full" />
          <span className="block w-6 h-0.5 bg-white rounded-full" />
        </button>
      </header>

      {/* ── Hero — Full-screen video ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/tendencias_header.png"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />

        {/* Text — bottom-right anchor, left-aligned text */}
        <div className="relative flex flex-col items-end justify-end min-h-screen px-4 pb-10 sm:pb-14 md:px-16 pt-20">
          <div
            className="flex flex-col gap-4 sm:gap-8 w-full sm:max-w-[479px] text-left"
            data-aos="fade-up"
                       data-aos-delay="200"
          >
            <h2 className={`${t.h2} text-haikrom-light`}>
              El color es nuestro lenguaje.
            </h2>
            <p className={`${t.bodyLg} text-haikrom-light/90`}>
              En Haikrom transformamos el color en una herramienta de innovación.
              Más de 25 años desarrollando recubrimientos personalizados
              que protegen, inspiran y comunican la esencia de cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trend Sections ──────────────────────────────────────────────────── */}
      {trends.map((trend) => (
        <TrendSection
          key={trend.id}
          trend={trend}
          onVerProducto={onBack}
        />
      ))}

      {/* ── Contacto ────────────────────────────────────────────────────────── */}
      <section className="px-4 py-12 sm:py-16 md:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center" data-aos="fade-up">
            <p className={`${t.overline} text-haikrom-dark-blue/60`}>Contacto</p>
            <h2 className={`mt-2 ${t.h2} text-haikrom-dark-blue`}>¿Necesitas asesoría técnica?</h2>
            <p className={`mx-auto mt-4 sm:mt-6 max-w-[768px] ${t.bodyLg} text-gray-600`}>
              Nuestro equipo de especialistas te ayuda a elegir el recubrimiento ideal para tu proyecto.
              Cuéntanos brevemente lo que necesitas y nos pondremos en contacto contigo.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-8 lg:gap-10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px]">
            <form className="space-y-5 sm:space-y-6" data-aos="fade-up" data-aos-delay="150" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className={`mb-2 block ${t.label}`}>Nombre completo</label>
                <input className="w-full rounded-lg border border-black/30 p-3 focus:outline-none focus:border-haikrom-dark-blue transition-colors" placeholder="Tu nombre completo" />
              </div>
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                <div>
                  <label className={`mb-2 block ${t.label}`}>Correo electrónico</label>
                  <input className="w-full rounded-lg border border-black/30 p-3 focus:outline-none focus:border-haikrom-dark-blue transition-colors" placeholder="ejemplo@correo.com" />
                </div>
                <div>
                  <label className={`mb-2 block ${t.label}`}>Número telefónico <span className="font-normal text-sm">(Opcional)</span></label>
                  <input className="w-full rounded-lg border border-black/30 p-3 focus:outline-none focus:border-haikrom-dark-blue transition-colors" placeholder="(55) 1234 5678" />
                </div>
              </div>
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                <div>
                  <label className={`mb-2 block ${t.label}`}>Nombre del proyecto</label>
                  <input className="w-full rounded-lg border border-black/30 p-3 focus:outline-none focus:border-haikrom-dark-blue transition-colors" placeholder="Ej. Fachada corporativa en Guadalajara" />
                </div>
                <div>
                  <label className={`mb-2 block ${t.label}`}>Tipo de superficie</label>
                  <input className="w-full rounded-lg border border-black/30 p-3 focus:outline-none focus:border-haikrom-dark-blue transition-colors" placeholder="Concreto, metal, madera..." />
                </div>
              </div>
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                <div>
                  <label className={`mb-2 block ${t.label}`}>Ubicación del proyecto</label>
                  <input className="w-full rounded-lg border border-black/30 p-3 focus:outline-none focus:border-haikrom-dark-blue transition-colors" placeholder="Ciudad o estado" />
                </div>
                <div>
                  <label className={`mb-2 block ${t.label}`}>Etapa del proyecto</label>
                  <input className="w-full rounded-lg border border-black/30 p-3 focus:outline-none focus:border-haikrom-dark-blue transition-colors" placeholder="Diseño, construcción, mantenimiento..." />
                </div>
              </div>
              <div>
                <label className={`mb-2 block ${t.label}`}>Mensaje <span className="font-normal text-sm">(opcional)</span></label>
                <textarea rows={4} className="w-full rounded-lg border border-black/30 p-3 focus:outline-none focus:border-haikrom-dark-blue transition-colors resize-none" placeholder="Cuéntanos en qué podemos ayudarte..." />
              </div>
              <label className={`flex items-center gap-2 cursor-pointer ${t.bodySm}`}>
                <input type="checkbox" className="h-[18px] w-[18px] shrink-0 accent-haikrom-red" />
                Acepto términos y condiciones
              </label>
              <Btn variant="primary" type="submit" className="w-full sm:w-auto px-10 sm:px-14 py-3">Enviar</Btn>
            </form>

            <img
              src={CONTACTO}
              alt=""
              className="hidden lg:block h-full min-h-[400px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="relative overflow-hidden px-4 py-16 sm:py-20 text-haikrom-light md:px-16">
        <img src={FOOTER_BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="relative mx-auto max-w-[1280px]">

          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            {/* Navigation columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
              <img src={LOGO} alt="Haikrom" className="h-8 w-auto col-span-2 sm:col-span-1" />
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className={t.h6}>{column.title}</h3>
                  <ul className={`mt-4 space-y-2 ${t.bodySm}`}>
                    {column.links.map((link) => (
                      <li key={link}>
                        {link === 'Tendencias' ? (
                          <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="hover:underline text-left"
                          >
                            {link}
                          </button>
                        ) : link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="rounded-lg bg-black/25 p-5 sm:p-6">
              <h3 className={t.h6}>Suscribir</h3>
              <p className={`mt-3 ${t.body}`}>Recibe actualizaciones sobre nuestras soluciones y proyectos.</p>
              <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  className={`flex-1 min-w-0 border border-white bg-transparent p-3 ${t.body} placeholder:text-white/70 focus:outline-none`}
                  placeholder="Ingresa tu correo"
                />
                <Btn variant="secondary" className="px-6 py-3 rounded-sm whitespace-nowrap shrink-0">Enviar</Btn>
              </div>
              <p className={`mt-3 ${t.caption} text-white/60`}>Al suscribirte, aceptas nuestra política de privacidad.</p>
            </div>
          </div>

          <div className="my-8 h-px bg-white/40" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className={`flex flex-wrap gap-x-4 gap-y-2 ${t.bodySm} text-white/80`}>
              <p>© 2026 Haikrom. Todos los derechos reservados.</p>
              <a href="#" className="hover:underline">Política de privacidad</a>
              <a href="#" className="hover:underline">Términos de servicio</a>
              <a href="#" className="hover:underline">Configuración de cookies</a>
            </div>
            <div className="flex gap-4 shrink-0">
              {SOCIAL_LINKS.map(({ label, Icon }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Mobile Menu ─────────────────────────────────────────────────────── */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onProductClick={(id) => {
          setMenuOpen(false)
          onNavigateToProduct?.(id)
        }}
        onSectionClick={(s) => {
          setMenuOpen(false)
          if (s !== 'Tendencias') onBack?.()
        }}
      />

    </motion.div>
  )
}
