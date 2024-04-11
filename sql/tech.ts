export const techSQL = {
    getAllTechs() {
        return `
        SELECT * 
        FROM tech 
        INNER JOIN tech_images 
        ON tech.id = tech_images.tech_id `;
    },
    postOneTech(){
        return `
        INSERT INTO 
        tech (title, content)
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