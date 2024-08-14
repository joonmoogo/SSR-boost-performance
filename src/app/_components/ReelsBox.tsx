import React from "react";
import '../_styles/reelsBox.scss'
import { reelsDTO } from "@/types/DTO";

export default function ReelsBox(props: { item: reelsDTO, play: boolean }) {
    return (
        <>
            <div style={{
                overflow: 'hidden',
                backgroundColor: 'orange',
                height: 'calc(100dvh - 80px)',
                width: '100%',
                marginBottom: '80px'
            }}>
                <video src={props.item.video_url} autoPlay={props.play} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}>
                </video>
            </div>
        </>
    )
}
