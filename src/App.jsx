import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MobileMenu from './components/MobileMenu'
import ProductDetail from './components/ProductDetail'
import ComponentLibrary from './pages/ComponentLibrary'
import Tendencias from './pages/Tendencias'
import { type as t, layout } from './styles/tokens'

const assets = {
  heroBg:             '/images/haikrom-hero.jpg',
  interior:           '/images/Product_Image_1.jpg',
  exterior:           '/images/Product_Image_2.jpg',
  metalicas:          '/images/Product_Image_3.jpg',
  impermeabilizante:  '/images/Product_Image_4.jpg',
  trafico:            '/images/Product_Image_5.jpg',
  beneficioMain:      '/images/porque_1.jpg',
  beneficioAlt1:      '/images/porque_2.jpg',
  beneficioAlt2:      '/images/porque_3.jpg',
  caseStudy:          '/images/casos_de_exito.jpg',
  tendencia1:         '/images/tendencias_1.jpg',
  tendencia2:         '/images/tendencias_2.jpg',
  tendencia3:         '/images/tendencias_3.jpg',
  contacto:           '/images/contacto.jpg',
  creditsBg:          '/images/footer.jpg',
  logoLight:          '/images/haikrom_logo.svg',
}

const productRows = [
  {
    id: 'interior',
    tag: 'Interior',
    name: 'Pintura Arquitectónica',
    bg: 'bg-haikrom-dark-blue',
    textClass: 'text-white',
    tagBg: '#124677',
    image: assets.interior,
    description: 'Nuestra pintura 100% acrílica ofrece alta resistencia, acabado satinado lavable. Ideal para interiores y exteriores, con colores vibrantes y tecnología ecológica.',
    usos: ['Muros Interiores', 'Viviendas', 'Tablaroca', 'Durock', 'Plafones', 'Puertas', 'Elementos Decorativos', 'Recubre Madera'],
    detailName: 'Pintura Arquitectonica para Interiores',
    detailBg: '#0e375d',
    detailTagBg: '#124677',
    heroImage: assets.interior,
    caracteristicas: [
      'Alta resistencia a la intemperie y humedad.',
      'Secado rápido y aplicación sencilla.',
      'Fórmula ecológica con bajo contenido de COV.',
      'Acabado satinado y colores vibrantes.',
      'Alto poder cubriente.',
    ],
    aplicaciones: 'Viviendas, oficinas, locales comerciales y espacios arquitectónicos.',
    presentaciones: ['400 ml', '750 ml', '1 lt', '2 lt'],
  },
  {
    id: 'exterior',
    tag: 'Exterior',
    name: 'Pintura Arquitectónica',
    bg: 'bg-haikrom-brown',
    textClass: 'text-white',
    tagBg: 'rgba(255,255,255,0.15)',
    image: assets.exterior,
    description: 'Nuestra pintura 100% acrílica ofrece alta resistencia, acabado satinado 100% lavable. Ideal para exteriores con colores vibrantes y tecnología ecológica.',
    usos: ['Muros Exteriores', 'Fachadas', 'Tablaroca', 'Durock', 'Plafones', 'Puertas', 'Elementos Decorativos', 'Recubre Madera'],
    detailName: 'Pintura Arquitectonica para Exteriores',
    detailBg: '#834f31',
    detailTagBg: 'rgba(255,255,255,0.08)',
    heroImage: assets.exterior,
    caracteristicas: [
      'Alta resistencia a la intemperie y humedad.',
      'Secado rápido y aplicación sencilla.',
      "Fórmula ecológica con bajo contenido de VOC's.",
      'Acabado satinado y colores vibrantes.',
      'Alto poder cubriente incluso sobre colores obscuros.',
    ],
    aplicaciones: 'Fachadas, muros exteriores, bardas y espacios a la intemperie.',
    presentaciones: ['1 lt', '4 lt', '19 lt'],
  },
  {
    id: 'metalicas',
    tag: 'Superficies Metálicas',
    name: 'Primer Epóxico Rico en Zinc',
    bg: 'bg-[#626c79]',
    textClass: 'text-white',
    tagBg: 'rgba(255,255,255,0.15)',
    image: assets.metalicas,
    description: 'Ideal como base para recubrimientos adicionales en superficies metálicas expuestas a ambientes industriales exigentes.',
    usos: ['Estructuras Metálicas', 'Plataformas Petroleras', 'Tanques Metálicos', 'Equipo y Maquinaria Pesada', 'Tuberías Subterráneas'],
    detailName: 'Primer Epóxico Rico en Zinc',
    detailBg: '#626c79',
    detailTagBg: 'rgba(255,255,255,0.08)',
    heroImage: assets.metalicas,
    caracteristicas: [
      'Protección catódica superior.',
      'Excelente poder de anclaje.',
      'Resistencia química superior.',
      'Durabilidad extrema.',
      'Alta cantidad de zinc en su fórmula.',
    ],
    aplicaciones: 'Industria petrolera, construcción metálica, plantas industriales y marinas.',
    presentaciones: ['1 lt', '4 lt', '19 lt'],
  },
  {
    id: 'impermeabilizante',
    tag: '5 años y 10 años',
    name: 'Impermeabilizante 100% acrílico',
    bg: 'bg-[#b33634]',
    textClass: 'text-white',
    tagBg: 'rgba(255,255,255,0.15)',
    image: assets.impermeabilizante,
    description: 'Impermeabilizante 100% acrílico, por sus características ofrece una buena resistencia a la intemperie y un buen poder cubriente protegiendo efectivamente su azotea o muros.',
    usos: ['Lozas', 'Azoteas', 'Muros', 'Viviendas', 'Edificios', 'Locales comerciales', 'Industrias'],
    detailName: 'Impermeabilizante 100% Acrílico',
    detailBg: '#b33634',
    detailTagBg: 'rgba(255,255,255,0.08)',
    heroImage: assets.impermeabilizante,
    caracteristicas: [
      'Alta resistencia a la intemperie y humedad.',
      'Secado rápido y aplicación sencilla.',
      "Fórmula ecológica con bajo contenido de VOC's.",
      'Acabado satinado y colores vibrantes.',
      'Alto poder cubriente incluso sobre colores obscuros.',
    ],
    aplicaciones: 'Azoteas, losas, muros expuestos y techos planos residenciales e industriales.',
    presentaciones: ['4 lt', '10 lt', '19 lt'],
  },
  {
    id: 'trafico',
    tag: 'Base Solvente',
    name: 'Pintura de Tráfico',
    bg: 'bg-[#cf8a00]',
    textClass: 'text-white',
    tagBg: 'rgba(255,255,255,0.15)',
    image: assets.trafico,
    description: 'Pintura de tráfico de secado rápido con alta adherencia y alta resistencia. Formulada para superficies de alto tránsito, asegurando visibilidad y durabilidad prolongada.',
    usos: ['Calles', 'Autopistas', 'Estacionamientos', 'Zonas industriales', 'Áreas de Trabajo', 'Almacenes'],
    detailName: 'Pintura de Tráfico Base Solvente',
    detailBg: '#cf8a00',
    detailTagBg: 'rgba(255,255,255,0.08)',
    heroImage: assets.trafico,
    caracteristicas: [
      'Resistencia al tráfico y condiciones climáticas.',
      'Buena adherencia sobre asfalto y concreto.',
      'Colores intensos y reflectantes para seguridad vial.',
      'Buen desempeño en áreas de tráfico moderado.',
      'Alto poder cubriente.',
    ],
    aplicaciones: 'Estacionamientos, calles, zonas industriales, autopistas y señalización vial.',
    presentaciones: ['4 lt', '19 lt'],
  },
]

