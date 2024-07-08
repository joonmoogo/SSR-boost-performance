import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/_util/db";
import { feedSQL } from "../../sql/feed";
import formidable, { IncomingForm } from 'formidable';
import fs from "fs/promises";
import path from "path";
import { sql } from '@vercel/postgres'

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            const response = await sql`
            SELECT 
                personal.id,
                personal.title,
                personal.content,
                personal.created_at,
                STRING_AGG(personal_images.image_url, ',') AS image_url
            FROM personal 
            INNER JOIN personal_images 
            ON personal.id = personal_images.personal_id
            GROUP BY 
                personal.id,
                personal.title,
                personal.content,
                personal.created_at
            ORDER BY personal.id DESC;`
            
            res.status(200).json({ response:response.rows });
            break;

        case "POST":
            // const imageStoragePath = path.join(process.cwd() + "/public/static/personal_images");
            // try {
            //     await fs.readdir(imageStoragePath);
            // } catch {
            //     await fs.mkdir(imageStoragePath, { recursive: true });
            // }

            // const postdata: { fields: formidable.Fields; files: formidable.Files; } = await new Promise((resolve, reject) => {
            //     const form = new IncomingForm();
            //     form.parse(req, (err, fields, files) => {
            //         if (err) {
            //             return reject(err);
            //         }
            //         resolve({ fields, files });
            //     });
            // });
            // if (postdata.files.images) {
            //     for (let i = 0; i < postdata.files.images?.length; i++) {
            //         const oldPath = postdata.files.images[i].filepath;
            //         const newPath = `${imageStoragePath}/${postdata.files.images[i].originalFilename}`
            //         console.log(oldPath)
            //         console.log(newPath);
            //         await fs.rename(oldPath, newPath);
            //     }
            //     if (postdata.fields.title && postdata.fields.content) {
            //         const title = postdata.fields.title[0];
            //         const content = postdata.fields.content[0];
            //         // console.log(typeof title,typeof content,typeof image_url);
            //         const oneFeedSQL = db.prepare(feedSQL.postOneFeed());
            //         const oneFeedImageSQL = db.prepare(feedSQL.postOneFeed());
            //         const lastidSQL = db.prepare(feedSQL.getLastInsertedId());
            //         oneFeedSQL.run({ title: title, content: content });
            //         const lastRowId = lastidSQL.run().lastInsertRowid;
            //         for (let i = 0; i < postdata.files.images?.length; i++) {
            //             const image_url = postdata.files.images[i].originalFilename;
            //             oneFeedImageSQL.run({ personal_id: lastRowId, image_url: image_url });
            //         }
            //     }
            //     // const stmt = db.prepare(`INSERT INTO personal (title, content) VALUES (?, ?)`);
            //     // stmt.run(title,content);
            //     // db.prepare(personalSQL.postOnePersonalImage(image_url)).run();
            //     res.status(200).json('Server Image uploaded');
            // }
            break;

        case "DELETE":
            console.log(req);
            res.json("DELETE");
            break;

        case "PUT":
            res.json("PUT");
            break;
    }
}