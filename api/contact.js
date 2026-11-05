import { contact } from '../src/data/content.js'

const MAX_BODY_SIZE = 40_000
const MIN_COMPLETION_TIME = 2_500
const MAX_COMPLETION_TIME = 86_400_000
const DESTINATION_EMAIL = 'saraguzman@proyectosg.com'
const DEFAULT_FROM = 'Sara Guzmán <formulario@proyectosg.com>'

const basicFields = contact.sections[0].fields
const projectSections = contact.sections.slice(1)
const allowedQuestions = new Set(projectSections.flatMap((section) => section.questions.map((question) => question.q)))
const allowedFields = new Set(basicFields)

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}

function cleanText(value, maxLength = 2_000) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function cleanAnswer(value) {
  if (Array.isArray(value)) {
    return value.map((item) => cleanText(item, 160)).filter(Boolean).slice(0, 20)
  }
  return cleanText(value)
}

function answerToText(value) {
  if (Array.isArray(value)) return value.join(', ') || 'Sin respuesta'
  return value || 'Sin respuesta'
}

function normalizeAnswers(rawAnswers) {
  if (!rawAnswers || typeof rawAnswers !== 'object' || Array.isArray(rawAnswers)) return {}

  const answers = {}
  for (const [key, value] of Object.entries(rawAnswers)) {
    if (allowedFields.has(key) || allowedQuestions.has(key)) {
      answers[key] = cleanAnswer(value)
    }
  }
  return answers
}

function buildEmailText(answers) {
  return [
    'SOLICITUD DE CITA',
    '',
    'INFORMACIÓN BÁSICA',
    ...basicFields.map((field) => `${field}: ${answerToText(answers[field])}`),
    ...projectSections.flatMap((section) => [
      '',
      section.title.toUpperCase(),
      ...(section.description ? [section.description] : []),
      ...section.questions.flatMap((question) => [question.q, answerToText(answers[question.q])]),
    ]),
  ].join('\n')
}

async function validateTurnstile(token, request) {
  const formData = new FormData()
  formData.append('secret', process.env.TURNSTILE_SECRET_KEY)
  formData.append('response', token)
  formData.append('idempotency_key', crypto.randomUUID())

  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  if (clientIp) formData.append('remoteip', clientIp)

  const verificationResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  })
  const verification = await verificationResponse.json()

  return verificationResponse.ok && verification.success && verification.action === 'contact_form'
}

export default {
  async fetch(request) {
    if (request.method !== 'POST') return json({ error: 'Método no permitido.' }, 405)

    if (!process.env.RESEND_API_KEY || !process.env.TURNSTILE_SECRET_KEY) {
      console.error('Contact form configuration is incomplete.')
      return json({ error: 'El formulario no está disponible en este momento.' }, 503)
    }

    const contentLength = Number(request.headers.get('content-length') ?? 0)
    if (contentLength > MAX_BODY_SIZE) return json({ error: 'La solicitud es demasiado extensa.' }, 413)

    let payload
    try {
      payload = await request.json()
    } catch {
      return json({ error: 'No se pudo procesar la solicitud.' }, 400)
    }

    const honeypot = cleanText(payload?.website, 200)
    if (honeypot) return json({ ok: true })

    const startedAt = Number(payload?.startedAt)
    const elapsed = Date.now() - startedAt
    if (!Number.isFinite(startedAt) || elapsed < MIN_COMPLETION_TIME || elapsed > MAX_COMPLETION_TIME) {
      return json({ error: 'Por favor, revisa el formulario e inténtalo de nuevo.' }, 400)
    }

    const turnstileToken = cleanText(payload?.turnstileToken, 2_048)
    if (!turnstileToken) return json({ error: 'Completa la verificación de seguridad para continuar.' }, 400)

    let validTurnstileToken = false
    try {
      validTurnstileToken = await validateTurnstile(turnstileToken, request)
    } catch {
      return json({ error: 'No se pudo validar la verificación de seguridad. Inténtalo de nuevo.' }, 502)
    }

    if (!validTurnstileToken) {
      return json({ error: 'La verificación de seguridad expiró. Inténtalo de nuevo.' }, 400)
    }

    const answers = normalizeAnswers(payload?.answers)
    const name = cleanText(answers['Nombre completo'], 120).replace(/[\r\n]+/g, ' ')
    const replyTo = cleanText(answers['Correo electrónico'], 254)
    const emailPayload = {
      from: process.env.RESEND_FROM || DEFAULT_FROM,
      to: [DESTINATION_EMAIL],
      subject: `Solicitud de cita${name ? ` — ${name}` : ''}`,
      text: buildEmailText(answers),
    }

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) emailPayload.reply_to = replyTo

    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      })

      if (!resendResponse.ok) {
        console.error('Resend rejected contact form email.', resendResponse.status)
        return json({ error: 'No se pudo enviar la solicitud. Inténtalo de nuevo más tarde.' }, 502)
      }
    } catch (error) {
      console.error('Contact form email failed.', error)
      return json({ error: 'No se pudo enviar la solicitud. Inténtalo de nuevo más tarde.' }, 502)
    }

    return json({ ok: true })
  },
}
