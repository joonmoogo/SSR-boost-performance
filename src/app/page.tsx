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
import Cube from './_components/Cube';

export const metadata: Metadata = {
  title: `${config.name} : 준무고 잡다구리 보관함`,
  openGraph: {
    type: 'website',
    url: config.websiteUrl,
    // title: `${config.name} : ${}`,
    description: `${config.name} : 준무고 잡다구리 보관함`,
    siteName: config.name,
    locale: 'ko_KR'
  }
}
export default function Home(request: any) {

  console.log(process.env.NODE_ENV);

  return (
    <>
      <div className="pc-container">
         pc임
         {/* <Cube/> */}
      </div>



      <div className="mobile-container">
          {/* 모바일임 */}
          <Cube/>

      </div >
    </>
  );
}