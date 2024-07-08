import { sql } from '@vercel/postgres'


// export const reelslSQL = {
//     getAllReels() {
//         return `
//         SELECT * 
//         FROM reels 
//         INNER JOIN reels_videos
//         ON reels.id = reels_videos.reels_id 
//         ORDER BY reels.id DESC;`;
//     },

//     getReelsByCount() {
//         return `
//         SELECT * 
//         FROM reels 
//         INNER JOIN reels_videos
//         ON reels.id = reels_videos.reels_id 
//         WHERE reels.id BETWEEN ? AND ?
//         ORDER BY reels.id DESC;`;
//     },

//     postOneReels() {
//         return `
//         INSERT INTO 
//         reels (title, caption)
//         VALUES (@title, @caption);`
//     },

//     postOneReelsVideo() {
//         return `
//         INSERT INTO 
//         reels_videos (reels_id, video_url) 
//         VALUES (@reels_id, @video_url);`
//     },
//     getLastInsertedId(){
//         return `SELECT last_insert_rowid();`
//     },
// }

export const reelsSQL = {
    getAllReels: `
        SELECT * 
        FROM reels 
        INNER JOIN reels_videos
        ON reels.id = reels_videos.reels_id 
        ORDER BY reels.id DESC;`,

    getReelsByCount: `
        SELECT * 
        FROM reels 
        INNER JOIN reels_videos
        ON reels.id BETWEEN $1 AND $2
        ORDER BY reels.id DESC;`,

    postOneReels: `
        INSERT INTO 
        reels (title, caption)
        VALUES ($1, $2)
        RETURNING id;`,

    postOneReelsVideo: `
        INSERT INTO 
        reels_videos (reels_id, video_url) 
        VALUES ($1, $2);`,

    getLastInsertedId: `
        SELECT currval(pg_get_serial_sequence('reels', 'id')) AS last_inserted_id;`
}