const beneficioSlides = [
  {
    image: assets.beneficioMain,
    left: 'Más en durabilidad comparada con la competencia.',
    right: 'La innovación está presente en cada uno de nuestros productos.',
  },
  {
    image: assets.beneficioAlt1,
    left: '24% más de rendimiento por litro que nuestros competidores.',
    right: 'Tecnología acrílica 100% para máxima adherencia.',
  },
  {
    image: assets.beneficioAlt2,
    left: 'Colores vibrantes que resisten la exposición solar.',
    right: 'Protección total frente a humedad, sal y temperatura.',
  },
]

const trends = [
  {
    title: 'Arquitectura natural y orgánica',
    copy: 'Acabados minerales y tonos tierra que reflejan conexión con lo natural. Ideal para proyectos residenciales.',
    image: assets.tendencia1,
  },
  {
    title: 'Contraste urbano',
    copy: 'Colores como grafito, azul acero o negro que dan modernidad. Inspirado en el diseño industrial.',
    image: assets.tendencia2,
  },
  {
    title: 'Espacios luminosos',
    copy: 'Tonos cálidos que amplían espacios, favoreciendo la calma. Ideal para interiores.',
    image: assets.tendencia3,
  },
]

const footerColumns = [
  { title: 'Empresa',   links: ['Nosotros', 'Misión', 'Visión', 'Valores', 'Equipo'] },
  { title: 'Servicios', links: ['Pintura industrial', 'Recubrimientos', 'Asesoría técnica', 'Proyectos', 'Casos de éxito'] },
  { title: 'Recursos',  links: ['Guías', 'Tendencias', 'Fichas técnicas'] },
]

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
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
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

