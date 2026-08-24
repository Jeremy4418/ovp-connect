import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ovppro.fr",
      lastModified: "2026-08-24",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ovppro.fr/formulaire",
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ovppro.fr/achat-immobilier",
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ovppro.fr/accompagnement-achat-immobilier",
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ovppro.fr/financement-immobilier",
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ovppro.fr/capacite-emprunt",
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ovppro.fr/trouver-courtier-immobilier",
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ovppro.fr/trouver-agent-immobilier",
      lastModified: "2026-08-24",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ovppro.fr/mentions-legales",
      lastModified: "2026-08-24",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://ovppro.fr/cgu",
      lastModified: "2026-08-24",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://ovppro.fr/confidentialite",
      lastModified: "2026-08-24",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
