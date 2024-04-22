"use client"
import { useEffect, useRef, useState } from "react";
import ReelsBox from "../components/ReelsBox";
import '../globals.css'
import { getAllReels } from "../util/customFetch";
import { reelsDTO } from "@/types/DTO";
export default function Reels() {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [maxIndex, setMaxIndex] = useState<number>(0);
    const [reelsData, setReelsData] = useState<reelsDTO[]>()
    useEffect(() => {
        const fetchData = async () => {
            const data: reelsDTO[] = await getAllReels();
            return data;
        }
        fetchData().then((data) => {
            setReelsData(data)
            setMaxIndex(data.length);
        }
        )
    }, [])

    useEffect(() => {
        console.log(currentIndex)
        const OFFSET = -102;
        carousel.current.style.transform = `translateY(${OFFSET * currentIndex}vh)`;
    }, [currentIndex])

    const carousel = useRef<any>(null);
    const [currentValue, setCurrentValue] = useState<number>(0);

    function handleTouchStart(event: any) {
        console.log(`touch Start!${event.touches[0].clientY}`);
        setCurrentValue(event.touches[0].clientY);
    }

    function handleTouchMove(event: any) {
        const value = (event.touches[0].clientY);
        console.log(value);
    }

    function handleTouchEnd(event: any) {
        console.log(`touch End!${event.changedTouches[0].clientY}`);
        if (currentValue > event.changedTouches[0].clientY) {
            if (currentIndex + 1 == maxIndex) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }
        else {
            if (currentIndex - 1 == -1) {
                setCurrentIndex(maxIndex-1);
            }
            else {
                setCurrentIndex(currentIndex - 1);
            }
        }
    }




    return (
        <div className="video-page"
        >
            <div className="carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={carousel}
                style={{
                    height: '200vw',
                    position: 'relative',
                    transition: 'transform 0.5s',
                    // transform:'translateY(-150vw)'
                }}>
                {reelsData && reelsData.map((e, i) => {
                    return (
                        <ReelsBox item={e} key={i}></ReelsBox>
                    )
                })}
            </div>
        </div>
    )
}