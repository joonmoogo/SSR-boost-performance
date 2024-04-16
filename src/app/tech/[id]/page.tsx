import TechBox from "../../components/TechBox"
import config from "../../config/config"
import '@/app/globals.css'
import { techDTO } from "@/types/DTO"
import { getAllTech, getOneTech } from "../../util/customFetch"

export default async function Tech({ params }: any) {
    const data: techDTO = await getOneTech(params.id)
    return (
        <div className="main-page">
            <div className="server-html" dangerouslySetInnerHTML={{__html:data.content}}></div>
        </div>
    )
}
