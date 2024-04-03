import Database from "better-sqlite3";

const db = new Database('mydata.sqlite')
db.pragma("journal_mode = WAL");
// db.exec(`CREATE TABLE IF NOT EXISTS post (
//     id INTEGER PRIMARY KEY,
//     title TEXT NOT NULL,
//     content TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`)
export default db;