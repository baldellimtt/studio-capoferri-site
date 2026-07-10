import type { ReactNode } from "react";

export const projectAreas = ["residenziali", "industriali", "ricettivi"] as const;
export type ProjectArea = (typeof projectAreas)[number];

export function isProjectArea(s: string): s is ProjectArea {
  return (projectAreas as readonly string[]).includes(s);
}

export type ProjectCasePreview = {
  slug: string;
  title: string;
  caption: string;
  cover: string;
  alt: string;
  href: string;
};

export const projectCategories: Record<
  ProjectArea,
  {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    intro: ReactNode;
    cases: ProjectCasePreview[];
  }
> = {
  residenziali: {
    metaTitle: "Progetti in ambito residenziale",
    metaDescription:
      "Progettazione strutturale residenziale: abitazioni unifamiliari, complessi e soluzioni innovative — Studio Capoferri.",
    heading: "Strutture residenziali",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          La progettazione strutturale in ambito residenziale richiede armonia tra comfort, funzionalità e integrazione architettonica.
          Realizziamo strutture per abitazioni unifamiliari, complessi residenziali e edifici multipiano, con attenzione alla qualità della vita e
          alle norme su sicurezza, sostenibilità ed efficienza energetica.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Ogni intervento è studiato sul contesto e sull&apos;identità architettonica desiderata, con un approccio personalizzato.
        </p>
      </>
    ),
    cases: [
      {
        slug: "villa-acciaio-veneto",
        title: "Residenza privata in acciaio",
        caption: "Residenza privata",
        cover: "/assets/residenza-privata-acciaio.webp",
        alt: "Progettazione strutture residenziali in acciaio",
        href: "/progetti/residenziali/villa-acciaio-veneto",
      },
    ],
  },
  industriali: {
    metaTitle: "Progetti in ambito industriale",
    metaDescription:
      "Strutture industriali in acciaio, capannoni e logistica — progettazione strutturale Studio Capoferri.",
    heading: "Strutture industriali",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          In ambito industriale la progettazione richiede soluzioni robuste e ad alte prestazioni. Affrontiamo edifici per produzione, stoccaggio e
          logistica, con tempi di esecuzione rapidi e ottimizzazione degli spazi. L&apos;acciaio è spesso il materiale strategico per resistenza,
          montaggio e adattamento a esigenze funzionali complesse.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Ogni progetto nasce dall&apos;analisi delle necessità operative del cliente e si sviluppa con soluzioni su misura, pensate per durare e
          accompagnare la crescita dell&apos;attività.
        </p>
      </>
    ),
    cases: [
      {
        slug: "capannone-erbusco",
        title: "Capannone industriale — Erbusco (BS)",
        caption: "Capannone industriale Erbusco",
        cover: "/assets/industriale/capannone-erbusco/progettazione-strutture-adro.webp",
        alt: "Progettazione strutture industriali in acciaio",
        href: "/progetti/industriali/capannone-erbusco",
      },
    ],
  },
  ricettivi: {
    metaTitle: "Progetti ricettivi e spazi pubblici",
    metaDescription:
      "Progetti per spazi pubblici, ricettivo e manifestazioni — Superstudio e interventi strutturali Studio Capoferri.",
    heading: "Strutture per spazi pubblici",
    intro: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Per i luoghi aperti al pubblico cerchiamo un equilibrio tra estetica, funzionalità e comfort. Le strutture che realizziamo pongono attenzione
          all&apos;esperienza degli utenti e alle norme di sicurezza e accessibilità.
        </p>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Sviluppiamo soluzioni flessibili e innovative, studiate sull&apos;uso degli spazi e sull&apos;identità del luogo.
        </p>
      </>
    ),
    cases: [
      {
        slug: "superstudio-village",
        title: "Superstudio Village — Milano Bovisa",
        caption: "Superstudio Village — Milano Bovisa",
        cover: "/assets/progetto-superstudio.webp",
        alt: "Progetto Superstudio Village — progettazione strutturale a Milano Bovisa",
        href: "/progetti/ricettivi/superstudio-village",
      },
      {
        slug: "superstudio-maxi",
        title: "Superstudio Maxi — Famagosta",
        caption: "Superstudio Maxi — Famagosta",
        cover: "/assets/superstudio-maxi/antincendio-adro.webp",
        alt: "Progettazione Superstudio Maxi Milano Famagosta",
        href: "/progetti/ricettivi/superstudio-maxi",
      },
    ],
  },
};

export type CaseStudyKey = `${ProjectArea}/${string}`;

export const projectCaseStudies: Record<
  CaseStudyKey,
  {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    body: ReactNode;
    gallery: { src: string; alt: string }[];
    externalBrand?: { href: string; imageSrc: string; imageAlt: string };
  }
