"use client"
import { useState } from 'react'
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

    return (
        <div className="main-page">
            <ButtonGroup/>
            {writeState==='tech'?<TechWriteForm/>:null}
            {writeState==='reels'?<ReelsWriteForm/>:null}
            {writeState==='personal'?<PersonalWriteForm/>:null}
        </div>
    )
}