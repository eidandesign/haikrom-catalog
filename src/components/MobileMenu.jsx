import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  { id: 'interior',          name: 'Pintura Arquitectónica Interior', image: '/images/Product_Image_1.jpg' },
  { id: 'exterior',          name: 'Pintura Arquitectónica Exterior',  image: '/images/Product_Image_2.jpg' },
  { id: 'metalicas',         name: 'Primer Epóxico Rico en Zinc',       image: '/images/Product_Image_3.jpg' },
  { id: 'impermeabilizante', name: 'Impermeabilizante 100% acrílico',   image: '/images/Product_Image_4.jpg' },
  { id: 'trafico',           name: 'Pintura de Tráfico',                image: '/images/Product_Image_5.jpg' },
]

const sections = ['Contacto', 'Tendencias', 'Casos de uso']

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook',  Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'X',         Icon: XIcon },
  { label: 'LinkedIn',  Icon: LinkedInIcon },
  { label: 'YouTube',   Icon: YouTubeIcon },
]

export default function MobileMenu({ isOpen, onClose, onProductClick, onSectionClick }) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0, 0.5, 1] }}
            className="fixed top-4 right-4 bottom-4 z-50 w-[calc(100%-2rem)] md:w-[400px] flex flex-col overflow-y-auto rounded-xl"
            style={{ backgroundColor: 'rgba(14, 55, 93, 0.97)' }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-end px-6 pt-6 pb-5 shrink-0">
              <button
                onClick={onClose}
                aria-label="Cerrar menú"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8 px-6 pb-8 flex-1">

              {/* Productos */}
              <div>
                <p className="font-clash text-white/50 text-sm tracking-widest uppercase mb-4">Productos</p>
                <ul className="flex flex-col gap-3">
                  {products.map((p) => (
                    <li key={p.name}>
                      <button
                        className="flex items-center gap-4 w-full group text-left"
                        onClick={() => { onProductClick?.(p.id); onClose(); }}
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-12 h-12 rounded-md object-cover shrink-0"
                        />
                        <span className="font-montserrat text-white text-base leading-snug group-hover:text-haikrom-red transition-colors">
                          {p.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/20" />

              {/* Secciones */}
              <div>
                <p className="font-clash text-white/50 text-sm tracking-widest uppercase mb-4">Secciones</p>
                <ul className="flex flex-col gap-3">
                  {sections.map((s) => (
                    <li key={s}>
                      <button
                        className="font-montserrat text-white text-base hover:text-haikrom-red transition-colors"
                        onClick={() => { onSectionClick?.(s); onClose() }}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Divider */}
              <div className="h-px bg-white/20" />

              {/* Redes sociales */}
              <div className="flex items-center gap-5">
                {socials.map(({ label, Icon }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <Icon />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
