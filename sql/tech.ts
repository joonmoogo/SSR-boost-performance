export const techSQL = {
    getAllTechs() {
        return `
        SELECT * 
        FROM tech 
        INNER JOIN tech_images 
        ON tech.id = tech_images.tech_id `;
    },
}