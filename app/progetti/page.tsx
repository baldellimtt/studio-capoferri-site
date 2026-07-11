import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { fontDisplay } from "@/lib/fonts";
import { progettiIndexIntro } from "@/lib/content";
import { projectPreview } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";
import { linkTitles } from "@/lib/link-seo";
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
            <Link
              key={p.href}
              href={p.href}
              title={linkTitles.progetto(p.title)}
              className="group block overflow-hidden rounded-2xl border border-[#2a3f54]/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(42,63,84,0.14)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width:1024px) 33vw, 100vw"
                />
                <div className="image-unify-overlay" aria-hidden />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f2e3d]/95 to-transparent px-4 py-3 sm:py-4">
                  <span className={`${fontDisplay.className} text-base tracking-[0.04em] text-white sm:text-lg`}>{p.caption}</span>
                </div>
              </div>
            </Link>
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
