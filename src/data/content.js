// ============================================================================
// CONTENIDO — fuente única: los documentos del proyecto (ficha descriptiva,
// Metodología Momento Cero, Sobre mí, Laboratorio de sueños, Creemos juntos,
// Descripción general, Frases para Instagram, Manual de identidad).
//
// Regla fundamental del brief: NO se inventa contenido. Todo lo que aparece
// aquí como copy real proviene literalmente de esos documentos. Donde el
// brief deja la sección abierta ("dejar estructura para incorporar
// posteriormente"), se marca con `placeholder: true` y un texto explícito
// entre corchetes — nunca se rellena con biografía, cifras, testimonios o
// proyectos inventados.
// ============================================================================

export const brand = {
  name: 'Sara Guzmán',
  tagline: 'Claridad & Transformación', // literal del wordmark en las piezas de referencia
  role: 'Arquitecta de Proyectos',
  email: 'saraguzman@proyectosg.com',
  instagram: { handle: 'projects.sg', url: 'https://www.instagram.com/projects.sg' },
  tiktok: { handle: '@projects.sg', url: 'https://www.tiktok.com/@projects.sg', status: '@projects.sg' },
}

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Explorar', to: '/explorar' },
  { label: 'Sara', to: '/sara' },
  { label: 'Empezar', to: '/empezar', cta: true },
]

export const home = {
  heroTitle: 'El orden de los sueños.',
  heroQuestion: '¿Qué quieres que exista?',
  heroCta: { label: 'Iniciar', to: '/metodologia' },
  // Frases reales de "Frases para imágenes de Instagram.docx", también presentes
  // en las piezas de referencia 01/02/03.jpg — usadas como micro-relato de scroll.
  scrollStory: [
    'Todo empezó como una idea que necesitaba un lugar.',
    'Un lugar para creer en lo que sueñas.',
    'Y construirlo con propósito.',
  ],
  universe: [
    {
      key: 'metodologia',
      title: 'Momento Zero',
      subtitle: 'Momento Zero',
      description: 'La estructura detrás de Momento Zero. Mi acompañamiento.',
      to: '/metodologia',
    },
    {
      key: 'sobre-mi',
      title: 'Sara',
      subtitle: 'Sara Guzmán Arroyo',
      description: 'Quién soy y qué construyo.',
      to: '/sara',
    },
    {
      key: 'laboratorio',
      title: 'Explorar',
      subtitle: 'Journal',
      description: 'Artículos y actividades.',
      to: '/explorar',
    },
    {
      key: 'empezar',
      title: 'Empezar',
      subtitle: 'Solicitar una cita',
      description: 'Cuestionario para solicitud de cita.',
      to: '/empezar',
    },
  ],
}

export const methodology = {
  eyebrow: 'Metodología',
  title: 'Momento Cero',
  eyebrowLine: 'Construir empieza mucho antes de ejecutar',
  intro:
    'Momento Cero es un método de acompañamiento estratégico diseñado para transformar ideas en proyectos con estructura, lógica y sostenibilidad. No aplicamos fórmulas rígidas ni modelos predefinidos. Hacemos una pausa consciente para entender la esencia de lo que quieres crear y descubrir la arquitectura exacta que tu proyecto necesita para crecer con coherencia.',
  comoLoHacemos: {
    title: 'Cómo lo hacemos',
    items: [
      {
        title: 'Conversación de Exploración',
        description: 'Un encuentro inicial para conocer la historia, intención y momento actual de tu proyecto.',
      },
      {
        title: 'Propuesta a Medida',
        description:
          'Diseño un acompañamiento personalizado adaptando la metodología únicamente a las fases que tu proyecto necesita construir o reforzar.',
      },
    ],
  },
  momentos: {
    title: 'Los 6 Momentos',
    items: [
      { n: '01', title: 'Declaración', description: 'Reconocer la intención y el compromiso detrás del proyecto.' },
      { n: '02', title: 'Enfoque', description: 'Definir la visión y el marco conceptual para tomar decisiones con criterio.' },
      { n: '03', title: 'Exploración', description: 'Formular las preguntas estratégicas que revelan el valor único de la idea.' },
      { n: '04', title: 'Definición', description: 'Filtrar y priorizar lo esencial para convertir ideas en una estructura clara.' },
      { n: '05', title: 'Creación', description: 'Diseñar los procesos, documentos y herramientas operativas a tu medida.' },
      { n: '06', title: 'Activación', description: 'Poner la estructura a operar en la realidad, ajustando sobre la práctica.' },
    ],
  },
  queConstruimos: {
    title: 'Qué construimos juntos',
    items: [
      { title: 'Comprensión de raíz', description: 'Claridad sobre la historia y necesidades reales del proyecto.' },
      { title: 'Estructura estratégica', description: 'Criterio para tomar decisiones sin depender de la improvisación.' },
      { title: 'Sistemas a medida', description: 'Documentación y procesos adaptados a tu ritmo y capacidad.' },
      { title: 'Bases para escalar', description: 'La tranquilidad de crecer de forma ordenada y sostenible.' },
    ],
  },
  closingQuote: 'Antes de crecer hacia afuera, todo proyecto necesita orden, y estructura por dentro.',
}

