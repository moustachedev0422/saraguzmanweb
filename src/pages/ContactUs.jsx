import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Turnstile from '../components/Turnstile.jsx'
import { contact } from '../data/content.js'

const basicFields = contact.sections[0].fields
const [ideaQuestion, audienceQuestion] = contact.sections[1].questions

export default function ContactUs() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({})
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const startedAt = useRef(null)
  const redirectTimer = useRef(null)

  useEffect(() => {
    startedAt.current = Date.now()
    return () => window.clearTimeout(redirectTimer.current)
  }, [])

  const setAnswer = (question, value) => setAnswers((current) => ({ ...current, [question]: value }))

  const handleTurnstileVerify = useCallback((token) => {
    setTurnstileToken(token)
    setMessage('')
  }, [])

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken('')
    setMessage('No se pudo cargar la verificación de seguridad. Recarga la página e inténtalo de nuevo.')
  }, [])

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken('')
    setMessage('La verificación de seguridad expiró. Complétala nuevamente para enviar la solicitud.')
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'submitting') return
    if (!turnstileToken) {
      setMessage('Completa la verificación de seguridad para enviar tu solicitud.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, website: honeypot, startedAt: startedAt.current, turnstileToken }),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) throw new Error(result.error || 'No se pudo enviar la solicitud.')

      setStatus('success')
      setMessage('Gracias. Tu mensaje fue enviado a Sara.')
      redirectTimer.current = window.setTimeout(() => navigate('/'), 2_000)
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'No se pudo enviar la solicitud. Inténtalo de nuevo.')
    }
  }

  return (
    <>
      {message && (
        <div
          className={`fixed inset-x-4 top-24 z-[60] mx-auto max-w-md border px-5 py-4 text-sm shadow-lg ${status === 'error' ? 'border-red-200 bg-red-50 text-red-800' : 'border-ink/15 bg-cream text-ink'}`}
          role={status === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {message}
        </div>
      )}

      <section className="pt-40 pb-24 md:pt-48 md:pb-36">
        <div className="container-page" style={{ maxWidth: '1040px' }}>
          <Reveal>
            <p className="mb-6 text-xs tracking-[0.35em] uppercase text-stone">{contact.eyebrow}</p>
            <h1 className="max-w-2xl font-serif text-5xl leading-[0.94] text-ink md:text-7xl" style={{ fontFamily: 'var(--font-serif)' }}>
              {contact.title}
            </h1>
            <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-cafe md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
              {contact.intro}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="mt-14 border border-cafe/15 bg-cream/80 p-7 shadow-[0_24px_70px_rgba(74,60,48,0.08)] sm:p-10 md:p-14">
              <div className="border-b border-cafe/15 pb-10">
                <p className="text-xs tracking-[0.28em] uppercase text-stone">Lo esencial</p>
                <div className="mt-7 grid gap-x-10 gap-y-10 sm:grid-cols-2">
                {basicFields.map((field) => (
                  <label key={field}>
                    <span className="text-sm font-medium tracking-wide text-cafe">{field} <span className="text-sand-2" aria-hidden="true">*</span></span>
                    <input
                      type={field.includes('Correo') ? 'email' : 'text'}
                      required
                      value={answers[field] ?? ''}
                      onChange={(event) => setAnswer(field, event.target.value)}
                      className="mt-4 block w-full border-b border-cafe/30 bg-transparent pb-3 text-lg text-ink outline-none transition-colors placeholder:text-stone/50 focus:border-ink"
                    />
                  </label>
                ))}
                </div>
              </div>

              <div className="mt-11 space-y-11">
                {[ideaQuestion, audienceQuestion].map((question) => (
                  <label key={question.q} className="block">
                    <span className="font-serif text-2xl leading-none text-ink md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>{question.q}</span>
                    <textarea
                      value={answers[question.q] ?? ''}
                      onChange={(event) => setAnswer(question.q, event.target.value)}
                      rows="3"
                      placeholder="Escribe aquí"
                      className="mt-6 block w-full resize-none border-b border-cafe/30 bg-transparent pb-3 text-lg leading-relaxed text-ink outline-none transition-colors placeholder:font-serif placeholder:text-xl placeholder:italic placeholder:text-stone/60 focus:border-ink"
                    />
                  </label>
                ))}
              </div>

              <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Sitio web</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="mt-12 border-t border-cafe/15 pt-8">
                <p className="mb-4 text-sm leading-relaxed text-cafe/75">Esta verificación protege tu información y evita envíos automatizados.</p>
                <Turnstile onVerify={handleTurnstileVerify} onError={handleTurnstileError} onExpire={handleTurnstileExpire} />
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="rounded-full bg-ink px-8 py-4 text-sm tracking-[0.08em] text-cream transition-colors hover:bg-ink-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Enviando…' : 'Empezar'} <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
