import { getAllTech, getOneTech } from "@/app/_util/customFetch"
import { techDTO } from "@/types/DTO";
import { headers } from "next/headers";

export async function generateStaticParams() {
    const posts = await getAllTech();
    return posts.map((post) => ({
        id: post.id.toString()
    }))
}


export default async function page({ params }: { params: techDTO }) {
    const { id } = params
    const post: techDTO = await getOneTech(id);
    return (
        <div className="main-tech-page">
            <h2>
                {post.id}
            </h2>
            <h2>
                {post.title}
            </h2>
        </div>
    )
}