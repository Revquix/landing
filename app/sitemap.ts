import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revquix.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy-policy", "/terms-of-service"];
  const now = new Date();

  return routes.map((route, index) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: index === 0 ? "weekly" : "yearly",
    priority: index === 0 ? 1 : 0.4,
  }));
}