const EASE = [0.4, 0, 0.2, 1]

function Btn({ children, variant = 'primary', className = '', type = 'button', onClick, disabled, ...rest }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { y: -3 }}
      whileTap={disabled ? {} : { scale: 0.96, y: 0 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={`btn btn-${variant} inline-flex items-center justify-center px-4 py-2 rounded-[8px] ${t.label} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  )
}

function Arrow() {
  return <span className="text-xl leading-none">›</span>
}

function ProductRow({ row, isOpen, onToggle, onViewProduct }) {
  return (
    <article className={`${row.bg} ${row.textClass}`}>
      <div className={`flex pr-4 md:pr-0 gap-20 pl-4 md:pl-20 ${isOpen ? 'items-start' : 'items-center'}`}>

        {/* Left column */}
        <motion.div
          className="w-full md:w-[600px] shrink-0 flex flex-col"
          animate={{
            paddingTop: isOpen ? 64 : 152,
            paddingBottom: isOpen ? 64 : 152,
          }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className={t.body}>{row.tag}</p>
              <h2 className={t.h3}>{row.name}</h2>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    key="desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: 0.15 }}
                    className={t.body}
                  >
                    {row.description}
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {!isOpen && (
                  <motion.button
                    key="ver-mas"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onToggle}
                    className={`btn btn-text flex items-center gap-2 ${t.body} w-fit rounded px-1 py-0.5`}
                  >
                    Ver más <ChevronDown />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{
                height: { duration: 0.55, ease: EASE },
                opacity: { duration: 0.3, delay: isOpen ? 0.15 : 0 },
              }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 py-4">
                  <h3 className={t.h5}>Usos</h3>
                  <div className="flex flex-wrap gap-4">
                    {row.usos.map((uso) => (
                      <span
                        key={uso}
                        style={{ backgroundColor: row.tagBg }}
                        className={`${t.body} text-white rounded-[32px] px-4 py-1 whitespace-nowrap`}
                      >
                        {uso}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 items-center flex-wrap">
                  <Btn variant="outline">Descargar Ficha Técnica</Btn>
                  <Btn variant="primary" onClick={() => onViewProduct(row)}>Ver Producto</Btn>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={onToggle}
                  className={`btn btn-text flex items-center gap-2 ${t.body} w-fit rounded px-1 py-0.5`}
                >
                  Ver menos <ChevronUp />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right column — hidden on mobile */}
        <div className="hidden md:flex flex-1 self-stretch relative overflow-hidden min-h-[304px] opacity-80">
          <img
            src={row.image}
            alt={row.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      </div>
    </article>
  )
}

function BeneficiosSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % beneficioSlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="px-4 py-12 md:px-16 md:py-4" data-aos="fade-up" data-aos-duration="800">
      <div className="mx-auto max-w-[1312px] flex flex-col items-center gap-12 py-16">

        <div className="flex flex-col items-center gap-4 text-center max-w-[768px]">
          <div className="border border-haikrom-dark-blue rounded-full px-4 py-1 w-fit">
            <span className={`${t.body} text-haikrom-dark-blue`}>Beneficios</span>
          </div>
          <h2 className={`${t.h3} text-haikrom-dark-blue`}>Por qué elegirnos</h2>
          <p className={`${t.body} text-black`}>Tecnología de punta para resultados superiores</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full md:px-14">

          <div className="w-full md:w-[364px] flex items-center justify-center min-h-[60px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={active + '-l'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`${t.h5} text-haikrom-dark-blue text-center`}
              >
                {beneficioSlides[active].left}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative h-[280px] md:h-[432px] w-full md:w-[433px] rounded-lg overflow-hidden shrink-0">
            {beneficioSlides.map((s, i) => (
              <motion.img
                key={i}
                src={s.image}
                alt=""
                animate={{ opacity: i === active ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
          </div>

          <div className="w-full md:w-[364px] flex items-center justify-center min-h-[60px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={active + '-r'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`${t.h5} text-haikrom-dark-blue text-center`}
              >
                {beneficioSlides[active].right}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-6 justify-center">
          {beneficioSlides.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.94, y: 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className={`relative rounded-[13px] overflow-hidden w-[82px] h-[82px] shrink-0 transition-[border-color] ${
                i === active ? 'border-4 border-haikrom-red' : 'border-4 border-transparent'
              }`}
            >
              <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

function initFromHash() {
  const hash = window.location.hash.slice(1)
  if (hash === 'design-system') return { showLibrary: true, showTendencias: false, product: null }
  if (hash === 'tendencias')    return { showLibrary: false, showTendencias: true,  product: null }
  if (hash.startsWith('product/')) {
    const id  = hash.replace('product/', '')
    const row = productRows.find(r => r.id === id)
    if (row) return {
      showLibrary: false, showTendencias: false,
      product: {
        id: row.id, name: row.detailName, description: row.description,
        heroImage: row.heroImage, bg: row.detailBg, tagBg: row.detailTagBg,
        caracteristicas: row.caracteristicas, usos: row.usos,
        aplicaciones: row.aplicaciones, presentaciones: row.presentaciones,
      },
    }
  }
  return { showLibrary: false, showTendencias: false, product: null }
}

export default function App() {
  const [openRow, setOpenRow] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(() => initFromHash().product)
  const [showLibrary, setShowLibrary] = useState(() => initFromHash().showLibrary)
  const [showTendencias, setShowTendencias] = useState(() => initFromHash().showTendencias)

  useEffect(() => {
    AOS.init({ once: true, easing: 'ease-out-cubic', offset: 60 })
  }, [])

  useEffect(() => {
    if (showLibrary) window.location.hash = 'design-system'
    else if (showTendencias) window.location.hash = 'tendencias'
    else if (currentProduct) window.location.hash = `product/${currentProduct.id}`
    else window.location.hash = ''
  }, [showLibrary, showTendencias, currentProduct])

  const handleToggle = (id) => {
    setOpenRow((prev) => (prev === id ? null : id))
  }

  const handleNavigateToProduct = (id) => {
    const row = productRows.find(r => r.id === id)
    if (row) handleViewProduct(row)
  }

  const handleViewProduct = (row) => {
    setCurrentProduct({
      id: row.id,
      name: row.detailName,
      description: row.description,
      heroImage: row.heroImage,
      bg: row.detailBg,
      tagBg: row.detailTagBg,
      caracteristicas: row.caracteristicas,
      usos: row.usos,
      aplicaciones: row.aplicaciones,
      presentaciones: row.presentaciones,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (showLibrary) {
    return (
      <>
        <ComponentLibrary />
        <button
          onClick={() => setShowLibrary(false)}
          className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-haikrom-red text-white rounded-lg font-montserrat font-medium shadow-lg hover:bg-red-700 transition"
        >
          ← Volver al sitio
        </button>
      </>
    )
  }

  if (showTendencias) {
    return (
      <Tendencias
        onBack={() => {
          setShowTendencias(false)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />
    )
  }

  if (currentProduct) {
    return (
      <ProductDetail
        product={currentProduct}
        onBack={() => {
          setCurrentProduct(null)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onNavigateToProduct={handleNavigateToProduct}
      />
    )
  }

  return (
    <div className="bg-white text-black">

      {/* ── Hero ── */}
      <section className="relative h-screen px-4 py-10 md:px-16">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/duxnks729/video/upload/v1778124304/haikrom-header_p7wzsa.mov"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative h-full mx-auto flex w-full max-w-[1312px] flex-col justify-between">
          <header className="flex items-center justify-between">
            <button
              onClick={() => setShowLibrary(true)}
              className={`${t.caption} text-white/60 hover:text-white transition`}
              title="View Design System"
            >
              ◆ Design
            </button>
            <img src={assets.logoLight} alt="Haikrom" className="h-10 w-auto md:h-[50px]" />
            <button
              aria-label="Abrir menú"
              onClick={() => setMenuOpen(true)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            >
              <span className="block w-6 h-0.5 bg-white rounded-full" />
              <span className="block w-6 h-0.5 bg-white rounded-full" />
              <span className="block w-6 h-0.5 bg-white rounded-full" />
            </button>
          </header>

          <div
            className="flex flex-col gap-4 pb-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="border border-white rounded-full px-4 py-1 w-fit">
              <p className={`${t.overline} text-white font-light`}>
                Más de 25 años de experiencia
              </p>
            </div>
            <h1 className={`${t.h1} text-[#fffcfb] max-w-[733px]`}>
              Soluciones de Pintura de Vanguardia
            </h1>
            <Btn variant="secondary" className="w-fit">
              Ver Productos
            </Btn>
          </div>
        </div>
      </section>

      {/* ── Productos ── */}
      <section>
        {productRows.map((row) => (
          <ProductRow
            key={row.id}
            row={row}
            isOpen={openRow === row.id}
            onToggle={() => handleToggle(row.id)}
            onViewProduct={handleViewProduct}
          />
        ))}
      </section>

      {/* ── Beneficios ── */}
      <BeneficiosSection />

      {/* ── Casos de éxito ── */}
      <section className="px-4 py-16 md:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[768px] text-center" data-aos="fade-up" data-aos-duration="800">
            <h2 className={`${t.h2} text-haikrom-dark-blue`}>Casos de éxito</h2>
            <p className={`mt-2 ${t.bodyLg}`}>Proyectos que transformamos con nuestra tecnología de pintura</p>
          </div>
          <article
            className="relative mt-12 h-[500px] md:h-[660px] overflow-hidden rounded-lg text-haikrom-light"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <img src={assets.caseStudy} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="relative flex h-full flex-col justify-between p-6 md:p-12">
              <div className="max-w-[391px]">
                <h3 className={t.h3}>Color, protección y estética en arquitectura contemporánea.</h3>
                <p className={`mt-4 ${t.bodyLg}`}>
                  Un despacho de arquitectos necesitaba un recubrimiento decorativo para fachadas. Haikrom ofreció su línea Premium,
                  asegurando una aplicación duradera.
                </p>
              </div>
              <div className="self-end rounded-lg bg-black/35 p-6 md:p-8 md:max-w-[425px]">
                <p className={`${t.overline} text-white/70 mb-1`}>Resultado</p>
                <p className={t.bodyLg}>
                  El proyecto mantiene su aspecto original tras más de dos años sin repintar.
                </p>
                <Btn variant="primary" className="mt-6">
                  Solicita asesoría técnica
                </Btn>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Tendencias ── */}
      <section className="px-4 pt-40 pb-16 md:px-16">
        <div className="relative mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[768px] text-center" data-aos="fade-up" data-aos-duration="800">
            <h2 className={`${t.h2} text-haikrom-dark-blue`}>Tendencias Arquitectónicas</h2>
            <p className={`mt-2 ${t.bodyLg}`}>El color que define la arquitectura contemporánea.</p>
          </div>
          <div className="mt-10 space-y-4">
            {trends.map((trend, i) => (
              <article
                key={trend.title}
                className="group relative min-h-[280px] overflow-hidden flex items-center px-6 py-10 text-haikrom-light md:px-16"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={i * 100}
              >
                <img
                  src={trend.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                <div className="relative max-w-[530px]">
                  <h3 className={t.h3}>{trend.title}</h3>
                  <p className={`mt-4 ${t.bodyLg}`}>{trend.copy}</p>
                  <button
                    onClick={() => { setShowTendencias(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className={`mt-4 inline-flex items-center gap-2 ${t.body} text-haikrom-light hover:opacity-70 transition-opacity`}
                  >
                    Ver más <Arrow />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section className="px-4 py-16 md:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center" data-aos="fade-up" data-aos-duration="800">
            <p className={t.overline}>Contacto</p>
            <h2 className={`mt-2 ${t.h2} text-haikrom-dark-blue`}>¿Necesitas asesoría técnica?</h2>
            <p className={`mx-auto mt-6 max-w-[768px] ${t.bodyLg}`}>
              Nuestro equipo de especialistas te ayuda a elegir el recubrimiento ideal para tu proyecto.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[680px_1fr]">
            <form className="space-y-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
              <div>
                <label className={`mb-2 block ${t.label}`}>Nombre completo</label>
                <input className="w-full rounded-lg border border-black p-3" placeholder="Tu nombre completo" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className={`mb-2 block ${t.label}`}>Correo electrónico</label>
                  <input className="w-full rounded-lg border border-black p-3" placeholder="ejemplo@correo.com" />
                </div>
                <div>
                  <label className={`mb-2 block ${t.label}`}>Número telefónico (Opcional)</label>
                  <input className="w-full rounded-lg border border-black p-3" placeholder="(55) 1234 5678" />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className={`mb-2 block ${t.label}`}>Nombre del proyecto</label>
                  <input className="w-full rounded-lg border border-black p-3" placeholder="Ej. Fachada corporativa en Guadalajara" />
                </div>
                <div>
                  <label className={`mb-2 block ${t.label}`}>Tipo de superficie o recubrimiento</label>
                  <input className="w-full rounded-lg border border-black p-3" placeholder="Concreto, metal, madera..." />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className={`mb-2 block ${t.label}`}>Ubicación del proyecto</label>
                  <input className="w-full rounded-lg border border-black p-3" placeholder="Ciudad o estado" />
                </div>
                <div>
                  <label className={`mb-2 block ${t.label}`}>Etapa del proyecto</label>
                  <input className="w-full rounded-lg border border-black p-3" placeholder="Diseño, construcción, mantenimiento..." />
                </div>
              </div>
              <div>
                <label className={`mb-2 block ${t.label}`}>Mensaje (opcional)</label>
                <textarea rows={4} className="w-full rounded-lg border border-black p-3" placeholder="Cuéntanos en qué podemos ayudarte..." />
              </div>
              <label className={`flex items-center gap-2 ${t.bodySm}`}>
                <input type="checkbox" className="h-[18px] w-[18px]" /> Acepto términos y condiciones
              </label>
              <Btn variant="primary" type="submit" className="px-14">
                Enviar
              </Btn>
            </form>

            <img
              src={assets.contacto}
              alt=""
              className="h-full min-h-[400px] w-full rounded-3xl object-cover"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="250"
            />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="relative overflow-hidden px-4 py-20 text-haikrom-light md:px-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <img src={assets.creditsBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              <img src={assets.logoLight} alt="Haikrom" className="h-8 w-auto col-span-2 md:col-span-1" />
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className={t.h6}>{column.title}</h3>
                  <ul className={`mt-4 space-y-2 ${t.bodySm}`}>
                    {column.links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-black/25 p-6">
              <h3 className={t.h6}>Suscribir</h3>
              <p className={`mt-3 ${t.body}`}>Recibe actualizaciones sobre nuestras soluciones y proyectos.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input className={`flex-1 border border-white bg-transparent p-3 ${t.body} placeholder:text-white/70`} placeholder="Ingresa tu correo" />
                <Btn variant="secondary" className="rounded-sm">
                  Enviar
                </Btn>
              </div>
              <p className={`mt-3 ${t.caption}`}>Al suscribirte, aceptas nuestra política de privacidad.</p>
            </div>
          </div>

          <div className="my-8 h-px bg-white/40" />

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className={`flex flex-wrap gap-x-6 gap-y-2 ${t.bodySm}`}>
              <p>© 2026 Haikrom. Todos los derechos reservados.</p>
              <a href="#" className={`${t.bodySm} underline`}>Política de privacidad</a>
              <a href="#" className={`${t.bodySm} underline`}>Términos de servicio</a>
              <a href="#" className={`${t.bodySm} underline`}>Configuración de cookies</a>
            </div>
            <div className="flex gap-4">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onProductClick={handleNavigateToProduct}
        onSectionClick={(s) => {
          if (s === 'Tendencias') { setShowTendencias(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }
        }}
      />
    </div>
  )
}
