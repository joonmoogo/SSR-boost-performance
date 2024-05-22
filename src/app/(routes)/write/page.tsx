"use client"
import { useEffect, useRef, useState } from 'react'
import ButtonGroup from '../../_components/ButtonGroup'
import '@/app/globals.scss'
import PersonalWriteForm from '../../_components/FeedWriteForm';
import ReelsWriteForm from '../../_components/ReelsWriteForm';
import TechWriteForm from '../../_components/TechWriteForm';
import { WriteStateProvider, useWriteState } from '../../_util/writeContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot, useRecoilState } from 'recoil';
import { writeState } from '@/app/_util/globalState';

const queryCleint = new QueryClient();


export default function Write() {

    return (
        <QueryClientProvider client={queryCleint}>
            <RecoilRoot>
                <WriteContent />
            </RecoilRoot>
        </QueryClientProvider>
    )
}

function WriteContent() {
    // const { writeState } = useWriteState();
    const [state,setState] = useRecoilState(writeState)
    const slideshow = useRef<any>(null);

    useEffect(() => {
        if (state === 'personal') {
            slideshow.current.style.transform = `translate(-200vw)`;
        }
        else if (state === 'reels') {
            slideshow.current.style.transform = `translate(-100vw)`;
        }
        else {
            slideshow.current.style.transform = `translate(00vw)`;
        }
    }, [state])

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