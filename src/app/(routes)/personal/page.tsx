import '../../globals.css'
import config from '../../_config/config';
import PersonalBox from '../../_components/PersonalBox';
import { personalDTO } from '@/types/DTO';
import { getAllPersonal } from '../../_util/customFetch';
import { ReactNode, useMemo } from 'react';
import PersonalClientComponents from '../../_pageComponents/personal/PersonalClientComponents';
import PersonalServerComponents from '../../_pageComponents/personal/PersonalServerComponents';

export default function wrapper(request: any) {
    const { viewport } = request.searchParams;
    return (
        <div className="main-page">
            <PersonalClientComponents viewport={viewport}>
                <PersonalServerComponents viewport={viewport} />
            </PersonalClientComponents>
        </div>
    )
}

