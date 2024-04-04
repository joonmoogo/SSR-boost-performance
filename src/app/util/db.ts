import Database from "better-sqlite3";
import {
    createReelsTable,
    createPersonalTable,
    createTechTable,
    createPersonalImages,
    createTechImages
} from "../../../sql/initialCommand";

const db = new Database('mydata.sqlite')
db.pragma("journal_mode = WAL");
db.exec(createReelsTable)
db.exec(createPersonalTable);
db.exec(createTechTable)
db.exec(createPersonalImages);
db.exec(createTechImages);
export default db;