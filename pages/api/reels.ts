import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/_util/db";
// import { reelslSQL } from "../../sql/reels";
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
            // const selectedData = db.prepare(reelslSQL.getAllReels());
            // const data = selectedData.all();
            // res.json(data);
            // break;

            const response = 'no data'

            res.status(404).json({ response: response })

        case "POST":
            // const videoStoragePath = path.join(process.cwd() + "/public/static/reels_videos");
            // try {
            //     await fs.readdir(videoStoragePath);
            // } catch {
            //     await fs.mkdir(videoStoragePath, { recursive: true });
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

            // if (postdata.files.video) {
            //     const oldPath = postdata.files.video[0].filepath;
            //     const newPath = `${videoStoragePath}/${postdata.files.video[0].originalFilename}`
            //     await fs.rename(oldPath, newPath);

            //     if (postdata.fields.title && postdata.fields.caption) {
            //         const title = postdata.fields.title[0];
            //         const caption = postdata.fields.caption[0];
            //         const oneReelsSQL = db.prepare(reelslSQL.postOneReels());
            //         const oneReelsVideoSQL = db.prepare(reelslSQL.postOneReelsVideo());
            //         const lastidSQL = db.prepare(reelslSQL.getLastInsertedId());
            //         oneReelsSQL.run({ title: title, caption: caption });
            //         const lastRowId = lastidSQL.run().lastInsertRowid;
            //         const video_url = postdata.files.video[0].originalFilename;
            //         oneReelsVideoSQL.run({ reels_id: lastRowId, video_url: video_url });
            //     }

            //     res.status(200).json('Server Image uploaded');
            // }

            break;

        case "DELETE":
            res.json("DELETE");
            break;

        case "PUT":
            res.json("PUT");
            break;
    }
}