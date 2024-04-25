import config from "../config/config";
import { WriteStateProvider, useWriteState } from "../util/writeContext";
import '../styles/buttonGroup.scss'
import { useEffect, useState } from "react";

export default function ButtonGroup() {
    const { writeState, changeWriteState } = useWriteState();
    const [currentState, setCurrentState] = useState<string>('');
    useEffect(() => {
        setCurrentState(writeState);
    }, [writeState])

    return (
        <>
            <div className="button-group">
                <button
                    type="button"
                    style={currentState === 'tech' ? { borderBottom: '1px solid white' } : {}}
                    id="tech-button"
                    onClick={() => { changeWriteState('tech') }}>
                    tech
                </button>
                <button
                    type="button"
                    style={currentState === 'reels' ? { borderBottom: '1px solid white' } : {}}
                    id="reels-button"
                    onClick={() => { changeWriteState('reels') }}>
                    reels
                </button>
                <button
                    type="button"
                    style={currentState === 'personal' ? { borderBottom: '1px solid white' } : {}}
                    id="personal-button"
                    onClick={() => { changeWriteState('personal') }}>
                    personal
                </button>
            </div>
        </>
    )
}