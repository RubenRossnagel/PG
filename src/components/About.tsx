import type { ReactNode } from "react"
import { brand, contact } from "../data/content"
import { Reveal } from "./Reveal"

/** Resalta en negrita las marcas clave dentro de un párrafo. */
function withBrandEmphasis(text: string): ReactNode[] {
  const pattern = /(LA TOGA|Abogada Paula García|Paula García)/g
  const parts = text.split(pattern)

  return parts.map((part, index) => {
    if (
      part === "LA TOGA" ||
      part === "Abogada Paula García" ||
      part === "Paula García"
    ) {
      return (
        <strong key={`${part}-${index}`} className="font-bold text-ink">
          {part}
        </strong>
      )
    }
    return <span key={`t-${index}`}>{part}</span>
  })
}

export function About() {
  return (
    <section id="estudio" className="bg-paper py-24 text-ink md:py-36">
      <div className="page-shell grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold-deep">
            Sobre la abogada
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Abogada Paula García
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <div className="mt-8 max-w-[48ch] space-y-5">
            {brand.about.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-ink/70 md:text-lg"
              >
                {withBrandEmphasis(paragraph)}
              </p>
            ))}
          </div>

          <p className="mt-10 max-w-[40ch] border-l-2 border-gold pl-5 font-display text-xl italic leading-snug text-ink md:text-2xl">
            {brand.signature}
          </p>

          <p className="mt-8 text-sm text-ink/50">
            También en TikTok{" "}
            <a
              href={contact.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-gold-deep underline-offset-4 hover:underline"
            >
              {contact.tiktokHandle}
            </a>
          </p>
        </Reveal>

        <Reveal className="md:col-span-6" delay={0.1}>
          <div className="rounded-[2rem] bg-ink/5 p-2 ring-1 ring-ink/5">
            <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-ink-elevated shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <img
                src="./images/about-justitia.png"
                alt="Justitia — símbolo de LA TOGA"
                className="aspect-[4/5] w-full origin-left scale-[1.15] object-cover object-left opacity-95 md:aspect-[5/6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-[90%] p-8 text-left">
                <p className="font-display text-3xl font-bold text-gold">LA TOGA</p>
                <p className="mt-1 text-sm text-paper/75">
                  Soluciones jurídicas integrales · Eldorado, Misiones
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
