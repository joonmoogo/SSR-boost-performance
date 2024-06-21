"use client"
import './globals.scss'
import ImageBox from './_components/FeedBox';
import config from './_config/config';
import { techDTO, feedDTO, reelsDTO } from "@/types/DTO";
import { getAllFeeds } from "@/app/_util/customFetch"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { headers } from 'next/headers';
export default function Home(request: any) {

  const [oneIsVisible, setOneIsVisible] = useState<boolean>(false);
  const [twoIsVisible, setTwoIsVisible] = useState<boolean>(false);
  const containerRef = useRef<any>(null);
  useEffect(() => {
    const scrollHandler = (e: any) => {
      // console.log('scrollEvent: ', e);
      // e.preventDefault();
      e.preventDefault();

    };

    const wheelHandler = (e: any) => {
      // console.log('wheelEvent: ', e);
      e.preventDefault();
      const container = containerRef.current;
      if (e.wheelDeltaY > 0) {
        if (container && container.style) {
          container.style.transform = `translateY(0)`
        }
      }
      else {
        console.log('going down');
        if (container && container.style) {
          container.style.transform = `translateY(-100vh)`
        }
      }
    }

    // window.addEventListener('scroll', scrollHandler);
    window.addEventListener('wheel', wheelHandler, { passive: false });
    return () => {
      window.removeEventListener('wheel', wheelHandler);
      // window.removeEventListener('scroll', scrollHandler);
    };
  }, []);


  // const { viewport } = request.searchParams
  return (
    <>
      <div ref={containerRef} className="scroll-container">
        <section className="scroll-area1">
          <div className="flex-container">hello</div>
        </section>
        <section className="scroll-area2">
          <div className="flex-container">me</div>
        </section>
        <section className="scroll-area3">
          <div className="flex-container">good</div>
        </section>
      </div>


      <div className="mobile-container">
        Enthusiastic <br /> web developer<br /><br />
        Thrive on <br />problem-solving <br />and teamwork.<br /><br />
        My mission is to design and develop
        a website that you and your audience love
      </div >
    </>
  );
}

{/* {data.map((post: personalDTO, index: number) => {
        return (
          <ImageBox key={index} item={post} viewport={viewport} />
        )
      })} */}