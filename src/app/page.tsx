"use client"
import './globals.scss'
import Link from 'next/link';
import ImageBox from './_components/PersonalBox';
import config from './_config/config';
import { techDTO, personalDTO, reelsDTO } from "@/types/DTO";
import { getAllPersonal } from "@/app/_util/customFetch"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
export default function Home(request: any) {

  const [oneIsVisible,setOneIsVisible] = useState<boolean>(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=300){
        setOneIsVisible(true);
      }
    })
  },[])

  
  const { viewport } = request.searchParams
  return (

    <div className='class-container'>
      <section id='one' className='scroll-area'>
        <div className="introduce-page">
          <div className="left-side">
            <div className="left-header">
            </div>
            <div className="left-content">
              Agenecy-level<br /> web development
              services at <br />freelancer rates
            </div>
            <div className="left-description">
              My mission is to design and develop<br />
              a website that you and your audience love
            </div>
          </div>
          <div className="right-side">
            <div className="right-image">
            </div>
          </div>
        </div >
      </section >

      <section id='two' className='scroll-area' >
        <div className="introduce-page">
          <div className="left-side">
            <div className="card">
            </div>
          </div>
          <div className="right-side" style={oneIsVisible?{animation:'slideUp 1s'}:{}}>
            <div className="right-content" >
              Motorcycle<br /> Service<br />
              Honda<br />SuperCub<br />
              Quick Web Delivery
            </div>
            <div className="right-description">
              My mission is to design and develop<br />
              a website that you and your audience love
            </div>
          </div>
        </div>
      </section>

      <section id='three' className='scroll-area'>
        <div className="introduce-page">
          section3
          <div className="left-side"></div>
          <div className="mid-side"></div>
          <div className="right-side"></div>
        </div>
      </section>
    </div >

  );
}

{/* {data.map((post: personalDTO, index: number) => {
        return (
          <ImageBox key={index} item={post} viewport={viewport} />
        )
      })} */}