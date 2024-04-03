import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/util/db";
export default function connectToDB(req: NextApiRequest, res: NextApiResponse) {
    db.exec(`DROP TABLE IF EXISTS test;`)
    res.json('ok');
}