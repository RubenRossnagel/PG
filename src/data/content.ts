/**
 * Fuente única de contenido del sitio LA TOGA.
 * Separar datos de la UI (SRP) facilita actualizar textos sin tocar componentes.
 */
export const brand = {
  name: "LA TOGA",
  tagline: "Misiones",
  fullName: "LA TOGA | Misiones",
  professional: "Abogada Paula García",
  role: "Soluciones jurídicas integrales",
  location: "Misiones, Argentina",
  headline:
    "Asesoramiento jurídico integral, con compromiso, cercanía y soluciones pensadas para cada situación.",
  /** Bio de la sección Estudio (párrafos). */
  about: [
    "Paula García posee una formación multidisciplinaria: Abogada, Escribana, Procuradora, Martillera Pública Nacional, Corredora de Comercio, Mandataria Nacional del Automotor y Créditos Prendarios, Perito Automotor y Profesora de Lengua y Literatura.",
    "Brinda asesoramiento jurídico integral en Derecho de Familia, Salud, Previsional, Laboral-ART, Civil y Comercial, Régimen Jurídico del Automotor y Derecho Administrativo, con una mirada integral orientada a comprender cada situación y ofrecer alternativas jurídicas concretas.",
    "Bajo el seudónimo LA TOGA, acerca el Derecho a la comunidad mediante contenidos claros, ejemplos prácticos y explicaciones destinadas a derribar mitos jurídicos. Desde Eldorado, Misiones, brinda atención presencial y asesoramiento a distancia, priorizando la claridad en la comunicación, el estudio particular de cada caso y el acompañamiento cercano. Su formación docente fortalece su vocación por explicar el Derecho en un lenguaje comprensible, sin perder rigurosidad jurídica.",
  ],
  /** Firma / saludo final del estudio. */
  signature:
    "Cada historia merece una mirada integral. Cada derecho, una solución responsable.",
} as const

export const contact = {
  phoneDisplay: "3751 476428",
  /** Formato internacional sin + ni espacios (wa.me). */
  phoneE164: "543751476428",
  whatsappLabel: "WhatsApp · 3751 476428",
  tiktok: "https://www.tiktok.com/@abogada.paulagarcia",
  tiktokHandle: "@abogada.paulagarcia",
  email: "", // opcional: completar si se publica un correo institucional
} as const

