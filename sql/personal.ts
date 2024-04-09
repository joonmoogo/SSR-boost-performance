export const personalSQL ={
    getAllPersonals(){
        return `SELECT * FROM personal INNER JOIN personal_images ON personal.id = personal_images.personal_id `;
    },

    postOnePersonal(){
        return ``
    }
}