import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/_util/db";
import { feedSQL } from "../../../../../sql/feed";
import { reelslSQL } from "../../../../../sql/reels";
import { techSQL } from "../../../../../sql/tech";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {type, startIndex, endIndex} = req.query;
    switch(type){
        case 'feed':
            const feedServerData = db.prepare(feedSQL.getFeedsByCount());
            const feedData = feedServerData.all(startIndex, endIndex);
            res.json(feedData);
            break;
        case 'reels':
            const reelsServerData = db.prepare(reelslSQL.getReelsByCount());
            const reelsData = reelsServerData.all(startIndex,endIndex);
            res.json(reelsData)
            break;
        case 'tech':
            const techServerData = db.prepare(techSQL.getTechsByCount());
            const techData = techServerData.all(startIndex,endIndex);
            res.json(techData);
            break;
    }
}