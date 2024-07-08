import { sql } from '@vercel/postgres'
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await sql`CREATE TABLE pets (Name varchar(255) Owner varchar(255))`
        return res.status(200).json({ result })
    }
    catch (error) {
        return res.status(500).json({ error })
    }
}