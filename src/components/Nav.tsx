import { useEffect, useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { brand, nav } from "../data/content"
import { buildWhatsAppUrl, defaultWhatsAppGreeting } from "../lib/whatsapp"

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 md:px-6">
      <div
        className={`relative z-50 mx-auto flex w-full max-w-[1120px] items-center justify-between gap-3 rounded-full border px-4 py-2.5 transition-[background,border-color,box-shadow] duration-700 ease-luxe ${
          scrolled || open
            ? "border-white/10 bg-ink/85 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "border-white/5 bg-ink/40 backdrop-blur-sm"
        }`}
      >
        <a href="#top" className="min-w-0 pl-1">
          <span className="font-display text-xl font-semibold tracking-wide text-gold md:text-2xl">
            {brand.name}
          </span>
          <span className="ml-2 hidden text-[10px] uppercase tracking-[0.22em] text-mute sm:inline">
            {brand.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mute transition-colors duration-500 ease-luxe hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href={buildWhatsAppUrl(defaultWhatsAppGreeting)}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-gold px-4 text-sm font-medium text-ink transition-transform duration-500 ease-luxe hover:bg-gold-soft active:scale-[0.98]"
          >
            WhatsApp
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-px">
              ↗
            </span>
          </a>
        </nav>

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} weight="light" /> : <List size={18} weight="light" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-ink/92 backdrop-blur-xl lg:hidden"
        >
          <div className="flex h-full flex-col px-6 pb-10 pt-24">
            <div className="flex flex-col gap-5">
              {nav.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display text-4xl text-paper opacity-0 animate-[fadeUp_0.55s_var(--ease-luxe)_forwards]"
                  style={{ animationDelay: `${100 + i * 60}ms` }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href={buildWhatsAppUrl(defaultWhatsAppGreeting)}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex h-12 items-center justify-center rounded-full bg-gold text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      ) : null}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(1.5rem); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}
