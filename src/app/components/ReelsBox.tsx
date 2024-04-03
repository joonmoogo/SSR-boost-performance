'use client'
import React from "react";
import '../styles/reelsBox.css'

const touchStartEvent = (event: any) => {
    console.log(event);
}

const touchMoveEvent = (event: any) => {
    console.log(event);
}

export default function ReelsBox() {
    return (
        <>
            <div className="video"
                onTouchStart={touchStartEvent}
                onTouchMove={touchMoveEvent}
            >
                <video autoPlay loop src="/sample.mp4" />
            </div>
            <div className="video-option">

                <div className="video-name">
                    {/* 책읽는 영상 */}
                </div>
                <div className="video-description">
                    {/* 오늘은 무엇을 할까 고민을 했다...... */}
                </div>
                <div className="video-tag">
                    {/* #책읽기 #엉야 */}
                </div>
            </div>
        </>
    )
}
