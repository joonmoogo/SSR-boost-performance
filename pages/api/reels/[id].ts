import { NextApiRequest, NextApiResponse } from "next";
// import db from "@/app/_util/db";
import { reelsSQL } from "../../../sql/reels";
import formidable, { IncomingForm } from 'formidable';
import fs from "fs/promises";
import path from "path";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            res.json('GET');
            break;

        case "POST":
           res.json('POST');
           const imageStoragePath = path.join(process.cwd() + "/public/static/tech_videos");
            try {
                await fs.readdir(imageStoragePath);
            } catch {
                await fs.mkdir(imageStoragePath, { recursive: true });
            }
           break;

        case "DELETE":
            res.json("DELETE");
            break;

        case "PUT":
            res.json("PUT");
            break;
    }
}