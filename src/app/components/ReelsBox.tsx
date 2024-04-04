import React from "react";
import '../styles/reelsBox.css'

export default function ReelsBox() {
    return (
        <>
            <div className="video-form">
                <div className="video">
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
            </div>
        </>
    )
}
