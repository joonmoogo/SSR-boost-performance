import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/util/db";
import { personalSQL } from "../../../../../sql/personal";
import { reelslSQL } from "../../../../../sql/reels";
import { techSQL } from "../../../../../sql/tech";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {type, startIndex, endIndex} = req.query;
    switch(type){
        case 'personal':
            const personalServerData = db.prepare(personalSQL.getPersonalsByCount());
            const personalData = personalServerData.all(startIndex, endIndex);
            res.json(personalData);
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