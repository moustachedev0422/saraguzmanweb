import { Link } from 'react-router-dom'
import { brand } from '../data/content.js'

/**
 * Logotipo tipográfico — serif clásica (Cesso) para el nombre + versalitas
 * trackeadas para el subtítulo, tal como aparece en las piezas de referencia
 * (01/02/03.jpg): "Sara Guzmán" / "Claridad & Transformación".
 */
export default function Wordmark({ dark = false, className = '' }) {
  const color = dark ? 'text-cream' : 'text-ink'
  return (
    <Link to="/" className={`inline-flex flex-col items-center leading-none group ${className}`}>
      <span
        className={`font-serif text-2xl md:text-3xl tracking-tight ${color}`}
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {brand.name}
      </span>
      <span className={`mt-1 text-[9px] md:text-[10px] tracking-[0.35em] uppercase ${dark ? 'text-sand' : 'text-stone'}`}>
        {brand.tagline}
      </span>
    </Link>
  )
}