export const about = {
  title: '¿Quién está detrás de las preguntas?',
  lead: 'Soy Sara Guzmán.',
  intro: 'Acompaño el momento en que un sueño empieza a convertirse en algo que puede construirse.',
  cta: 'Conocer a Sara',
  sections: [
    { title: 'Quién soy', body: 'Soy Sara Guzmán.\n\nMe interesan las ideas, los proyectos y todo lo que puede llegar a existir cuando alguien decide tomarse en serio lo que imagina.' },
    { title: 'Cómo miro los proyectos', body: 'Cada proyecto es una posibilidad de transformarnos y dejar una huella propia en el mundo.' },
    { title: 'Lo que hago', body: 'Ordeno, defino y doy forma a las bases que permiten que una idea pueda avanzar sin perder lo que la hace propia.' },
  ],
}

export const journal = {
  eyebrow: 'Blog',
  title: 'Laboratorio de sueños',
  subtitle: 'Artículos y actividades (Journal)',
  contentType: 'Experiencia + herramienta + reflexión',
  presentacion:
    'Laboratorio de sueños es un espacio donde las ideas encuentran claridad antes de convertirse en acción. Nace de la convicción de que construir no empieza cuando hacemos, sino cuando entendemos qué queremos crear y por qué vale la pena hacerlo. Es una invitación a hacer una pausa, ordenar los pensamientos y tomar decisiones con mayor intención.',
  presentacion2:
    'Aquí comparto reflexiones, experiencias y herramientas que integran estrategia, gestión de proyectos, organización y mejora continua para ayudarte a transformar ideas dispersas en proyectos con dirección. Cada artículo busca ofrecer algo más que información: una forma de pensar, cuestionar y construir con sentido. Porque no se trata de avanzar más rápido, sino de avanzar con claridad hacia los sueños que quieres hacer realidad.',
  origen:
    'Laboratorio de sueños nace como una extensión natural del proceso de acompañamiento estratégico, al identificar la necesidad de compartir de forma abierta aprendizajes, metodologías y reflexiones construidas a partir de la experiencia en distintos proyectos. Nace desde la intención de dar continuidad a la misión de organizar ideas y aportar claridad, más allá del acompañamiento directo.',
  proposito:
    'Aportar claridad, estructura y dirección a través del contenido, permitiendo que más personas puedan organizar sus ideas, comprender mejor sus proyectos y avanzar con mayor coherencia y propósito, incluso sin estar dentro de un proceso de acompañamiento directo.',
  diferencial: [
    'Contenido basado en experiencia real, no solo en teoría.',
    'Enfoque estructurado y estratégico aplicado a cada tema.',
    'Integración de reflexión, claridad conceptual y aplicación práctica.',
    'Coherencia con una metodología propia de acompañamiento real.',
  ],
  categories: [
    { title: 'Reflexiones', description: 'Ideas para hacer una pausa, observar y darle sentido a lo que estás construyendo.' },
    { title: 'Herramientas', description: 'Recursos prácticos para ordenar, definir y poner en movimiento tus proyectos.' },
    { title: 'Experiencias', description: 'Aprendizajes nacidos de procesos reales que siguen tomando forma.' },
  ],
  // No hay artículos reales entregados todavía. Se deja UN artículo de muestra,
  // claramente marcado, únicamente para validar la plantilla de tarjeta/artículo.
  // No debe presentarse como contenido publicado.
  articles: [
    {
      slug: 'plantilla-de-ejemplo',
      isPlaceholder: true,
      category: '[Ejemplo de plantilla]',
      date: null,
      title: '[Título de artículo — contenido de muestra para validar la plantilla]',
      excerpt:
        '[Este es un artículo de ejemplo para mostrar cómo se verá la vista general de Laboratorio de sueños una vez existan artículos reales. Ningún texto de esta tarjeta proviene de los documentos entregados.]',
    },
  ],
}

export const contact = {
  eyebrow: 'Empezar',
  title: 'Creemos juntos',
  intro: 'Cuéntame qué quieres que exista?',
  sections: [
    {
      title: 'Información básica',
      fields: ['Nombre completo', 'Correo electrónico'],
    },
    {
      title: 'Tu idea',
      questions: [
        { q: '¿Qué quieres que empiece a existir?', freeText: true },
        { q: '¿Para quién quieres construirlo?', freeText: true },
      ],
    },
  ],
}

export const footer = {
  copyright: '© 2026 Sara Guzmán. Todos los derechos reservados.',
}
