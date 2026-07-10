import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fontDisplay } from "@/lib/fonts";
import { isProjectArea, projectCategories, projectAreas } from "@/lib/projects";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

type Props = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return projectAreas.map((area) => ({ area }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  if (!isProjectArea(area)) return {};
  const c = projectCategories[area];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `${site.url}/progetti/${area}/` },
  };
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
          <Link href="/progetti" className="font-medium text-[#2a3f54] hover:underline">
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
            <Link
              key={p.slug}
              href={p.href}
              className="group block overflow-hidden rounded-2xl border border-[#2a3f54]/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:shadow-[0_14px_36px_rgba(42,63,84,0.14)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.cover}
                  alt={p.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width:1024px) 33vw, 100vw"
                />
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
