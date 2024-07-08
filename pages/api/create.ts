import { sql } from '@vercel/postgres'
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        // CREATE TABLE IF NOT EXISTS tech (
        //     id SERIAL PRIMARY KEY,
        //     title VARCHAR(255),
        //     first_div VARCHAR(255),
        //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        //     content TEXT
        // );
        const result = await sql`CREATE TABLE IF NOT EXISTS tech (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255),
            first_div VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            content TEXT
        );`
        console.log(result)
        return res.status(200).json({ result })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ error })
    }
}