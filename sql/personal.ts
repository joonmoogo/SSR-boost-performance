export const personalSQL = {
    getAllPersonals() {
        return `
        SELECT * 
        FROM personal 
        INNER JOIN personal_images 
        ON personal.id = personal_images.personal_id `;
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
    }
}