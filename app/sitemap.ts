import type { MetadataRoute } from "next";
import { site, work } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...work.map((file) => ({ url: `${site.url}/work/${file.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
