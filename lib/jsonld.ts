import { pageUrl, type SeoLocale } from "@/lib/seo";
import { site } from "@/lib/site";
import type { ProjectArea } from "@/lib/projects";

const areaLabels: Record<SeoLocale, Record<ProjectArea, string>> = {
  it: {
    residenziali: "Strutture residenziali",
    industriali: "Strutture industriali",
    ricettivi: "Strutture per spazi pubblici",
  },
  en: {
    residenziali: "Residential structures",
    industriali: "Industrial structures",
    ricettivi: "Structures for public venues",
  },
};

export function breadcrumbJsonLd(items: { name: string; path?: string }[], locale: SeoLocale = "it") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: pageUrl(item.path, locale) } : {}),
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
  locale = "it",
}: {
  area: ProjectArea;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  gallery: { src: string }[];
  locale?: SeoLocale;
}) {
  const path = `/progetti/${area}/${slug}`;
  return [
    breadcrumbJsonLd(
      [
        { name: locale === "en" ? "Projects" : "Progetti", path: "/progetti" },
        { name: areaLabels[locale][area], path: `/progetti/${area}` },
        { name: metaTitle },
      ],
      locale
    ),
    creativeWorkJsonLd({
      name: metaTitle,
      description: metaDescription,
      url: pageUrl(path, locale),
      images: gallery.map((g) => g.src),
    }),
  ];
}
