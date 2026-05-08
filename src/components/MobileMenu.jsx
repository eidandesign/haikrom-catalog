import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIAL_LINKS } from './SocialIcons'

const products = [
  { id: 'interior',          name: 'Pintura Arquitectónica Interior', image: '/images/Product_Image_1.jpg' },
  { id: 'exterior',          name: 'Pintura Arquitectónica Exterior',  image: '/images/Product_Image_2.jpg' },
  { id: 'metalicas',         name: 'Primer Epóxico Rico en Zinc',       image: '/images/Product_Image_3.jpg' },
  { id: 'impermeabilizante', name: 'Impermeabilizante 100% acrílico',   image: '/images/Product_Image_4.jpg' },
  { id: 'trafico',           name: 'Pintura de Tráfico',                image: '/images/Product_Image_5.jpg' },
]

const sections = ['Contacto', 'Tendencias', 'Casos de uso']

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
                {SOCIAL_LINKS.map(({ label, Icon }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <Icon size={20} />
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
