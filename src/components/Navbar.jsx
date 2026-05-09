import { motion } from 'framer-motion'
import { useScrollDirection } from '../hooks/useScrollDirection'

export default function Navbar({ logo, onLogoClick, onMenuOpen, leftSlot }) {
  const { visible, scrolled } = useScrollDirection()

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -120 }}
      transition={{ duration: 0.35, ease: [0.25, 0, 0.5, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background — fades from transparent gradient to solid+blur as user scrolls */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={
          scrolled
            ? { backgroundColor: 'rgba(14,55,93,0.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', boxShadow: '0 1px 24px 0 rgba(0,0,0,0.18)' }
            : { background: 'linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, transparent 100%)' }
        }
      />

      {/* Content */}
      <div className="relative flex items-center justify-between px-4 py-5 md:px-16">
        {/* Left slot — optional, falls back to invisible spacer so logo stays centred */}
        <div className="w-8 flex items-center">
          {leftSlot}
        </div>

        {/* Logo — centred */}
        <button
          onClick={onLogoClick}
          aria-label="Ir al inicio"
          className="hover:opacity-75 transition-opacity"
        >
          <img src={logo} alt="Haikrom" className="h-9 w-auto sm:h-10 md:h-[50px]" />
        </button>

        {/* Hamburger */}
        <button
          aria-label="Abrir menú"
          onClick={onMenuOpen}
          className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className="block w-6 h-0.5 bg-white rounded-full" />
          <span className="block w-6 h-0.5 bg-white rounded-full" />
          <span className="block w-6 h-0.5 bg-white rounded-full" />
        </button>
      </div>
    </motion.header>
  )
}
