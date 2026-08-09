import { useState, type FormEvent } from "react"
import { WhatsappLogo } from "@phosphor-icons/react"
import { brand, consultationTopics, contact } from "../data/content"
import {
  buildConsultationMessage,
  buildWhatsAppUrl,
  defaultWhatsAppGreeting,
} from "../lib/whatsapp"
import { Reveal } from "./Reveal"

type FormState = {
  name: string
  phone: string
  topic: string
  message: string
}

const initial: FormState = {
  name: "",
  phone: "",
  topic: consultationTopics[0].value,
  message: "",
}

/**
 * Formulario de lead sin backend: arma el mensaje y abre WhatsApp
 * con los datos del cliente (Open/Closed: se puede sumar API luego).
 */
export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [sentHint, setSentHint] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const topicLabel =
      consultationTopics.find((t) => t.value === form.topic)?.label ?? form.topic

    const url = buildWhatsAppUrl(
      buildConsultationMessage({
        name: form.name.trim(),
        phone: form.phone.trim(),
        topicLabel,
        message: form.message.trim(),
      }),
    )

    setSentHint(true)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contacto" className="border-t border-line bg-ink py-24 md:py-36">
      <div className="page-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Contacto</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
            Escribinos y coordinamos tu consulta
          </h2>
          <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-mute">
            Podés escribir directo por WhatsApp o completar el formulario: usamos tus
            datos para armar el mensaje y abrirlo en WhatsApp listo para enviar.
          </p>

          <a
            href={buildWhatsAppUrl(defaultWhatsAppGreeting)}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-500 ease-luxe hover:brightness-110 active:scale-[0.98]"
          >
            <WhatsappLogo size={22} weight="fill" />
            WhatsApp {contact.phoneDisplay}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 transition-transform duration-500 ease-luxe group-hover:translate-x-0.5">
              ↗
            </span>
          </a>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="text-mute">Estudio</dt>
              <dd className="mt-1 text-paper">
                {brand.fullName} · {brand.professional}
              </dd>
            </div>
            <div>
              <dt className="text-mute">TikTok</dt>
              <dd className="mt-1">
                <a
                  href={contact.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:underline"
                >
                  {contact.tiktokHandle}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.08}>
          <div className="rounded-[2rem] bg-paper/5 p-2 ring-1 ring-white/10">
            <form
              onSubmit={onSubmit}
              className="rounded-[calc(2rem-0.5rem)] bg-paper p-6 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] md:p-8"
              noValidate
            >
              <h3 className="font-display text-3xl">Formulario de consulta</h3>
              <p className="mt-2 text-sm text-ink/55">
                Nombre, teléfono, tema y un breve resumen de tu situación.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="text-xs uppercase tracking-[0.16em] text-ink/50">
                    Nombre completo
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper-deep/60 px-4 py-3 outline-none transition-[border-color,box-shadow] duration-500 ease-luxe focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)]"
                    placeholder="Tu nombre"
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="text-xs uppercase tracking-[0.16em] text-ink/50">
                    Teléfono / WhatsApp
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper-deep/60 px-4 py-3 outline-none transition-[border-color,box-shadow] duration-500 ease-luxe focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)]"
                    placeholder="Ej. 3751…"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.16em] text-ink/50">
                    Tema de consulta
                  </span>
                  <select
                    required
                    name="topic"
                    value={form.topic}
                    onChange={(e) => setForm((s) => ({ ...s, topic: e.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper-deep/60 px-4 py-3 outline-none transition-[border-color,box-shadow] duration-500 ease-luxe focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)]"
                  >
                    {consultationTopics.map((topic) => (
                      <option key={topic.value} value={topic.value}>
                        {topic.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.16em] text-ink/50">
                    Contanos tu caso
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    className="mt-2 w-full resize-y rounded-2xl border border-ink/10 bg-paper-deep/60 px-4 py-3 outline-none transition-[border-color,box-shadow] duration-500 ease-luxe focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)]"
                    placeholder="Breve descripción: qué pasó y qué necesitás…"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-paper transition-transform duration-500 ease-luxe hover:bg-ink-elevated active:scale-[0.98] sm:w-auto"
              >
                Enviar por WhatsApp
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold/20 text-gold transition-transform duration-500 ease-luxe group-hover:translate-x-0.5">
                  ↗
                </span>
              </button>

              {sentHint ? (
                <p className="mt-4 text-sm text-ink/55" role="status">
                  Se abrió WhatsApp con tu consulta. Si no ves la ventana, revisá el
                  bloqueador de pop-ups.
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
