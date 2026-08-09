import { brand, contact } from "../data/content"
import { Reveal } from "./Reveal"

export function About() {
  return (
    <section id="estudio" className="bg-paper py-24 text-ink md:py-36">
      <div className="page-shell grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold-deep">
            Sobre la abogada
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Paula García
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-8 max-w-[42ch] text-base leading-relaxed text-ink/70 md:text-lg">
            {brand.summary}
          </p>
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-ink/70">
            El enfoque del estudio combina rigor jurídico con pedagogía: desarmamos
            mitos, mostramos ejemplos prácticos y acompañamos a personas y familias
            de Misiones en trámites que impactan su vida cotidiana.
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
                src="./images/hero-atmosphere.png"
                alt="Ambiente institucional LA TOGA"
                className="aspect-[4/5] w-full object-cover opacity-90 md:aspect-[5/6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-3xl text-gold">LA TOGA</p>
                <p className="mt-1 text-sm text-paper/75">
                  Soluciones jurídicas integrales · Misiones
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
