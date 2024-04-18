export const reelslSQL = {
    getAllReels() {
        return `
        SELECT * 
        FROM reels 
        INNER JOIN reels_video 
        ON reels.id = reels_video.reels_id `;
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