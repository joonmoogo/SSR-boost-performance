import { sql } from '@vercel/postgres'

/**
 * @description SQLITE
 */

/*
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
*/
export const feedSQL = {
    getAllFeeds: () => sql`
        SELECT 
            personal.id,
            personal.title,
            personal.content,
            personal.created_at,
            ARRAY_AGG(personal_images.image_url) AS image_urls
        FROM personal 
        INNER JOIN personal_images 
        ON personal.id = personal_images.personal_id
        GROUP BY personal.id
        ORDER BY personal.id DESC;`,

    getFeedsByCount: (startIndex: any, endIndex: any) => sql`
        SELECT 
            personal.id,
            personal.title,
            personal.content,
            personal.created_at,
            ARRAY_AGG(personal_images.image_url) AS image_urls
        FROM personal 
        INNER JOIN personal_images
        ON personal.id = personal_images.personal_id 
        WHERE personal.id BETWEEN ${startIndex} AND ${endIndex}
        GROUP BY personal.id
        ORDER BY personal.id DESC;
        `,

    postOneFeed: (title:any, content:any) => sql`
        INSERT INTO personal (title, content)
        VALUES (${title}, ${content})
        RETURNING id;`,

    postOneFeedImage: (personalId: any, imageURL: any) => sql`
        INSERT INTO personal_images (personal_id, image_url) 
        VALUES (${personalId}, ${imageURL});`,

    getLastInsertedId: () => sql`
        SELECT currval(pg_get_serial_sequence('personal', 'id')) AS last_inserted_id;`,

    deleteOneFeedById: () => sql`
        DELETE FROM personal WHERE id = $1;`,

    deleteFeedImagesById: () => sql`
        DELETE FROM personal_images WHERE personal_id = $1;`
}
