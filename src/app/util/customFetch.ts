import config from "../config/config";
import { techDTO, personalDTO, reelsDTO } from "@/types/DTO";

const getAllTech = async () => {
    const serverData = await fetch(`${config.localUrl}/api/tech`,
        {
            // cache: 'no-store',
            next: { revalidate: 60 }
        },);
    const data: techDTO[] = await serverData.json();
    return data;
}

const getAllPersonal = async () => {
    const serverData = await fetch(`${config.localUrl}/api/personal`,
        {
            // cache: 'no-store',
            next: { revalidate: 60 }
        }
    );
    const data: personalDTO[] = await serverData.json();
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

const deleteOnerPersonal = async () => {
    const serverData = await fetch(`${config.localUrl}/api/personal`,
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
    getAllPersonal,
    getAllTech,
    getAllReels,
    deleteOnerPersonal,
    getOneTech
}


