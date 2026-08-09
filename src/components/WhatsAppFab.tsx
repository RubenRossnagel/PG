import { WhatsappLogo } from "@phosphor-icons/react"
import { contact } from "../data/content"
import { buildWhatsAppUrl, defaultWhatsAppGreeting } from "../lib/whatsapp"

/** CTA flotante siempre visible — acceso rápido a WhatsApp. */
export function WhatsAppFab() {
  return (
    <a
      href={buildWhatsAppUrl(defaultWhatsAppGreeting)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Abrir WhatsApp ${contact.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-500 ease-luxe hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
    >
      <WhatsappLogo size={30} weight="fill" />
    </a>
  )
}