> = {
  "residenziali/villa-acciaio-veneto": {
    metaTitle: "Villa in acciaio — Veneto",
    metaDescription:
      "Residenza privata in acciaio: progettazione strutturale e architettonica integrata — Studio Capoferri.",
    heading: "Residenza privata in acciaio",
    body: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Abbiamo progettato una villa che unisce innovazione, efficienza e design moderno. La struttura in acciaio garantisce resistenza, durata e
          sostenibilità, con ingegneria avanzata applicata all&apos;architettura residenziale.
        </p>
        <p className="copy-rhythm mb-6 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Il progetto mostra come la struttura possa integrarsi con la progettazione architettonica per un edificio funzionale e inserito nel paesaggio.
        </p>
        <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Struttura in acciaio</strong> — resistenza, leggerezza e tempi di costruzione contenuti.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Progettazione integrata</strong> — spazi ottimizzati per vivibilità e integrazione paesaggistica.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Sostenibilità</strong> — efficienza energetica e standard ambientali elevati.
          </li>
        </ul>
      </>
    ),
    gallery: [
      { src: "/assets/residenziale/architettura-bergamo.webp", alt: "Villa in acciaio" },
      { src: "/assets/residenziale/ingegneria-civile-brescia.webp", alt: "Villa in acciaio in costruzione" },
      { src: "/assets/residenziale/ingegneria-urbanistica.webp", alt: "Progettazione villa in acciaio" },
      { src: "/assets/residenziale/progettazione-strutture-acciaio.webp", alt: "Strutture di lusso in acciaio" },
      { src: "/assets/residenziale/progettazione-strutture-acciaio-franciacorta.webp", alt: "Ingegneria e urbanistica" },
      { src: "/assets/residenziale/strutture-acciaio-bergamo.webp", alt: "Progettazione strutture in acciaio" },
      { src: "/assets/residenziale/studio-ingegneria-architettura-adro.webp", alt: "Villa in acciaio in costruzione" },
      { src: "/assets/residenziale/villa-acciaio.webp", alt: "Vista esterna della villa in acciaio in Veneto" },
      { src: "/assets/residenziale/villa-acciaio-lusso.webp", alt: "Panoramica struttura in acciaio in Veneto" },
    ],
  },
  "industriali/capannone-erbusco": {
    metaTitle: "Capannone industriale — Erbusco (BS)",
    metaDescription:
      "Ampliamento zona produttiva per carpenteria metallica: struttura in acciaio, carroponti, pannelli sandwich — Studio Capoferri.",
    heading: "Capannone industriale — Erbusco (BS)",
    body: (
      <>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Lo Studio Capoferri ha curato la <strong>progettazione strutturale, architettonica e urbanistica</strong> per l&apos;ampliamento della zona
          produttiva di un&apos;importante carpenteria metallica pesante a <strong>Erbusco (Brescia)</strong>.
        </p>
        <p className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          Progetto di ingegneria industriale avanzata per massimizzare efficienza operativa e sicurezza in un contesto produttivo intensivo. Il capannone
          è stato concepito per carichi pesanti e flussi di lavoro complessi.
        </p>
        <ul className="mb-6 list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Struttura portante in acciaio</strong> — resistenza e affidabilità per l&apos;ambiente industriale.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Progettazione esecutiva</strong> — disegni costruttivi d&apos;officina per la realizzazione in acciaio.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Integrazione carroponti</strong> — struttura calcolata per <strong>due carroponti</strong> e movimentazione dei pezzi.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Efficienza e isolamento</strong> — <strong>pannelli sandwich</strong> per isolamento termico e acustico.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Gestione globale</strong> — urbanistica, architettura e calcoli strutturali esecutivi.
          </li>
        </ul>
        <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
          L&apos;ampliamento offre una zona produttiva più efficiente e duratura, in armonia con il contesto industriale bresciano.
        </p>
      </>
    ),
    gallery: [
      { src: "/assets/industriale/capannone-erbusco/capannone-industriale-erbusco.webp", alt: "Capannone industriale Erbusco" },
      { src: "/assets/industriale/capannone-erbusco/progettazione-strutture-adro.webp", alt: "Strutture industriali in acciaio" },
      { src: "/assets/industriale/capannone-erbusco/strutture-industriali-erbusco.webp", alt: "Progettazione capannoni in acciaio" },
      { src: "/assets/industriale/capannone-erbusco/vista-capannone-erbusco.webp", alt: "Vista capannone" },
      { src: "/assets/industriale/capannone-erbusco/strutture-industriali.webp", alt: "Dettaglio capannone" },
      { src: "/assets/industriale/capannone-erbusco/ingegneria-civile-adro.webp", alt: "Ingegneria civile — struttura industriale" },
    ],
  },
  "ricettivi/superstudio-village": {
    metaTitle: "Superstudio Village — Milano Bovisa",
    metaDescription:
      "Progettazione strutturale per complesso a Milano Bovisa: consolidamenti, demolizioni e ricostruzioni in acciaio e misto — Studio Capoferri.",
    heading: "Superstudio Village — Milano Bovisa",
    externalBrand: {
      href: "https://www.superstudioevents.com/it/",
      imageSrc: "/assets/superstudio_logo.svg",
      imageAlt: "Superstudio",
    },
    body: (
      <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
        L&apos;attività di <strong>progettazione strutturale</strong> ha riguardato un complesso edilizio a <strong>Milano Bovisa</strong> per{" "}
        <a
          href="https://www.superstudioevents.com/it/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#2a3f54] underline underline-offset-2"
        >
          Superstudio Events S.r.l.
        </a>
        , costituito da sei edifici con differenti tipologie di intervento. I lavori sono iniziati nel 2023. In due edifici sono stati previsti interventi
        di consolidamento strutturale di volte e copertura. Un edificio è stato demolito e ricostruito con nuova struttura in acciaio (altezza massima
        circa 16 m). Un altro è stato ricostruito con struttura mista in cemento armato e muratura portante; un ulteriore fabbricato con muratura
        portante e copertura collaborante; infine un adeguamento sismico su uno stabile esistente.
      </p>
    ),
    gallery: [
      { src: "/assets/superstudio-village-entrata-esterno.webp", alt: "Vista esterna — Superstudio Village" },
      { src: "/assets/superstudio-village-struttura-acciaio.webp", alt: "Dettaglio strutturale — Superstudio Village" },
      { src: "/assets/superstudio-village-vista-della-struttura.webp", alt: "Facciata — Superstudio Village" },
      { src: "/assets/superstudio-village-pavimentazione-interni.webp", alt: "Pavimentazione interna — Superstudio Village" },
      { src: "/assets/superstudio-village-ricerca-innovazione.webp", alt: "Render esterno — Superstudio Village" },
      { src: "/assets/superstudio-village-innovazione-tecnologica.webp", alt: "Sala proiezioni — Superstudio Village" },
      { src: "/assets/superstudio-village-acciaio-pre-fabbricato.webp", alt: "Struttura interna — Superstudio Village" },
      { src: "/assets/superstudio-village-eventi.webp", alt: "Sala eventi — Superstudio Village" },
      { src: "/assets/superstudio-village-sala-proiezione.webp", alt: "Sala proiezione — Superstudio Village" },
    ],
  },
  "ricettivi/superstudio-maxi": {
    metaTitle: "Superstudio Maxi — Famagosta",
    metaDescription:
      "Recupero capannone industriale a Milano Famagosta: adeguamento sismico, strutture in acciaio e sicurezza — Studio Capoferri.",
    heading: "Superstudio Maxi — Famagosta",
    externalBrand: {
      href: "https://www.superstudioevents.com/it/venues/superstudio-maxi/",
      imageSrc: "/assets/superstudio_logo.svg",
      imageAlt: "Superstudio",
    },
    body: (
      <p className="copy-rhythm text-[0.98rem] text-[#444] sm:text-[1.05rem]">
        L&apos;intervento strutturale ha riguardato il recupero di un capannone industriale dismesso, un tempo carpenteria metallica, in zona Famagosta a
        Milano. L&apos;edificio, riconvertito in sede per eventi (circa 7.200 m² coperti e 3.000 m² di piazzale), è stato oggetto di adeguamento sismico
        e consolidamento delle strutture esistenti in acciaio. Sono state realizzate nuove strutture in acciaio per funzioni congressuali, espositive e
        multimediali, valorizzando l&apos;identità di archeologia industriale del sito.
      </p>
    ),
    gallery: [
      { src: "/assets/superstudio-maxi/antincendio-adro.webp", alt: "Saletta interna — Superstudio Maxi" },
      { src: "/assets/superstudio-maxi/strutture-acciaio-lombardia.webp", alt: "Vista esterna — Superstudio Maxi" },
      { src: "/assets/superstudio-maxi/ingegneria-urbanistica-franciacorta.webp", alt: "Area interna — Superstudio Maxi" },
      { src: "/assets/superstudio-maxi/progettazione-industriale-ricettivo.webp", alt: "Pavimentazione interna — Superstudio Maxi" },
      { src: "/assets/superstudio-maxi/sicurezza-cantieri-franciacorta.webp", alt: "Render esterno — Superstudio Maxi" },
      { src: "/assets/superstudio-maxi/strutture-acciaio-milano.webp", alt: "Sala proiezioni — Superstudio Maxi" },
      { src: "/assets/superstudio-maxi/studio-ingegneria-brescia.webp", alt: "Struttura interna — Superstudio Maxi" },
      { src: "/assets/superstudio-maxi/strutture-acciaio-milano-brescia.webp", alt: "Sala eventi — Superstudio Maxi" },
      { src: "/assets/superstudio-maxi/architettura-urbanistica-brescia.webp", alt: "Sala proiezione — Superstudio Maxi" },
    ],
  },
};

export function getCaseStudyKey(area: ProjectArea, slug: string): CaseStudyKey | null {
  const k = `${area}/${slug}` as CaseStudyKey;
  return k in projectCaseStudies ? k : null;
}
