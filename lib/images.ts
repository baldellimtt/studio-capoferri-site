/** Path pubblici dopo sync: cartella `assets/` → `public/assets/` (URL `/assets/...`) */

const capriate =
  "/assets/industriale/ampliamento-complesso-zootecnico/capriate-metalliche-grande-luce-complesso-zootecnico.webp";
const carpenteriaVilla =
  "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp";
const fotovoltaico =
  "/assets/residenziale/villa-acciaio-salsomaggiore/struttura-acciaio-copertura-fotovoltaico.webp";
const cantiereVilla =
  "/assets/residenziale/villa-acciaio-salsomaggiore/cantiere-villa-acciaio-salsomaggiore.webp";
const vistaAerea =
  "/assets/industriale/ampliamento-complesso-zootecnico/vista-aerea-ampliamento-complesso-zootecnico.webp";

export const heroFirstImageSrc = capriate;

export const heroSlides = [
  {
    src: capriate,
    alt: "Capriate metalliche a grande luce — progettazione strutturale Studio Capoferri, Brescia, Bergamo, Milano",
    line1: "Progettazione integrata",
    line2: "dalla fattibilità al cantiere",
  },
  {
    src: carpenteriaVilla,
    alt: "Carpenteria metallica per strutture in acciaio — Studio Capoferri Lombardia",
    line1: "Esperienza tecnica",
    line2: "per soluzioni su misura",
  },
  {
    src: fotovoltaico,
    alt: "Struttura in acciaio con copertura fotovoltaica — Studio Capoferri Nord Italia",
    line1: "Strutture in acciaio",
    line2: "efficienza e rapidità",
  },
] as const;

export const homeChiSiamoImages = {
  team: {
    src: carpenteriaVilla,
    alt: "Carpenteria metallica — team Studio Capoferri, ingegneria civile a Brescia, Bergamo e Milano",
  },
  cantiere: {
    src: cantiereVilla,
    alt: "Cantiere e sicurezza — Studio Capoferri Nord Italia, province di Brescia, Bergamo e Milano",
  },
} as const;

export const chiSiamoPageImage = {
  src: vistaAerea,
  alt: "Progetto strutturale industriale — Studio Capoferri ad Adro, Brescia",
} as const;

export const projectPreview = [
  {
    href: "/progetti/residenziali",
    title: "Strutture per il residenziale",
    caption: "Strutture per il residenziale",
    image: "/assets/progetti-ambito-residenziale.webp",
    alt: "Progetto residenziale con struttura in acciaio — Studio Capoferri, ingegneria strutturale in Lombardia",
  },
  {
    href: "/progetti/industriali",
    title: "Strutture per l'industria",
    caption: "Strutture per l'industria",
    image: "/assets/progetto2.webp",
    alt: "Capannone industriale con struttura portante in acciaio — progetti industriali Studio Capoferri, provincia di Brescia",
  },
  {
    href: "/progetti/ricettivi",
    title: "Strutture per spazi pubblici",
    caption: "Strutture per spazi pubblici",
    image: capriate,
    alt: "Grande luce in acciaio per spazi pubblici e ricettivi — Studio Capoferri, Lombardia",
  },
] as const;
