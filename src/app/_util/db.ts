import Database from "better-sqlite3";
import {
    createReelsTable,
    createReelsVideo,
    createPersonalTable,
    createTechTable,
    createPersonalImages,
    createTechImages,
    foerignkeyOn
} from "../../../sql/initialCommand";

const db = new Database('mydata.sqlite')
db.pragma("journal_mode = WAL");
db.exec(foerignkeyOn);
db.exec(createReelsTable);
db.exec(createReelsVideo);
db.exec(createPersonalTable);
db.exec(createTechTable)
db.exec(createPersonalImages);
db.exec(createTechImages);
export default db;