import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectImageLightbox } from "@/components/projects/ProjectImageLightbox";
import { fontDisplay } from "@/lib/fonts";
import {
  getCaseStudyKey,
  isProjectArea,
  projectCaseStudies,
  projectCategories,
  projectAreas,
} from "@/lib/projects";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

type Props = { params: Promise<{ area: string; slug: string }> };

export async function generateStaticParams() {
  const out: { area: string; slug: string }[] = [];
  for (const area of projectAreas) {
    for (const c of projectCategories[area].cases) {
      out.push({ area, slug: c.slug });
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area, slug } = await params;
  if (!isProjectArea(area)) return {};
  const key = getCaseStudyKey(area, slug);
  if (!key || !projectCaseStudies[key]) return {};
  const cs = projectCaseStudies[key];
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    alternates: { canonical: `${site.url}/progetti/${area}/${slug}/` },
  };
}

export default async function ProjectCasePage({ params }: Props) {
  const { area, slug } = await params;
  if (!isProjectArea(area)) notFound();

  const key = getCaseStudyKey(area, slug);
  if (!key || !projectCaseStudies[key]) notFound();

  const cs = projectCaseStudies[key];
  const cat = projectCategories[area];

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
        <div className="mx-auto w-full max-w-[900px]">
        <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Percorso di navigazione">
          <Link href="/progetti" className="font-medium text-[#2a3f54] hover:underline">
            Progetti
          </Link>
          <span className="mx-2 text-[#aaa]" aria-hidden>
            /
          </span>
          <Link href={`/progetti/${area}`} className="font-medium text-[#2a3f54] hover:underline">
            {cat.heading}
          </Link>
          <span className="mx-2 text-[#aaa]" aria-hidden>
            /
          </span>
          <span className="text-[#444]">{cs.metaTitle}</span>
        </nav>

        <h1 className={`${fontDisplay.className} reveal-title ${ui.caseStudyTitle} mb-6 sm:mb-8`}>{cs.heading}</h1>

        {cs.externalBrand ? (
          <div className="reveal-block mb-8 rounded-xl bg-[#2a2a2a] px-4 py-4 text-center">
            <a href={cs.externalBrand.href} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image
                src={cs.externalBrand.imageSrc}
                alt={cs.externalBrand.imageAlt}
                width={280}
                height={80}
                className="mx-auto h-auto max-h-14 w-auto"
              />
            </a>
          </div>
        ) : null}

        <div className="lazy-section">
          <article className="frost-card rounded-2xl p-5 sm:p-7 md:p-8">
            <div>{cs.body}</div>
          </article>

          <ProjectImageLightbox images={cs.gallery} className="mt-10" />
        </div>
        </div>
        </div>
      </div>
    </main>
  );
}
