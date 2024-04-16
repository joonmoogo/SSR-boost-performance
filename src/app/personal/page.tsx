import '../globals.css'
import config from '../config/config';
import PersonalBox from '../components/PersonalBox';
import { personalDTO } from '@/types/DTO';
import { getAllPersonal } from '../util/customFetch';
export default async function Personal() {
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