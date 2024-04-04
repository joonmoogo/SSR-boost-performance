import '../globals.css'
import config from '../config/config';
import { postDTO } from '@/types/postsDTO';
import PersonalBox from '../components/PersonalBox';

export default async function Personal() {
    const serverData = await fetch(`${config.localUrl}/api/personal`, { cache: 'no-store' });
    const data: postDTO[] | any = await serverData.json();
    console.log(data);
    return (
        <div className="main-page">
            {data.map((post:postDTO,index:number) => {
                return (
                    <PersonalBox key={index} item={post}/>
                )
            })}
        </div>
    )
}