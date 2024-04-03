import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/util/db";
export default async function posts(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            // all post
            const selectedData = db.prepare("SELECT * FROM post ")
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