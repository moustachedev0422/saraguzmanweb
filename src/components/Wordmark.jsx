import { Link } from 'react-router-dom'
export default function Wordmark({ dark = false, className = '' }) {
  return (
    <Link
      to="/"
      className={`inline-flex h-20 w-44 shrink-0 items-center justify-start sm:h-28 sm:w-60 ${className}`}
      aria-label="Sara Guzmán - Inicio"
    >
      <img
        src="/assets/sara-guzman-logo.svg"
        alt="Sara Guzmán - Claridad & Transformación"
        className={`h-full w-full object-contain ${dark ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  )
}