export const nav = [
  { label: "Estudio", href: "#estudio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Mito o verdad", href: "#mitos" },
  { label: "Casos", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
] as const

export const servicesIntro = {
  eyebrow: "Áreas de práctica",
  title: "Soluciones jurídicas para situaciones reales",
  lead:
    "Brindamos asesoramiento y representación en distintas áreas del Derecho, con un abordaje personalizado, comunicación clara y estrategias jurídicas adecuadas a las particularidades de cada situación.",
  closing:
    "Cada situación requiere una respuesta particular. Nuestro trabajo comienza con el análisis del caso, la explicación clara de las alternativas disponibles y la definición de una estrategia jurídica adecuada.",
  presence: "Atención presencial en Eldorado, Misiones, y asesoramiento a distancia.",
} as const

export const services = [
  {
    id: "familia",
    n: "01",
    title: "Derecho de Familia",
    blurb:
      "Asesoramiento y representación en las relaciones familiares y en los conflictos derivados de ellas.",
    topics: [
      "Alimentos",
      "Cuidado personal",
      "Régimen de comunicación",
      "Responsabilidad parental",
      "Divorcio",
      "Uniones convivenciales",
      "Filiación",
      "Autorizaciones judiciales",
      "Violencia familiar",
      "Acuerdos familiares",
    ],
  },
  {
    id: "civil",
    n: "02",
    title: "Derecho Civil y Comercial",
    blurb:
      "Asesoramiento en relaciones jurídicas entre particulares, obligaciones, contratos, bienes y conflictos de contenido patrimonial.",
    topics: [
      "Contratos",
      "Cobro de deudas",
      "Daños y perjuicios",
      "Responsabilidad civil",
      "Conflictos patrimoniales",
      "Derechos reales",
      "Desalojos",
      "Prescripción adquisitiva",
      "Acuerdos entre particulares",
    ],
  },
  {
    id: "sucesiones",
    n: "03",
    title: "Sucesiones",
    blurb:
      "Acompañamiento jurídico en los procesos vinculados con la transmisión y regularización del patrimonio de una persona fallecida.",
    topics: [
      "Sucesiones testamentarias e intestadas",
      "Declaratoria de herederos",
      "Bienes hereditarios",
      "Partición",
      "Inscripción de bienes",
      "Conflictos entre herederos",
    ],
  },
  {
    id: "salud",
    n: "04",
    title: "Derecho a la Salud",
    blurb:
      "Asesoramiento y representación frente a dificultades, demoras o negativas relacionadas con el acceso a prestaciones y tratamientos médicos.",
    topics: [
      "Obras sociales",
      "Prepagas",
      "Medicamentos",
      "Cirugías",
      "Prótesis",
      "Tratamientos médicos",
      "Coberturas especiales",
      "Amparos de salud",
    ],
  },
  {
    id: "fertilidad",
    n: "·",
    title: "Fertilidad y Reproducción Humana Asistida",
    blurb:
      "Asesoramiento jurídico vinculado con el acceso y la cobertura de técnicas y tratamientos de reproducción médicamente asistida.",
    topics: [
      "Ley Nº 26.862",
      "FIV",
      "ICSI",
      "Ovodonación",
      "Método ROPA",
      "Medicación",
      "Criopreservación",
      "Negativas de cobertura",
    ],
  },
  {
    id: "previsional",
    n: "05",
    title: "Derecho Previsional",
    blurb:
      "Asesoramiento para el acceso a jubilaciones, pensiones y demás prestaciones de la seguridad social.",
    topics: [
      "Jubilaciones",
      "Pensiones",
      "ANSES",
      "IPS",
      "Reconocimiento de servicios",
      "Aportes faltantes",
      "Tareas de cuidado",
      "Planificación previsional",
    ],
  },
  {
    id: "art",
    n: "06",
    title: "Laboral-ART",
    blurb:
      "Asesoramiento y representación en conflictos derivados de las relaciones laborales, accidentes de trabajo y enfermedades profesionales.",
    topics: [
      "Despidos",
      "Diferencias salariales",
      "Indemnizaciones",
      "Accidentes de trabajo",
      "Enfermedades profesionales",
      "ART",
      "Comisiones Médicas",
      "Incapacidad laboral",
    ],
  },
  {
    id: "automotor",
    n: "07",
    title: "Régimen Jurídico del Automotor",
    blurb:
      "Asesoramiento jurídico y registral relacionado con automotores, su titularidad, transmisión y las situaciones derivadas de operaciones pendientes o irregulares.",
    topics: [
      "Transferencias",
      "Formulario 08",
      "Denuncia de venta",
      "Informes registrales",
      "Titularidad",
      "Transferencias pendientes",
      "Créditos prendarios",
      "Asesoramiento registral automotor",
    ],
  },
  {
    id: "administrativo",
    n: "08",
    title: "Derecho Administrativo",
    blurb:
      "Asesoramiento y representación en procedimientos y relaciones jurídicas vinculadas con la Administración Pública.",
    topics: [
      "Actuaciones administrativas",
      "Reclamos",
      "Recursos",
      "Sumarios administrativos",
      "Empleo público",
      "Procedimientos ante organismos públicos",
    ],
  },
  {
    id: "gestiones",
    n: "09",
    title: "Gestiones Jurídicas y Administrativas",
    blurb:
      "Realizamos gestiones ante organismos públicos y privados —incluida la gestión de partidas—, brindando acompañamiento durante las distintas etapas del trámite.",
    topics: [
      "Gestión de partidas",
      "Gestiones administrativas y registrales",
      "Obtención de documentación",
      "Actas y partidas",
      "Trámites ante organismos públicos y privados",
    ],
  },
] as const

export const myths = [
  {
    claim: "Si no trabajé en blanco, no puedo jubilarme nunca.",
    verdict: "mito" as const,
    truth:
      "Existen caminos previsionales (moratorias, planes de pago y otras vías) que permiten regularizar aportes. Cada historia laboral se analiza caso por caso.",
  },
  {
    claim: "La cuota alimentaria se fija siempre en un porcentaje fijo del sueldo.",
    verdict: "mito" as const,
    truth:
      "Se evalúan necesidades del hijo/a y posibilidades del alimentante. No hay una fórmula única para todos los casos.",
  },
  {
    claim: "Si la obra social niega un tratamiento, no hay nada que hacer.",
    verdict: "mito" as const,
    truth:
      "En muchos casos procede un amparo de salud para exigir cobertura cuando hay derecho. Actuar a tiempo cambia el resultado.",
  },
] as const

export const cases = [
  {
    title: "Jubilación con aportes incompletos",
    detail:
      "Se revisó la historia laboral, se evaluó moratoria o plan de pago y se armó un camino previsional realista.",
  },
  {
    title: "Amparo ante negativa de cobertura",
    detail:
      "Obra social denegó un tratamiento. Se reunió documentación médica y se impulsó la vía de amparo con seguimiento.",
  },
  {
    title: "Familia: cuota y comunicación",
    detail:
      "Se ordenó el reclamo alimentario y se trabajó un régimen de comunicación claro, priorizando el interés de niñas y niños.",
  },
] as const

export const processSteps = [
  {
    n: "01",
    title: "Contanos tu caso",
    detail: "Por WhatsApp o formulario: qué pasó, qué necesitás y qué documentación tenés.",
  },
  {
    n: "02",
    title: "Analizamos opciones",
    detail: "Te explicamos escenarios posibles, plazos y estrategia con lenguaje claro.",
  },
  {
    n: "03",
    title: "Acompañamos el trámite",
    detail: "Seguimiento del expediente o gestión, con comunicación cercana en cada etapa.",
  },
] as const

/** Temas del formulario — alineados con servicios reales del estudio. */
export const consultationTopics = [
  { value: "familia", label: "Derecho de Familia" },
  { value: "civil", label: "Civil y Comercial" },
  { value: "sucesiones", label: "Sucesiones" },
  { value: "salud", label: "Derecho a la Salud" },
  { value: "fertilidad", label: "Fertilidad / ROPA" },
  { value: "previsional", label: "Derecho Previsional" },
  { value: "art", label: "Laboral-ART" },
  { value: "automotor", label: "Régimen del Automotor" },
  { value: "administrativo", label: "Derecho Administrativo" },
  { value: "gestiones", label: "Gestiones / Partidas" },
  { value: "otro", label: "Otro motivo" },
] as const
