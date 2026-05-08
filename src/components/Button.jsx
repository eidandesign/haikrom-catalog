/**
 * Button — componente base de Haikrom
 *
 * Variants (Figma node 363:2680):
 *   - primary   → fondo rojo Haikrom #ee3e23, texto blanco. CTA principal.
 *   - outline   → borde blanco, texto blanco. Para fondos oscuros.
 *   - secondary → fondo blanco, texto azul oscuro #0e375d. Para fondos oscuros.
 *
 * Sizes:
 *   - md (default) → px-4 py-2, text-lg  (Figma: 16/8 px, 18 px)
 *   - sm           → px-3 py-1.5, text-sm
 *   - lg           → px-6 py-3, text-xl
 *
 * Props extra:
 *   - fullWidth → ocupa todo el ancho del contenedor
 *   - as        → 'button' (default) | 'a'  (para enlaces)
 *   - disabled  → estado deshabilitado
 *   - className → permite extender estilos puntualmente
 *
 * El resto de props (onClick, type, href, target, aria-*, etc.) se pasan
 * al elemento subyacente.
 *
 * Estados implementados por variante:
 *   primary   → default · hover (oscurecer + sombra roja) · active (más oscuro + scale) · focus · disabled
 *   outline   → default · hover (overlay blanco sutil)    · active (overlay + scale)     · focus · disabled
 *   secondary → default · hover (cream + sombra)          · active (cream 200 + scale)   · focus · disabled
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  as = 'button',
  className = '',
  disabled = false,
  ...rest
}) {
  // Estilos compartidos por todas las variantes
  const base =
    'inline-flex items-center justify-center rounded-lg font-montserrat font-medium ' +
    'leading-[1.4] whitespace-nowrap transition-all duration-200 ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none'

  // Tamaños — md replica las medidas exactas del Figma (16/8 px, 18 px)
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-lg',
    lg: 'px-6 py-3 text-xl',
  }

  // Variantes visuales — todos los estados interactivos
  const variants = {
    // CTA principal: rojo Haikrom. Hover oscurece + sombra roja. Active más oscuro + leve escala.
    primary:
      'bg-haikrom-red text-white border border-transparent ' +
      'hover:bg-[#c9341d] hover:shadow-lg hover:shadow-haikrom-red/30 ' +
      'active:bg-[#8f2513] active:scale-[0.97] active:shadow-none ' +
      'focus-visible:ring-haikrom-red focus-visible:ring-offset-white',

    // Para fondos oscuros. Hover = overlay blanco sutil (no flip a blanco entero).
    outline:
      'bg-transparent text-white border border-white ' +
      'hover:bg-white/10 ' +
      'active:bg-white/20 active:scale-[0.97] ' +
      'focus-visible:ring-white focus-visible:ring-offset-haikrom-dark-blue',

    // Para fondos oscuros. Hover = cream suave + sombra. Active = cream 200.
    secondary:
      'bg-white text-haikrom-dark-blue border border-transparent ' +
      'hover:bg-haikrom-cream hover:shadow-lg hover:shadow-black/10 ' +
      'active:bg-[#ede7e2] active:scale-[0.97] active:shadow-none ' +
      'focus-visible:ring-haikrom-dark-blue focus-visible:ring-offset-white',
  }

  const width = fullWidth ? 'w-full' : ''

  const classes = [
    base,
    sizes[size] ?? sizes.md,
    variants[variant] ?? variants.primary,
    width,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Renderizar como <a> si se pasa as="a"
  if (as === 'a') {
    return (
      <a
        className={classes}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={rest.type ?? 'button'}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
