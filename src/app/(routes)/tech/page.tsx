import TechBox from "../../_components/TechBox-server"
import config from "../../_config/config"
import { techDTO } from "@/types/DTO"
import { getAllTech } from "../../_util/customFetch"
import { useMemo } from "react"
import TechClientComponents from "@/app/_pageComponents/tech/TechClientComponents"
import TechServerComponents from "@/app/_pageComponents/tech/TechServerComponents"
export default async function Tech(request: any) {

    const { viewport } = request.searchParams;

    return (
        <div className="main-tech-page">
            <TechClientComponents viewport={viewport}>
                <TechServerComponents viewport={viewport} />
            </TechClientComponents>
        </div>
    )
}
