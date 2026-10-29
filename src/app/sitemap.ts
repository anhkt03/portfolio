import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getAllProjectSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";
  const slugs = getAllProjectSlugs();
  const entries: MetadataRoute.Sitemap = [];
  const lastModified = "2026-10-29";

  for (const locale of locales) {
    entries.push(
      { url: `${baseUrl}/${locale}`, lastModified, changeFrequency: "monthly", priority: 1.0 },
      { url: `${baseUrl}/${locale}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
      { url: `${baseUrl}/${locale}/projects`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    );
    for (const slug of slugs) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
