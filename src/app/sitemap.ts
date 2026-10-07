import { MetadataRoute } from "next";
import { MATERIALS } from "@/data/materials";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stonegallery.in";
  const now = new Date();

  // Root homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Dynamic material routes
  MATERIALS.forEach((material) => {
    routes.push({
      url: `${baseUrl}/materials/${material.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  return routes;
}
