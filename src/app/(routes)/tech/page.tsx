import TechBox from "../../_components/TechBox"
import config from "../../_config/config"
import { techDTO } from "@/types/DTO"
import { getAllTech } from "../../_util/customFetch"
import React, { useMemo } from "react"
import TechClientComponents from "@/app/_pageComponents/tech/TechClientComponents"
import TechServerComponents from "@/app/_pageComponents/tech/TechServerComponents"
import { headers } from "next/headers"
import WriteForm from "@/app/_components/WriteForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: `${config.name} : 준무고의 기술 블로그`,
}

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
