import ServerTechBox from "@/app/_components/TechBox";
import { getDatasByCount } from "@/app/_util/customFetch";
import { techDTO } from "@/types/DTO";
import TechBox from "@/app/_components/TechBox";

export default async function TechServerComponents(props: { viewport: any }) {
    const viewport = props.viewport;
    const data: techDTO[] = await getDatasByCount('tech', 1, 9);
    return (
        <>
            {data.map((post: techDTO) => {
                return (
                    <TechBox key={post.id} item={post} viewport={viewport} />
                )
            })}
        </>
    )
}