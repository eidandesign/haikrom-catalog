import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Btn from './Btn'
import MobileMenu from './MobileMenu'
import Navbar from './Navbar'
import { type as t, layout } from '../styles/tokens'

// ─── Paint color swatches (27 colors, 3 × 9) ───────────────────────────────
const PAINT_COLORS = [
  { hex: '#ffffff', outlined: true },
  { hex: '#1c1c1e' }, { hex: '#c8c8c8' }, { hex: '#919191' }, { hex: '#545454' },
  { hex: '#d4b08a' }, { hex: '#a07050' }, { hex: '#388c7c' }, { hex: '#7ec9c4' },
  { hex: '#aed9a0' }, { hex: '#72b856' }, { hex: '#2e7d32' },
  { hex: '#93c6f0' }, { hex: '#2196f3' }, { hex: '#1a3f8a' },
  { hex: '#f4a8c0' }, { hex: '#e91e8a' }, { hex: '#d86fd6' },
  { hex: '#b39ddb' }, { hex: '#7b1fa2' }, { hex: '#c52828' },
  { hex: '#e53535' }, { hex: '#8c0e4f' }, { hex: '#ff8060' },
  { hex: '#fff59d' }, { hex: '#fbc02d' }, { hex: '#f9e825' },
]

const FOOTER_COLUMNS = [
  { title: 'Empresa',   links: ['Nosotros', 'Misión', 'Visión', 'Valores', 'Equipo'] },
  { title: 'Servicios', links: ['Pintura industrial', 'Recubrimientos', 'Asesoría técnica', 'Proyectos', 'Casos de éxito'] },
  { title: 'Recursos',  links: ['Guías', 'Tendencias', 'Fichas técnicas'] },
]

