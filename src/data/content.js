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
  tiktok: { handle: null, url: null, status: 'Pendiente de definir' },
  creemosJuntosForm: 'https://tally.so/r/9q2KgQ',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Metodología', to: '/metodologia' },
  { label: 'Sobre mí', to: '/sobre-mi' },
  { label: 'Blog', to: '/laboratorio-de-suenos' },
  { label: 'Creemos juntos', to: '/creemos-juntos', cta: true },
]

export const home = {
  heroKicker: 'Centro de actividad',
  heroTitle: 'Claridad y estructura para proyectos con propósito',
  heroSub:
    'Un espacio que reúne el universo profesional de Sara Guzmán: su filosofía, su metodología, sus proyectos y su forma de acompañar procesos.',
  heroCta: { label: 'Creemos juntos', to: '/creemos-juntos' },
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
      title: 'Metodología',
      subtitle: 'Momento Cero',
      description: 'La estructura detrás de Momento Cero. Mi acompañamiento.',
      to: '/metodologia',
    },
    {
      key: 'sobre-mi',
      title: 'Sobre mí',
      subtitle: 'Sara Guzmán Arroyo',
      description: 'Quién soy y qué construyo.',
      to: '/sobre-mi',
    },
    {
      key: 'laboratorio',
      title: 'Laboratorio de sueños',
      subtitle: 'Journal',
      description: 'Artículos y actividades.',
      to: '/laboratorio-de-suenos',
    },
    {
      key: 'creemos-juntos',
      title: 'Creemos juntos',
      subtitle: 'Solicitar una cita',
      description: 'Un espacio para iniciar un proceso y solicitar una cita.',
      to: '/creemos-juntos',
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
  eyebrow: 'Sobre mí',
  title: 'Quién soy y qué construyo',
  role: 'Arquitecta de Proyectos',
  paragraphs: [
    'Soy Sara Guzmán. Me apasionan el orden, las ideas y los proyectos que tienen un propósito detrás. A lo largo de mi experiencia he descubierto que una de mis mayores capacidades está en escuchar, observar y encontrar estructura donde otros ven muchas cosas dispersas.',
    'Me gusta entender cómo funciona cada proyecto, qué quiere llegar a ser y qué necesita para poder sostenerse. No parto de fórmulas hechas; parto de la realidad de cada persona, idea o proyecto.',
    'Desde la Arquitectura de Proyectos, acompaño ese proceso: ayudo a ordenar, definir y construir las bases que harán posible que una idea tome forma, avance y crezca sin perder aquello que la hace propia.',
  ],
  // Contenido real tomado de "2. Descripción general.docx.pdf" (Documento Madre),
  // que la ficha de "Sobre mí" prevé bajo "Filosofía". No se resume ni se reescribe.
  filosofia: {
    historia: [
      'La idea de Sara Guzmán nació de una pasión por los proyectos, el orden y las ideas que tienen sentido. Desde siempre ha existido una necesidad de imaginar, organizar y construir; con el tiempo, esa forma de ver el mundo encontró en los proyectos un lugar para convertirse en algo más.',
      'En 2022 nació el sueño de crear una forma propia de acompañar a quienes tienen una idea que realmente les mueve. En 2025 comenzó a tomar forma profesional, construyendo poco a poco los documentos, herramientas y metodología que hoy la sostienen.',
      'Pero también ha sido un camino de aprendizaje. Aprender a soñar, construir y darle forma a mis propios sueños me ha enseñado a comprender mejor los de otros. Por eso, hoy quiero acompañar a las personas a encontrar aquello que realmente les hace vibrar y, cuando lo encuentran, ayudarlas a darle una forma real.',
      'Porque no todo lo que imaginamos tiene que convertirse en un proyecto. Primero hay que descubrir si nace de nosotros, tiene sentido y merece ser construido.',
    ],
    mision:
      'Acompañar a personas, marcas y organizaciones a convertir ideas con propósito en proyectos reales, dándoles claridad y estructura sin perder su esencia.',
    vision:
      'Ver cada vez más personas construyendo aquello que realmente sueñan, encontrando en sus proyectos una forma de vivir con sentido, plenitud y coherencia con lo que llevan dentro.',
    valores: [
      { title: 'Honestidad', description: 'Decir y hacer desde la verdad.' },
      { title: 'Respeto', description: 'Cuidar a las personas, sus tiempos, sus ideas y sus límites.' },
      { title: 'Compromiso', description: 'Involucrarnos de verdad con aquello que decidimos construir.' },
      { title: 'Coherencia', description: 'Procurar que lo que somos, pensamos y hacemos tenga sentido entre sí.' },
      { title: 'Creatividad', description: 'Encontrar nuevas formas de dar vida a las ideas.' },
      { title: 'Cuidado', description: 'Tratar cada proyecto como algo que merece atención, paciencia y dedicación.' },
    ],
  },
  // Secciones que la ficha deja explícitamente abiertas para más adelante.
  placeholders: {
    fotografia: '[Espacio reservado para fotografía editorial de Sara — pendiente de sesión de fotos real]',
    experiencia: '[Espacio reservado para experiencia — contenido aún no proporcionado]',
    proyectos: '[Espacio reservado para proyectos — contenido aún no proporcionado]',
  },
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
  eyebrow: 'Creemos juntos',
  title: 'Creemos juntos',
  intro:
    'Este espacio es el primer paso para trabajar juntos. Aquí podrás pre-agendar nuestra conversación y compartir información clave sobre tu proyecto. Esto me permite prepararme mejor y aprovechar al máximo nuestro espacio.',
  cta: 'Solicitar una cita',
  formUrl: 'https://tally.so/r/9q2KgQ',
  // Estructura exacta del cuestionario, tal como aparece en "Creemos juntos.docx".
  sections: [
    {
      title: 'Información básica',
      fields: [
        'Nombre completo',
        'Fecha de nacimiento',
        'Hora de nacimiento',
        'Cédula',
        'Teléfono',
        'Correo electrónico',
        'Nombre de empresa o proyecto (Opcional)',
        'Instagram/Página Web (Opcional)',
        'Link de referencia (Opcional)',
      ],
    },
    {
      title: 'Contexto del proyecto',
      questions: [
        {
          q: '¿En qué tipo de proyecto estás trabajando?',
          options: [
            'Emprendimiento', 'Empresa o negocio', 'Marca personal', 'Producto o servicio',
            'Proyecto artístico o cultural', 'Evento', 'Proyecto social', 'Proyecto educativo',
            'Proyecto tecnológico', 'Proyecto ambiental', 'Otro',
          ],
        },
        { q: '¿Por qué existe este proyecto?', freeText: 'Describe qué necesidad, problema o situación te motivó a crearlo y cuál esperas que sea el impacto que genere cuando esté funcionando.' },
        { q: '¿En qué etapa estás?', options: ['Idea inicial', 'Estoy validando la idea', 'Ya inicié, pero necesito organización', 'Está en funcionamiento', 'Está creciendo', 'Necesita una reestructuración'] },
        { q: '¿Cuál consideras que es hoy el mayor reto de tu proyecto?', options: ['Falta de claridad', 'Falta de organización', 'Planeación', 'Recursos económicos', 'Conseguir clientes o usuarios', 'Formar un equipo', 'Ejecución', 'Comunicación o marketing', 'Otro'] },
        { q: '¿Qué has intentado hasta ahora?', options: ['Lo he trabajado por mi cuenta', 'He tomado cursos o mentorías', 'He trabajado con otros profesionales', 'Aún no he hecho mucho', 'Otro'] },
        { q: '¿Qué nivel de compromiso tienes actualmente con tu proyecto?', options: ['Estoy explorando posibilidades', 'Estoy comenzando a tomar acción', 'Estoy comprometido/a con construirlo seriamente', 'Estoy listo/a para invertir tiempo, energía y recursos en su crecimiento', 'Actualmente mi proyecto es una prioridad'] },
        { q: '¿Cuánto tiempo puedes dedicarle actualmente al proyecto?', options: ['Menos de 5 horas por semana', 'Entre 5 y 10 horas', 'Entre 10 y 20 horas', 'Más de 20 horas'] },
        { q: '¿Qué tan abierto estás a cuestionar, reorganizar o transformar partes de tu proyecto durante el proceso?', options: ['Poco abierto/a', 'Moderadamente abierto/a', 'Muy abierto/a', 'Totalmente dispuesto/a a reconstruir lo necesario para crecer'] },
        { q: '¿Hay algo más que debería saber antes de nuestra conversación?', freeText: true },
      ],
    },
    {
      title: 'Disponibilidad',
      description: 'A continuación podrás compartir la disponibilidad que mejor se ajuste a tus tiempos para una conversación inicial de máximo una hora, en un espacio en el que puedas conversar con tranquilidad.',
      questions: [
        { q: '¿Qué días suelen ajustarse mejor a tu disponibilidad?', options: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] },
      ],
    },
  ],
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} Sara Guzmán. Todos los derechos reservados.`,
  legalPlaceholder: '[Espacio reservado para elementos legales — pendiente de contenido]',
}
