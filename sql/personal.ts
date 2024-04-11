export const personalSQL = {
    getAllPersonals() {
        return `
        SELECT * 
        FROM personal 
        INNER JOIN personal_images 
        ON personal.id = personal_images.personal_id
        ORDER BY personal.id DESC;`
    },

    postOnePersonal(){
        return `
        INSERT INTO 
        personal (title, content)
        VALUES (@title, @content);`
    },

    postOnePersonalImage(){
        return `
        INSERT INTO 
        personal_images (personal_id, image_url) 
        VALUES (@personal_id, @image_url);`
    },

    getLastInsertedId(){
        return `SELECT last_insert_rowid();`
    },
    deleteOnePersonalById(){
        return `DELETE FROM personal WHERE id = (@id)`
    },
    deletePersonalImagesById(){
        return `DELETE FROM personal WHERE personal_id = (@personal_id)`
    }
}