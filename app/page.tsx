import type { Metadata } from "next";
import { HeroHome } from "@/components/HeroHome";
import { HomeSections } from "@/components/home/HomeSections";
import { heroFirstImageSrc } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Ingegneria civile, architettura e strutture in acciaio",
  description:
    "Studio Capoferri ad Adro (BS): ingegneria civile, architettura e strutture in acciaio da oltre 40 anni. Brescia, Bergamo, Milano. Richiedi un preventivo.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href={heroFirstImageSrc} fetchPriority="high" />
      <main id="main-content">
        <HeroHome />
        <HomeSections />
      </main>
    </>
  );
}
