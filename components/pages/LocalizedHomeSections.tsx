"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { StatsSection } from "@/components/home/StatsSection";
import { ServiceIcon } from "@/components/home/ServiceIcons";
import { fontDisplay } from "@/lib/fonts";
import { linkTitles } from "@/lib/link-seo";
import { localizeHref } from "@/lib/i18n";
import { homeChiSiamoImages } from "@/lib/images";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

const titleCls = `${fontDisplay.className} section-title home-section-title reveal-title`;
const titleInvertedCls = `${fontDisplay.className} section-title home-section-title home-section-title--inverted reveal-title`;

const copy = {
  it: {
    aboutTitle: "Chi siamo",
    aboutBlocks: [
      "Studio Capoferri è uno studio tecnico ad Adro (Brescia) con oltre quarant'anni di esperienza nella progettazione strutturale, architettonica e urbanistica in Franciacorta e nel Nord Italia.",
      "Operiamo soprattutto in ambito residenziale e industriale, offrendo soluzioni tecniche avanzate in Lombardia, Veneto, Piemonte, Emilia-Romagna e Toscana, con forte presenza nelle province di Brescia, Bergamo e Milano.",
    ],
    servicesTitle: "Servizi",
    servicesIntro: "Offriamo una gamma completa di servizi di ingegneria, architettura e consulenza tecnica, con soluzioni innovative e conformi alle normative vigenti.",
    serviceCards: [
      ["Progettazione strutturale", "Strutture in acciaio, cemento armato e muratura. Analisi FEM, verifiche sismiche e progettazione antincendio.", "/servizi#progettazione-strutturale"],
      ["Urbanistica e architettura", "Progettazione architettonica, piani attuativi, varianti urbanistiche e analisi di conformità.", "/servizi#urbanistica-architettura"],
      ["Direzione lavori", "Supervisione tecnica, assistenza in cantiere, verifiche strutturali e relazioni tecniche.", "/servizi#direzione-lavori"],
      ["Servizi tecnici", "Pratiche edilizie, catastali, Sovrintendenza, collaudi amministrativi e successioni.", "/servizi#servizi-tecnici"],
      ["Sicurezza cantieri", "Coordinamento sicurezza (CSP/CSE), piani di sicurezza e gestione rischi.", "/servizi#sicurezza-cantieri"],
      ["Assistenza immobiliare", "Supporto tecnico per compravendite, perizie, stime immobiliari e valutazioni.", "/servizi#assistenza-immobiliare"],
    ],
    learnMore: "Scopri di più",
    allServices: "Scopri tutti i nostri servizi",
    projectsTitle: "Progetti",
    projectsIntro: "Una selezione dei nostri lavori più significativi tra residenziale, industriale e spazi pubblici, con un approccio tecnico calibrato sulle esigenze specifiche di ogni intervento.",
    projectsCta: "Esplora tutti i progetti realizzati",
    certificationsTitle: "Abilitazioni professionali",
    certificationsIntro: "Tutte le attività sono svolte da professionisti in possesso delle abilitazioni richieste dalla normativa di settore.",
    certifications: [
      ["Sicurezza cantieri", "Professionisti abilitati per il ruolo di CSP e CSE"],
      ["Pratiche di prevenzione incendi", "Professionisti iscritti agli elenchi del Ministero dell'Interno ai sensi dell'articolo 16 del decreto legislativo 8 marzo 2006, n. 139"],
      ["Certificazioni energetiche", "Certificazioni energetiche per redigere l'Attestato di Prestazione Energetica (APE) degli edifici"],
      ["Software professionali", "Utilizziamo software specialistici per CAD, analisi FEM, calcolo strutturale, modellazione 3D e rendering."],
    ],
    zoneTitle: "Dove operiamo",
    zoneHeading: "Nord e Centro Nord Italia",
    zoneDescription: "Operiamo in Lombardia, Veneto, Piemonte, Emilia-Romagna e Toscana, con particolare presenza nelle province di Brescia, Bergamo e Milano.",
    zoneFooter: "Accettiamo commesse in tutta Italia e all'estero. Contattaci per verificare la copertura nella tua zona.",
    contactsTitle: "Contatti",
    contactsIntro: "Per informazioni, preventivi o consulenze tecniche, il nostro team è a disposizione per rispondere a ogni vostra esigenza.",
    office: "Sede",
    phone: "Telefono",
    writeUs: "Scrivici direttamente",
  },
  en: {
    aboutTitle: "About",
    aboutBlocks: [
      "Studio Capoferri is a technical practice based in Adro, near Brescia, with more than forty years of experience in structural engineering, architecture and urban planning across Franciacorta and Northern Italy.",
      "We mainly work in the residential and industrial sectors, delivering advanced technical solutions across Lombardy, Veneto, Piedmont, Emilia-Romagna and Tuscany, with a strong presence in the provinces of Brescia, Bergamo and Milan.",
    ],
    servicesTitle: "Services",
    servicesIntro: "We provide a complete range of engineering, architecture and technical consultancy services, with solutions that are innovative and compliant.",
    serviceCards: [
      ["Structural design", "Steel, reinforced concrete and masonry structures. FEM analysis, seismic checks and fire design.", "/servizi#progettazione-strutturale"],
      ["Planning and architecture", "Architectural design, implementation plans, planning amendments and compliance analysis.", "/servizi#urbanistica-architettura"],
      ["Construction supervision", "Technical supervision, site support, structural assessments and technical reports.", "/servizi#direzione-lavori"],
      ["Technical services", "Building permits, cadastral filings, heritage authority procedures, administrative testing and inheritance matters.", "/servizi#servizi-tecnici"],
      ["Site safety", "Safety coordination (CSP/CSE), safety plans and risk management.", "/servizi#sicurezza-cantieri"],
      ["Property support", "Technical support for transactions, appraisals, valuations and due diligence.", "/servizi#assistenza-immobiliare"],
    ],
    learnMore: "Learn more",
    allServices: "Explore all services",
    projectsTitle: "Projects",
    projectsIntro: "A selection of our most relevant work across residential, industrial and public-space projects, each developed around specific technical requirements.",
    projectsCta: "Explore all completed projects",
    certificationsTitle: "Professional qualifications",
    certificationsIntro: "All services are delivered by professionals holding the qualifications required by current regulations.",
    certifications: [
      ["Site safety", "Qualified professionals for the CSP and CSE safety coordination roles"],
      ["Fire prevention", "Professionals listed by the Italian Ministry of the Interior under article 16 of Legislative Decree no. 139 of March 8, 2006"],
      ["Energy certification", "Energy certification services for issuing Building Energy Performance Certificates (APE)"],
      ["Professional software", "We use specialist tools for CAD, FEM analysis, structural design, 3D modelling and rendering."],
    ],
    zoneTitle: "Where we work",
    zoneHeading: "Northern Italy",
    zoneDescription: "We work across Lombardy, Veneto, Piedmont, Emilia-Romagna and Tuscany, with a particular focus on the provinces of Brescia, Bergamo and Milan.",
    zoneFooter: "We also accept commissions throughout Italy and abroad. Contact us to confirm coverage for your area.",
    contactsTitle: "Contact",
    contactsIntro: "For information, quotations or technical consultancy, our team is available to discuss your needs.",
    office: "Office",
    phone: "Phone",
    writeUs: "Write to us directly",
  },
} as const;

