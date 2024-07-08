import { sql } from '@vercel/postgres'
import { NextApiRequest, NextApiResponse } from "next";
import { initialCommands } from 'sql/initialCommand';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // const queries = initialCommands;
        // console.log(Object.keys(queries))
        // Object.keys(queries).forEach(async (e) => {
        //     await sql`${e}`
        // })
        const result = ""
        return res.status(200).json({ result })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ error })
    }
}