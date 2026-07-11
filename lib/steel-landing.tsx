import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fontDisplay } from "@/lib/fonts";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export type SteelLandingConfig = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  introLead: string;
  areaHeading: string;
  areaBody: string;
  areaBodySecondary?: string;
  ctaHeading: string;
  faqCostQuestion: string;
  faqAreaAnswer: string;
  areaServedPrimary: string;
  heroImage: { src: string; alt: string };
  secondaryImage: { src: string; alt: string };
  featuredProjects: { href: string; title: string; description: string }[];
};

const bullet =
  "relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]";

import { buildPageMetadata } from "@/lib/seo";

export function buildSteelLandingMetadata(config: SteelLandingConfig): Metadata {
  return buildPageMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: `/progettazione-strutture-acciaio-${config.slug}`,
    image: config.ogImage,
    keywords: [...config.keywords],
  });
}

export function SteelLandingPage({ config }: { config: SteelLandingConfig }) {
  const pageUrl = `${site.url}/progettazione-strutture-acciaio-${config.slug}/`;

  const faq = [
    {
      q: config.faqCostQuestion,
      a: "Il costo dipende da dimensioni, complessità e destinazione d'uso dell'edificio. Dopo un primo sopralluogo o un colloquio tecnico forniamo un preventivo dettagliato e senza impegno per la progettazione strutturale, i disegni costruttivi d'officina e la direzione lavori.",
    },
    {
      q: "Quali vantaggi offre una struttura in acciaio rispetto al cemento armato?",
      a: "L'acciaio garantisce leggerezza, resistenza sismica, tempi di cantiere ridotti grazie alla prefabbricazione in officina e grande flessibilità architettonica: luci ampie, sbalzi importanti e possibilità di sopraelevazione su edifici esistenti. È inoltre un materiale riciclabile e adatto a costruzioni sostenibili.",
    },
    {
      q: "Progettate strutture in acciaio in tutta la Lombardia?",
      a: config.faqAreaAnswer,
    },
    {
      q: "Seguite anche la direzione lavori e il montaggio della carpenteria metallica?",
      a: "Sì. Seguiamo l'intero processo: calcolo strutturale secondo NTC 2018 ed Eurocodici, disegni costruttivi d'officina per la carpenteria metallica, assistenza al montaggio in cantiere e direzione lavori strutturale fino al collaudo.",
    },
    {
      q: "È possibile realizzare una sopraelevazione in acciaio su un edificio esistente?",
      a: "Sì, la leggerezza dell'acciaio lo rende il materiale ideale per le sopraelevazioni. Eseguiamo la verifica di idoneità statica dell'edificio esistente e progettiamo la nuova struttura minimizzando i carichi aggiuntivi, nel rispetto della normativa sismica vigente.",
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Progettazione strutture in acciaio",
    serviceType: "Progettazione strutturale di strutture in acciaio",
    description: config.metaDescription,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: config.areaServedPrimary },
      { "@type": "AdministrativeArea", name: "Lombardia" },
      { "@type": "AdministrativeArea", name: "Provincia di Brescia" },
      { "@type": "AdministrativeArea", name: "Provincia di Bergamo" },
      { "@type": "AdministrativeArea", name: "Provincia di Milano" },
    ],
    url: pageUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="mx-auto w-full max-w-[900px]">
            <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>
              Progettazione di strutture in acciaio a {config.city} e in Lombardia
            </h1>

            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-7 md:p-8">
              <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{config.introLead}</p>
              <p className={`copy-rhythm mb-6 ${ui.bodyMuted}`}>
                Dal <strong>calcolo strutturale secondo NTC 2018 ed Eurocodici</strong> ai{" "}
                <strong>disegni costruttivi d&apos;officina</strong>, fino alla direzione lavori e al collaudo: seguiamo ogni fase del progetto, dalla
                prima idea al cantiere.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contatti" className={ui.btnPrimary} title={linkTitles.consulenza}>
                  Richiedi una consulenza
                </Link>
                <a href={`tel:${site.phoneTel}`} className={ui.btnOutline} title={linkTitles.telefono(site.phoneDisplay)}>
                  {site.phoneDisplay}
                </a>
              </div>
            </article>

            <div className="lazy-section">
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>
                  Perché scegliere una struttura in acciaio
                </h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                    <li className={bullet}>
                      <strong>Resistenza sismica</strong> — leggerezza e duttilità rendono l&apos;acciaio ideale nelle zone sismiche della Lombardia.
                    </li>
                    <li className={bullet}>
                      <strong>Tempi di cantiere ridotti</strong> — la carpenteria metallica viene prefabbricata in officina e montata a secco in cantiere.
                    </li>
                    <li className={bullet}>
                      <strong>Libertà architettonica</strong> — grandi luci, sbalzi e volumi aperti senza pilastri intermedi.
                    </li>
                    <li className={bullet}>
                      <strong>Sopraelevazioni</strong> — il peso contenuto consente di ampliare in altezza edifici esistenti.
                    </li>
                    <li className={bullet}>
                      <strong>Sostenibilità</strong> — materiale riciclabile al 100%, perfetto per involucri ad alta efficienza energetica e coperture
                      fotovoltaiche.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>
                  Cosa progettiamo: dal residenziale all&apos;industriale
                </h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>
                    Progettiamo <strong>strutture in acciaio per ogni destinazione d&apos;uso</strong>: ville e residenze private, edifici multipiano,
                    capannoni industriali con carroponte, edifici commerciali e spazi per eventi. Alcuni progetti recenti:
                  </p>
                  <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                    {config.featuredProjects.map((p) => (
                      <li key={p.href} className={bullet}>
                        <Link href={p.href} title={linkTitles.progetto(p.title)} className="font-semibold text-[#2a3f54] underline underline-offset-2">
                          {p.title}
                        </Link>{" "}
                        — {p.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mt-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                    <Image
                      src={config.heroImage.src}
                      alt={config.heroImage.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width:640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                    <Image
                      src={config.secondaryImage.src}
                      alt={config.secondaryImage.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width:640px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </section>

              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{config.areaHeading}</h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{config.areaBody}</p>
                  {config.areaBodySecondary ? (
                    <p className={`copy-rhythm ${ui.bodyMuted}`}>{config.areaBodySecondary}</p>
                  ) : null}
                </div>
              </section>

              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>
                  Domande frequenti sulla progettazione di strutture in acciaio
                </h2>
                <div className="space-y-4">
                  {faq.map((f) => (
                    <div key={f.q} className="frost-card rounded-2xl p-5 sm:p-6">
                      <h3 className={`${fontDisplay.className} mb-2 text-lg tracking-[0.04em] text-[#2a2a2a]`}>{f.q}</h3>
                      <p className={`copy-rhythm ${ui.bodyMuted}`}>{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <div className="frost-card rounded-2xl p-5 text-center sm:p-7 md:p-8">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-3`}>{config.ctaHeading}</h2>
                  <p className={`copy-rhythm mx-auto mb-6 max-w-[560px] ${ui.bodyMuted}`}>
                    Raccontaci la tua idea: analizziamo fattibilità, costi e tempi e ti proponiamo la soluzione strutturale più efficiente.
                  </p>
                  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link href="/contatti" className={ui.btnPrimary} title={linkTitles.contatti}>
                      Contattaci ora
                    </Link>
                    <Link href="/servizi" className={ui.btnOutline} title={linkTitles.scopriServizi}>
                      Scopri tutti i servizi
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const steelLandingBrescia: SteelLandingConfig = {
  slug: "brescia",
  city: "Brescia",
  metaTitle: "Progettazione strutture in acciaio a Brescia e in Lombardia",
  metaDescription:
    "Studio di ingegneria specializzato in progettazione di strutture in acciaio a Brescia e in Lombardia: ville, capannoni, sopraelevazioni, carpenteria metallica. Calcolo strutturale NTC 2018, disegni d'officina, direzione lavori. 40+ anni di esperienza ad Adro (BS).",
  keywords: [
    "progettazione strutture in acciaio Brescia",
    "strutture in acciaio Lombardia",
    "calcolo strutturale acciaio Brescia",
    "ingegnere strutturista Brescia",
    "carpenteria metallica progettazione",
    "capannoni in acciaio Brescia",
    "ville in acciaio Franciacorta",
    "sopraelevazioni in acciaio",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
  introLead:
    "Studio Capoferri è uno studio di ingegneria strutturale specializzato nelle strutture in acciaio, con oltre 40 anni di esperienza e più di 1000 progetti realizzati. Con sede ad Adro, in provincia di Brescia, nel cuore della Franciacorta, progettiamo ville in acciaio, capannoni industriali, sopraelevazioni e carpenteria metallica in tutta la Lombardia e nel Nord Italia.",
  areaHeading: "Dove operiamo: Brescia, Bergamo, Milano e tutta la Lombardia",
  areaBody:
    "Lo studio ha sede ad Adro (BS), in provincia di Brescia, in posizione strategica tra Franciacorta, Val Calepio e Lago d'Iseo. Interveniamo rapidamente su Brescia e provincia — Franciacorta, Val Trompia, Garda bresciano, pianura bresciana — e in tutta la Lombardia: Bergamo, Milano, Monza, Cremona, Mantova, Lecco e Como.",
  areaBodySecondary:
    "Per i cantieri fuori regione operiamo regolarmente anche in Veneto, Piemonte ed Emilia-Romagna.",
  ctaHeading: "Hai un progetto in acciaio a Brescia o in Lombardia?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Brescia?",
  faqAreaAnswer:
    "Sì. Lo studio ha sede ad Adro (BS), in provincia di Brescia, e opera in tutta la Lombardia — Brescia, Bergamo, Milano e relative province — oltre che in Veneto, Piemonte ed Emilia-Romagna.",
  areaServedPrimary: "Provincia di Brescia",
  heroImage: {
    src: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
    alt: "Progettazione di strutture in acciaio a Brescia — villa residenziale con telaio metallico",
  },
  secondaryImage: {
    src: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
    alt: "Carpenteria metallica per strutture in acciaio in provincia di Brescia — travi e pilastri",
  },
  featuredProjects: [
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "struttura calcolata per due carroponti, pannelli sandwich e disegni d'officina",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme",
      description: "fondazioni su pali, telaio in acciaio e copertura fotovoltaica integrale",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-veneto",
      title: "Residenza privata in acciaio in Veneto",
      description: "progettazione strutturale e architettonica integrata",
    },
    {
      href: "/progetti/ricettivi/superstudio-village",
      title: "Superstudio Village a Milano",
      description: "nuova struttura in acciaio alta circa 16 metri e consolidamenti strutturali",
    },
  ],
};

export const steelLandingBergamo: SteelLandingConfig = {
  slug: "bergamo",
  city: "Bergamo",
  metaTitle: "Progettazione strutture in acciaio a Bergamo e in Lombardia",
  metaDescription:
    "Progettazione strutture in acciaio a Bergamo e provincia: ville, capannoni, sopraelevazioni e carpenteria metallica. Calcolo strutturale NTC 2018, disegni d'officina, direzione lavori. Studio Capoferri, 40+ anni di esperienza in Lombardia.",
  keywords: [
    "progettazione strutture in acciaio Bergamo",
    "strutture in acciaio Bergamo",
    "calcolo strutturale acciaio Bergamo",
    "ingegnere strutturista Bergamo",
    "carpenteria metallica Bergamo",
    "capannoni in acciaio Bergamo",
    "ville in acciaio Val Seriana",
    "sopraelevazioni in acciaio Bergamo",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/industriale/ampliamento-complesso-zootecnico/vista-aerea-ampliamento-complesso-zootecnico.webp",
  introLead:
    "Studio Capoferri è uno studio di ingegneria strutturale specializzato nelle strutture in acciaio, con oltre 40 anni di esperienza e più di 1000 progetti realizzati. Con sede ad Adro (BS), a pochi chilometri dalla provincia di Bergamo, progettiamo ville in acciaio, capannoni industriali, sopraelevazioni e carpenteria metallica su Bergamo, in Lombardia e nel Nord Italia.",
  areaHeading: "Dove operiamo: Bergamo, Brescia, Milano e tutta la Lombardia",
  areaBody:
    "Lo studio si trova ad Adro (BS), al confine con la provincia di Bergamo, in posizione strategica tra Franciacorta e Val Calepio. Interveniamo rapidamente su Bergamo e provincia — Val Seriana, Val Brembana, Isola Bergamasca, pianura bergamasca — e in tutta la Lombardia: Brescia, Milano, Monza, Cremona, Mantova, Lecco e Como.",
  areaBodySecondary:
    "Per i cantieri fuori regione operiamo regolarmente anche in Veneto, Piemonte ed Emilia-Romagna.",
  ctaHeading: "Hai un progetto in acciaio a Bergamo o in Lombardia?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Bergamo?",
  faqAreaAnswer:
    "Sì. Lo studio ha sede ad Adro (BS), al confine con la provincia di Bergamo, e opera in tutta la Lombardia — Bergamo, Brescia, Milano e relative province — oltre che in Veneto, Piemonte ed Emilia-Romagna.",
  areaServedPrimary: "Provincia di Bergamo",
  heroImage: {
    src: "/assets/industriale/ampliamento-complesso-zootecnico/vista-aerea-ampliamento-complesso-zootecnico.webp",
    alt: "Progettazione di strutture in acciaio a Bergamo — struttura industriale con carpenteria metallica",
  },
  secondaryImage: {
    src: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
    alt: "Carpenteria metallica per strutture in acciaio in provincia di Bergamo — travi e pilastri",
  },
  featuredProjects: [
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "struttura calcolata per due carroponti, pannelli sandwich e disegni d'officina",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme",
      description: "fondazioni su pali, telaio in acciaio e copertura fotovoltaica integrale",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-veneto",
      title: "Residenza privata in acciaio in Veneto",
      description: "progettazione strutturale e architettonica integrata",
    },
    {
      href: "/progetti/ricettivi/superstudio-village",
      title: "Superstudio Village a Milano Bovisa",
      description: "nuova struttura in acciaio alta circa 16 metri e consolidamenti strutturali",
    },
  ],
};

export const steelLandingMilano: SteelLandingConfig = {
  slug: "milano",
  city: "Milano",
  metaTitle: "Progettazione strutture in acciaio a Milano e in Lombardia",
  metaDescription:
    "Progettazione strutture in acciaio a Milano e hinterland: ville, capannoni, sopraelevazioni, spazi per eventi e carpenteria metallica. Calcolo strutturale NTC 2018, disegni d'officina, direzione lavori. Studio Capoferri, 40+ anni di esperienza.",
  keywords: [
    "progettazione strutture in acciaio Milano",
    "strutture in acciaio Milano",
    "calcolo strutturale acciaio Milano",
    "ingegnere strutturista Milano",
    "carpenteria metallica Milano",
    "capannoni in acciaio Milano",
    "ville in acciaio Milano",
    "sopraelevazioni in acciaio Milano",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/industriale/ampliamento-complesso-zootecnico/capriate-metalliche-grande-luce-complesso-zootecnico.webp",
  introLead:
    "Studio Capoferri è uno studio di ingegneria strutturale specializzato nelle strutture in acciaio, con oltre 40 anni di esperienza e più di 1000 progetti realizzati. Progettiamo ville in acciaio, capannoni industriali, sopraelevazioni e carpenteria metallica a Milano, nell'hinterland milanese e in tutta la Lombardia, con interventi su complessi ricettivi, edifici residenziali e strutture industriali.",
  areaHeading: "Dove operiamo: Milano, Brescia, Bergamo e tutta la Lombardia",
  areaBody:
    "Operiamo su Milano città e provincia — Bovisa, Famagosta, hinterland nord e sud — oltre che su Monza, Brianza e tutta l'area metropolitana. Lo studio ha sede ad Adro (BS), in posizione strategica per raggiungere rapidamente i cantieri milanesi, e interviene anche su Brescia, Bergamo, Cremona, Mantova, Lecco e Como.",
  areaBodySecondary:
    "Tra i progetti milanesi più significativi: Superstudio Village a Bovisa e Superstudio Maxi a Famagosta, con strutture in acciaio, consolidamenti e adeguamenti sismici.",
  ctaHeading: "Hai un progetto in acciaio a Milano o in Lombardia?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Milano?",
  faqAreaAnswer:
    "Sì. Lo studio opera regolarmente su Milano e provincia, oltre che su Brescia, Bergamo e tutta la Lombardia. La sede ad Adro (BS) consente interventi tempestivi sull'area metropolitana milanese e su tutto il Nord Italia.",
  areaServedPrimary: "Provincia di Milano",
  heroImage: {
    src: "/assets/industriale/ampliamento-complesso-zootecnico/capriate-metalliche-grande-luce-complesso-zootecnico.webp",
    alt: "Progettazione di strutture in acciaio a Milano — struttura portante in acciaio",
  },
  secondaryImage: {
    src: "/assets/residenziale/villa-acciaio-salsomaggiore/struttura-acciaio-copertura-fotovoltaico.webp",
    alt: "Struttura in acciaio per edificio in Lombardia — copertura con pannelli fotovoltaici",
  },
  featuredProjects: [
    {
      href: "/progetti/ricettivi/superstudio-village",
      title: "Superstudio Village a Milano Bovisa",
      description: "nuova struttura in acciaio alta circa 16 metri, consolidamenti e ricostruzioni",
    },
    {
      href: "/progetti/ricettivi/superstudio-maxi",
      title: "Superstudio Maxi a Famagosta",
      description: "recupero capannone industriale con adeguamento sismico e nuove strutture in acciaio",
    },
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "struttura calcolata per due carroponti, pannelli sandwich e disegni d'officina",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme",
      description: "fondazioni su pali, telaio in acciaio e copertura fotovoltaica integrale",
    },
  ],
};
