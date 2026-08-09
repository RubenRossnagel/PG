import { ArrowUpRight } from "@phosphor-icons/react"
import { brand, services, servicesIntro } from "../data/content"
import { Reveal } from "./Reveal"

export function Services() {
  return (
    <section id="servicios" className="border-t border-line bg-ink py-24 md:py-36">
      <div className="page-shell">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            {servicesIntro.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[18ch] font-display text-4xl font-semibold tracking-tight text-paper md:text-6xl">
            {servicesIntro.title}
          </h2>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-mute">
            {servicesIntro.lead}
          </p>
        </Reveal>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={Math.min(index * 0.03, 0.24)}>
                <a
                  href="#contacto"
                  className="group grid gap-4 py-8 transition-colors duration-500 ease-luxe md:grid-cols-12 md:items-start md:gap-8 md:py-10"
                >
                  <div className="md:col-span-5">
                    <h3 className="font-display text-3xl text-paper transition-colors duration-500 ease-luxe group-hover:text-gold md:text-4xl">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-base leading-relaxed text-mute">{service.blurb}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-mute/70">
                      {service.topics.join(" · ")}
                    </p>
                  </div>
                  <span className="hidden justify-end md:col-span-2 md:flex">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-mute transition-all duration-500 ease-luxe group-hover:border-gold/40 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      <ArrowUpRight size={18} weight="light" />
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.08}>
          <div className="mt-16 max-w-[54ch] space-y-5 border-t border-line pt-12">
            <p className="text-base leading-relaxed text-mute">{servicesIntro.closing}</p>
            <p className="text-base leading-relaxed text-paper/80">{servicesIntro.presence}</p>
            <p className="font-display text-xl italic leading-snug text-gold md:text-2xl">
              {brand.signature}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