const SOCIALS = [
  {
    label: 'Facebook',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
  },
  {
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    label: 'LinkedIn',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
  },
  {
    label: 'YouTube',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

const ASSETS = {
  contacto:  '/images/contacto.jpg',
  creditsBg: '/images/footer.jpg',
  logoLight: '/images/haikrom_logo.svg',
}

// ─── Hamburger icon ───────────────────────────────────────────────────────────
function HamburgerBtn({ onClick }) {
  return (
    <button
      aria-label="Abrir menú"
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-[5px] w-8 h-8"
    >
      <span className="block w-6 h-0.5 bg-white rounded-full" />
      <span className="block w-6 h-0.5 bg-white rounded-full" />
      <span className="block w-6 h-0.5 bg-white rounded-full" />
    </button>
  )
}

// ─── Contact section (same layout as home page) ────────────────────────────────
function ContactSection() {
  return (
    <section className="px-4 py-16 md:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <p className={t.overline}>Contacto</p>
          <h2
            className={`mt-2 ${t.h2} text-haikrom-dark-blue`}
            style={{ fontFamily: 'Clash Display, sans-serif' }}
          >
            ¿Necesitas asesoría técnica?
          </h2>
          <p className={`mx-auto mt-6 max-w-[768px] ${t.bodyLg}`}>
            Nuestro equipo de especialistas te ayuda a elegir el recubrimiento ideal para tu proyecto.
            <br className="hidden md:block" />
            Cuéntanos brevemente lo que necesitas y nos pondremos en contacto contigo.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] xl:grid-cols-[680px_1fr]">
          <form className="flex flex-col gap-6">
            <div>
              <label className={`mb-2 block ${t.label}`}>Nombre completo</label>
              <input
                className={`w-full rounded-lg border border-black p-3 ${t.body} focus:outline-none focus:border-haikrom-dark-blue`}
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={`mb-2 block ${t.label}`}>Correo electrónico</label>
                <input
                  className={`w-full rounded-lg border border-black p-3 ${t.body} focus:outline-none focus:border-haikrom-dark-blue`}
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div>
                <label className={`mb-2 block ${t.label}`}>Número telefónico (Opcional)</label>
                <input
                  className={`w-full rounded-lg border border-black p-3 ${t.body} focus:outline-none focus:border-haikrom-dark-blue`}
                  placeholder="(55) 1234 5678"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={`mb-2 block ${t.label}`}>Nombre del proyecto</label>
                <input
                  className={`w-full rounded-lg border border-black p-3 ${t.body} focus:outline-none focus:border-haikrom-dark-blue`}
                  placeholder="Ej. Fachada corporativa en Guadalajara"
                />
              </div>
              <div>
                <label className={`mb-2 block ${t.label}`}>Tipo de superficie o recubrimiento</label>
                <input
                  className={`w-full rounded-lg border border-black p-3 ${t.body} focus:outline-none focus:border-haikrom-dark-blue`}
                  placeholder="Concreto, metal, madera…"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={`mb-2 block ${t.label}`}>Ubicación del proyecto</label>
                <input
                  className={`w-full rounded-lg border border-black p-3 ${t.body} focus:outline-none focus:border-haikrom-dark-blue`}
                  placeholder="Ciudad o estado"
                />
              </div>
              <div>
                <label className={`mb-2 block ${t.label}`}>Etapa del proyecto</label>
                <input
                  className={`w-full rounded-lg border border-black p-3 ${t.body} focus:outline-none focus:border-haikrom-dark-blue`}
                  placeholder="Diseño, construcción, mantenimiento…"
                />
              </div>
            </div>
            <div>
              <label className={`mb-2 block ${t.label}`}>Mensaje (opcional)</label>
              <textarea
                rows={4}
                className={`w-full rounded-lg border border-black p-3 ${t.body} resize-none focus:outline-none focus:border-haikrom-dark-blue`}
                placeholder="Cuéntanos en qué podemos ayudarte…"
              />
            </div>
            <label className={`flex items-center gap-2 ${t.bodySm}`}>
              <input type="checkbox" className="h-[18px] w-[18px] rounded" />
              Acepto términos y condiciones
            </label>
            <div>
              <Btn variant="primary" type="submit" className="px-14">
                Enviar
              </Btn>
            </div>
          </form>

          <img
            src={ASSETS.contacto}
            alt=""
            className="h-full min-h-[300px] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

// ─── Footer section (same as home page) ─────────────────────────────────────
function FooterSection() {
  return (
    <footer className="relative overflow-hidden px-4 py-20 text-haikrom-light md:px-16">
      <img src={ASSETS.creditsBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <img src={ASSETS.logoLight} alt="Haikrom" className="h-8 w-auto col-span-2 md:col-span-1" />
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className={t.h6}>{col.title}</h3>
                <ul className={`mt-4 space-y-2 ${t.bodySm}`}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-black/25 p-6">
            <h3 className={t.h6}>Suscribir</h3>
            <p className={`mt-3 ${t.body}`}>
              Recibe actualizaciones sobre nuestras soluciones y proyectos.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                className={`flex-1 border border-white bg-transparent p-3 ${t.body} placeholder:text-white/70 focus:outline-none`}
                placeholder="Ingresa tu correo"
              />
              <Btn variant="secondary" className="rounded-sm shrink-0">Enviar</Btn>
            </div>
            <p className={`mt-3 ${t.caption}`}>
              Al suscribirte, aceptas nuestra política de privacidad.
            </p>
          </div>
        </div>

        <div className="my-8 h-px bg-white/40" />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className={`flex flex-wrap gap-x-6 gap-y-2 ${t.bodySm}`}>
            <p>© 2026 Haikrom. Todos los derechos reservados.</p>
            <a href="#" className={`${t.bodySm} underline hover:text-white/80 transition-colors`}>Política de privacidad</a>
            <a href="#" className={`${t.bodySm} underline hover:text-white/80 transition-colors`}>Términos de servicio</a>
            <a href="#" className="font-montserrat underline hover:text-white/80 transition-colors">Configuración de cookies</a>
          </div>
          <div className="flex gap-4">
            {SOCIALS.map(({ label, icon }) => (
              <a key={label} href="#" aria-label={label} className="text-white/60 hover:text-white transition-colors duration-200">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Main ProductDetail page ───────────────────────────────────────────────────
export default function ProductDetail({ product, onBack, onNavigateToProduct }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [selectedThumb, setSelectedThumb] = useState(0)

  useEffect(() => {
    AOS.init({ once: true, easing: 'ease-out-cubic', offset: 60 })
    AOS.refresh()
    window.scrollTo(0, 0)
  }, [product.id])

  const thumbImages = [product.heroImage, product.heroImage, product.heroImage]

  return (
    <div className="bg-white text-black">

      {/* ── Fixed Navbar ──────────────────────────────────────────────────── */}
      <Navbar
        logo={ASSETS.logoLight}
        onLogoClick={onBack}
        onMenuOpen={() => setMenuOpen(true)}
      />

      {/* ── Hero — full viewport height ──────────────────────────────────── */}
      <section
        className="relative min-h-screen"
        style={{ backgroundColor: product.bg || '#0e375d' }}
      >

        {/* Desktop flex row: left image | right content */}
        <div className="hidden lg:flex min-h-screen">
          {/* Left: editorial image — stretches to match row height */}
          <div className="w-[55%] shrink-0 overflow-hidden" style={{ backgroundColor: product.bg }}>
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover min-h-screen"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>

          {/* Right: content panel — determines row height */}
          <div className="flex-1 flex flex-col px-14 xl:px-16">
            {/* Header spacer */}
            <div className="shrink-0 h-[90px]" />
            {/* Content centered in remaining viewport space */}
            <div className="flex-1 flex flex-col justify-center py-10">
              <div className="flex flex-col gap-8 lg:gap-10 text-white max-w-[529px]">

            {/* Product title + description */}
            <div className="flex flex-col gap-4">
              <h1
                className={`${t.h1} font-medium text-white`}
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                {product.name}
              </h1>
              <p className={`${t.bodyLg} text-white`}>
                {product.description}
              </p>
            </div>

            {/* Características */}
            <div className="flex flex-col gap-3">
              <h2
                className={`${t.h4} font-medium text-white`}
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                Características Principales
              </h2>
              <ul className={`${t.body} text-white list-disc pl-5 space-y-1`}>
                {product.caracteristicas.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Usos */}
            <div className="flex flex-col gap-3">
              <h2
                className={`${t.h4} font-medium text-white`}
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                Usos
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.usos.map((uso) => (
                  <span
                    key={uso}
                    className={`rounded-full px-4 py-1 ${t.body} whitespace-nowrap text-white`}
                    style={{ backgroundColor: product.tagBg }}
                  >
                    {uso}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <Btn variant="primary" size="lg">
                Descargar Ficha Técnica
              </Btn>
            </div>
          </div>{/* end content inner */}
            </div>{/* end justify-center */}
          </div>{/* end right panel */}
        </div>{/* end desktop flex row */}

        {/* Mobile layout: stacked (header already absolute above) */}
        <div className="lg:hidden flex flex-col">
          {/* Header spacer — matches header height (py-8 + logo h-8 + py-8 = 96px) */}
          <div className="h-24" />
          {/* Image */}
          <div className="w-full h-[260px] sm:h-[320px] overflow-hidden" style={{ backgroundColor: product.bg }}>
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-8 text-white px-6 py-10">
            <div className="flex flex-col gap-4">
              <h1 className={`${t.h1} font-medium text-white`}>
                {product.name}
              </h1>
              <p className={`${t.bodyLg} text-white`}>{product.description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className={`${t.h4} font-medium text-white`} style={{ fontFamily: 'Clash Display, sans-serif' }}>Características Principales</h2>
              <ul className={`${t.body} text-white list-disc pl-5 space-y-1`}>
                {product.caracteristicas.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className={`${t.h4} font-medium text-white`} style={{ fontFamily: 'Clash Display, sans-serif' }}>Usos</h2>
              <div className="flex flex-wrap gap-3">
                {product.usos.map((uso) => (
                  <span key={uso} className={`rounded-full px-4 py-1 ${t.body} whitespace-nowrap text-white`} style={{ backgroundColor: product.tagBg }}>{uso}</span>
                ))}
              </div>
            </div>
            <div><Btn variant="primary" size="lg">Descargar Ficha Técnica</Btn></div>
          </div>
        </div>
      </section>

      {/* ── Aplicaciones ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 lg:px-20 py-16 lg:py-20">
        <div className="mx-auto max-w-[1312px] flex flex-col lg:flex-row gap-12 lg:gap-20 items-start" data-aos="fade-up" data-aos-duration="800">

          {/* Left: details */}
          <div className="flex flex-col gap-8 lg:gap-10 flex-1 min-w-0">

            {/* Aplicaciones title */}
            <div className="flex flex-col gap-3 text-haikrom-dark-blue">
              <h2
                className="font-clash font-medium text-[28px] md:text-[32px] leading-[1.2]"
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                Aplicaciones
              </h2>
              <p className={t.bodyLg}>
                {product.aplicaciones}
              </p>
            </div>

            {/* Presentaciones */}
            <div className="flex flex-col gap-4">
              <h3
                className={`${t.h4} font-medium text-haikrom-dark-blue`}
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                Presentaciones
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.presentaciones.map((size, i) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(i)}
                    className={`rounded-full px-4 py-1 ${t.body} whitespace-nowrap transition-all duration-150 ${
                      selectedSize === i
                        ? 'bg-haikrom-dark-blue text-white'
                        : 'bg-[rgba(233,233,233,0.71)] text-haikrom-dark-blue hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color swatches */}
            <div className="flex flex-col gap-4">
              <h3
                className={`${t.h4} font-medium text-haikrom-dark-blue`}
                style={{ fontFamily: 'Clash Display, sans-serif' }}
              >
                Colores
              </h3>
              <div className="grid grid-cols-[repeat(9,minmax(0,2.75rem))] gap-2 md:gap-3 py-4">
                {PAINT_COLORS.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full transition-transform duration-150 hover:scale-110 ${
                      color.outlined
                        ? 'border-2 border-haikrom-dark-blue'
                        : 'border border-black/10'
                    } ${selectedColor === i ? 'ring-2 ring-offset-2 ring-haikrom-dark-blue scale-110' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Color ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Buy CTA */}
            <div>
              <Btn variant="primary" size="lg">
                Comprar
              </Btn>
            </div>
          </div>

          {/* Right: product images */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:shrink-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
            {/* Main image */}
            <div className="w-full lg:w-[560px] xl:w-[616px] h-[280px] sm:h-[360px] lg:h-[473px] rounded-lg overflow-hidden bg-gray-100">
              <motion.img
                key={selectedThumb}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                src={thumbImages[selectedThumb]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {thumbImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedThumb(i)}
                  className={`w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-md overflow-hidden border-2 transition-colors duration-150 bg-gray-100 ${
                    selectedThumb === i ? 'border-haikrom-dark-blue' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────── */}
      <div data-aos="fade-up" data-aos-duration="800">
        <ContactSection />
      </div>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <FooterSection />

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onProductClick={(id) => { onNavigateToProduct?.(id); setMenuOpen(false) }}
      />
    </div>
  )
}
