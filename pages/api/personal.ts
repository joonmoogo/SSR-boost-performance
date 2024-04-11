import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/util/db";
import { personalSQL } from "../../sql/personal";
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
            const selectedData = db.prepare(personalSQL.getAllPersonals());
            const data = selectedData.all();
            res.json(data);
            break;

        case "POST":
            const imageStoragePath = path.join(process.cwd() + "/public/static/personal_images");
            try {
                await fs.readdir(imageStoragePath);
            } catch {
                await fs.mkdir(imageStoragePath, { recursive: true });
            }

            const postdata: { fields: formidable.Fields; files: formidable.Files; } = await new Promise((resolve, reject) => {
                const form = new IncomingForm();
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve({ fields, files });
                });
            });
            if (postdata.files.images) {
                for (let i = 0; i < postdata.files.images?.length; i++) {
                    const oldPath = postdata.files.images[i].filepath;
                    const newPath = `${imageStoragePath}/${postdata.files.images[i].originalFilename}`
                    await fs.rename(oldPath, newPath);
                }
                if (postdata.fields.title && postdata.fields.content) {
                    const title = postdata.fields.title[0];
                    const content = postdata.fields.content[0];
                    // console.log(typeof title,typeof content,typeof image_url);
                    const onePersonalSQL = db.prepare(personalSQL.postOnePersonal());
                    const onePersonalImageSQL = db.prepare(personalSQL.postOnePersonalImage());
                    const lastidSQL = db.prepare(personalSQL.getLastInsertedId());
                    onePersonalSQL.run({ title: title, content: content });
                    const lastRowId = lastidSQL.run().lastInsertRowid;
                    for (let i = 0; i < postdata.files.images?.length; i++) {
                        const image_url = postdata.files.images[i].originalFilename;
                        onePersonalImageSQL.run({ personal_id: lastRowId, image_url: image_url });
                    }
                }
                // const stmt = db.prepare(`INSERT INTO personal (title, content) VALUES (?, ?)`);
                // stmt.run(title,content);
                // db.prepare(personalSQL.postOnePersonalImage(image_url)).run();
                res.status(200).json('Server Image uploaded');
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