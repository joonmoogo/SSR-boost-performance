import { sql } from '@vercel/postgres'


// export const techSQL = {
//     getAllTechs() {
//         return `
//         SELECT * 
//         FROM tech
//         ORDER BY tech.id DESC;`
//     },
//     getOneTech(){
//         return`
//         SELECT *
//         FROM tech
//         WHERE tech.id = ?`
//     },

//     getTechsByCount() {
//         return `
//         SELECT 
//             tech.id,
//             tech.title,
//             tech.first_div,
//             tech.created_at,
//             tech.content,
//             tech_images.tech_id,
//             GROUP_CONCAT(tech_images.image_url) AS image_url
//         FROM tech 
//         INNER JOIN tech_images
//         on tech.id = tech_images.tech_id
//         WHERE tech.id BETWEEN ? AND ?
//         GROUP BY tech.id
//         ORDER BY tech.id DESC;`;
//     },

//     postOneTech(){
//         return `
//         INSERT INTO 
//         tech (title, content, first_div)
//         VALUES (@title, @content, @first_div);`
//     },

//     postOneTechImage(){
//         return `
//         INSERT INTO 
//         tech_images (tech_id, image_url) 
//         VALUES (@tech_id, @image_url);`
//     },
//     getLastInsertedId(){
//         return `SELECT last_insert_rowid();`
//     }
// }

export const techSQL = {
    getAllTechs: () => sql`
        SELECT * 
        FROM tech
        ORDER BY tech.id DESC;`,

    getOneTech: () => sql`
        SELECT *
        FROM tech;`
    ,

    getTechsByCount: (startIndex: any, endIndex: any) => sql`
        SELECT 
            tech.id,
            tech.title,
            tech.first_div,
            tech.created_at,
            tech.content,
            STRING_AGG(tech_images.image_url, ',') AS image_url
        FROM tech 
        INNER JOIN tech_images
        ON tech.id = tech_images.tech_id
        WHERE tech.id BETWEEN ${startIndex} AND ${endIndex}
        GROUP BY tech.id
        ORDER BY tech.id DESC;
        `,

    postOneTech: () => sql`
        INSERT INTO 
        tech (title, content, first_div)
        VALUES ($1, $2, $3)
        RETURNING id;`,

    postOneTechImage: () => sql`
        INSERT INTO 
        tech_images (tech_id, image_url) 
        VALUES ($1, $2);`,

    getLastInsertedId: () => sql`
        SELECT currval(pg_get_serial_sequence('tech', 'id')) AS last_inserted_id;`
}
