"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { ProjectImageLightbox } from "@/components/projects/ProjectImageLightbox";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { fontDisplay } from "@/lib/fonts";
import { localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { projectCaseStudies, projectCategories, type ProjectArea } from "@/lib/projects";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import type { SteelLandingConfig } from "@/lib/steel-landing";
import { ui } from "@/lib/ui";

const areaCopy = {
  it: {
    residenziali: {
      heading: "Strutture residenziali",
      intro: [
        "La progettazione strutturale in ambito residenziale richiede armonia tra comfort, funzionalità e integrazione architettonica.",
        "Realizziamo strutture per abitazioni unifamiliari, complessi residenziali ed edifici multipiano con un approccio personalizzato.",
      ],
    },
    industriali: {
      heading: "Strutture industriali",
      intro: [
        "In ambito industriale la progettazione richiede soluzioni robuste e ad alte prestazioni, con attenzione a logistica, tempi e operatività.",
        "Ogni progetto nasce dall'analisi delle necessità operative del cliente e si sviluppa con soluzioni su misura.",
      ],
    },
    ricettivi: {
      heading: "Strutture per spazi pubblici",
      intro: [
        "Per i luoghi aperti al pubblico cerchiamo un equilibrio tra estetica, funzionalità e comfort.",
        "Sviluppiamo soluzioni flessibili e innovative, studiate sull'uso degli spazi e sull'identità del luogo.",
      ],
    },
    breadcrumbProjects: "Progetti",
    featured: "Progetti in evidenza",
  },
  en: {
    residenziali: {
      heading: "Residential structures",
      intro: [
        "Structural design for residential buildings requires balance between comfort, functionality and architectural integration.",
        "We develop structures for private homes, residential complexes and multi-storey buildings with a tailored approach to each context.",
      ],
    },
    industriali: {
      heading: "Industrial structures",
      intro: [
        "Industrial projects require robust, high-performance solutions with careful attention to logistics, construction time and operational use.",
        "Each assignment starts from the client's real production needs and develops into a durable, purpose-built structural solution.",
      ],
    },
    ricettivi: {
      heading: "Structures for public venues",
      intro: [
        "For venues open to the public, we look for a balance between aesthetics, functionality and user comfort.",
        "We design flexible, innovative structural solutions shaped around the use of space and the identity of the place.",
      ],
    },
    breadcrumbProjects: "Projects",
    featured: "Featured projects",
  },
} as const;

const caseCopy = {
  en: {
    "residenziali/villa-acciaio-veneto": {
      heading: "Private residence - Veneto",
      body: [
        "We designed a villa that combines innovation, efficiency and contemporary design. The steel structure provides strength, durability and sustainability, bringing advanced engineering into a high-quality residential setting.",
        "The project shows how the structural concept can work in direct dialogue with the architectural design to create a functional building that sits naturally within its landscape.",
      ],
      bullets: [
        ["Steel structure", "strength, lightness and controlled construction time."],
        ["Integrated design", "spaces optimised for liveability and landscape integration."],
        ["Sustainability", "high energy performance and ambitious environmental standards."],
      ],
    },
    "residenziali/villa-acciaio-salsomaggiore": {
      heading: "Steel villa - Salsomaggiore Terme (PR)",
      body: [
        "Studio Capoferri developed the structural design for a steel residential building in Salsomaggiore Terme, following the project from the design phase through construction.",
        "Poor ground conditions required a dedicated solution from the outset: piled foundations coordinated with a mixed reinforced-concrete and steel superstructure.",
        "Above the concrete base, with a partially buried lower level and the stair core, the steel frame defines the first floor and the roof, which was designed to host a full photovoltaic surface.",
      ],
      bullets: [
        ["Piled foundations", "a targeted solution for poor soil conditions."],
        ["Steel frame", "beams and columns defining the volumes with precision, strength and lightness."],
        ["Dry construction systems", "high-density mineral wool walls for execution speed and strong thermal performance."],
        ["Energy efficiency", "roof prepared for a full photovoltaic installation."],
        ["Integrated design", "services and finishes coordinated in parallel to reduce delays and on-site uncertainty."],
      ],
    },
    "industriali/capannone-erbusco": {
      heading: "Industrial building - Erbusco (BS)",
      body: [
        "Studio Capoferri handled the structural, architectural and planning design for the extension of the production area of a major heavy steel fabrication company in Erbusco, near Brescia.",
        "This was an advanced industrial engineering project developed to maximise operational efficiency and safety in an intensive production environment. The building was conceived for heavy loads and complex workflows.",
        "The intervention delivers a more efficient and durable production area, fully aligned with the needs of the industrial context.",
      ],
      bullets: [
        ["Steel primary structure", "strength and reliability for heavy industrial use."],
        ["Executive design", "shop drawings and construction detailing for steel fabrication."],
        ["Crane integration", "the structure was calculated for two overhead travelling cranes and internal handling flows."],
        ["Envelope efficiency", "sandwich panels providing thermal and acoustic insulation."],
        ["Integrated scope", "planning, architecture and executive structural design managed together."],
      ],
    },
    "industriali/ampliamento-complesso-zootecnico": {
      heading: "Livestock complex extension",
      body: [
        "Intervening on existing buildings requires a careful balance between structural constraints, logistics and business continuity. In this livestock complex extension, the objective was to increase the covered area while preserving maximum internal flexibility.",
        "The solution focused on new steel trusses with a clear span of almost 16 metres. Removing intermediate supports allowed the internal space to be organised more efficiently for operational needs.",
        "Structural design here is not only about calculations; it is the tool that turns the client's practical requirements into a concrete, buildable solution.",
      ],
      bullets: [
        ["Efficiency", "large clear spans covered with optimised profiles."],
        ["Speed", "reduced assembly time to limit disruption on site."],
        ["Durability", "solutions suited to an aggressive operating environment."],
        ["Integration", "precise connection between the new works and the existing structures."],
      ],
    },
    "industriali/centro-direzionale-provaglio-diseo": {
      heading: "Office centre - Provaglio d'Iseo",
      body: [
        "After an extensive preliminary design and technical development phase, the work finally moved on site.",
        "The intervention transforms an industrial building into a new office centre with offices, laboratories and workspaces in Provaglio d'Iseo.",
        "Starting from the general designer's approved scheme, our contribution focused on a full optimisation of the solution, adapting it to the real construction dynamics of the site.",
        "The core of the intervention is a steel mezzanine of more than 5,000 square metres, integrated into the existing structure to expand the usable floor area.",
        "Seeing the construction phase start confirms the value of constant dialogue between design and execution: it produces solutions that are more efficient and more consistent with site reality.",
      ],
      bullets: [
        ["Structural and geometric optimisation", "of the steelwork package."],
        ["Coordination", "with the conditions of the existing building."],
        ["Executive detailing", "required for fabrication and production."],
        ["Assembly sequencing", "rationalised to maintain operational continuity on site."],
      ],
    },
    "ricettivi/superstudio-village": {
      heading: "Superstudio Village - Milan Bovisa",
      body: [
        "The structural design work concerned a building complex in Milan Bovisa for Superstudio Events, composed of six buildings with different types of intervention.",
        "Works started in 2023. Two buildings required structural strengthening of vaults and roofs. One building was demolished and rebuilt with a new steel structure reaching approximately 16 metres in height.",
        "Another building was reconstructed with a mixed reinforced-concrete and load-bearing masonry structure; a further block combined load-bearing masonry with a composite roof system; and one existing building underwent seismic upgrading.",
      ],
      bullets: [],
    },
    "ricettivi/superstudio-maxi": {
      heading: "Superstudio Maxi - Famagosta",
      body: [
        "This structural intervention concerned the recovery of a disused industrial shed in the Famagosta area of Milan, formerly used for steel fabrication.",
        "The building was converted into an event venue, covering about 7,200 square metres indoors plus roughly 3,000 square metres of yard space.",
        "The project included seismic upgrading and strengthening of the existing steel structures, together with new steel additions for congress, exhibition and multimedia functions.",
        "The intervention was developed to preserve and enhance the site's industrial-archaeology identity while adapting it to a new public use.",
      ],
      bullets: [],
    },
  },
} as const;

const landingCopy = {
  en: {
    heroTitle: (city: string) => `Steel structure design in ${city} and across Lombardy`,
    process:
      "From structural calculations in accordance with NTC 2018 and Eurocodes to fabrication drawings, site supervision and final testing, we support every phase from concept to construction.",
    consultation: "Request a consultation",
    whyTitle: "Why choose a steel structure",
    whyBullets: [
      ["Seismic performance", "lightness and ductility make steel ideal in seismic areas."],
      ["Faster construction", "steelwork is prefabricated in the workshop and dry-assembled on site."],
      ["Architectural freedom", "large spans, cantilevers and open volumes without intermediate columns."],
      ["Vertical extensions", "reduced weight makes steel ideal for adding levels to existing buildings."],
      ["Sustainability", "fully recyclable material suitable for high-efficiency envelopes and PV-ready roofs."],
    ],
    scopeTitle: "What we design: from residential to industrial",
    scopeLead:
      "We design steel structures for every building type: private homes, multi-storey buildings, industrial sheds with overhead cranes, commercial buildings and event spaces. Recent projects include:",
    faqTitle: "Frequently asked questions about steel structure design",
    ctaText:
      "Tell us about your project: we assess feasibility, costs and timing, then propose the most efficient structural solution.",
    contactNow: "Contact us now",
    allServices: "Explore all services",
    cities: {
      brescia: {
        introLead:
          "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. From our base in Adro, near Brescia in the Franciacorta area, we design steel homes, industrial buildings, vertical extensions and steelwork projects across Lombardy and Northern Italy.",
        areaHeading: "Where we work: Brescia, Bergamo, Milan and all of Lombardy",
        areaBody:
          "The practice is based in Adro, in the province of Brescia, strategically positioned between Franciacorta, Val Calepio and Lake Iseo. We operate quickly across Brescia and its province and throughout Lombardy, including Bergamo, Milan, Monza, Cremona, Mantua, Lecco and Como.",
        areaBodySecondary:
          "For projects outside the region, we also work regularly in Veneto, Piedmont and Emilia-Romagna.",
        ctaHeading: "Do you have a steel project in Brescia or Lombardy?",
        faqAreaAnswer:
          "Yes. Our office is based in Adro, in the province of Brescia, and we operate throughout Lombardy, including Brescia, Bergamo and Milan, as well as in Veneto, Piedmont and Emilia-Romagna.",
        featuredProjects: [
          ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
          ["Steel villa in Salsomaggiore Terme", "piled foundations, steel frame and full photovoltaic roof"],
          ["Private steel residence in Veneto", "integrated structural and architectural design"],
          ["Superstudio Village in Milan", "new steel structure around 16 metres high and structural strengthening works"],
        ],
      },
      bergamo: {
        introLead:
          "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. From our base in Adro, close to the Bergamo area, we design steel homes, industrial buildings, vertical extensions and steelwork projects across Bergamo, Lombardy and Northern Italy.",
        areaHeading: "Where we work: Bergamo, Brescia, Milan and all of Lombardy",
        areaBody:
          "The practice is located in Adro, close to the Bergamo province, in a strategic position between Franciacorta and Val Calepio. We operate quickly across Bergamo and its province, and throughout Lombardy, including Brescia, Milan, Monza, Cremona, Mantua, Lecco and Como.",
        areaBodySecondary:
          "For projects outside the region, we also work regularly in Veneto, Piedmont and Emilia-Romagna.",
        ctaHeading: "Do you have a steel project in Bergamo or Lombardy?",
        faqAreaAnswer:
          "Yes. Our office is based in Adro, close to the Bergamo province, and we work throughout Lombardy, including Bergamo, Brescia and Milan, as well as in Veneto, Piedmont and Emilia-Romagna.",
        featuredProjects: [
          ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
          ["Steel villa in Salsomaggiore Terme", "piled foundations, steel frame and full photovoltaic roof"],
          ["Private steel residence in Veneto", "integrated structural and architectural design"],
          ["Superstudio Village in Milan Bovisa", "new steel structure around 16 metres high and structural strengthening works"],
        ],
      },
      milano: {
        introLead:
          "Studio Capoferri is a structural engineering practice specialised in steel structures, with more than 40 years of experience and over 1,000 completed projects. We design steel homes, industrial buildings, vertical extensions and steelwork projects in Milan, across its metropolitan area and throughout Lombardy.",
        areaHeading: "Where we work: Milan, Brescia, Bergamo and all of Lombardy",
        areaBody:
          "We operate throughout Milan and its province, including Bovisa, Famagosta and the wider metropolitan area, as well as Monza Brianza and the rest of Lombardy. Our office in Adro provides fast access to Milanese construction sites and to projects across Brescia, Bergamo, Cremona, Mantua, Lecco and Como.",
        areaBodySecondary:
          "Key projects in Milan include Superstudio Village in Bovisa and Superstudio Maxi in Famagosta, with steel structures, strengthening works and seismic upgrades.",
        ctaHeading: "Do you have a steel project in Milan or Lombardy?",
        faqAreaAnswer:
          "Yes. We work regularly across Milan and its province, as well as Brescia, Bergamo and the whole of Lombardy. Our office in Adro allows rapid intervention across the wider Milan area and Northern Italy.",
        featuredProjects: [
          ["Superstudio Village in Milan Bovisa", "new steel structure around 16 metres high, strengthening and reconstruction works"],
          ["Superstudio Maxi in Famagosta", "conversion of an industrial shed with seismic upgrading and new steel structures"],
          ["Industrial building in Erbusco (BS)", "structure designed for two overhead cranes, sandwich panels and fabrication drawings"],
          ["Steel villa in Salsomaggiore Terme", "piled foundations, steel frame and full photovoltaic roof"],
        ],
      },
    },
    faqFixed: [
      [
        "How much does steel structure design cost?",
        "Costs depend on size, complexity and the intended use of the building. After an initial inspection or technical call, we provide a detailed, no-obligation quotation for structural design, fabrication drawings and site supervision.",
      ],
      [
        "What advantages does steel offer compared with reinforced concrete?",
        "Steel combines lightness, seismic performance, faster site operations through workshop prefabrication and major architectural flexibility. It is also recyclable and well suited to sustainable construction.",
      ],
      [
        "Do you also handle construction supervision and steel erection support?",
        "Yes. We follow the full process: structural calculations to NTC 2018 and Eurocodes, fabrication drawings, site erection assistance and structural site supervision up to final testing.",
      ],
      [
        "Can a steel extension be added on top of an existing building?",
        "Yes. The low self-weight of steel makes it ideal for vertical extensions. We first verify the structural suitability of the existing building, then design the new addition while minimising extra loads.",
      ],
    ],
  },
} as const;

export function LocalizedProjectAreaPage({ area }: { area: ProjectArea }) {
  const locale = useLocale();
  const t = areaCopy[locale][area];
  const shared = areaCopy[locale];
  const cases = projectCategories[area].cases;

  if (locale === "it") {
    const c = projectCategories[area];
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Percorso di navigazione">
              <Link href="/progetti" title={linkTitles.breadcrumbProgetti("it")} className="font-medium text-[#2a3f54] hover:underline">
                Progetti
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <span className="text-[#444]">{c.heading}</span>
            </nav>

            <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>{c.heading}</h1>

            <div className="reveal-block frost-card mb-12 rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="copy-rhythm text-pretty text-left text-[0.98rem] text-[#444] sm:text-[1.05rem]">{c.intro}</div>
            </div>

            <h2 className={`${fontDisplay.className} reveal-title ${ui.gallerySectionTitle} mb-6`}>Progetti in evidenza</h2>
            <div className="lazy-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.cases.map((p) => (
                <Link
                  key={p.slug}
                  href={p.href}
                  title={linkTitles.progetto(p.title, "it")}
                  className="group block overflow-hidden rounded-2xl border border-[#2a3f54]/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(42,63,84,0.14)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={p.cover} alt={p.alt} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, 100vw" />
                    <div className="image-unify-overlay" aria-hidden />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f2e3d]/95 to-transparent px-4 py-3 sm:py-4">
                      <span className={`${fontDisplay.className} text-base tracking-[0.04em] text-white sm:text-lg`}>{p.caption}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Breadcrumb">
            <Link href={localizeHref("/progetti", locale)} title={linkTitles.breadcrumbProgetti(locale)} className="font-medium text-[#2a3f54] hover:underline">
              {shared.breadcrumbProjects}
            </Link>
            <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
            <span className="text-[#444]">{t.heading}</span>
          </nav>
          <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>{t.heading}</h1>
          <div className="reveal-block frost-card mb-12 rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="copy-rhythm text-pretty text-left text-[0.98rem] text-[#444] sm:text-[1.05rem]">
              {t.intro.map((p) => <p key={p} className="mb-4 last:mb-0">{p}</p>)}
            </div>
          </div>
          <h2 className={`${fontDisplay.className} reveal-title ${ui.gallerySectionTitle} mb-6`}>{shared.featured}</h2>
          <div className="lazy-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((p) => (
              <div key={p.slug} className="reveal-block">
                <ProjectPreviewCard href={localizeHref(p.href, locale)} title={locale === "en" ? p.title.replace("Residenza privata", "Private residence").replace("Villa in acciaio", "Steel villa").replace("Capannone industriale", "Industrial building").replace("Ampliamento complesso zootecnico", "Livestock complex extension").replace("Centro direzionale", "Office centre") : p.title} caption={locale === "en" ? p.caption.replace("Residenza privata", "Private residence").replace("Villa in acciaio", "Steel villa").replace("Capannone industriale", "Industrial building").replace("Complesso zootecnico", "Livestock complex").replace("Centro direzionale", "Office centre") : p.caption} image={p.cover} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export function LocalizedProjectCasePage({ area, slug }: { area: ProjectArea; slug: string }) {
  const locale = useLocale();
  const key = `${area}/${slug}` as keyof typeof caseCopy.en;
  const cs = projectCaseStudies[`${area}/${slug}` as keyof typeof projectCaseStudies];
  const heading = locale === "en" && key in caseCopy.en ? caseCopy.en[key].heading : cs.heading;
  const catHeading = locale === "en" ? areaCopy.en[area].heading : projectCategories[area].heading;
  const body = locale === "en" && key in caseCopy.en ? caseCopy.en[key] : null;

  if (locale === "it") {
    const cat = projectCategories[area];
    return (
      <main id="main-content" className="section-shell bg-[#fafbfc]">
        <div className={layoutGutterXClass}>
          <div className={layoutContentMaxClass}>
            <div className="mx-auto w-full max-w-[900px]">
              <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Percorso di navigazione">
                <Link href="/progetti" title={linkTitles.breadcrumbProgetti("it")} className="font-medium text-[#2a3f54] hover:underline">
                  Progetti
                </Link>
                <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
                <Link href={`/progetti/${area}`} title={linkTitles.breadcrumbArea(cat.heading, "it")} className="font-medium text-[#2a3f54] hover:underline">
                  {cat.heading}
                </Link>
                <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
                <span className="text-[#444]">{cs.metaTitle}</span>
              </nav>

              <h1 className={`${fontDisplay.className} reveal-title ${ui.caseStudyTitle} mb-6 sm:mb-8`}>{cs.heading}</h1>

              {cs.externalBrand ? (
                <div className="reveal-block mb-8 rounded-xl bg-[#2a2a2a] px-4 py-4 text-center">
                  <a href={cs.externalBrand.href} target="_blank" rel="noopener noreferrer" title={linkTitles.external(cs.externalBrand.imageAlt, "it")} className="inline-block">
                    <Image src={cs.externalBrand.imageSrc} alt={cs.externalBrand.imageAlt} width={280} height={80} className="mx-auto h-auto max-h-14 w-auto" />
                  </a>
                </div>
              ) : null}

              <div className="lazy-section">
                <article className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <div>{cs.body}</div>
                </article>

                <ProjectImageLightbox images={cs.gallery} className="mt-10" />
                <ContactCtaSection title="Hai un progetto simile?" />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="mx-auto w-full max-w-[900px]">
            <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Breadcrumb">
              <Link href={localizeHref("/progetti", locale)} title={linkTitles.breadcrumbProgetti(locale)} className="font-medium text-[#2a3f54] hover:underline">
                {locale === "en" ? "Projects" : "Progetti"}
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <Link href={localizeHref(`/progetti/${area}`, locale)} title={linkTitles.breadcrumbArea(catHeading, locale)} className="font-medium text-[#2a3f54] hover:underline">
                {catHeading}
              </Link>
              <span className="mx-2 text-[#aaa]" aria-hidden>/</span>
              <span className="text-[#444]">{heading}</span>
            </nav>
            <h1 className={`${fontDisplay.className} reveal-title ${ui.caseStudyTitle} mb-6 sm:mb-8`}>{heading}</h1>
            {cs.externalBrand ? (
              <div className="reveal-block mb-8 rounded-xl bg-[#2a2a2a] px-4 py-4 text-center">
                <a href={cs.externalBrand.href} target="_blank" rel="noopener noreferrer" title={linkTitles.external(cs.externalBrand.imageAlt, locale)} className="inline-block">
                  <Image src={cs.externalBrand.imageSrc} alt={cs.externalBrand.imageAlt} width={280} height={80} className="mx-auto h-auto max-h-14 w-auto" />
                </a>
              </div>
            ) : null}
            <div className="lazy-section">
              <article className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                {body ? (
                  <div>
                    {body.body.map((p) => <p key={p} className="copy-rhythm mb-4 text-[0.98rem] text-[#444] sm:text-[1.05rem] last:mb-0">{p}</p>)}
                    {body.bullets.length ? (
                      <ul className="mt-6 list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                        {body.bullets.map(([title, text]) => (
                          <li key={title} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                            <strong>{title}</strong> - {text}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <div>{cs.body}</div>
                )}
              </article>
              <ProjectImageLightbox images={cs.gallery} className="mt-10" />
              <ContactCtaSection title={locale === "en" ? "Do you have a similar project?" : "Hai un progetto simile?"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function LocalizedSteelLandingPage({ config }: { config: SteelLandingConfig }) {
  const locale = useLocale();
  const isEn = locale === "en";
  const pageUrl = `${site.url}/progettazione-strutture-acciaio-${config.slug}/`;
  const cityCopy = isEn ? landingCopy.en.cities[config.slug as keyof typeof landingCopy.en.cities] : null;
  const faq = isEn
    ? [
        [landingCopy.en.faqFixed[0][0], landingCopy.en.faqFixed[0][1]],
        [landingCopy.en.faqFixed[1][0], landingCopy.en.faqFixed[1][1]],
        ["Do you design steel structures across Lombardy?", cityCopy?.faqAreaAnswer ?? config.faqAreaAnswer],
        [landingCopy.en.faqFixed[2][0], landingCopy.en.faqFixed[2][1]],
        [landingCopy.en.faqFixed[3][0], landingCopy.en.faqFixed[3][1]],
      ]
    : [
        [config.faqCostQuestion, "Il costo dipende da dimensioni, complessita e destinazione d'uso dell'edificio. Dopo un primo sopralluogo o un colloquio tecnico forniamo un preventivo dettagliato e senza impegno per la progettazione strutturale, i disegni costruttivi d'officina e la direzione lavori."],
        ["Quali vantaggi offre una struttura in acciaio rispetto al cemento armato?", "L'acciaio garantisce leggerezza, resistenza sismica, tempi di cantiere ridotti grazie alla prefabbricazione in officina e grande flessibilita architettonica."],
        ["Progettate strutture in acciaio in tutta la Lombardia?", config.faqAreaAnswer],
        ["Seguite anche la direzione lavori e il montaggio della carpenteria metallica?", "Si. Seguiamo l'intero processo, dal calcolo strutturale alla direzione lavori strutturale fino al collaudo."],
        ["E possibile realizzare una sopraelevazione in acciaio su un edificio esistente?", "Si, la leggerezza dell'acciaio lo rende il materiale ideale per le sopraelevazioni."],
      ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: isEn ? "Steel structure design" : "Progettazione strutture in acciaio",
    serviceType: isEn ? "Structural design of steel structures" : "Progettazione strutturale di strutture in acciaio",
    description: config.metaDescription,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: config.areaServedPrimary },
      { "@type": "AdministrativeArea", name: "Lombardy" },
    ],
    url: pageUrl,
  };

  if (!isEn) {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
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
                  Dal <strong>calcolo strutturale secondo NTC 2018 ed Eurocodici</strong> ai <strong>disegni costruttivi d&apos;officina</strong>, fino alla direzione lavori e al collaudo: seguiamo ogni fase del progetto, dalla prima idea al cantiere.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/contatti" className={ui.btnPrimary} title={linkTitles.consulenza("it")}>Richiedi una consulenza</Link>
                  <a href={`tel:${site.phoneTel}`} className={ui.btnOutline} title={linkTitles.telefono(site.phoneDisplay, "it")}>{site.phoneDisplay}</a>
                </div>
              </article>

              <div className="lazy-section">
                <section className="mt-10">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>Perché scegliere una struttura in acciaio</h2>
                  <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                    <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Resistenza sismica</strong> — leggerezza e duttilità rendono l&apos;acciaio ideale nelle zone sismiche della Lombardia.</li>
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Tempi di cantiere ridotti</strong> — la carpenteria metallica viene prefabbricata in officina e montata a secco in cantiere.</li>
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Libertà architettonica</strong> — grandi luci, sbalzi e volumi aperti senza pilastri intermedi.</li>
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Sopraelevazioni</strong> — il peso contenuto consente di ampliare in altezza edifici esistenti.</li>
                      <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>Sostenibilità</strong> — materiale riciclabile al 100%, perfetto per involucri ad alta efficienza energetica e coperture fotovoltaiche.</li>
                    </ul>
                  </div>
                </section>

                <section className="mt-10">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>Cosa progettiamo: dal residenziale all&apos;industriale</h2>
                  <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                    <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>Progettiamo <strong>strutture in acciaio per ogni destinazione d&apos;uso</strong>: ville e residenze private, edifici multipiano, capannoni industriali con carroponte, edifici commerciali e spazi per eventi. Alcuni progetti recenti:</p>
                    <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                      {config.featuredProjects.map((p) => (
                        <li key={p.href} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                          <Link href={p.href} title={linkTitles.progetto(p.title, "it")} className="font-semibold text-[#2a3f54] underline underline-offset-2">{p.title}</Link> — {p.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="mt-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"><Image src={config.heroImage.src} alt={config.heroImage.alt} fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" /></div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"><Image src={config.secondaryImage.src} alt={config.secondaryImage.alt} fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" /></div>
                  </div>
                </section>

                <section className="mt-10">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{config.areaHeading}</h2>
                  <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                    <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{config.areaBody}</p>
                    {config.areaBodySecondary ? <p className={`copy-rhythm ${ui.bodyMuted}`}>{config.areaBodySecondary}</p> : null}
                  </div>
                </section>

                <section className="mt-10">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>Domande frequenti sulla progettazione di strutture in acciaio</h2>
                  <div className="space-y-4">
                    {faq.map(([q, a]) => (
                      <div key={q} className="frost-card rounded-2xl p-5 sm:p-6">
                        <h3 className={`${fontDisplay.className} mb-2 text-lg tracking-[0.04em] text-[#2a2a2a]`}>{q}</h3>
                        <p className={`copy-rhythm ${ui.bodyMuted}`}>{a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-10">
                  <div className="frost-card rounded-2xl p-5 text-center sm:p-7 md:p-8">
                    <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-3`}>{config.ctaHeading}</h2>
                    <p className={`copy-rhythm mx-auto mb-6 max-w-[560px] ${ui.bodyMuted}`}>Raccontaci la tua idea: analizziamo fattibilità, costi e tempi e ti proponiamo la soluzione strutturale più efficiente.</p>
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <Link href="/contatti" className={ui.btnPrimary} title={linkTitles.contatti("it")}>Contattaci ora</Link>
                      <Link href="/servizi" className={ui.btnOutline} title={linkTitles.scopriServizi("it")}>Scopri tutti i servizi</Link>
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

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="mx-auto w-full max-w-[900px]">
            <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>
              {isEn ? landingCopy.en.heroTitle(config.city) : `Progettazione di strutture in acciaio a ${config.city} e in Lombardia`}
            </h1>
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-7 md:p-8">
              <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{isEn ? cityCopy?.introLead : config.introLead}</p>
              <p className={`copy-rhythm mb-6 ${ui.bodyMuted}`}>{isEn ? landingCopy.en.process : "Dal calcolo strutturale secondo NTC 2018 ed Eurocodici ai disegni costruttivi d'officina, fino alla direzione lavori e al collaudo: seguiamo ogni fase del progetto."}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={localizeHref("/contatti#form-contatti", locale)} className={ui.btnPrimary} title={linkTitles.consulenza(locale)}>{isEn ? landingCopy.en.consultation : "Richiedi una consulenza"}</Link>
                <a href={`tel:${site.phoneTel}`} className={ui.btnOutline} title={linkTitles.telefono(site.phoneDisplay, locale)}>{site.phoneDisplay}</a>
              </div>
            </article>
            <div className="lazy-section">
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{isEn ? landingCopy.en.whyTitle : "Perché scegliere una struttura in acciaio"}</h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                    {(isEn ? landingCopy.en.whyBullets : [
                      ["Resistenza sismica", "leggerezza e duttilita rendono l'acciaio ideale nelle zone sismiche della Lombardia."],
                      ["Tempi di cantiere ridotti", "la carpenteria metallica viene prefabbricata in officina e montata a secco in cantiere."],
                      ["Liberta architettonica", "grandi luci, sbalzi e volumi aperti senza pilastri intermedi."],
                      ["Sopraelevazioni", "il peso contenuto consente di ampliare in altezza edifici esistenti."],
                      ["Sostenibilita", "materiale riciclabile al 100%, perfetto per involucri ad alta efficienza energetica e coperture fotovoltaiche."],
                    ]).map(([title, text]) => (
                      <li key={title} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]"><strong>{title}</strong> - {text}</li>
                    ))}
                  </ul>
                </div>
              </section>
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{isEn ? landingCopy.en.scopeTitle : "Cosa progettiamo: dal residenziale all'industriale"}</h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{isEn ? landingCopy.en.scopeLead : "Progettiamo strutture in acciaio per ogni destinazione d'uso: ville, edifici multipiano, capannoni industriali, edifici commerciali e spazi per eventi. Alcuni progetti recenti:"}</p>
                  <ul className="list-none space-y-3 text-[0.95rem] text-[#333] sm:text-[1.02rem]">
                    {(isEn && cityCopy
                      ? config.featuredProjects.map((p, index) => ({
                          ...p,
                          title: cityCopy.featuredProjects[index]?.[0] ?? p.title,
                          description: cityCopy.featuredProjects[index]?.[1] ?? p.description,
                        }))
                      : config.featuredProjects).map((p) => (
                      <li key={p.href} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2a3f54]">
                        <Link href={localizeHref(p.href, locale)} title={linkTitles.progetto(p.title, locale)} className="font-semibold text-[#2a3f54] underline underline-offset-2">{p.title}</Link> - {p.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <section className="mt-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"><Image src={config.heroImage.src} alt={config.heroImage.alt} fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" /></div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"><Image src={config.secondaryImage.src} alt={config.secondaryImage.alt} fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" /></div>
                </div>
              </section>
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{isEn ? cityCopy?.areaHeading : config.areaHeading}</h2>
                <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
                  <p className={`copy-rhythm mb-4 ${ui.bodyMuted}`}>{isEn ? cityCopy?.areaBody : config.areaBody}</p>
                  {(isEn ? cityCopy?.areaBodySecondary : config.areaBodySecondary) ? <p className={`copy-rhythm ${ui.bodyMuted}`}>{isEn ? cityCopy?.areaBodySecondary : config.areaBodySecondary}</p> : null}
                </div>
              </section>
              <section className="mt-10">
                <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-5`}>{isEn ? landingCopy.en.faqTitle : "Domande frequenti sulla progettazione di strutture in acciaio"}</h2>
                <div className="space-y-4">
                  {faq.map(([q, a]) => (
                    <div key={q} className="frost-card rounded-2xl p-5 sm:p-6">
                      <h3 className={`${fontDisplay.className} mb-2 text-lg tracking-[0.04em] text-[#2a2a2a]`}>{q}</h3>
                      <p className={`copy-rhythm ${ui.bodyMuted}`}>{a}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mt-10">
                <div className="frost-card rounded-2xl p-5 text-center sm:p-7 md:p-8">
                  <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-3`}>{isEn ? cityCopy?.ctaHeading : config.ctaHeading}</h2>
                  <p className={`copy-rhythm mx-auto mb-6 max-w-[560px] ${ui.bodyMuted}`}>{isEn ? landingCopy.en.ctaText : "Raccontaci la tua idea: analizziamo fattibilità, costi e tempi e ti proponiamo la soluzione strutturale più efficiente."}</p>
                  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link href={localizeHref("/contatti#form-contatti", locale)} className={ui.btnPrimary} title={linkTitles.contatti(locale)}>{isEn ? landingCopy.en.contactNow : "Contattaci ora"}</Link>
                    <Link href={localizeHref("/servizi", locale)} className={ui.btnOutline} title={linkTitles.scopriServizi(locale)}>{isEn ? landingCopy.en.allServices : "Scopri tutti i servizi"}</Link>
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
