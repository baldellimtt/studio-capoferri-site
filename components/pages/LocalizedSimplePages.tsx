"use client";

import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { ContactForm } from "@/components/ContactForm";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MapEmbed } from "@/components/MapEmbed";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { fontDisplay } from "@/lib/fonts";
import { chiSiamoPageImage } from "@/lib/images";
import { localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

const projectCards = {
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

const englishServices = {
  intro:
    "Studio Capoferri provides integrated engineering, architecture and technical consultancy services across every project phase, from feasibility and approvals to site execution and final verification.",
  structural: [
    "We design steel, reinforced-concrete and masonry structures for residential, industrial and public-space projects, with FEM modelling, seismic verification and fire engineering support.",
    "Our scope includes preliminary studies, executive structural calculations, fabrication detailing and coordination with the architectural and MEP design team.",
  ],
  planning: [
    "We handle architectural design, planning studies, implementation plans, planning amendments and compliance reviews for new buildings, refurbishments and extensions.",
    "Each proposal is developed to balance buildability, regulatory compliance and the intended identity of the project.",
  ],
  supervision: [
    "We provide construction supervision, site assistance and technical coordination during execution, helping clients and contractors manage decisions, timing and quality control.",
    "This also includes assessments on existing buildings, technical reports and support during critical site phases.",
  ],
  technical: [
    "We assist with building permits, cadastral filings, heritage authority procedures, administrative testing, energy certificates and technical documentation required for approvals.",
    "The objective is to keep the administrative path aligned with the real construction programme and reduce procedural friction.",
  ],
  safety: [
    "We manage site safety during both design and execution, including CSP/CSE roles, safety plans, coordination meetings and risk-management procedures.",
    "Our approach integrates safety requirements with the actual organisation of the site, not as a separate afterthought.",
  ],
  property: [
    "We support property transactions with appraisals, technical due diligence, valuations, building-condition reviews and documentary checks.",
    "This service is designed for owners, buyers, investors and professionals who need a clear technical picture before making decisions.",
  ],
} as const;

export function LocalizedAboutPageContent() {
  const isEn = useLocale() === "en";
  const paragraphs = isEn
    ? [
        "Studio Capoferri is an independent technical practice with solid experience in structural engineering, architecture and technical coordination.",
        "Our method is based on precision, efficiency and buildability, combining multidisciplinary expertise to solve complex projects.",
        "From smaller local works to larger industrial interventions, we apply the same level of care to deliver reliable, compliant and safe projects.",
      ]
    : [
        "Studio Capoferri è una realtà tecnica indipendente nata dalla passione per l'edilizia in ogni sua forma e sfaccettatura.",
        "La nostra metodologia si basa su precisione, efficienza e cura del dettaglio, integrando competenze multidisciplinari per affrontare ogni sfida strutturale.",
        "Dal piccolo intervento locale ai grandi impianti industriali, mettiamo la stessa dedizione per garantire qualità e sicurezza in ogni progetto.",
      ];

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-10">
            <h1 className={`${fontDisplay.className} ${ui.pageTitle} mb-7 sm:mb-10`}>{isEn ? "About" : "Chi siamo"}</h1>
            <div className={`space-y-5 sm:space-y-6 ${ui.body}`}>{paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:mt-12 sm:rounded-2xl">
              <Image
                src={chiSiamoPageImage.src}
                alt={isEn ? "Studio Capoferri team during a technical meeting in Adro" : chiSiamoPageImage.alt}
                fill
                className="object-cover"
                sizes="(min-width:800px) 800px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function LocalizedServicesPageContent() {
  const isEn = useLocale() === "en";
  const sectionHeading = `${fontDisplay.className} ${ui.sectionHeadingAccent} mt-14 ${scrollAnchorClass}`;

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="frost-card rounded-2xl p-5 sm:p-7 md:p-10">
            <h1 className={`${fontDisplay.className} ${ui.pageTitle} mb-6 sm:mb-8`}>{isEn ? "Services" : "Servizi"}</h1>
            <p className={ui.body}>
              {isEn
                ? englishServices.intro
                : "Studio Capoferri offre una gamma completa di servizi di ingegneria, architettura e consulenza tecnica a 360 gradi."}
            </p>

            <h2 id="progettazione-strutturale" className={sectionHeading}>{isEn ? "Structural design" : "Progettazione strutturale"}</h2>
            {isEn ? (
              <>
                <p className={ui.bodyMuted}>{englishServices.structural[0]}</p>
                <p className={ui.bodyMuted}>{englishServices.structural[1]}</p>
              </>
            ) : (
              <p className={ui.bodyMuted}>Strutture in acciaio, calcestruzzo e muratura, analisi FEM, verifiche sismiche e progettazione antincendio.</p>
            )}

            <h2 id="urbanistica-architettura" className={sectionHeading}>{isEn ? "Planning and architecture" : "Urbanistica e architettura"}</h2>
            {isEn ? (
              <>
                <p className={ui.bodyMuted}>{englishServices.planning[0]}</p>
                <p className={ui.bodyMuted}>{englishServices.planning[1]}</p>
              </>
            ) : (
              <p className={ui.bodyMuted}>Progettazione architettonica, piani attuativi, varianti urbanistiche e analisi di conformità.</p>
            )}

            <h2 id="direzione-lavori" className={sectionHeading}>{isEn ? "Construction supervision and consultancy" : "Direzione lavori e consulenza"}</h2>
            {isEn ? (
              <>
                <p className={ui.bodyMuted}>{englishServices.supervision[0]}</p>
                <p className={ui.bodyMuted}>{englishServices.supervision[1]}</p>
              </>
            ) : (
              <p className={ui.bodyMuted}>Supervisione tecnica, assistenza in cantiere, verifiche su edifici esistenti e relazioni tecniche.</p>
            )}

            <h2 id="servizi-tecnici" className={sectionHeading}>{isEn ? "Technical and cadastral services" : "Servizi tecnici e catastali"}</h2>
            {isEn ? (
              <>
                <p className={ui.bodyMuted}>{englishServices.technical[0]}</p>
                <p className={ui.bodyMuted}>{englishServices.technical[1]}</p>
              </>
            ) : (
              <p className={ui.bodyMuted}>Pratiche edilizie, catastali, pratiche per la Sovrintendenza, collaudi amministrativi e certificazioni energetiche.</p>
            )}

            <h2 id="sicurezza-cantieri" className={sectionHeading}>{isEn ? "Site safety" : "Sicurezza cantieri"}</h2>
            {isEn ? (
              <>
                <p className={ui.bodyMuted}>{englishServices.safety[0]}</p>
                <p className={ui.bodyMuted}>{englishServices.safety[1]}</p>
              </>
            ) : (
              <p className={ui.bodyMuted}>Coordinamento della sicurezza in fase di progettazione ed esecuzione, piani di sicurezza e gestione rischi.</p>
            )}

            <h2 id="assistenza-immobiliare" className={sectionHeading}>{isEn ? "Property support" : "Assistenza immobiliare"}</h2>
            {isEn ? (
              <>
                <p className={ui.bodyMuted}>{englishServices.property[0]}</p>
                <p className={ui.bodyMuted}>{englishServices.property[1]}</p>
              </>
            ) : (
              <p className={ui.bodyMuted}>Supporto tecnico per compravendite, perizie, stime immobiliari e valutazione dello stato di fatto.</p>
            )}

            <ContactCtaSection
              title={isEn ? "Need technical support for your project?" : "Cerchi supporto tecnico per il tuo progetto?"}
              description={
                isEn
                  ? "Contact us for an initial assessment: we can outline timing, approvals and the most suitable design path."
                  : "Contattaci per una valutazione preliminare: ti indichiamo tempi, iter autorizzativi e il percorso progettuale più adatto."
              }
              className="mt-14"
            />
          </article>
        </div>
      </div>
    </main>
  );
}

export function LocalizedContactsPageContent() {
  const isEn = useLocale() === "en";
  const contactTagline = isEn ? "Engineering - Architecture - Urban Planning" : site.tagline;
  const openingHours = isEn ? "Mon - Fri: 08:30 - 18:00" : site.openingHoursDisplay;

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="mb-6 max-w-[780px] sm:mb-8">
            <h1 className={`${fontDisplay.className} ${ui.pageTitle} mb-3 sm:mb-4`}>{isEn ? "Contact" : "Contatti"}</h1>
            <p className={ui.body}>
              {isEn
                ? "We are available for preliminary assessments, quotations and technical support on structural design, site supervision and specialist consultancy."
                : "Siamo disponibili per valutazioni preliminari, preventivi e supporto tecnico su progettazione strutturale in acciaio, direzione lavori e consulenza specialistica."}
            </p>
          </div>

          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.02fr_1.28fr] lg:items-stretch">
            <section aria-labelledby="recapiti-heading" className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
              <h2 id="recapiti-heading" className={`${fontDisplay.className} ${ui.cardHeading} mb-4 sm:mb-5`}>{isEn ? "Details" : "Recapiti"}</h2>
              <p className={`mb-4 font-semibold text-[#2a2a2a] sm:mb-6 ${ui.body}`}>{site.name} - {contactTagline}</p>
              <ul className={`space-y-2 sm:space-y-3 ${ui.body}`}>
                <li><strong>{isEn ? "Address" : "Indirizzo"}:</strong> {site.addressLine}</li>
                <li><strong>{isEn ? "Phone" : "Telefono"}:</strong> <a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay, isEn ? "en" : "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:text-[#2a3f54] hover:underline">{site.phoneDisplay}</a></li>
                <li><strong>Email:</strong> <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:text-[#2a3f54] hover:underline">{site.email}</a></li>
                <li><strong>{isEn ? "Hours" : "Orari"}:</strong> {openingHours}</li>
              </ul>
              <div className="mt-5 border-t border-[#2a3f54]/10 pt-4 sm:mt-7 sm:pt-6">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={linkTitles.linkedin(isEn ? "en" : "it")}
                  aria-label={isEn ? "Follow us on LinkedIn - Studio Capoferri" : "Seguici su LinkedIn - Studio Capoferri"}
                  className="group focus-ring inline-flex min-h-[44px] items-center gap-3 py-1 text-sm font-semibold text-[#2a3f54] transition hover:text-[#0A66C2]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#2a3f54]/15 bg-[#2a3f54]/5 text-[#2a3f54] transition group-hover:border-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white">
                    <LinkedInIcon className="h-4 w-4" />
                  </span>
                  {isEn ? "Follow us on LinkedIn" : "Seguici su LinkedIn"}
                </a>
              </div>
            </section>

            <section aria-labelledby="mappa-heading" className="frost-card rounded-2xl p-3 sm:p-4 md:p-5">
              <h2 id="mappa-heading" className={`${fontDisplay.className} ${ui.cardHeading} mb-3 px-1 sm:mb-4 sm:px-2`}>{isEn ? "Where we are" : "Dove siamo"}</h2>
              <MapEmbed />
            </section>
          </div>

          <section id="form-contatti" className={`mt-10 sm:mt-16 ${scrollAnchorClass}`}>
            <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
              <h2 className={`${fontDisplay.className} ${ui.cardHeading} mb-2 sm:mb-3`}>{isEn ? "Contact us" : "Contattaci"}</h2>
              <p className={`copy-rhythm mb-6 w-full sm:mb-8 ${ui.bodyMuted}`}>
                {isEn
                  ? "Fill in the form with the details of your project. Our team will reply with a focused technical response."
                  : "Compila il form con i dettagli del tuo intervento. Riceverai un riscontro tecnico puntuale dal nostro team."}
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export function LocalizedProjectsPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-4 sm:mb-6`}>{isEn ? "Completed projects" : "Progetti realizzati"}</h1>
          <p className={`reveal-block copy-rhythm mb-8 max-w-none text-pretty sm:mb-14 ${ui.bodyMuted}`}>{isEn ? "A curated selection of our work across residential, industrial and public-space projects." : "Una selezione dei nostri lavori più significativi suddivisi per ambito di intervento."}</p>
          <div className="fine-divider mb-6 sm:mb-10" />
          <div className="lazy-section grid gap-6 sm:gap-10 md:grid-cols-3">
            {projectCards[locale].map(([title, caption, image, alt, href]) => (
              <div key={href} className="reveal-block">
                <ProjectPreviewCard href={localizeHref(href, locale)} title={title} caption={caption} image={image} alt={alt} />
              </div>
            ))}
          </div>
          <ContactCtaSection
            title={isEn ? "Would you like to develop a project with us?" : "Vuoi realizzare un progetto con noi?"}
            description={isEn ? "From feasibility to construction: tell us your objectives, timing and constraints." : "Dalla fattibilità al cantiere: raccontaci obiettivi, tempi e vincoli del tuo intervento."}
          />
        </div>
      </div>
    </main>
  );
}

export function LocalizedPrivacyPageContent() {
  const isEn = useLocale() === "en";

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="max-w-[860px]">
            <h1 className={`${fontDisplay.className} ${ui.pageTitle} mb-7 sm:mb-10`}>Privacy policy</h1>
            <p className={`mb-7 sm:mb-10 ${ui.body}`}>
              <strong>{isEn ? "Data controller" : "Titolare del trattamento"}:</strong> Studio Capoferri SRL STP - Via Piave 35, Adro (BS) - VAT 04732710985 - Email: <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="text-[#2a3f54] underline">{site.email}</a>
            </p>
            <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>{isEn ? "Purpose of processing" : "Finalità del trattamento"}</h2>
            <p className={ui.body}>{isEn ? "Personal data collected through the contact form is used exclusively to reply to user requests." : "I dati personali raccolti tramite il modulo di contatto vengono utilizzati esclusivamente per rispondere alle richieste inviate dagli utenti."}</p>
            <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>{isEn ? "Legal basis" : "Base giuridica"}</h2>
            <p className={ui.body}>{isEn ? "Processing is based on the explicit consent of the data subject." : "Il trattamento è basato sul consenso esplicito dell'interessato."}</p>
            <h2 id="cookie" className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-14 ${scrollAnchorClass}`}>Cookie</h2>
            <p className={`mb-10 ${ui.body}`}>{isEn ? "This website uses cookies to ensure proper operation and improve the browsing experience." : "Questo sito utilizza cookie per garantire il corretto funzionamento e migliorare l'esperienza di navigazione."}</p>
            <div className="space-y-5 sm:space-y-8">
              <div className="frost-card rounded-2xl p-4 sm:p-6"><h3 className="mb-3 font-semibold text-[#2a3f54]">{isEn ? "Technical cookies" : "Cookie tecnici"}</h3><p className={ui.body}>{isEn ? "Essential cookies required for site functionality, including session and preference cookies." : "Cookie strettamente necessari per il funzionamento del sito, inclusi cookie di sessione e di preferenze."}</p></div>
              <div className="frost-card rounded-2xl p-4 sm:p-6"><h3 className="mb-3 font-semibold text-[#2a3f54]">{isEn ? "Third-party services" : "Cookie di terze parti"}</h3><p className={ui.body}>{isEn ? "Some pages use Google Maps and the contact form uses Formspree. Related cookies are loaded only where required by the configured consent flow." : "In alcune pagine del sito viene utilizzato Google Maps e il form di contatto usa Formspree."}</p></div>
              <div className={`rounded-2xl p-4 sm:p-6 ${ui.brandGradientCompact} text-white`}><h3 className="mb-3 font-semibold">{isEn ? "Cookie preferences" : "Gestione dei cookie"}</h3><p className="mb-3 text-[1.05rem] leading-relaxed text-white/95">{isEn ? "You can manage cookie preferences through the banner shown on first access to the site." : "È possibile gestire le preferenze sui cookie attraverso il banner che appare al primo accesso al sito."}</p><div className="mt-5"><CookiePreferencesButton /></div></div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
