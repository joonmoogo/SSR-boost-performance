import React from "react";
import '../_styles/reelsBox.scss'
import { reelsDTO } from "@/types/DTO";

export default function ReelsBox(props: { item: reelsDTO }) {
    return (
        <>
            <div className="video-form">
                <div className="video">
                    <video width='100%' height='100%' autoPlay loop src={`static/reels_videos/${props.item.video_url}`} />
                </div>
                <div className="video-option">
                    <div className="video-name">
                        {props.item.title}
                    </div>
                    <div className="video-description">
                        {props.item.caption}
                    </div>
                    <div className="video-tag">
                        {/* #책읽기 #엉야 */}
                    </div>
                </div>
            </div>
        </>
    )
}
