"use client"
import './globals.scss'
import Link from 'next/link';
import ImageBox from './_components/FeedBox';
import config from './_config/config';
import { techDTO, feedDTO, reelsDTO } from "@/types/DTO";
import { getAllFeeds } from "@/app/_util/customFetch"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
export default function Home(request: any) {

  const [oneIsVisible, setOneIsVisible] = useState<boolean>(false);
  const [twoIsVisible, setTwoIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const scrollHandler = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 300) {
        setOneIsVisible(true);
      }
      if (window.scrollY >= 900) {
        setTwoIsVisible(true);
      }
    };
  
    window.addEventListener('scroll', scrollHandler);
  
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);


  const { viewport } = request.searchParams
  return (

    <div className='class-container'>
      <section id='one' className='scroll-area'>
        <div className="introduce-page">
          <div className="left-side">
            <div className="left-header">
            </div>
            <div className="left-content">
              Enthusiastic <br /> web developer<br />
              Thrive on <br />problem-solving <br />and teamwork.
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
          <div className="right-side" style={oneIsVisible ? { animation: 'slideUp 1s' } : {}}>
            <div className="right-content" >
              As<br/>
              Honda SuperCub<br />
               Motorcycle rider<br />
              Provides<br/>
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
          <div className="left-side" style={twoIsVisible ? { animation: 'slideUp 1s' } : {}}>
            <div className="left-header">
            </div>
            <div className="left-content">
              I Am<br/>Joonmook<br />who Enjoys Explore <br />
              Nature and Github<br />and<br/> Loves Socializing<br />
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
      </section>
    </div >

  );
}

{/* {data.map((post: personalDTO, index: number) => {
        return (
          <ImageBox key={index} item={post} viewport={viewport} />
        )
      })} */}