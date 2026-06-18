import { motion } from 'framer-motion'
import { type as t } from '../styles/tokens'

// Tamaños — md (default) usa el padding/tipografía base (t.label, 18px).
// El `!` en sm/lg garantiza que el tamaño de texto gane sobre el text-[18px] de t.label.
const sizes = {
  sm: 'px-3 py-1.5 !text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 !text-xl',
}

export default function Btn({ children, variant = 'primary', size = 'md', className = '', type = 'button', onClick, disabled, ...rest }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { y: -3 }}
      whileTap={disabled ? {} : { scale: 0.96, y: 0 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={`btn btn-${variant} inline-flex items-center justify-center rounded-[8px] ${t.label} ${sizes[size] ?? sizes.md} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
