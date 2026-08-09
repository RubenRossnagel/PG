# LA TOGA | Abogada Paula García

Sitio web profesional del estudio **LA TOGA · Misiones** (React + Vite + Tailwind v4).

Diseño orientado a confianza jurídica: identidad negro / oro / crema alineada al branding de TikTok [`@abogada.paulagarcia`](https://www.tiktok.com/@abogada.paulagarcia).

## Qué incluye

- Hero de marca **LA TOGA** + CTAs WhatsApp / formulario
- Áreas: familia, fertilidad (ROPA / Ley 26.862), amparos de salud, previsional, ART, partidas
- Sección **Mito o verdad** (estilo educativo del contenido)
- Ejemplos prácticos + proceso de atención
- Formulario de consulta (abre WhatsApp con datos del cliente)
- Botón flotante de WhatsApp (`3751 476428`)

## Desarrollo

```bash
npm install
npm run dev
```

## Build / Pages

```bash
npm run build
```

Deploy automático vía `.github/workflows/deploy.yml` al pushear a `main`.

**Repo Pages:** [RubenRossnagel/PG](https://github.com/RubenRossnagel/PG)  
**URL esperada:** `https://rubenrossnagel.github.io/PG/`

En GitHub: **Settings → Pages → Source: GitHub Actions** (una sola vez).

## Contenido editable

Textos y datos en `src/data/content.ts`.  
Helpers de WhatsApp en `src/lib/whatsapp.ts`.

## Docs internas

- `SMARTLOG.md` — aprendizajes y mejoras del agente
- Referencias visuales generadas en el proceso de diseño (assets del workspace)
