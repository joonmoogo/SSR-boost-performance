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
            res.json('GET');
            break;

        case "POST":
           res.json('POST');
           break;

        case "DELETE":
            res.json("DELETE");
            break;

        case "PUT":
            res.json("PUT");
            break;
    }
}