const previews = {
  it: [
    ["Strutture per il residenziale", "Strutture per il residenziale", "/assets/progetti-ambito-residenziale.webp", "Progetto residenziale con struttura in acciaio", "/progetti/residenziali"],
    ["Strutture per l'industria", "Strutture per l'industria", "/assets/progetto2.webp", "Capannone industriale con struttura portante in acciaio", "/progetti/industriali"],
    ["Strutture per spazi pubblici", "Strutture per spazi pubblici", "/assets/progetto-ricettivo.webp", "Spazio per eventi con progettazione strutturale", "/progetti/ricettivi"],
  ],
  en: [
    ["Residential structures", "Residential structures", "/assets/progetti-ambito-residenziale.webp", "Residential steel structure project", "/progetti/residenziali"],
    ["Industrial structures", "Industrial structures", "/assets/progetto2.webp", "Industrial building with steel structure", "/progetti/industriali"],
    ["Public-space structures", "Public-space structures", "/assets/progetto-ricettivo.webp", "Event venue structural design project", "/progetti/ricettivi"],
  ],
} as const;

export function LocalizedHomeSections() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <>
      <section id="chi-siamo" className={`lazy-section section-shell ${scrollAnchorClass} bg-[#fafbfc] ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-section-head">
            <h2 className={titleCls}>{t.aboutTitle}</h2>
            <div className="home-section-accent" aria-hidden />
          </div>
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {t.aboutBlocks.map((text, idx) => {
              const img = idx === 0 ? homeChiSiamoImages.team : homeChiSiamoImages.cantiere;
              return (
                <div key={idx} className="reveal-block grid gap-6 sm:gap-10 md:grid-cols-2 md:items-stretch">
                  <div className="home-section-body copy-rhythm reading-measure text-[0.98rem] sm:text-[1.05rem]">{text}</div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:aspect-auto md:min-h-[300px] md:h-full">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                    <div className="image-unify-overlay" aria-hidden />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="servizi" className={`lazy-section section-shell ${scrollAnchorClass} bg-white ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.servicesTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{t.servicesIntro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {t.serviceCards.map(([title, description, href], idx) => (
              <article key={title} className="reveal-block frost-card group flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[#2a3f54]/25 hover:shadow-[0_12px_32px_rgba(42,63,84,0.12)] sm:p-8">
                <div className={`${ui.iconBox} mb-4 sm:mb-5`}>
                  <ServiceIcon index={idx} className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>
                <h3 className={`${fontDisplay.className} mb-2 text-lg tracking-[0.04em] text-[#2a3f54] sm:mb-3 sm:text-xl`}>{title}</h3>
                <p className="copy-rhythm mb-5 flex-1 text-sm text-[#555] sm:mb-6">{description}</p>
                <Link href={localizeHref(href, locale)} className="touch-target mt-auto inline-block min-h-[44px] py-2 text-sm font-semibold text-[#2a3f54] underline-offset-4 transition group-hover:underline" title={linkTitles.scopriServizio(title)}>
                  {t.learnMore}
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href={localizeHref("/servizi", locale)} className={`${ui.btnOutline} inline-flex w-full sm:w-auto`} title={linkTitles.scopriServizi}>
              {t.allServices}
            </Link>
          </p>
        </div>
      </section>

      <section id="progetti" className={`lazy-section ${scrollAnchorClass} ${ui.brandGradient} px-4 py-14 text-white sm:px-5 sm:py-20 md:px-10`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleInvertedCls}>{t.projectsTitle}</h2>
              <div className="home-section-accent home-section-accent--light" aria-hidden />
            </div>
            <p className="home-split-header__right home-split-header__right--inverted">{t.projectsIntro}</p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {previews[locale].map(([title, caption, image, alt, href]) => (
              <div key={href} className="reveal-block">
                <ProjectPreviewCard href={localizeHref(href, locale)} title={title} caption={caption} image={image} alt={alt} variant="dark" />
              </div>
            ))}
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href={localizeHref("/progetti", locale)} className={`${ui.btnOnDark} inline-flex w-full sm:w-auto`} title={linkTitles.tuttiProgetti}>
              {t.projectsCta}
            </Link>
          </p>
        </div>
      </section>

      <section id="certificazioni" className={`lazy-section section-shell ${scrollAnchorClass} bg-white ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.certificationsTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{t.certificationsIntro}</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {t.certifications.map(([title, text]) => (
              <article key={title} className="reveal-block frost-card rounded-xl p-4 text-left sm:rounded-2xl sm:p-6">
                <h3 className={`${fontDisplay.className} mb-2 text-base uppercase tracking-[0.06em] text-[#2a3f54] sm:mb-3 sm:text-lg md:text-xl`}>{title}</h3>
                <p className="text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem] md:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="zone-servite" className={`lazy-section section-shell ${scrollAnchorClass} bg-[#fafbfc] ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.zoneTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <div className="home-split-header__right">{t.zoneDescription}</div>
          </div>
          <div className="reveal-block frost-card flex items-start gap-5 rounded-2xl p-6 sm:gap-6 sm:p-8">
            <div className={ui.iconBox} />
            <div className="min-w-0">
              <h3 className={`${fontDisplay.className} text-lg tracking-[0.04em] text-[#2a3f54] sm:text-xl`}>{t.zoneHeading}</h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem]">{t.zoneFooter}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section id="contatti" className={`lazy-section section-shell ${scrollAnchorClass} bg-white ${layoutGutterXClass}`}>
        <div className={layoutContentMaxClass}>
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{t.contactsTitle}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{t.contactsIntro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6"><h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>Email</h3><a href={`mailto:${site.email}`} title={linkTitles.email(site.email)} className="text-[0.88rem] text-[#555] underline-offset-2 transition hover:text-[#2a3f54] hover:underline sm:text-[0.95rem]">{site.email}</a></article>
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6"><h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>{t.phone}</h3><a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay)} className="text-[0.88rem] text-[#555] underline-offset-2 transition hover:text-[#2a3f54] hover:underline sm:text-[0.95rem]">{site.phoneDisplay}</a></article>
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6"><h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>{t.office}</h3><p className="text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem]">{site.addressLine}</p></article>
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href={localizeHref("/contatti#form-contatti", locale)} className={`${ui.btnOutline} inline-flex w-full sm:w-auto`} title={linkTitles.formContatti}>
              {t.writeUs}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
