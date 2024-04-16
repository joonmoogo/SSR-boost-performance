import TechBox from "../components/TechBox"
import config from "../config/config"
import { techDTO } from "@/types/DTO"
import { getAllTech } from "../util/customFetch"
export default async function Tech() {
    const data = await getAllTech();
    return (
        <div className="main-page">
            {
                data.map((e, index) => {
                    return (
                        <TechBox item={e} key={index} />
                    )
                })
            }
        </div>
    )
}
