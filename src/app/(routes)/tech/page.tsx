import TechBox from "../../_components/TechBox"
import config from "../../_config/config"
import { techDTO } from "@/types/DTO"
import { getAllTech } from "../../_util/customFetch"
import { useMemo } from "react"
import TechClientComponents from "@/app/_pageComponents/tech/TechClientComponents"
import TechServerComponents from "@/app/_pageComponents/tech/TechServerComponents"
import { headers } from "next/headers"
export default async function Tech(request: any) {
    const headerList = headers();
    const viewport = headerList.get('x-viewport') as string;
    return (
        <div className="main-tech-page">
            <TechClientComponents viewport={viewport}>
                <TechServerComponents viewport={viewport} />
            </TechClientComponents>
        </div>
    )
}
