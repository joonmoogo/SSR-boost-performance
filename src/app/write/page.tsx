"use client"
import { useEffect, useRef, useState } from 'react'
import ButtonGroup from '../components/ButtonGroup'
import '../globals.css'
import PersonalWriteForm from '../components/PersonalWriteForm';
import ReelsWriteForm from '../components/ReelsWriteForm';
import TechWriteForm from '../components/TechWriteForm';
import { WriteStateProvider, useWriteState } from '../util/writeContext';
export default function Write() {

    return (
        <WriteStateProvider>
            <WriteContent />
        </WriteStateProvider>
    )
}

function WriteContent() {
    const { writeState } = useWriteState();
    const slideshow = useRef<any>(null);

    useEffect(()=>{
        if(writeState==='personal'){
            slideshow.current.style.transform=`translate(-200vw)`;
        }
        else if(writeState==='reels'){
            slideshow.current.style.transform=`translate(-100vw)`;
        }
        else{
            slideshow.current.style.transform=`translate(00vw)`;
        }
    },[writeState])

    function handleTouchStart(event: any) {
        console.log(`touch Start!${event.touches[0].clientX}`);
    }

    function handleTouchMove(event: any) {
        const value = (event.touches[0].clientX);
        // slideshow.current.style.transform = `translate(${value}vw)`;
    }

    function handleTouchEnd(event: any) {
        console.log(`touch End!${event.changedTouches[0].clientX}`);
    }

    return (
        <div className="form-page"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <ButtonGroup />
{/*  */}
            <div className="slideshow"
                ref={slideshow}
                style={{
                    width: '300vw',
                    display: 'flex',
                    position: 'relative',
                    transition: 'transform 0.5s',
                }}>
                <TechWriteForm />
                <ReelsWriteForm />
                <PersonalWriteForm />
            </div>
        </div>
    )
}