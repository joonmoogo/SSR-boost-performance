import './globals.scss'
import ImageBox from './_components/FeedBox';
import config from './_config/config';
import { techDTO, feedDTO, reelsDTO } from "@/types/DTO";
import { getAllFeeds } from "@/app/_util/customFetch"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { headers } from 'next/headers';
import { delay } from './_util/util';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${config.name} : 준무고 잡다구리 보관함`,
}
// export default function Home(request: any) {

//   return (
//     <>
//       <div className="main-page">
//         asd
//       </div>



//       <div className="mobile-container">
//         Enthusiastic <br /> web developer<br /><br />
//         Thrive on <br />problem-solving <br />and teamwork.<br /><br />
//         My mission is to design and develop
//         a website that you and your audience love
//       </div >
//     </>
//   );
// }
import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}