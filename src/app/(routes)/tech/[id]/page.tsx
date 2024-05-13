import { getAllTech, getOneTech } from "@/app/_util/customFetch"
import { techDTO } from "@/types/DTO";
import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateStaticParams() {
    const posts = await getAllTech();
    return posts.map((post) => ({
        id: post.id.toString()
    }))
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
            <div dangerouslySetInnerHTML={{__html:post.content}}></div>
        </div>
    )
}