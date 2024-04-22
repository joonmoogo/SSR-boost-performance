import '../globals.css'
import config from '../config/config';
import PersonalBox from '../components/PersonalBox';
import { personalDTO } from '@/types/DTO';
import { getAllPersonal } from '../util/customFetch';
import { useMemo } from 'react';
export default async function Personal() {
    // const data: personalDTO[] = await getAllPersonal();
    const data  = useMemo(async () => {
        const fetchData: personalDTO[] = await getAllPersonal();
        console.log(fetchData);
        return fetchData;
    }, [])
    
    return (
        <div className="main-page">
            {(await data).map((post: personalDTO, index: number) => {
                return (
                    <PersonalBox key={index} item={post} />
                )
            })}
        </div>
    )
}