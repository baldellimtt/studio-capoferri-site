import type { Metadata } from "next";
import { site } from "@/lib/site";

export const defaultOgImage =
  "/assets/industriale/ampliamento-complesso-zootecnico/capriate-metalliche-grande-luce-complesso-zootecnico.webp";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path with leading slash, trailing slash optional — e.g. `/chi-siamo` */
  path: string;
  image?: string;
  keywords?: string[];
};

export function pageUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${site.url}${withSlash}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  keywords,
}: PageMetadataInput): Metadata {
  const url = pageUrl(path);
  const ogTitle = `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(keywords ? { keywords } : {}),
    openGraph: {
      type: "website",
      locale: "it_IT",
      url,
      siteName: site.name,
      title: ogTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

export const steelLandingSlugs = ["brescia", "bergamo", "milano"] as const;
