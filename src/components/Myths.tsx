import { myths } from "../data/content"
import { Reveal } from "./Reveal"

export function Myths() {
  return (
    <section id="mitos" className="bg-paper-deep py-24 text-ink md:py-36">
      <div className="page-shell">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold-deep">
            Contenido educativo
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Mito o verdad
          </h2>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-ink/65">
            Desarmamos creencias frecuentes —el mismo enfoque que en TikTok— para que
            sepas cuándo conviene consultar.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {myths.map((item, index) => (
            <Reveal key={item.claim} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-[2rem] bg-ink/[0.04] p-2 ring-1 ring-ink/5">
                <div className="flex h-full flex-col rounded-[calc(2rem-0.5rem)] bg-paper p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <span className="inline-flex w-fit rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {item.verdict}
                  </span>
                  <h3 className="mt-5 font-display text-2xl leading-snug text-ink md:text-[1.65rem]">
                    “{item.claim}”
                  </h3>
                  <div className="mt-6 h-px w-full bg-line-soft" />
                  <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gold-deep">
                    La verdad
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.truth}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
