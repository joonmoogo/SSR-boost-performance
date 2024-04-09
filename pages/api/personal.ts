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

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            // 
            const selectedData = db.prepare(personalSQL.getAllPersonals());
            const data = selectedData.all();
            res.json(data);
            break;

        case "POST":
            const imageStoragePath = path.join(process.cwd() + "/public/server_images");
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

            const files = postdata.files;
            const oldPath = files.images ? files.images[0].filepath : null;
            const newPath = (imageStoragePath);
            const filename = files.images ? files.images[0].originalFilename : null;
            if (oldPath) {
                fs.rename(oldPath, `${newPath}/${filename}`).then(() => {
                    res.json('post good');
                })
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