import { contact } from "../data/content"

export type ConsultationPayload = {
  name: string
  phone: string
  topicLabel: string
  message: string
}

/** Construye el enlace wa.me con mensaje prearmado (sin backend). */
export function buildWhatsAppUrl(text?: string): string {
  const base = `https://wa.me/${contact.phoneE164}`
  if (!text?.trim()) return base
  return `${base}?text=${encodeURIComponent(text.trim())}`
}

export function buildConsultationMessage(payload: ConsultationPayload): string {
  return [
    "Hola, quiero una consulta con LA TOGA.",
    "",
    `Nombre: ${payload.name}`,
    `Teléfono: ${payload.phone}`,
    `Tema: ${payload.topicLabel}`,
    "",
    `Consulta: ${payload.message}`,
  ].join("\n")
}

export const defaultWhatsAppGreeting =
  "Hola Paula, vi la web de LA TOGA y me gustaría hacer una consulta."
