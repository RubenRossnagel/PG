import { brand, contact, nav } from "../data/content"
import { buildWhatsAppUrl, defaultWhatsAppGreeting } from "../lib/whatsapp"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink pb-28 pt-16 md:pb-20">
      <div className="page-shell grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl text-gold">{brand.name}</p>
          <p className="mt-2 text-sm text-mute">
            {brand.professional} · {brand.role}
          </p>
          <p className="mt-4 text-sm text-mute">{brand.location}</p>
        </div>

        <nav className="md:col-span-4" aria-label="Pie">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-mute transition-colors duration-500 ease-luxe hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 md:text-right">
          <a
            href={buildWhatsAppUrl(defaultWhatsAppGreeting)}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gold hover:underline"
          >
            WhatsApp {contact.phoneDisplay}
          </a>
          <div className="mt-3">
            <a
              href={contact.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-mute hover:text-gold"
            >
              TikTok {contact.tiktokHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="page-shell mt-12 border-t border-line pt-6">
        <p className="text-xs text-mute/70">
          © {year} {brand.fullName}. Los contenidos son orientativos y no reemplazan
          una consulta profesional personalizada.
        </p>
      </div>
    </footer>
  )
}
