import PersonalBox from "@/app/_components/PersonalBox";
import { getAllPersonal, getDatasByCount } from "@/app/_util/customFetch";
import { personalDTO } from "@/types/DTO";

export default async function PersonalServerComponents(props: { viewport: any }) {

    const viewport = props.viewport;
    const data: personalDTO[] = await getDatasByCount('personal', 1, 9);
    return (
        <>
            {data.map((post: personalDTO) => {
                return (
                    <PersonalBox key={post.id} item={post} viewport={viewport} />
                )
            })}
        </>
    )
}