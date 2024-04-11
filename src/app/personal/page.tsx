import '../globals.css'
import config from '../config/config';
import { postDTO } from '@/types/postsDTO';
import PersonalBox from '../components/PersonalBox';

export default async function Personal() {
    const serverData = await fetch(`${config.localUrl}/api/personal`, { cache: 'no-store' });
    const data: postDTO[] | any = await serverData.json();
    const fakeData: postDTO[] = [];

    for (let i = 0; i < 10; i++) {
        fakeData.push({
            id: i,
            title: `Fake Title ${i}`,
            created_at: `Fake Date ${i}`,
            content: `Fake Content ${i}`,
            image_url:`wetcat.png`,
            personal_id:i,
        });
    }
    return (
        <div className="main-page">
            {fakeData.map((post: postDTO, index: number) => {
                return (
                    <PersonalBox key={index} item={post} />
                )
            })}
        </div>
    )
}