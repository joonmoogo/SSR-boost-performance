import React from "react";
import '../styles/techBox.css'
export default function TechBox() {
    return (
        <>
            <div className="box">
                <div className="tech-box">
                    <div className="box-title">
                        강남구청역 맛집 줄서는 식당입니다. 소개
                    </div>
                    <div className="box-header">
                        <div className="box-createdat">
                            7시간 전
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="box-description">
                            대구 미분양주택수의 감소 = 상승의 신호인...
                        </div>
                    </div>
                </div>
                <img src="wetcat.png" />
            </div>
        </>
    )
}
