import PersonalBox from "@/app/components/PersonalBox";
import { getAllPersonal, getPersonalsByCount } from "@/app/util/customFetch";
import { personalDTO } from "@/types/DTO";

export default async function PersonalServerComponents() {
    const data: personalDTO[] = await getPersonalsByCount('personal',1,10);
    return (
        <div className="main-page">
            {data.map((post: personalDTO) => {
                return (
                    <PersonalBox key={post.id} item={post} />
                )
            })}
        </div>
    )
}