import { NextApiRequest, NextApiResponse } from "next";
import json from '../../db.json';

const posts = json.posts

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    console.log(req.body);
    res.json(posts);
}
