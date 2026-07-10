/** Path pubblici dopo sync: cartella `assets/` → `public/assets/` (URL `/assets/...`) */

export const heroSlides = [
  {
    src: "/assets/superstudio-village-acciaio-pre-fabbricato.webp",
    alt: "Strutture in acciaio pre-fabbricate — progetti Studio Capoferri Nord Italia, Brescia, Bergamo, Milano",
    line1: "Architettura e ingegneria",
    line2: "al servizio dell'innovazione",
  },
  {
    src: "/assets/superstudio-village-sala-proiezione.webp",
    alt: "Strutture in acciaio per edilizia residenziale e industriale — Studio Capoferri Lombardia",
    line1: "Esperienza tecnica",
    line2: "per soluzioni su misura",
  },
  {
    src: "/assets/hero-struttura-new.webp",
    alt: "Strutture in acciaio — efficienza e rapidità",
    line1: "Strutture in acciaio",
    line2: "efficienza e rapidità",
  },
] as const;

export const homeChiSiamoImages = {
  team: {
    src: "/assets/ingegneria-progettazione-brescia.webp",
    alt: "Ingegneri strutturisti dello Studio Capoferri durante una riunione tecnica — studio di ingegneria civile a Brescia, Bergamo e Milano",
  },
  cantiere: {
    src: "/assets/sicurezza-cantiere.webp",
    alt: "Sicurezza in cantiere e pianificazione — Studio Capoferri Nord Italia, province di Brescia, Bergamo e Milano",
  },
} as const;

export const chiSiamoPageImage = {
  src: "/assets/ingegneria-civile-e-ambientale-adro-chi-siamo.webp",
  alt: "Team di ingegneri e architetti dello Studio Capoferri durante una riunione tecnica ad Adro, Brescia",
} as const;

export const projectPreview = [
  {
    href: "/progetti/residenziali",
    title: "Strutture per il residenziale",
    caption: "Strutture per il residenziale",
    image: "/assets/progetti-ambito-residenziale.jpg",
    alt: "Progetto residenziale con struttura in acciaio — Studio Capoferri, ingegneria strutturale in Lombardia",
  },
  {
    href: "/progetti/industriali",
    title: "Strutture per l'industria",
    caption: "Strutture per l'industria",
    image: "/assets/progetto2.jpg",
    alt: "Capannone industriale con struttura portante in acciaio — progetti industriali Studio Capoferri, provincia di Brescia",
  },
  {
    href: "/progetti/ricettivi",
    title: "Strutture per spazi pubblici",
    caption: "Strutture per spazi pubblici",
    image: "/assets/progetto-ricettivo.webp",
    alt: "Spazio per eventi Superstudio a Milano — progettazione strutturale per spazi pubblici e ricettivi, Studio Capoferri",
  },
] as const;
