import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page pt-48 pb-40 text-center">
      <h1 className="font-serif text-5xl text-ink mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
        404
      </h1>
      <p className="text-stone mb-8">Esta página no existe.</p>
      <Link to="/" className="underline text-ink">
        Volver al inicio
      </Link>
    </div>
  )
}
