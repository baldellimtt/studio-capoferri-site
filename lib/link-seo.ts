/** Attributi title per link interni ed esterni (audit SEO e accessibilità). */

export function linkTitle(label: string, context?: string): string {
  return context ? `${label} — ${context}` : label;
}

export const linkTitles = {
  home: "Torna alla home — Studio Capoferri",
  skipContent: "Salta al contenuto principale",
  nav: (label: string) => linkTitle(`Vai a ${label}`, "Studio Capoferri"),
  servizio: (name: string) => linkTitle(name, "Servizi Studio Capoferri"),
  acciaio: (city: string) => linkTitle(`Progettazione strutture in acciaio a ${city}`, "Studio Capoferri"),
  pagina: (name: string) => linkTitle(name, "Studio Capoferri"),
  progetto: (name: string) => linkTitle(`Progetto: ${name}`, "Studio Capoferri"),
  consulenza: "Richiedi una consulenza — Contatti Studio Capoferri",
  contatti: "Contattaci — Studio Capoferri",
  scopriServizi: "Scopri tutti i servizi — Studio Capoferri",
  scopriServizio: (name: string) => linkTitle(`Scopri di più: ${name}`, "Servizi"),
  tuttiProgetti: "Esplora tutti i progetti — Studio Capoferri",
  formContatti: "Scrivici dal form contatti — Studio Capoferri",
  privacy: "Privacy policy — Studio Capoferri",
  cookiePolicy: "Informativa cookie — Privacy Studio Capoferri",
  telefono: (phone: string) => linkTitle(`Chiama ${phone}`, "Studio Capoferri"),
  email: (email: string) => linkTitle(`Scrivi a ${email}`, "Studio Capoferri"),
  linkedin: "Seguici su LinkedIn — Studio Capoferri",
  breadcrumbProgetti: "Torna ai progetti — Studio Capoferri",
  breadcrumbArea: (area: string) => linkTitle(`Progetti ${area}`, "Studio Capoferri"),
  external: (name: string) => linkTitle(name, "Sito esterno"),
  legacyRedirect: (page: string) => linkTitle(`Vai alla nuova pagina: ${page}`, "Studio Capoferri"),
} as const;
