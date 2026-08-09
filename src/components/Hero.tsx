import { motion, useReducedMotion } from "motion/react"
import { WhatsappLogo } from "@phosphor-icons/react"
import { brand } from "../data/content"
import { buildWhatsAppUrl, defaultWhatsAppGreeting } from "../lib/whatsapp"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./images/hero-atmosphere.png"
          alt=""
          className="h-full w-full scale-105 object-cover object-[72%_center] brightness-[1.08] contrast-[1.12] saturate-[1.05] md:object-right"
        />
        {/* Oscurece solo la zona del texto; deja ver la Justitia a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent md:via-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,transparent_0%,transparent_40%,rgba(10,10,10,0.35)_100%)]" />
      </div>

      <div className="page-shell relative flex min-h-[100dvh] items-end pb-20 pt-28 md:items-end md:pb-24">
        <div className="max-w-3xl">
          <motion.p
            className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            {brand.professional} · {brand.location}
          </motion.p>

          {/* Marca como señal hero (brand-first), no solo nav */}
          <motion.h1
            className="font-display text-balance text-6xl font-semibold leading-[0.95] tracking-tight text-gold md:text-8xl lg:text-[7.5rem]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
          >
            {brand.name}
          </motion.h1>

          <motion.p
            className="mt-3 font-display text-2xl text-paper/90 md:text-3xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.32, 0.72, 0, 1] }}
          >
            Eldorado, Misiones
            <span className="text-mute"> — {brand.role}</span>
          </motion.p>

          <motion.p
            className="mt-6 max-w-[40ch] text-base leading-relaxed text-mute md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {brand.headline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.32, 0.72, 0, 1] }}
          >
            <a
              href={buildWhatsAppUrl(defaultWhatsAppGreeting)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-gold px-6 text-sm font-semibold text-ink transition-transform duration-500 ease-luxe hover:bg-gold-soft active:scale-[0.98]"
            >
              <WhatsappLogo size={22} weight="fill" aria-hidden />
              Consultar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
