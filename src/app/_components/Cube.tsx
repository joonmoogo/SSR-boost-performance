'use client'

import { useEffect, useRef, useState } from 'react'
import '../_styles/cube.scss'

export default function Cube() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     const onMouseMove = (e: MouseEvent) => {
    //         const { clientX, clientY } = e;
    //         const { innerWidth, innerHeight } = window;
    //         const rotX = (clientY / innerHeight - 0.5) * 360;
    //         const rotY = (clientX / innerWidth - 0.5) * 360;
    //         setRotation({ x: rotX, y: rotY });
    //     };

    //     const onTouchMove = (e: TouchEvent) => {
    //         const { clientX, clientY } = e.changedTouches[0]
    //         const { innerWidth, innerHeight } = window;
    //         const rotX = (clientY / innerHeight - 0.5) * 360;
    //         const rotY = (clientX / innerWidth - 0.5) * 360;
    //         setRotation({ x: rotX, y: rotY });
    //     }

    //     window.addEventListener('mousemove', onMouseMove);
    //     window.addEventListener('touchmove', onTouchMove)
    //     return () => {
    //         window.removeEventListener('mousemove', onMouseMove);
    //         window.removeEventListener('touchmove', onTouchMove)

    //     };
    // }, []);

    return (
        <div className="cube-container">
            <div className="scene" ref={sceneRef}>
                <div
                    className="cube"
                    style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
                >
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>
        </div>
    );
}
