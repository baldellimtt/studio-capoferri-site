import { pageUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import type { ProjectArea } from "@/lib/projects";

export function breadcrumbJsonLd(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: pageUrl(item.path) } : {}),
    })),
  };
}

export function creativeWorkJsonLd({
  name,
  description,
  url,
  images,
}: {
  name: string;
  description: string;
  url: string;
  images: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url,
    image: images.map((src) => `${site.url}${src}`),
    creator: { "@id": `${site.url}/#organization` },
  };
}

export function caseStudyJsonLd({
  area,
  slug,
  metaTitle,
  metaDescription,
  gallery,
}: {
  area: ProjectArea;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  gallery: { src: string }[];
}) {
  const path = `/progetti/${area}/${slug}`;
  return [
    breadcrumbJsonLd([
      { name: "Progetti", path: "/progetti" },
      { name: area === "residenziali" ? "Strutture residenziali" : area === "industriali" ? "Strutture industriali" : "Strutture per spazi pubblici", path: `/progetti/${area}` },
      { name: metaTitle },
    ]),
    creativeWorkJsonLd({
      name: metaTitle,
      description: metaDescription,
      url: pageUrl(path),
      images: gallery.map((g) => g.src),
    }),
  ];
}
