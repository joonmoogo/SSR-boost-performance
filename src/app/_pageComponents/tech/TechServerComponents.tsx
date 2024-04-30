import ServerTechBox from "@/app/_components/TechBox-server";
import { getDatasByCount } from "@/app/_util/customFetch";
import { techDTO } from "@/types/DTO";

export default async function TechServerComponents(props: { viewport: any }) {
    const viewport = props.viewport;
    const data: techDTO[] = await getDatasByCount('tech', 1, 9);
    return (
        <>
            {data.map((post: techDTO) => {
                return (
                    <ServerTechBox key={post.id} item={post} viewport={viewport} />
                )
            })}
        </>
    )
}