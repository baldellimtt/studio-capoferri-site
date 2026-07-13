import type { Metadata } from "next";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { fontDisplay } from "@/lib/fonts";
import { progettiIndexIntro } from "@/lib/content";
import { projectPreview } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata: Metadata = buildPageMetadata({
  title: "Progetti",
  description:
    "Una galleria dei progetti realizzati dallo Studio Capoferri: strutture residenziali, industriali e ricettive, con sede ad Adro (BS).",
  path: "/progetti",
});

export default function ProgettiPage() {
  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
        <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-4 sm:mb-6`}>Progetti realizzati</h1>
        <p className={`reveal-block copy-rhythm mb-8 max-w-none text-pretty sm:mb-14 ${ui.bodyMuted}`}>{progettiIndexIntro}</p>
        <div className="fine-divider mb-6 sm:mb-10" />
        <div className="lazy-section grid gap-6 sm:gap-10 md:grid-cols-3">
          {projectPreview.map((p) => (
            <div key={p.href} className="reveal-block">
              <ProjectPreviewCard
                href={p.href}
                title={p.title}
                caption={p.caption}
                image={p.image}
                alt={p.alt}
              />
            </div>
          ))}
        </div>
        <ContactCtaSection
          title="Vuoi realizzare un progetto con noi?"
          description="Dalla fattibilità al cantiere: raccontaci obiettivi, tempi e vincoli del tuo intervento."
        />
        </div>
      </div>
    </main>
  );
}
