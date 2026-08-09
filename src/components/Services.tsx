import { ArrowUpRight } from "@phosphor-icons/react"
import { services } from "../data/content"
import { Reveal } from "./Reveal"

export function Services() {
  return (
    <section id="servicios" className="border-t border-line bg-ink py-24 md:py-36">
      <div className="page-shell">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
            Áreas de práctica
          </p>
          <h2 className="mt-4 max-w-[16ch] font-display text-4xl font-semibold tracking-tight text-paper md:text-6xl">
            Servicios pensados para casos reales
          </h2>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-mute">
            Las mismas temáticas que desarrollamos en contenido educativo: familia,
            fertilidad, salud, previsional, ART y documentación en Misiones.
          </p>
        </Reveal>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={index * 0.04}>
                <a
                  href="#contacto"
                  className="group grid gap-4 py-8 transition-colors duration-500 ease-luxe md:grid-cols-12 md:items-start md:gap-8 md:py-10"
                >
                  <span className="font-display text-sm text-gold md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-4">
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
      </div>
    </section>
  )
}
