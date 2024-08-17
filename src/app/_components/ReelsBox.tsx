import React, { useEffect, useRef } from "react";
import '../_styles/reelsBox.scss'
import { reelsDTO } from "@/types/DTO";

export default function ReelsBox(props: { item: reelsDTO, play: boolean }) {

    const videoRef = useRef<HTMLVideoElement>(null);


    useEffect(() => {
        console.log(props.item.id, props.play)
        const video = videoRef.current;
        if (video) {
            if (props.play) {
                videoRef.current?.play();
            }
            else {
                videoRef.current?.pause();
            }
        }
    }, [props.play])
    return (
        <>
            <div style={{
                overflow: 'hidden',
                height: 'calc(100dvh - 80px)',
                width: '100%',
                marginBottom: '80px'
            }}>
                <video ref={videoRef} src={props.item.video_url} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}>
                </video>
            </div>
        </>
    )
}
