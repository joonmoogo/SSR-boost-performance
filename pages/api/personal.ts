import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/util/db";
import { personalSQL } from "../../sql/personal";
export default async function posts(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            const selectedData = db.prepare(personalSQL.getAllPosts());
            const data = selectedData.all();
            res.json(data);
            break;

        case "POST":
            res.json("POST");
            break;

        case "DELETE":
            res.json("DELETE");
            break;

        case "PUT":
            res.json("PUT");
            break;
    }
}