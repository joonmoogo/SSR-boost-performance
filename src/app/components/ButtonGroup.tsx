import config from "../config/config";
import { WriteStateProvider, useWriteState } from "../util/writeContext";

export default function ButtonGroup() {
    const { changeWriteState } = useWriteState();
    return (
        <>
            <div className="button-group">
                <button type="button" onClick={() => { changeWriteState('tech') }}>
                    tech
                </button>
                <button type="button" onClick={() => { changeWriteState('personal') }}>
                    personal
                </button>
                <button type="button" onClick={() => { changeWriteState('reels') }}>
                    reels
                </button>
            </div>
        </>
    )
}