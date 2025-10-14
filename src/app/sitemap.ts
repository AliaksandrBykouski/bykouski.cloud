import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bykouskidigital.cz";
  const now = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly", // главная обновляется чаще
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9, // услуги важнее
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly", // портфолио обновляется часто
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: now,
      changeFrequency: "yearly", // контакты редко меняются
      priority: 0.7,
    },
  ];
}
