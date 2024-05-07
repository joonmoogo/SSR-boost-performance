export type techDTO = {
    content: string,
    created_at: string,
    id: number,
    title: string,
    image_url:string,
    first_div:string,
}

export type feedDTO = {
    id: number,
    title: string,
    content: string,
    created_at: string,
    personal_id: number,
    image_url: string
}

export type reelsDTO = {
    id: number,
    title: string,
    caption: string,
    created_at: string,
    reels_id: number,
    video_url: string
}