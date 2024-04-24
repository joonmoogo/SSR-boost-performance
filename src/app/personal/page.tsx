import '../globals.css'
import config from '../config/config';
import PersonalBox from '../components/PersonalBox';
import { personalDTO } from '@/types/DTO';
import { getAllPersonal } from '../util/customFetch';
import { ReactNode, useMemo } from 'react';
import PersonalClientComponents from '../pageComponents/personal/PersonalClientComponents';
import PersonalServerComponents from '../pageComponents/personal/PersonalServerComponents';

export default function wrapper() {
    return(
    <PersonalClientComponents>
        <PersonalServerComponents />
    </PersonalClientComponents>
    )
}

