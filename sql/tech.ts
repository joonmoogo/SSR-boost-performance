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
        SELECT * 
        FROM tech 
        WHERE tech.id BETWEEN ? AND ?
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