/**
 * Token UI condivisi: tipografia corpo, titoli, pulsanti, form.
 * I titoli display usano sempre `fontDisplay` da `@/lib/fonts` — comporre così:
 * `className={\`${fontDisplay.className} ${ui.pageTitle}\`}`.
 */
export const ui = {
  /** Paragrafi corpo su sfondo chiaro */
  body: "copy-rhythm text-[0.98rem] text-[#333] sm:text-[1.05rem]",
  /** Testo secondario (card, intro) */
  bodyMuted: "text-[0.98rem] text-[#444] sm:text-[1.05rem]",

  /** H1 pagine interne standard */
  pageTitle: "section-title text-[1.75rem] tracking-[0.06em] text-[#2a2a2a] sm:text-4xl md:text-5xl",

  /** H1 case study / progetto singolo */
  caseStudyTitle: "section-title text-[1.65rem] tracking-[0.06em] text-[#2a2a2a] sm:text-3xl md:text-4xl",

  /** H2 sezione lunga (servizi, privacy, anchor) — stesso tono degli H1 */
  sectionHeadingAccent: "text-2xl tracking-[0.06em] text-[#2a2a2a]",

  /** H2 galleria, “Progetti in evidenza” */
  gallerySectionTitle: "text-xl tracking-[0.06em] text-[#2a2a2a] sm:text-2xl",

  /** H2 in card chiare (Recapiti, Dove siamo) */
  cardHeading: "text-xl tracking-[0.06em] text-[#2a2a2a] sm:text-2xl",

  /** Pulsante primario (gradient brand) */
  btnPrimary:
    "inline-flex min-h-[48px] items-center justify-center rounded-md bg-gradient-to-br from-[#2a3f54] to-[#1f2e3d] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a3f54]/40 disabled:opacity-60",

  /** Pulsante outline — CTA secondari home e link “Esplora / Scopri / Scrivici” */
  btnOutline:
    "inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[#2a3f54] bg-white/90 px-8 py-3 text-sm font-semibold text-[#2a3f54] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a3f54] hover:text-white hover:shadow-[0_12px_28px_rgba(42,63,84,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a3f54] motion-reduce:hover:translate-y-0",

  /** Pulsante trasparente su sfondo scuro (privacy / barre) */
  btnGhostOnDark:
    "inline-flex min-h-[44px] items-center justify-center rounded-md border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",

  /** CTA su sfondo scuro (hero) */
  btnOnDark:
    "inline-flex min-h-[48px] w-full items-center justify-center rounded-md border border-white/25 bg-white px-8 py-3 text-sm font-semibold text-[#1f2e3d] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 sm:w-auto",

  /** Cookie: accetta (chiaro su barra scura) */
  cookieAccept:
    "min-h-[48px] flex-1 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#2a3f54] transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:px-6",

  /** Cookie: rifiuta */
  cookieReject:
    "min-h-[48px] flex-1 rounded-md border-2 border-white/60 bg-transparent px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:px-6",

  /** Input / textarea form contatti */
  inputField:
    "w-full rounded-md border-2 border-[#2a3f54]/12 bg-white px-4 py-3 text-base text-[#333] outline-none transition placeholder:text-neutral-400 focus:border-[#2a3f54] focus:ring-2 focus:ring-[#2a3f54]/15",

  /** Link colonna footer */
  footerLink: "inline-block min-h-[44px] py-1.5 leading-relaxed transition-colors hover:text-white",
} as const;
