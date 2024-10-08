import { sql } from '@vercel/postgres'


/**
@description
SQLITE
*/

/*
export const foerignkeyOn = `PRAGMA foreign_keys = ON;`

export const createReelsTable = `
    CREATE TABLE IF NOT EXISTS reels (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    caption TEXT,
    created_At DATETIME DEFAULT (DATETIME('now', 'localtime'))
);`

export const createReelsVideo = `
    CREATE TABLE IF NOT EXISTS reels_videos(
    id INTEGER PRIMARY KEY,
    reels_id INTEGER,
    video_url VARCHAR(255),
    CONSTRAINT fk_reels FOREIGN KEY (reels_id) REFERENCES reels(id)
);`

export const createPersonalTable = `
    CREATE TABLE IF NOT EXISTS personal(
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    created_at DATETIME DEFAULT (DATETIME('now', 'localtime'))
);`

export const createPersonalImages = `
    CREATE TABLE IF NOT EXISTS personal_images(
    id INTEGER PRIMARY KEY,
    personal_id INTEGER,
    image_url VARCHAR(255),
    CONSTRAINT fk_personal FOREIGN KEY (personal_id) REFERENCES personal(id)
);`

export const createTechTable = `
    CREATE TABLE IF NOT EXISTS tech (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    first_div VARCHAR(255),
    created_at DATETIME DEFAULT (DATETIME('now', 'localtime')),
    content TEXT
);`

export const createTechImages = `
    CREATE TABLE IF NOT EXISTS tech_images(
    id INT AUTO_INCREMENT PRIMARY KEY,
    tech_id INT,
    image_url VARCHAR(255),
    CONSTRAINT fk_tech FOREIGN KEY (tech_id) REFERENCES tech(id)
);`
*/
export const initialCommands = {
    // foreignKeyOn: `SET session_replication_role = 'origin';`,

    createReelsTable: () => sql`
        CREATE TABLE IF NOT EXISTS reels (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        caption TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`,

    createReelsVideo: () => sql`
        CREATE TABLE IF NOT EXISTS reels_videos(
        id SERIAL PRIMARY KEY,
        reels_id INTEGER,
        video_url VARCHAR(255),
        CONSTRAINT fk_reels FOREIGN KEY (reels_id) REFERENCES reels(id) ON DELETE CASCADE
    );`,

    createPersonalTable: () => sql`
        CREATE TABLE IF NOT EXISTS personal(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`,

    createPersonalImages: () => sql`
        CREATE TABLE IF NOT EXISTS personal_images(
        id SERIAL PRIMARY KEY,
        personal_id INTEGER,
        image_url VARCHAR(255),
        CONSTRAINT fk_personal FOREIGN KEY (personal_id) REFERENCES personal(id) ON DELETE CASCADE
    );`,

    createTechTable: () => sql`
        CREATE TABLE IF NOT EXISTS tech (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        first_div VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        content TEXT
    );`,

    createTechImages: () => sql`
        CREATE TABLE IF NOT EXISTS tech_images(
        id SERIAL PRIMARY KEY,
        tech_id INTEGER,
        image_url VARCHAR(255),
        CONSTRAINT fk_tech FOREIGN KEY (tech_id) REFERENCES tech(id) ON DELETE CASCADE
    );`,

    // foreignKeyChecksOn: `SET session_replication_role = 'replica';`
}
