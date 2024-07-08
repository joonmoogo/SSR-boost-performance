import config from "@/app/_config/config";
import { getAllTech, getOneTech } from "@/app/_util/customFetch"
import { techDTO } from "@/types/DTO";
import { Metadata, ResolvedMetadata } from "next";
import { headers } from "next/headers";

// export async function generateStaticParams() {
//     const posts = await getAllTech();
//     return posts.map((post) => ({
//         id: post.id.toString()
//     }))
// }

type MetaProps = {
    params: { id: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata({ params, searchParams }: MetaProps,): Promise<Metadata> {
    const id = params.id;
    const post: techDTO = await getOneTech(id);
    console.log('generateMetadata', post);
    return {
        title: `${config.name} : ${post.title}`,
        description: `${config.name} : ${post.title}`,
        openGraph: {
            type: 'website',
            url: config.websiteUrl,
            title: `${config.name} : ${post.title}`,
            description: `${config.name} : ${post.title}`,
            siteName: config.name,
            locale: 'ko_KR'
        }
    }
}

// export async function generateMetaData({ params }: any): Promise<Metadata> {
//     const posts = await getAllTech();
//     return posts.map((post)=>({
//         id:post.id.toString()
//     })
// }

export default async function page({ params }: { params: techDTO }) {
    const { id } = params
    const post: techDTO = await getOneTech(id);
    return (
        <div className="main-tech-page">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    )
}