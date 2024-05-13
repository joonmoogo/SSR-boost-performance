import config from "../_config/config";
import { techDTO, feedDTO, reelsDTO } from "@/types/DTO";

const getAllTech = async () => {
    const serverData = await fetch(`${config.localUrl}/api/tech`,
        {
            // cache: 'no-store',
            next: { revalidate: 60 }
        },);
    const data: techDTO[] = await serverData.json();
    return data;
}



const getAllFeeds = async () => {
    const serverData = await fetch(`${config.localUrl}/api/feed`,
        {
            // cache: 'no-store',
            next: { revalidate: 60 }
        }
    );
    const data: feedDTO[] = await serverData.json();
    return data;
}

const getDatasByCount = async (type: string, startIndex: number, endIndex: number) => {
    const serverData = await fetch(`${config.localUrl}/api/infiniteScroll/${type}/${startIndex}/${endIndex}`,
        {
            cache: 'no-store'
        }
    )
    const data: any = await serverData.json();
    return data;
}

const getAllReels = async () => {
    const serverData = await fetch(`${config.localUrl}/api/reels`,
        {
            // cache: 'no-store',
            next: { revalidate: 60 }
        }
    );
    const data: reelsDTO[] = await serverData.json();
    return data;
}

const deleteOnerFeed = async () => {
    const serverData = await fetch(`${config.localUrl}/api/feed`,
        {
            cache: 'no-store',
            method: 'DELETE',
            body: JSON.stringify('hello')
        });
    const data: any = await serverData.json();
    console.log(data);
}

const getOneTech = async (id: any) => {
    const serverData = await fetch(`${config.localUrl}/api/tech/${id}`,
        {
            // cache: 'no-store',
            next: { revalidate: 60 }
        }
    );
    const data: any = await serverData.json();
    return data;
}


export {
    getAllFeeds,
    getAllTech,
    getAllReels,
    deleteOnerFeed,
    getOneTech,
    getDatasByCount,
}


