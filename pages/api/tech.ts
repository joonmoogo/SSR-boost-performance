import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/util/db";
import { techSQL } from "../../sql/tech";
import formidable, { IncomingForm } from 'formidable';
import fs from "fs/promises";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            res.json('GET');
            break;

        case "POST":
            const body = JSON.parse(req.body);
            const oneTechSQL = db.prepare(techSQL.postOneTech());
            oneTechSQL.run({title:body.title,content:body.content});
            res.status(200).json('good');
            break;

        case "DELETE":
            res.json("DELETE");
            break;

        case "PUT":
            res.json("PUT");
            break;
    }
}