import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seoConfig";
import { websiteReferences } from "@/data/websiteReferences";
import { getAllProjects } from "@/data/projectsData";
export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date().toISOString();
    return [
        { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1, images: [`${siteConfig.url}/images/tikat-founder-editorial-v2.png`, `${siteConfig.url}${siteConfig.founderAvatar}`] },
        ...["about", "project", "tham-khao"].map(path => ({ url: `${siteConfig.url}/${path}`, lastModified, changeFrequency: "monthly" as const, priority: .8, ...(path === "about" ? { images: [`${siteConfig.url}${siteConfig.founderAvatar}`] } : {}) })),
        ...getAllProjects().map(p => ({ url: `${siteConfig.url}/project/${p.id}`, lastModified, changeFrequency: "monthly" as const, priority: .7 })),
        ...websiteReferences.map(s => ({ url: `${siteConfig.url}/tham-khao/${s.slug}`, lastModified, changeFrequency: "monthly" as const, priority: .6 })),
    ];
}
