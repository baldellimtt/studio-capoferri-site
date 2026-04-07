import Image from "next/image";
import type { Metadata } from "next";
import { fontDisplay } from "@/lib/fonts";
import { chiSiamoPage } from "@/lib/content";
import { chiSiamoPageImage } from "@/lib/images";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Scopri lo Studio Capoferri, il nostro team di professionisti, la storia e la filosofia che ci guida nella progettazione ingegneristica e architettonica con sede ad Adro (BS).",
  alternates: { canonical: `${site.url}/chi-siamo` },
};

export default function ChiSiamoPage() {
  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="frost-card rounded-2xl p-5 sm:p-7 md:p-10">
        <h1 className={`${fontDisplay.className} ${ui.pageTitle} mb-7 sm:mb-10`}>{chiSiamoPage.title}</h1>
        <div className={`space-y-5 sm:space-y-6 ${ui.body}`}>
          {chiSiamoPage.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:mt-12 sm:rounded-2xl">
          <Image
            src={chiSiamoPageImage.src}
            alt={chiSiamoPageImage.alt}
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
