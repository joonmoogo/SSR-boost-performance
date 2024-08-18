"use client"
import { useEffect, useRef, useState } from "react";
import ReelsBox from "../../_components/ReelsBox";
import '../../globals.scss'
import { getAllReels } from "../../_util/customFetch";
import { reelsDTO } from "@/types/DTO";
import config from "@/app/_config/config";
import { Metadata } from "next"
import { delay } from "@/app/_util/util";

// export const metadata: Metadata = {
//     title: `${config.name} : 준무고의 영상 기록집`,
// }

export default function Reels() {

    const testData: reelsDTO[] = [
        {
            id: 1,
            title: 'test',
            caption: 'test',
            created_at: 'test',
            reels_id: 1,
            video_url: '/LettuceEater.mp4'
        },
        {
            id: 2,
            title: 'test',
            caption: 'test',
            created_at: 'test',
            reels_id: 1,
            video_url: '/BeefKiller.mp4'
        },
        {
            id: 3,
            title: 'test',
            caption: 'test',
            created_at: 'test',
            reels_id: 1,
            video_url: '/SpyAction.mp4'
        }
    ]

    const [reelsData, setReelsData] = useState<reelsDTO[]>(testData);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [maxIndex, setMaxIndex] = useState<number>(0);
    const [currentValue, setCurrentValue] = useState<number>(0);

    function handleTouchStart(event: any) {
        // console.log(`touch Start!${event.touches[0].clientY}`);
        setCurrentValue(event.touches[0].clientY);
    }

    function handleTouchEnd(event: any) {
        // console.log(`touch End!${event.changedTouches[0].clientY}`);
        if (!isSliding) {
            if (currentValue > event.changedTouches[0].clientY) {
                // 위로 올릴 때
                if (currentIndex + 1 == maxIndex) {
                    setCurrentIndex(0);
                }
                else {
                    setCurrentIndex(currentIndex + 1);
                }
            }
            else {
                // 아래로 내릴 때
                if (currentIndex - 1 == -1) {
                    setCurrentIndex(maxIndex - 1);
                }
                else {
                    setCurrentIndex(currentIndex - 1);
                }
            }
        }
    }

    useEffect(() => {
        const waitUntilVideoLoad = async () => {
            setIsSliding(true);
            await delay(1000);
            setIsSliding(false);
        }

        const videoLoad = async () => {
            /*(index-1, index, index+1)범위 까지의 데이터 불러오기 */
        }
        waitUntilVideoLoad();
    }, [currentIndex])

    const [isSliding, setIsSliding] = useState<boolean>(false);

    return (
        <>
            <div style={{ overflow: 'hidden' }}>
                <div style={{
                    height: '100dvh',
                    transform: `translateY(-${currentIndex * 100}dvh)`,
                    transition: '1s'
                }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {reelsData && reelsData.map((e, i) => <ReelsBox key={i} item={e} play={currentIndex === i} />)}
                </div>
            </div>
        </>
    )
}