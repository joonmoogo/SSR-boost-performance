"use client"
import { useEffect, useRef, useState } from 'react'
import ButtonGroup from '../../_components/ButtonGroup'
import '@/app/globals.scss'
import PersonalWriteForm from '../../_components/PersonalWriteForm';
import ReelsWriteForm from '../../_components/ReelsWriteForm';
import TechWriteForm from '../../_components/TechWriteForm';
import { WriteStateProvider, useWriteState } from '../../_util/writeContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryCleint = new QueryClient();


export default function Write() {

    return (
        <QueryClientProvider client={queryCleint}>
            <WriteStateProvider>
                <WriteContent />
            </WriteStateProvider>
        </QueryClientProvider>
    )
}

function WriteContent() {
    const { writeState } = useWriteState();
    const slideshow = useRef<any>(null);

    useEffect(() => {
        if (writeState === 'personal') {
            slideshow.current.style.transform = `translate(-200vw)`;
        }
        else if (writeState === 'reels') {
            slideshow.current.style.transform = `translate(-100vw)`;
        }
        else {
            slideshow.current.style.transform = `translate(00vw)`;
        }
    }, [writeState])

    return (
        <div className="form-page">
            <ButtonGroup />

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