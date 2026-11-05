import { Link } from 'react-router-dom'
import { brand, nav, footer } from '../data/content.js'

function ContactIcon({ name }) {
  const common = { className: 'h-5 w-5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: '1.7', 'aria-hidden': 'true' }

  if (name === 'mail') {
    return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>
  }
  if (name === 'instagram') {
    return <svg {...common}><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
  }
  return <svg {...common}><path d="M14.5 4.5c.4 3 2 4.8 5 5.1v3.1c-1.2 0-2.4-.3-3.4-1v5.1a5.7 5.7 0 1 1-4.9-5.7v3.2a2.6 2.6 0 1 0 1.7 2.5V4.5h1.6Z" /></svg>
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-32">
      <div className="container-page py-16 grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link to="/" className="block h-32 w-72 overflow-hidden sm:h-36 sm:w-80" aria-label="Sara Guzmán - Inicio">
            <img
              src="/assets/logo-sara-footer.svg"
              alt="Sara Guzmán - Claridad & Transformación"
              className="h-full w-full object-cover object-[50%_55%]"
            />
          </Link>
          <p className="mt-6 text-sm text-stone max-w-xs">
            Claridad y estructura para proyectos con propósito.
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase text-sand mb-5">Navegación</h3>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-cream/80 hover:text-sand transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.25em] uppercase text-sand mb-5">Contacto</h3>
          <ul className="space-y-3 text-sm text-cream/80">
            <li>
              <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-3 hover:text-sand transition-colors">
                <ContactIcon name="mail" />
                <span>{brand.email}</span>
              </a>
            </li>
            <li>
              <a href={brand.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-sand transition-colors">
                <ContactIcon name="instagram" />
                <span>{brand.instagram.handle}</span>
              </a>
            </li>
            <li>
              <a href={brand.tiktok.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-sand transition-colors">
                <ContactIcon name="tiktok" />
                <span>{brand.tiktok.handle}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-cream/40">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
