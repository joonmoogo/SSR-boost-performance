"use client"
import { useRef, useState } from "react";
import ReelsBox from "../components/ReelsBox";
import '../globals.css'
export default function Reels() {
    const carousel = useRef<any>(null);
    const [currentValue,setCurrentValue] = useState<number>(0);

    function handleTouchStart(event: any) {
        console.log(`touch Start!${event.touches[0].clientY}`);
        setCurrentValue(event.touches[0].clientY);
    }

    function handleTouchMove(event: any) {
        const value = (event.touches[0].clientY);
        console.log(value);
        // carousel.current.style.transform = `translateY(${value}vw)`;
    }

    function handleTouchEnd(event: any) {
        console.log(`touch End!${event.changedTouches[0].clientY}`);
        if(currentValue>event.changedTouches[0].clientY){
            // === 아래에서 위로 슬라이드
            carousel.current.style.transform = `translateY(-203vw)`;
        }
        else{
            // === 위에서 아래로 슬라이드
            carousel.current.style.transform = `translateY(0vw)`;
        }
    }


    

    return (
        <div className="video-page"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            >
            <div className="carousel"
                ref={carousel}
                style={{
                    height:'200vw',
                    position:'relative',
                    transition: 'transform 0.5s',
                    // transform:'translateY(-150vw)'
                }}>
                <ReelsBox />
                <ReelsBox />
                <ReelsBox />
            </div>
        </div>
    )
}