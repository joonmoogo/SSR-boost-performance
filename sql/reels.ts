export const reelslSQL = {
    getAllReels() {
        return `
        SELECT * 
        FROM reels 
        INNER JOIN reels_videos
        ON reels.id = reels_videos.reels_id 
        ORDER BY reels.id DESC;`;
    },

    getReelsByCount() {
        return `
        SELECT * 
        FROM reels 
        INNER JOIN reels_videos
        ON reels.id = reels_videos.reels_id 
        WHERE reels.id BETWEEN ? AND ?
        ORDER BY reels.id DESC;`;
    },

    postOneReels() {
        return `
        INSERT INTO 
        reels (title, caption)
        VALUES (@title, @caption);`
    },

    postOneReelsVideo() {
        return `
        INSERT INTO 
        reels_videos (reels_id, video_url) 
        VALUES (@reels_id, @video_url);`
    },
    getLastInsertedId(){
        return `SELECT last_insert_rowid();`
    },
}