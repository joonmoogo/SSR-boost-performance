import { NextApiRequest, NextApiResponse, PageConfig } from "next";
// import db from "@/app/_util/db";
import { feedSQL } from "../../sql/feed";
import formidable, { IncomingForm } from 'formidable';
import fs from "fs/promises";
import path from "path";
import { sql } from '@vercel/postgres'
import { put } from "@vercel/blob";

export const config: PageConfig = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            const response = await feedSQL.getAllFeeds();
            res.status(200).json(response.rows);
            break;
        // case "POST":
        //     const imageStoragePath = path.join(process.cwd() + "/public/static/personal_images");
        //     try {
        //         await fs.readdir(imageStoragePath);
        //     } catch {
        //         await fs.mkdir(imageStoragePath, { recursive: true });
        //     }

        //     const postdata: { fields: formidable.Fields; files: formidable.Files; } = await new Promise((resolve, reject) => {
        //         const form = new IncomingForm();
        //         form.parse(req, (err, fields, files) => {
        //             if (err) {
        //                 return reject(err);
        //             }
        //             resolve({ fields, files });
        //         });
        //     });
        //     if (postdata.files.images) {
        //         for (let i = 0; i < postdata.files.images?.length; i++) {
        //             const oldPath = postdata.files.images[i].filepath;
        //             const newPath = `${imageStoragePath}/${postdata.files.images[i].originalFilename}`
        //             await fs.rename(oldPath, newPath);
        //         }
        //         if (postdata.fields.title && postdata.fields.content) {
        //             const title = postdata.fields.title[0];
        //             const content = postdata.fields.content[0];
        //             await feedSQL.postOneFeed(title, content);
        //             const lastId = await feedSQL.getLastInsertedId();
        //             for (let i = 0; i < postdata.files.images?.length; i++) {
        //                 const image_url = postdata.files.images[i].originalFilename;
        //                 feedSQL.postOneFeedImage(lastId.rows[0].last_inserted_id, image_url);
        //             }
        //         }
        //         res.status(200).json('Server Image uploaded');
        //     }
        //     break;
        case "POST":
            // const imageStoragePath = path.join(process.cwd(), "public/static/personal_images");
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
            //     for (let i = 0; i < postdata.files.images.length; i++) {
            //         const oldPath = postdata.files.images[i].filepath;
            //         const newPath = `${imageStoragePath}/${postdata.files.images[i].originalFilename}`;

            //         try {
            //             await fs.copyFile(oldPath, newPath);
            //             await fs.unlink(oldPath);
            //         } catch (err) {
            //             console.error("Error copying or deleting file:", err);
            //             res.status(500).json("Error copying or deleting file");
            //             return;
            //         }
            //     }

            //     if (postdata.fields.title && postdata.fields.content) {
            //         const title = postdata.fields.title[0];
            //         const content = postdata.fields.content[0];
            //         await feedSQL.postOneFeed(title, content);
            //         const lastId = await feedSQL.getLastInsertedId();
            //         for (let i = 0; i < postdata.files.images.length; i++) {
            //             const image_url = postdata.files.images[i].originalFilename;
            //             await feedSQL.postOneFeedImage(lastId.rows[0].last_inserted_id, image_url);
            //         }
            //     }
            //     res.status(200).json('Server Image uploaded');
            // }
            const { fileName, title, content, imageArray } = req.query

            if (fileName === undefined) {
                if (title && content && imageArray) {
                    console.log('title', title)
                    console.log('content', content)
                    const parsedImageArray = JSON.parse(imageArray as string)
                    console.log('imageArray', parsedImageArray)
                    // console.log('imageArray', decodeURIComponent(JSON.parse(imageArray as string)))
                    await feedSQL.postOneFeed(title, content);
                    const lastId = await feedSQL.getLastInsertedId();
                    for (const img of parsedImageArray) {
                        await feedSQL.postOneFeedImage(lastId.rows[0].last_inserted_id, img.url)
                    }
                    res.status(200).json('good');
                }
            }
            else {
                const blob = await put(fileName as string, req, { access: 'public', addRandomSuffix: false });
                console.log(blob)
                res.json(blob)
            }
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