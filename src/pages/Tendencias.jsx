import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type as t, layout } from '../styles/tokens'

const trends = [
  {
    id: 'natural',
    overline: 'Tendencia 01',
    title: 'Arquitectura natural y orgánica',
    copy: 'Acabados minerales y tonos tierra que reflejan conexión con lo natural. Ideal para proyectos residenciales y espacios que buscan armonía con el entorno.',
    palette: [
      { name: 'Tierra Viva',    color: '#8B6347', image: '/images/tendencias_1.jpg' },
      { name: 'Verde Suave',    color: '#7A9E7E', image: '/images/Building facade.jpg' },
      { name: 'Arena Caliente', color: '#C9A87C', image: '/images/Image.jpg' },
      { name: 'Arcilla',        color: '#A0522D', image: '/images/Background Image.jpg' },
    ],
  },
  {
    id: 'urbano',
    overline: 'Tendencia 02',
    title: 'Contraste urbano',
    copy: 'Colores como grafito, azul acero o negro que dan modernidad a cualquier fachada. Inspirado en el diseño industrial y la arquitectura contemporánea de ciudad.',
    palette: [
      { name: 'Grafito',         color: '#4A4A4A', image: '/images/tendencias_2.jpg' },
      { name: 'Azul Acero',      color: '#4A6FA5', image: '/images/haikrom-hero.jpg' },
      { name: 'Negro Absoluto',  color: '#1A1A1A', image: '/images/casos_de_exito.jpg' },
      { name: 'Bronce Metálico', color: '#8C6D3F', image: '/images/porque_1.jpg' },
    ],
  },
  {
    id: 'luminoso',
    overline: 'Tendencia 03',
    title: 'Espacios luminosos',
    copy: 'Tonos cálidos y claros que amplían visualmente los espacios, favoreciendo la calma y la luz natural. La opción ideal para interiores modernos y acogedores.',
    palette: [
      { name: 'Blanco Cálido', color: '#F5F0E8', image: '/images/tendencias_3.jpg' },
      { name: 'Marfil',        color: '#EFE9D0', image: '/images/porque_2.jpg' },
      { name: 'Arena Pálida',  color: '#E8D5B0', image: '/images/Hero Image.jpg' },
      { name: 'Rosa Nude',     color: '#DEB8A0', image: '/images/porque_3.jpg' },
    ],
  },
]

// ── Swatch chip ────────────────────────────────────────────────────────────────
function SwatchChip({ swatch, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border-2 transition-colors duration-200 ${
        active
          ? 'border-haikrom-dark-blue bg-white shadow-md'
          : 'border-transparent bg-gray-100 hover:bg-gray-200'
      }`}
    >
      <span
        className="w-4 h-4 rounded-full shrink-0 border border-black/10"
        style={{ backgroundColor: swatch.color }}
      />
      <span className={`${t.bodySm} text-gray-800 whitespace-nowrap`}>{swatch.name}</span>
    </motion.button>
  )
}

// ── Individual trend section ───────────────────────────────────────────────────
function TrendSection({ trend, index }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = trend.palette[activeIdx]
  const isEven = index % 2 === 0

  return (
    <section className="flex flex-col md:flex-row min-h-[90vh] md:min-h-screen">

      {/* Image panel */}
      <div
        className={`relative w-full md:w-1/2 min-h-[55vw] md:min-h-full ${
          isEven ? 'md:order-first' : 'md:order-last'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active.image}
            src={active.image}
            alt={active.name}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.25, 0, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Active color bar at bottom of image */}
        <motion.div
          key={active.color}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{ backgroundColor: active.color }}
        />

        {/* Active color pill overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-6 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg"
          >
            <span
              className="w-4 h-4 rounded-full border border-black/10"
              style={{ backgroundColor: active.color }}
            />
            <span className={`${t.bodySm} font-semibold text-gray-800`}>{active.name}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text panel */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center px-8 py-14 md:px-16 md:py-20 bg-haikrom-light ${
          isEven ? 'md:order-last' : 'md:order-first'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className={`${t.overline} text-haikrom-red mb-3`}>{trend.overline}</p>
          <h2 className={`${t.h2} text-haikrom-dark-blue`}>{trend.title}</h2>
          <p className={`mt-5 ${t.bodyLg} text-gray-600 max-w-[460px]`}>{trend.copy}</p>
        </motion.div>

        {/* Palette picker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mt-10"
        >
          <p className={`${t.caption} text-gray-400 uppercase tracking-widest mb-4`}>Paleta de color</p>
          <div className="flex flex-wrap gap-2.5">
            {trend.palette.map((swatch, i) => (
              <SwatchChip
                key={swatch.name}
                swatch={swatch}
                active={i === activeIdx}
                onClick={() => setActiveIdx(i)}
              />
            ))}
          </div>

          {/* Active color display */}
          <div className="mt-8 flex items-center gap-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={active.color}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-10 h-10 rounded-full border-2 border-white shadow-md shrink-0"
                style={{ backgroundColor: active.color }}
              />
            </AnimatePresence>
            <div>
              <p className={`${t.caption} text-gray-400 uppercase tracking-widest`}>Color activo</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.name}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                  className={`${t.bodySm} font-semibold text-gray-800`}
                >
                  {active.name}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────────
export default function Tendencias({ onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-haikrom-light"
    >

      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <motion.button
          onClick={onBack}
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.15 }}
          className={`flex items-center gap-2 bg-white/90 backdrop-blur-sm text-haikrom-dark-blue px-4 py-2.5 rounded-full shadow-md ${t.bodySm} font-semibold hover:bg-white transition-colors`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Inicio
        </motion.button>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center min-h-[65vh] bg-haikrom-dark-blue overflow-hidden px-8">
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #edb038, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #ee3e23, transparent 70%)' }} />

        <div className="relative text-center max-w-[768px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${t.overline} text-haikrom-gold mb-4`}
          >
            Inspiración arquitectónica
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0, 0.3, 1] }}
            className={`${t.h1} text-haikrom-light`}
          >
            Tendencias Arquitectónicas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={`mt-6 ${t.bodyLg} text-white/70 max-w-[560px] mx-auto`}
          >
            Descubre las paletas que están definiendo la arquitectura contemporánea. Selecciona un color para ver cómo transforma el espacio.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-white/40"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Trend sections ───────────────────────────────────────────────────── */}
      {trends.map((trend, i) => (
        <TrendSection key={trend.id} trend={trend} index={i} />
      ))}

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-haikrom-dark-blue px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className={`${t.overline} text-haikrom-gold mb-4`}>¿Listo para transformar tu espacio?</p>
          <h2 className={`${t.h2} text-white`}>Habla con nuestros especialistas</h2>
          <p className={`mt-4 ${t.bodyLg} text-white/60 max-w-[480px] mx-auto`}>
            Te ayudamos a elegir la paleta perfecta para tu proyecto arquitectónico.
          </p>
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            onClick={onBack}
            className={`mt-10 btn btn-primary px-8 py-4 rounded-lg ${t.label}`}
          >
            Solicita asesoría →
          </motion.button>
        </motion.div>
      </section>

    </motion.div>
  )
}
