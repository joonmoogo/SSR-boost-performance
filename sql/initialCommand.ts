export const createReelsTable = `
    CREATE TABLE IF NOT EXISTS reels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    videoURL VARCHAR(255)
);`

export const createPersonalTable = `
    CREATE TABLE IF NOT EXISTS personal(
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255),
    createdAt DATETIME,
    content TEXT,
    CONSTRAINT fk_personal_images FOREIGN KEY (id) REFERENCES personal_images(personal_id)
);`

export const createPersonalImages = `
    CREATE TABLE IF NOT EXISTS personal_images(
    id INT AUTO_INCREMENT PRIMARY KEY,
    personal_id INT,
    image_url VARCHAR(255),
    CONSTRAINT fk_personal FOREIGN KEY (personal_id) REFERENCES personal(id)
);`

export const createTechTable = `
    CREATE TABLE IF NOT EXISTS tech (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255),
    createdAt DATETIME,
    content TEXT,
    CONSTRAINT fk_tech_images FOREIGN KEY (id) REFERENCES tech_images(tech_id)
);`

export const createTechImages = `
    CREATE TABLE IF NOT EXISTS tech_images(
    id INT AUTO_INCREMENT PRIMARY KEY,
    tech_id INT,
    image_url VARCHAR(255),
    CONSTRAINT fk_tech FOREIGN KEY (tech_id) REFERENCES tech(id)
);`
