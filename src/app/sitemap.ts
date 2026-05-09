import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/cheatsheets";

export const dynamic = "force-static";

const BASE_URL = "https://devops.mouctar.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...slugs.map((slug) => ({
      url: `${BASE_URL}/cheatsheets/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
