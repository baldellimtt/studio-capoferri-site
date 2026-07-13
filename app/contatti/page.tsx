import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MapEmbed } from "@/components/MapEmbed";
import { fontDisplay } from "@/lib/fonts";
import { buildPageMetadata } from "@/lib/seo";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata: Metadata = buildPageMetadata({
  title: "Contatti",
  description:
    "Contatta lo Studio Capoferri per richiedere un preventivo o fissare un appuntamento. Recapiti, indirizzo e orari della sede ad Adro (BS).",
  path: "/contatti",
});

export default function ContattiPage() {
  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
        <div className="mb-6 max-w-[780px] sm:mb-8">
          <h1 className={`${fontDisplay.className} ${ui.pageTitle} mb-3 sm:mb-4`}>
            Contatti
          </h1>
          <p className={ui.body}>
            Siamo disponibili per valutazioni preliminari, preventivi e supporto tecnico su progettazione strutturale in acciaio,
            direzione lavori e consulenza specialistica.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-8 lg:grid-cols-[1.02fr_1.28fr] lg:items-stretch">
          <section aria-labelledby="recapiti-heading" className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
            <h2 id="recapiti-heading" className={`${fontDisplay.className} ${ui.cardHeading} mb-4 sm:mb-5`}>Recapiti</h2>
            <p className={`mb-4 font-semibold text-[#2a2a2a] sm:mb-6 ${ui.body}`}>
            {site.name} - {site.tagline}
            </p>
            <ul className={`space-y-2 sm:space-y-3 ${ui.body}`}>
              <li>
                <strong>Indirizzo:</strong> {site.addressLine}
              </li>
              <li>
                <strong>Telefono:</strong>{" "}
                <a href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay)} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:text-[#2a3f54] hover:underline">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${site.email}`} title={linkTitles.email(site.email)} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:text-[#2a3f54] hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <strong>Orari:</strong> {site.openingHoursDisplay}
              </li>
            </ul>
            <div className="mt-5 border-t border-[#2a3f54]/10 pt-4 sm:mt-7 sm:pt-6">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title={linkTitles.linkedin}
                aria-label="Seguici su LinkedIn — Studio Capoferri"
                className="group focus-ring inline-flex min-h-[44px] items-center gap-3 py-1 text-sm font-semibold text-[#2a3f54] transition hover:text-[#0A66C2]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#2a3f54]/15 bg-[#2a3f54]/5 text-[#2a3f54] transition group-hover:border-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white">
                  <LinkedInIcon className="h-4 w-4" />
                </span>
                Seguici su LinkedIn
              </a>
            </div>
          </section>

          <section aria-labelledby="mappa-heading" className="frost-card rounded-2xl p-3 sm:p-4 md:p-5">
            <h2 id="mappa-heading" className={`${fontDisplay.className} ${ui.cardHeading} mb-3 px-1 sm:mb-4 sm:px-2`}>
              Dove siamo
            </h2>
            <MapEmbed />
          </section>
        </div>

        <section id="form-contatti" className={`mt-10 sm:mt-16 ${scrollAnchorClass}`}>
          <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
            <h2 className={`${fontDisplay.className} ${ui.cardHeading} mb-2 sm:mb-3`}>Contattaci</h2>
            <p className={`copy-rhythm mb-6 w-full sm:mb-8 ${ui.bodyMuted}`}>
              Compila il form con i dettagli del tuo intervento. Riceverai un riscontro tecnico puntuale dal nostro team.
            </p>
            <ContactForm />
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
