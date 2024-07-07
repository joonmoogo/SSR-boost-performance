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
    openGraph: {
        type: 'website',
        url: config.websiteUrl,
        title: `${config.name} : 준무고의 기술 블로그`,
        description: config.description,
        siteName: '',
        locale: 'ko_KR'
    }
}

// <meta property="og:type" content="website">
// <meta property="og:url" content="https://example.com/page.html">
// <meta property="og:title" content="Content Title">
// <meta property="og:image" content="https://example.com/image.jpg">
// <meta property="og:description" content="Description Here">
// <meta property="og:site_name" content="Site Name">
// <meta property="og:locale" content="en_US">
// </meta>
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
