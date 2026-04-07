import type { Metadata } from "next";
import { fontDisplay } from "@/lib/fonts";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Servizi di progettazione e ingegneria",
  description:
    "Progettazione strutturale, direzione lavori, consulenze tecniche, sicurezza cantieri e assistenza immobiliare a Brescia e provincia.",
  alternates: { canonical: `${site.url}/servizi` },
};

export default function ServiziPage() {
  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="frost-card rounded-2xl p-5 sm:p-7 md:p-10">
        <h1 className={`${fontDisplay.className} ${ui.pageTitle} mb-6 sm:mb-8`}>Servizi</h1>
        <p className={ui.body}>
          <strong>Studio Capoferri</strong> offre una gamma completa di servizi di ingegneria, architettura e consulenza tecnica a 360 gradi.
          Affianchiamo i clienti in ogni fase del progetto, garantendo qualità, precisione e soluzioni su misura.
        </p>

        <h2 id="progettazione-strutturale" className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mt-14 scroll-mt-[120px]`}>
          Progettazione strutturale
        </h2>
        <ul className="list-none space-y-3 pl-0">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Strutture metalliche, cemento armato e muratura</strong> – Progettazione strutture NTC ed Eurocodici.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Modellazione FEM</strong> – Analisi agli elementi finiti per valutazioni statiche e dinamiche di strutture complesse.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Progettazione in condizioni di incendio</strong> – Verifiche di resistenza al fuoco per strutture portanti secondo normativa vigente.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Rinforzo e miglioramento sismico</strong> – Opere di rinforzo strutturale e miglioramento sismico per edifici esistenti. Interventi
            studiati per aumentare la sicurezza, la resistenza sismica e prolungare la vita utile delle strutture, in conformità con le normative
            tecniche vigenti.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Strutture civili e industriali</strong> – Sviluppo di soluzioni strutturali per edifici residenziali, commerciali, industriali e
            infrastrutture.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Disegni costruttivi d&apos;officina</strong> – Produzione di tavole esecutive per la fabbricazione e il montaggio delle strutture
            metalliche.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Collaudi strutturali</strong> – Verifica di conformità statica per opere nuove o esistenti.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Certificazioni strutture in ambienti di lavoro</strong> – Analisi e validazione di sicurezza per strutture soggette a normative su
            ambienti lavorativi.
          </li>
        </ul>

        <h2 id="urbanistica-architettura" className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mt-14 scroll-mt-[120px]`}>
          Urbanistica e architettura
        </h2>
        <ul className="list-none space-y-3 pl-0">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Progettazione architettonica</strong> – Sviluppo di soluzioni estetico-funzionali per nuove costruzioni, ristrutturazioni e
            riqualificazioni.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Urbanistica</strong> – Piani attuativi, varianti urbanistiche, analisi di conformità agli strumenti di pianificazione.
          </li>
        </ul>

        <h2 id="direzione-lavori" className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mt-14 scroll-mt-[120px]`}>
          Direzione lavori e consulenza
        </h2>
        <ul className="list-none space-y-3 pl-0">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Direzione lavori strutturali</strong> – Supervisione tecnica delle fasi di costruzione per garantire qualità e rispetto dei progetti.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Assistenza in cantiere</strong> – Supporto continuo alle imprese durante montaggi, modifiche e verifiche tecniche.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Verifiche strutturali su edifici esistenti</strong> – Diagnostica e valutazione della sicurezza e idoneità statica di costruzioni
            esistenti.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Relazioni tecniche e perizie</strong> – Redazione di relazioni asseverate, perizie giurate e consulenze tecniche di parte (CTP).
          </li>
        </ul>

        <h2 id="servizi-tecnici" className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mt-14 scroll-mt-[120px]`}>
          Servizi tecnici e catastali
        </h2>
        <ul className="list-none space-y-3 pl-0">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Pratiche edilizie</strong> – Redazione pratiche edilizie di permessi di costruire, SCIA, CILA e sanatorie.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Pratiche catastali</strong> – Volture, frazionamenti, accatastamenti, variazioni catastali e correzioni dati.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Pratiche per la Sovrintendenza ai Beni Culturali</strong> – Redazione di documentazione tecnica e supporto nelle richieste di
            autorizzazione per immobili vincolati.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Collaudi amministrativi</strong> – Verifica della regolarità tecnico-amministrativa di opere pubbliche e private.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Successioni e divisioni</strong> – Assistenza tecnica e documentale in pratiche di successione ereditaria e divisione patrimoniale.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Certificazioni energetiche (APE)</strong> – Redazione dell&apos;Attestato di Prestazione Energetica degli edifici, valutazione delle
            prestazioni energetiche e classificazione energetica secondo la normativa vigente.
          </li>
        </ul>

        <h2 id="sicurezza-cantieri" className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mt-14 scroll-mt-[120px]`}>
          Sicurezza cantieri
        </h2>
        <ul className="list-none space-y-3 pl-0">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Sicurezza cantieri</strong> – Coordinamento della sicurezza in fase di progettazione ed esecuzione (CSP e CSE), piani di sicurezza e
            gestione rischi.
          </li>
        </ul>

        <h2 id="assistenza-immobiliare" className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mt-14 scroll-mt-[120px]`}>
          Assistenza immobiliare
        </h2>
        <ul className="list-none space-y-3 pl-0">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
            <strong>Assistenza immobiliare</strong> – Supporto tecnico per compravendite, perizie, stime immobiliari e valutazione dello stato di fatto.
          </li>
        </ul>
          </article>
        </div>
      </div>
    </main>
  );
}
