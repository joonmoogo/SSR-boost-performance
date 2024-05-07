export const feedSQL = {
    getAllFeeds() {
        return `
        SELECT 
            personal.id,
            personal.title,
            personal.content,
            personal.created_at,
            personal_images.personal_id,
            GROUP_CONCAT(personal_images.image_url) AS image_url
        FROM personal 
        INNER JOIN personal_images 
        ON personal.id = personal_images.personal_id
        GROUP BY personal.id
        ORDER BY personal.id DESC;`
    },

    getFeedsByCount() {
        return `
        SELECT 
            personal.id,
            personal.title,
            personal.content,
            personal.created_at,
            personal_images.personal_id,
            GROUP_CONCAT(personal_images.image_url) AS image_url
        FROM personal 
        INNER JOIN personal_images
        ON personal.id = personal_images.personal_id 
        WHERE personal.id BETWEEN ? AND ?
        GROUP BY personal.id
        ORDER BY personal.id DESC;`;
    },

    postOneFeed() {
        return `
        INSERT INTO 
        personal (title, content)
        VALUES (@title, @content);`
    },

    postOneFeedImage() {
        return `
        INSERT INTO 
        personal_images (personal_id, image_url) 
        VALUES (@personal_id, @image_url);`
    },

    getLastInsertedId() {
        return `SELECT last_insert_rowid();`
    },
    deleteOneFeedById() {
        return `DELETE FROM personal WHERE id = (@id)`
    },
    deleteFeedImagesById() {
        return `DELETE FROM personal WHERE personal_id = (@personal_id)`
    }
}