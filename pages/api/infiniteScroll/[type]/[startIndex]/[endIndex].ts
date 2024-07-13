import { NextApiRequest, NextApiResponse } from "next";
// import db from "@/app/_util/db";
import { feedSQL } from "../../../../../sql/feed";
// import { reelsSQL } from "../../../../../sql/reels";
import { techSQL } from "../../../../../sql/tech";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { type, startIndex, endIndex } = req.query;
    switch (type) {
        case 'feed':
            // const feedServerData = db.prepare(feedSQL.getFeedsByCount());
            // const feedData = feedServerData.all(startIndex, endIndex);
            // res.json(feedData);
            const feedServerData = await feedSQL.getFeedsByCount(startIndex, endIndex)
            res.status(200).json(feedServerData.rows)

            break;
        case 'reels':
            // const reelsServerData = db.prepare(reelslSQL.getReelsByCount());
            // const reelsData = reelsServerData.all(startIndex,endIndex);
            // res.json(reelsData)

            res.json([{ id: 1, name: 'test' }])

            break;
        case 'tech':
            // const techServerData = db.prepare(techSQL.getTechsByCount());
            // const techData = techServerData.all(startIndex,endIndex);
            // res.json(techData);
            const techServerData = await techSQL.getTechsByCount(startIndex, endIndex);
            console.log(techServerData)
            res.status(200).json(techServerData.rows)
            break;
    }
}