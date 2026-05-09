import { motion } from 'framer-motion'
import { type as t } from '../styles/tokens'

export default function Btn({ children, variant = 'primary', className = '', type = 'button', onClick, disabled, ...rest }) {
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
