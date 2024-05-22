import config from "../_config/config";
import { WriteStateProvider, useWriteState } from "../_util/writeContext";
import '../_styles/buttonGroup.scss'
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { writeState } from "../_util/globalState";

export default function ButtonGroup() {
    const [state,setState] = useRecoilState(writeState);
    useEffect(() => {
        setState(state)
    }, [state])

    return (
        <>
            <div className="button-group">
                <button
                    type="button"
                    style={state === 'tech' ? { borderBottom: '1px solid white' } : {}}
                    id="tech-button"
                    onClick={() => { setState('tech') }}>
                    tech
                </button>
                <button
                    type="button"
                    style={state === 'reels' ? { borderBottom: '1px solid white' } : {}}
                    id="reels-button"
                    onClick={() => { setState('reels') }}>
                    reels
                </button>
                <button
                    type="button"
                    style={state === 'personal' ? { borderBottom: '1px solid white' } : {}}
                    id="personal-button"
                    onClick={() => { setState('personal') }}>
                    personal
                </button>
            </div>
        </>
    )
}