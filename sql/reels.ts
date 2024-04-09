export const reelslSQL = {
    getAllReels() {
        return `
        SELECT * 
        FROM reels 
        INNER JOIN reels_video 
        ON reels.id = reels_video.reels_id `;
    },
}