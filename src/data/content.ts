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
    "Acompañamiento legal claro, humano y estratégico para proteger tus derechos.",
  summary:
    "Estudio jurídico orientado a familias, salud, fertilidad y previsional. Explicamos cada paso con lenguaje simple y estrategias concretas, como en nuestros contenidos educativos.",
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

export const services = [
  {
    id: "familia",
    title: "Derecho de familia",
    blurb:
      "Cuota alimentaria, régimen de comunicación, lactancia y acuerdos que cuidan el vínculo familiar.",
    topics: ["Cuota alimentaria", "Visitas y comunicación", "Derechos de lactancia"],
  },
  {
    id: "fertilidad",
    title: "Fertilidad y ROPA",
    blurb:
      "Orientación sobre Método ROPA y cobertura bajo la Ley Nº 26.862 de reproducción asistida.",
    topics: ["Método ROPA", "Ley 26.862", "Cobertura de tratamientos"],
  },
  {
    id: "salud",
    title: "Amparos de salud",
    blurb:
      "Cuando la obra social o prepaga niega un tratamiento, actuamos con amparo y seguimiento.",
    topics: ["Negativas de cobertura", "Tratamientos urgentes", "Amparo"],
  },
  {
    id: "previsional",
    title: "Derecho previsional",
    blurb:
      "Jubilaciones, moratorias, aportes faltantes y opciones pensadas para madres e historias laborales reales.",
    topics: ["Aportes incompletos", "Planes de pago", "Jubilación por hijos"],
  },
  {
    id: "art",
    title: "ART y riesgos del trabajo",
    blurb:
      "Asesoramiento ante accidentes laborales y reclamos frente a ART, con foco en protección efectiva.",
    topics: ["Accidentes laborales", "Reclamos ART", "Seguimiento del caso"],
  },
  {
    id: "partidas",
    title: "Gestión de partidas",
    blurb:
      "Solicitud y gestión de partidas y documentación oficial en la provincia de Misiones.",
    topics: ["Partidas provinciales", "Trámites documentales", "Seguimiento"],
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
  { value: "familia", label: "Derecho de familia" },
  { value: "fertilidad", label: "Fertilidad / Método ROPA" },
  { value: "salud", label: "Amparos de salud" },
  { value: "previsional", label: "Jubilación / previsional" },
  { value: "art", label: "ART / accidente laboral" },
  { value: "partidas", label: "Partidas / documentación" },
  { value: "otro", label: "Otro motivo" },
] as const
