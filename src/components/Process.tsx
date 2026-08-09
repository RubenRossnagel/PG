import { processSteps } from "../data/content"
import { Reveal } from "./Reveal"

export function Process() {
  return (
    <section id="proceso" className="bg-paper py-24 text-ink md:py-36">
      <div className="page-shell">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold-deep">
            Proceso
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Cómo trabajamos
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08}>
              <div className="border-t border-ink/10 pt-8">
                <p className="font-display text-5xl text-gold md:text-6xl">{step.n}</p>
                <h3 className="mt-5 font-display text-3xl">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/65">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
