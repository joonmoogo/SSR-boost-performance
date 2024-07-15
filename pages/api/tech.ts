import { NextApiRequest, NextApiResponse } from "next";
// import db from "@/app/_util/db";
import { techSQL } from "../../sql/tech";
import formidable, { IncomingForm } from 'formidable';
import fs from "fs/promises";
import path from "path";
import jsdom from 'jsdom';
import { sql } from '@vercel/postgres'
import { initialCommands } from "sql/initialCommand";
import { File } from "buffer";
import { BinaryLike } from "crypto";
import { put } from "@vercel/blob";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
        case "GET":
            // const getTechSQL = db.prepare(techSQL.getAllTechs());
            // const data = getTechSQL.all();
            // res.json(data);
            const response = await techSQL.getAllTechs();
            console.log(response.rows)
            res.status(200).json(response.rows)
            break;

        case "POST":
            // const body = JSON.parse(req.body);
            // console.log(body);
            // const doc = new jsdom.JSDOM(body.content);
            // const images = doc.window.document.querySelectorAll('img');
            // const imageStoragePath = path.join(process.cwd() + "/public/static/tech_images");
            // const oneTechSQL = db.prepare(techSQL.postOneTech())
            // oneTechSQL.run({ title: body.title, content: body.content, first_div: getFirstDiv(body.content) });
            // const lastidSQL = db.prepare(techSQL.getLastInsertedId());
            // const lastRowId = lastidSQL.run().lastInsertRowid;
            // if (images) {
            //     try {
            //         await fs.readdir(imageStoragePath);
            //     } catch {
            //         await fs.mkdir(imageStoragePath, { recursive: true });
            //     }
            //     images.forEach((img, index) => {
            //         const base64Data = img.src.replace(/^data:image\/\w+;base64,/, '');
            //         const filename = `${body.title}${index}.png`;
            //         const newPath = `${imageStoragePath}/${filename}`
            //         fs.writeFile(newPath, base64Data, 'base64');
            //         const oneTechImage = db.prepare(techSQL.postOneTechImage());
            //         oneTechImage.run({ tech_id: lastRowId, image_url: filename });
            //     })
            // }

            // res.status(200).json('good');
            // const { body } = req.body
            const body = JSON.parse(req.body);
            console.log(body)
            // console.log(parsedBody);
            const doc = new jsdom.JSDOM(body.content);
            const images = doc.window.document.querySelectorAll('img');

            let array: File[] = []
            images.forEach((img, index) => {
                const base64Data = img.src.replace(/^data:image\/\w+;base64,/, '');
                const filename = `tech/${body.title}${index}.png`;
                const fileBuffer = Buffer.from(base64Data, 'base64');
                const myFile = new File([fileBuffer], filename, { type: 'image/png' });
            })

            console.log(body.title)
            // console.log(body.content)
            console.log(getFirstDiv(body.content))

            await techSQL.postOneTech(body.title, body.content, getFirstDiv(body.content));
            // const imageStoragePath = path.join(process.cwd() + "/public/static/tech_images");
            // const oneTechSQL = db.prepare(techSQL.postOneTech())
            // oneTechSQL.run({ title: body.title, content: body.content, first_div: getFirstDiv(body.content) });
            // const lastidSQL = db.prepare(techSQL.getLastInsertedId());
            // const lastRowId = lastidSQL.run().lastInsertRowid;
            // if (images) {
            //     try {
            //         await fs.readdir(imageStoragePath);
            //     } catch {
            //         await fs.mkdir(imageStoragePath, { recursive: true });
            //     }
            // images.forEach(async (img, index) => {
            //     const base64Data = img.src.replace(/^data:image\/\w+;base64,/, '');
            //     const filename = `tech/${body.title}${index}.png`;
            //     const fileBuffer = Buffer.from(base64Data, 'base64');
            //     console.log({
            //         filename: filename,
            //         fileBuffer: fileBuffer,
            //     })
            // const myFile = new File([fileBuffer], filename)
            // console.log(myFile)
            // const blob = await put(filename as string, req, { access: 'public', addRandomSuffix: false });
            // console.log(blob)
            // })


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

function getFirstDiv(content: string) {
    const doc = new jsdom.JSDOM(content);
    const firstDiv = doc.window.document.querySelector('div');

    if (firstDiv)
        if (firstDiv.innerHTML.length > 30) {
            return firstDiv.innerHTML.slice(0, 40) + '...';
        } else {
            return firstDiv.innerHTML;
        }
    else {
        return null;
    }
}