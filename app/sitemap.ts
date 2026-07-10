import type { MetadataRoute } from "next";
import { steelLandingSlugs } from "@/lib/seo";
import { projectAreas, projectCategories } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-07-10");

function entry(path: string, priority: number, changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") {
  return {
    url: `${site.url}${path.endsWith("/") ? path : `${path}/`}`,
    lastModified,
    changeFrequency: changefreq,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    entry("/", 1.0, "weekly"),
    entry("/chi-siamo", 0.8),
    entry("/servizi", 0.8),
    entry("/progetti", 0.8),
    entry("/contatti", 0.9),
    entry("/privacy-policy", 0.3, "yearly"),
    ...steelLandingSlugs.map((slug) => entry(`/progettazione-strutture-acciaio-${slug}`, 0.8)),
  ];

  const projectPages: MetadataRoute.Sitemap = [];
  for (const area of projectAreas) {
    projectPages.push(entry(`/progetti/${area}`, 0.7));
    for (const c of projectCategories[area].cases) {
      projectPages.push(entry(`/progetti/${area}/${c.slug}`, 0.6));
    }
  }

  return [...staticPages, ...projectPages];
}
