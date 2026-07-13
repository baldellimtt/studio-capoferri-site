/** Padding orizzontale sul contenitore esterno (stesso pattern delle `.section-shell` della home). */
export const layoutGutterXClass = "px-4 sm:px-5 md:px-10";

/**
 * Colonna contenuto centrata nel gutter. Usare dentro un wrapper con `layoutGutterXClass`
 * così header, footer e pagine allineano logo e menu ai bordi delle sezioni (stesso schema della home).
 */
export const layoutContentMaxClass = "mx-auto w-full max-w-[1140px]";

/** Offset per anchor link sotto header sticky */
export const scrollAnchorClass = "scroll-anchor";

export const steelLandingPages = [
  { href: "/progettazione-strutture-acciaio-brescia", label: "Progettazione acciaio — Brescia" },
  { href: "/progettazione-strutture-acciaio-bergamo", label: "Progettazione acciaio — Bergamo" },
  { href: "/progettazione-strutture-acciaio-milano", label: "Progettazione acciaio — Milano" },
] as const;

/** URL pubblico (canonical, OG). In CI per GitHub Pages impostare NEXT_PUBLIC_SITE_URL al dominio reale del deploy. */
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.studiocapoferri.eu";

export const site = {
  name: "Studio Capoferri",
  legalName: "Studio Capoferri SRL STP",
  tagline: "Ingegneria - Architettura - Urbanistica",
  url: publicSiteUrl,
  email: "info@studiocapoferri.eu",
  phoneDisplay: "+39 030 7357263",
  phoneTel: "+390307357263",
  addressLine: "Via Piave 35 – 25030 Adro (BS), Italia",
  address: {
    street: "Via Piave 35",
    postalCode: "25030",
    locality: "Adro",
    province: "BS",
    region: "Lombardia",
    country: "IT",
  },
  geo: { latitude: 45.6157, longitude: 9.9989 },
  openingHoursDisplay: "Lun – Ven: 08:30 – 18:00",
  linkedin: "https://www.linkedin.com/company/studio-capoferri-ingegneria",
  piva: "04732710985",
  formspreeId: "mqapdvrr",
} as const;

export const navItems = [
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/progetti", label: "Progetti" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
] as const;
