import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/util/db";
import { personalSQL } from "../../sql/personal";
export default async function posts(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            const selectedData = db.prepare(personalSQL.getAllPersonals());
            const data = selectedData.all();
            res.json(data);
            break;

        case "POST":
            console.log(req);
            res.json('post');
            // const title = ''
            // const content = ''
            // const image_url = ''
            // console.log(title,content,image_url);
            // const query = db.prepare(personalSQL.postOnePersonal(title,content,image_url));
            break;

        case "DELETE":
            res.json("DELETE");
            break;

        case "PUT":
            res.json("PUT");
            break;
    }
}