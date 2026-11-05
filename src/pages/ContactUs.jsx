import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Turnstile from '../components/Turnstile.jsx'
import { contact } from '../data/content.js'

const basicFields = contact.sections[0].fields
const projectSections = contact.sections.slice(1)

function inputType(label) {
  if (label.includes('Correo')) return 'email'
  if (label.includes('Fecha')) return 'date'
  if (label.includes('Hora')) return 'time'
  if (label.includes('Teléfono')) return 'tel'
  return 'text'
}

export default function ContactUs() {
  const [answers, setAnswers] = useState({})
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const startedAt = useRef(null)

  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const setAnswer = (question, value) => setAnswers((current) => ({ ...current, [question]: value }))
  const toggleAnswer = (question, option) => {
    const selected = answers[question] ?? []
    setAnswer(question, selected.includes(option) ? selected.filter((item) => item !== option) : [...selected, option])
  }

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
      setMessage('Gracias. Tu solicitud fue enviada a Sara.')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'No se pudo enviar la solicitud. Inténtalo de nuevo.')
    }
  }

  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="mb-6 text-xs tracking-[0.35em] uppercase text-stone">{contact.eyebrow}</p>
            <h1 className="font-serif text-4xl leading-[0.98] text-ink md:text-6xl" style={{ fontFamily: 'var(--font-serif)' }}>
              {contact.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cafe/80">{contact.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-2 py-20 md:py-28">
        <div className="container-page max-w-4xl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-stone">Sin requisitos previos</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-5xl" style={{ fontFamily: 'var(--font-serif)' }}>
                Puedes empezar cuando quieras.
              </h2>
              <p className="mt-6 leading-relaxed text-cafe/75">
                Momento Zero es un espacio de reflexión, no un requisito para solicitar una cita. Comparte solo lo que te resulte útil en este momento.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="mt-12 border border-cafe/15 bg-cream p-7 sm:p-10 md:p-12">
              <div className="flex flex-col gap-3 border-b border-cafe/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-stone">Solicitud de cita</p>
                  <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
                    Cuéntame sobre tu momento.
                  </h2>
                </div>
                <p className="max-w-xs text-sm leading-relaxed text-stone">Las preguntas son opcionales. Puedes enviar la solicitud cuando quieras.</p>
              </div>

              <fieldset className="mt-10">
                <legend className="text-xs tracking-[0.3em] uppercase text-stone">Información básica</legend>
                <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {basicFields.map((field) => (
                    <label key={field} className={field.includes('empresa') || field.includes('Instagram') || field.includes('Link') ? 'sm:col-span-2' : ''}>
                      <span className="text-sm text-cafe">{field}</span>
                      <input
                        type={inputType(field)}
                        value={answers[field] ?? ''}
                        onChange={(event) => setAnswer(field, event.target.value)}
                        className="mt-2 block w-full border-b border-cafe/20 bg-transparent pb-2 text-ink outline-none transition-colors focus:border-ink"
                      />
                    </label>
                  ))}
                </div>
              </fieldset>

              {projectSections.map((section) => (
                <fieldset key={section.title} className="mt-12 border-t border-cafe/15 pt-10">
                  <legend className="pr-4 text-xs tracking-[0.3em] uppercase text-stone">{section.title}</legend>
                  {section.description && <p className="mt-4 max-w-2xl leading-relaxed text-cafe/75">{section.description}</p>}
                  <div className="mt-8 space-y-9">
                    {section.questions.map((question) => {
                      const multiple = question.q.includes('días')
                      return (
                        <div key={question.q}>
                          <p className="text-base leading-relaxed text-ink">{question.q}</p>
                          {question.options && (
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                              {question.options.map((option) => (
                                <label key={option} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-cafe/80">
                                  <input
                                    type={multiple ? 'checkbox' : 'radio'}
                                    name={multiple ? undefined : question.q}
                                    checked={multiple ? (answers[question.q] ?? []).includes(option) : answers[question.q] === option}
                                    onChange={() => multiple ? toggleAnswer(question.q, option) : setAnswer(question.q, option)}
                                    className="mt-1 accent-ink"
                                  />
                                  <span>{option}</span>
                                </label>
                              ))}
                            </div>
                          )}
                          {question.freeText && (
                            <textarea
                              value={answers[question.q] ?? ''}
                              onChange={(event) => setAnswer(question.q, event.target.value)}
                              rows="4"
                              placeholder={typeof question.freeText === 'string' ? question.freeText : 'Escribe aquí'}
                              className="mt-4 block w-full resize-y border-b border-cafe/20 bg-transparent pb-3 leading-relaxed text-ink outline-none placeholder:text-stone/70 focus:border-ink"
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </fieldset>
              ))}

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

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-cream transition-colors hover:bg-ink-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Enviando…' : 'Enviar solicitud'} <span aria-hidden="true">→</span>
                </button>
                {message && <p className={status === 'error' ? 'max-w-md text-sm leading-relaxed text-red-700' : 'text-sm text-cafe/75'} role="status">{message}</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
