import { Link } from 'react-router-dom'
import { brand, nav, footer } from '../data/content.js'
import Wordmark from './Wordmark.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-32">
      <div className="container-page py-16 grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Wordmark dark />
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
              <a href={`mailto:${brand.email}`} className="hover:text-sand transition-colors">
                {brand.email}
              </a>
            </li>
            <li>
              <a href={brand.instagram.url} target="_blank" rel="noreferrer" className="hover:text-sand transition-colors">
                Instagram — {brand.instagram.handle}
              </a>
            </li>
            <li className="text-cream/40">TikTok — {brand.tiktok.status}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-cream/40">
          <p>{footer.copyright}</p>
          <p className="italic">{footer.legalPlaceholder}</p>
        </div>
      </div>
    </footer>
  )
}
