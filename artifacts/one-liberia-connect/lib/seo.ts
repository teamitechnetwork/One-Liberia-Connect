import type { Metadata } from "next";
import { pageHeroes } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
export function pageMetadata(title:string,description:string,path:string):Metadata {
 const url=`${siteUrl}${path}`;
 const image=pageHeroes[title as keyof typeof pageHeroes]?.image??"/images/mission.jpg";
 return {title,description,alternates:{canonical:path},openGraph:{type:"website",siteName:"One Liberia Connect",title:`${title} | One Liberia Connect`,description,url,images:[{url:image,alt:title}]},twitter:{card:"summary_large_image",title:`${title} | One Liberia Connect`,description,images:[image]}};
}
