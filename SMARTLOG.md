# SMARTLOG — LA TOGA

Bitácora de automejora del agente para este proyecto.

## 2026-08-07 — Sitio inicial estudio jurídico

### Qué se hizo
- Reemplazo del portafolio backend por landing **LA TOGA / Abogada Paula García**.
- Flujo image-first (8 comps de sección) → implementación.
- Paleta de marca TikTok: negro, oro champán, crema.
- Lead gen dual: WhatsApp directo + formulario que prearma mensaje `wa.me`.

### Decisiones de diseño
- Trust-first: motion contenido (VARIANCE~4, MOTION~3), tipografía serif display (Cormorant) + Manrope.
- Hero brand-first: “LA TOGA” domina el primer viewport; sin cards ni stats.
- Servicios como lista editorial (no grilla de 3 cards idénticas).

### Deuda / próximos upgrades
- [ ] Foto real de Paula García en About (hoy atmósfera institucional).
- [ ] Logo circular oficial exportado a SVG/PNG en `public/`.
- [ ] Endpoint de formulario (email/CRM) además de WhatsApp.
- [ ] Página legal de privacidad si se capturan leads en servidor.
- [ ] Embed o curaduría de clips TikTok “Mito o verdad”.

### 2026-08-07 — Hero atmosphere v2
- Fondo regenerado: Justitia nítida a la derecha, zona oscura limpia a la izquierda.
- Overlays suavizados (`to-transparent` a la derecha + `object-right` + leve brightness/contrast).
- Lección: en heroes dark, el problema suele ser el overlay, no solo la foto.

### Lecciones
1. En sitios legales, el formulario sin backend funciona bien abriendo WhatsApp con payload estructurado.
2. El contenido educativo del TikTok es oro para secciones de confianza (mitos / ejemplos).
3. Mantener `content.ts` como única fuente evita drift entre Nav, Footer y CTAs.
4. Priorizar definición del ancla visual (estatua) y degradar solo donde hay copy.

### 2026-08-09 — Preview WhatsApp (Open Graph)
- Agregado `public/og-share.png` + meta `og:image` / `twitter:image` con URL absoluta de Pages.
- Lección: WhatsApp cachea fuerte el preview; tras el push conviene forzar refresh o esperar.
