import { University } from "@/lib/type"
import type { MetadataRoute } from "next"

// Mock data - replace with your actual data source
const getUniversities = async () => {
 const res = await fetch('https://test2unibackend-production.up.railway.app/api/universities')
 const data = await res.json()
 return data.universities
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =  "https://test2uni.com"

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/universities`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pte-practice`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ilets-practice`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,

    }
  ]
  const universities = await getUniversities()
  const universityPages: MetadataRoute.Sitemap = universities?.map((university:University) => ({
    url: `${baseUrl}/university/${university.slug}`,
    lastModified: new Date(university.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...universityPages]
}
