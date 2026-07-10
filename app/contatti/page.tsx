import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { fontDisplay } from "@/lib/fonts";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo Studio Capoferri per richiedere un preventivo o fissare un appuntamento. Recapiti, indirizzo e orari della sede ad Adro (BS).",
  alternates: { canonical: `${site.url}/contatti/` },
};

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
            <p className="mb-4 text-[0.95rem] font-semibold text-[#2a2a2a] sm:mb-6 sm:text-[1.02rem]">
            {site.name} - {site.tagline}
            </p>
            <ul className="space-y-2 text-[0.95rem] text-[#333] sm:space-y-3 sm:text-[1.03rem]">
              <li>
                <strong>Indirizzo:</strong> {site.addressLine}
              </li>
              <li>
                <strong>Telefono:</strong>{" "}
                <a href={`tel:${site.phoneTel}`} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${site.email}`} className="inline-block min-h-[44px] py-1 text-[#333] underline-offset-2 hover:underline">
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
                className="inline-flex min-h-[44px] items-center gap-2 py-1 text-sm font-semibold text-[#2a3f54] underline-offset-2 hover:underline"
              >
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

        <section id="form-contatti" className="mt-10 scroll-mt-[120px] sm:mt-16">
          <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
            <h2 className={`${fontDisplay.className} ${ui.caseStudyTitle} mb-2 sm:mb-3`}>Contattaci</h2>
            <p className="copy-rhythm mb-6 w-full text-[0.95rem] leading-relaxed text-[#444] sm:mb-8 sm:text-[1.03rem]">
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
