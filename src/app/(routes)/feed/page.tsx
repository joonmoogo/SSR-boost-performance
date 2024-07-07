import '../../globals.scss'
import config from '../../_config/config';
import PersonalBox from '../../_components/FeedBox';
import { feedDTO } from '@/types/DTO';
import { ReactNode, useMemo } from 'react';
import { headers } from 'next/headers';
import FeedClientComponents from '../../_pageComponents/feed/FeedClientComponents';
import FeedServerComponents from '../../_pageComponents/feed/FeedServerComponents';
import { Metadata } from "next"


export const metadata: Metadata = {
    title: `${config.name} : 준무고의 개인 블로그`,
    openGraph: {
        type: 'website',
        url: config.websiteUrl,
        title: `${config.name} : 준무고의 개인 블로그`,
        description: config.description,
        siteName: '',
        locale: 'ko_KR'
    }
}


export default function wrapper(request: any) {
    const headerList = headers();
    const viewport = headerList.get('x-viewport') as string;
    return (
        <div className="main-page">
            <FeedClientComponents viewport={viewport}>
                <FeedServerComponents viewport={viewport} />
            </FeedClientComponents>
        </div>
    )
}

