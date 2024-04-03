import '../globals.css'
import config from '../config/config';
import { postDTO } from '@/types/postsDTO';

export default async function Personal() {
    const serverData = await fetch(`${config.localUrl}/api/post`, { cache: 'no-store' });
    const data: postDTO[] = await serverData.json();
    console.log(data);
    return (
        <div className="main-page">
            {data.map((post:postDTO,index:number) => {
                return (
                    <div className='personal-page-item' key={index}>
                        <div>{post.id}</div>
                        <div>{post.content}</div>
                        <div>{post.title}</div>
                        <div>{post.created_at}</div>
                    </div>
                )
            })}
        </div>
    )
}