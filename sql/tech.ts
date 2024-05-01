export const techSQL = {
    getAllTechs() {
        return `
        SELECT * 
        FROM tech
        ORDER BY tech.id DESC;`
    },
    getOneTech(){
        return`
        SELECT *
        FROM tech
        WHERE tech.id = ?`
    },

    getTechsByCount() {
        return `
        SELECT 
            tech.id,
            tech.title,
            tech.first_div,
            tech.created_at,
            tech.content,
            tech_images.tech_id,
            GROUP_CONCAT(tech_images.image_url) AS image_url
        FROM tech 
        INNER JOIN tech_images
        on tech.id = tech_images.tech_id
        WHERE tech.id BETWEEN ? AND ?
        GROUP BY tech.id
        ORDER BY tech.id DESC;`;
    },
    
    postOneTech(){
        return `
        INSERT INTO 
        tech (title, content, first_div)
        VALUES (@title, @content, @first_div);`
    },

    postOneTechImage(){
        return `
        INSERT INTO 
        tech_images (tech_id, image_url) 
        VALUES (@tech_id, @image_url);`
    },
    getLastInsertedId(){
        return `SELECT last_insert_rowid();`
    }
}