import '../globals.css'
import config from '../config/config';
import PersonalBox from '../components/PersonalBox';
import { personalDTO } from '@/types/DTO';
import { getAllPersonal } from '../util/customFetch';
import { ReactNode, useMemo } from 'react';

async function PersonalServerComponents() {
    // const data: personalDTO[] = await getAllPersonal();
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

function PersonalClientComponents({ children }: { children: ReactNode }) {
    "use client"
    return (
        <>
            <div className='main-page'
                onClick={() => { console.log('asdf') }}>
                asdf
            </div>
            {children}
        </>
    )
}

export default function wrapper() {
    <PersonalClientComponents>
        <PersonalServerComponents />
    </PersonalClientComponents>
}

