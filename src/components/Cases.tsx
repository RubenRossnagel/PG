import { cases } from "../data/content"
import { Reveal } from "./Reveal"

export function Cases() {
  return (
    <section id="casos" className="border-t border-line bg-ink py-24 md:py-36">
      <div className="page-shell">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            Ejemplos prácticos
          </p>
          <h2 className="mt-4 max-w-[18ch] font-display text-4xl font-semibold tracking-tight text-paper md:text-6xl">
            Situaciones que acompañamos
          </h2>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-mute">
            Casos tipo inspirados en consultas frecuentes. Cada historia se evalúa de
            forma individual; no sustituyen asesoramiento personalizado.
          </p>
        </Reveal>

        <ol className="mt-16 space-y-0 border-t border-line">
          {cases.map((item, index) => (
            <li key={item.title} className="border-b border-line">
              <Reveal delay={index * 0.06}>
                <div className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
                  <span className="font-display text-4xl text-gold/80 md:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl text-paper">{item.title}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-mute md:col-span-6">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
