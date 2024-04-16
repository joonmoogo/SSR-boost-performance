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
    postOneTech(){
        return `
        INSERT INTO 
        tech (title, content)
        VALUES (@title, @content);`
    },
    postOnePersonal(){
        return `
        INSERT INTO 
        personal (title, content)
        VALUES (@title, @content);`
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