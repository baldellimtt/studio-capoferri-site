import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { fontDisplay } from "@/lib/fonts";
import { buildPageMetadata } from "@/lib/seo";
import { linkTitles } from "@/lib/link-seo";
import { isProjectArea, projectCategories, projectAreas } from "@/lib/projects";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

type Props = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return projectAreas.map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  if (!isProjectArea(area)) return {};
  const c = projectCategories[area];
  return buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/progetti/${area}`,
    image: c.cases[0]?.cover,
  });
}

export default async function ProjectAreaPage({ params }: Props) {
  const { area } = await params;
  if (!isProjectArea(area)) notFound();

  const c = projectCategories[area];

  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
        <nav className="reveal-faint mb-6 text-[0.82rem] text-[#666] sm:text-sm" aria-label="Percorso di navigazione">
          <Link href="/progetti" title={linkTitles.breadcrumbProgetti} className="font-medium text-[#2a3f54] hover:underline">
            Progetti
          </Link>
          <span className="mx-2 text-[#aaa]" aria-hidden>
            /
          </span>
          <span className="text-[#444]">{c.heading}</span>
        </nav>

        <h1 className={`${fontDisplay.className} reveal-title ${ui.pageTitle} mb-6 sm:mb-8`}>{c.heading}</h1>

        <div className="reveal-block frost-card mb-12 rounded-2xl p-5 sm:p-6 md:p-8">
          <div className="copy-rhythm text-pretty text-left text-[0.98rem] text-[#444] sm:text-[1.05rem]">{c.intro}</div>
        </div>

        <h2 className={`${fontDisplay.className} reveal-title ${ui.gallerySectionTitle} mb-6`}>Progetti in evidenza</h2>
        <div className="lazy-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.cases.map((p) => (
            <div key={p.slug} className="reveal-block">
              <ProjectPreviewCard
                href={p.href}
                title={p.title}
                caption={p.caption}
                image={p.cover}
                alt={p.alt}
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </main>
  );
}
