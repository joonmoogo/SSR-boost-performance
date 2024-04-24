import PersonalBox from "@/app/components/PersonalBox";
import { getAllPersonal } from "@/app/util/customFetch";
import { personalDTO } from "@/types/DTO";

export default async function PersonalServerComponents() {
    const data: personalDTO[] = await getAllPersonal();
    return (
        <div className="main-page">
            {data.map((post: personalDTO, index: number) => {
                return (
                    <PersonalBox key={index} item={post} />
                )
            })}
        </div>
    )
}