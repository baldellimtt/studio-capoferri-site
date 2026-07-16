import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/app/page";
import ChiSiamoPage from "@/app/chi-siamo/page";
import ContattiPage from "@/app/contatti/page";
import PrivacyPolicyPage from "@/app/privacy-policy/page";
import ProgettiPage from "@/app/progetti/page";
import ProjectAreaPage from "@/app/progetti/[area]/page";
import ProjectCasePage from "@/app/progetti/[area]/[slug]/page";
import ProgettazioneStruttureAcciaioBergamoPage from "@/app/progettazione-strutture-acciaio-bergamo/page";
import ProgettazioneStruttureAcciaioBresciaPage from "@/app/progettazione-strutture-acciaio-brescia/page";
import ProgettazioneStruttureAcciaioMilanoPage from "@/app/progettazione-strutture-acciaio-milano/page";
import ServiziPage from "@/app/servizi/page";
import { projectAreas, projectCategories } from "@/lib/projects";
import { getEnglishMetadataForSlug } from "@/lib/seo";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  const staticPaths = [
    [],
    ["chi-siamo"],
    ["servizi"],
    ["contatti"],
    ["privacy-policy"],
    ["progetti"],
    ["progettazione-strutture-acciaio-brescia"],
    ["progettazione-strutture-acciaio-bergamo"],
    ["progettazione-strutture-acciaio-milano"],
  ];

  const projectPaths = projectAreas.flatMap((area) => {
    const categoryPaths = [["progetti", area]];
    const casePaths = projectCategories[area].cases.map((item) => ["progetti", area, item.slug]);
    return [...categoryPaths, ...casePaths];
  });

  return [...staticPaths, ...projectPaths].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug = [] } = await params;
  return getEnglishMetadataForSlug(slug);
}

export default async function EnglishMirrorPage({ params }: Props) {
  const { slug = [] } = await params;

  if (slug.length === 0) return <HomePage />;

  if (slug.length === 1) {
    switch (slug[0]) {
      case "chi-siamo":
        return <ChiSiamoPage />;
      case "servizi":
        return <ServiziPage />;
      case "contatti":
        return <ContattiPage />;
      case "privacy-policy":
        return <PrivacyPolicyPage />;
      case "progetti":
        return <ProgettiPage />;
      case "progettazione-strutture-acciaio-brescia":
        return <ProgettazioneStruttureAcciaioBresciaPage />;
      case "progettazione-strutture-acciaio-bergamo":
        return <ProgettazioneStruttureAcciaioBergamoPage />;
      case "progettazione-strutture-acciaio-milano":
        return <ProgettazioneStruttureAcciaioMilanoPage />;
      default:
        notFound();
    }
  }

  if (slug[0] === "progetti" && slug.length === 2) {
    return <ProjectAreaPage params={Promise.resolve({ area: slug[1] })} />;
  }

  if (slug[0] === "progetti" && slug.length === 3) {
    return <ProjectCasePage params={Promise.resolve({ area: slug[1], slug: slug[2] })} />;
  }

  notFound();
}
