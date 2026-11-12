import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";
export default function sitemap():MetadataRoute.Sitemap {
 const base=siteUrl;
 return ["","about","our-services","our-cause","partners-and-investors","connect-your-community","contact","privacy","terms"].map(path=>({url:`${base}/${path}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:path===""?1:.7}));
}
