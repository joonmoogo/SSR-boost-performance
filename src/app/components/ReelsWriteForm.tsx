"use client"

import { useRef } from "react"
import config from "../config/config"
import "../styles/reelsWriteForm.scss"

export default function ReelsWriteForm() {

    const titleRef = useRef<any>(null);
    const captionRef = useRef<any>(null);
    const videoRef = useRef<any>(null);

    const onClick = async () => {
        const title = titleRef.current.value;
        const caption = captionRef.current.value;
        const video = videoRef.current.files[0];

        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('caption', caption);
        formdata.append('video', video);

        const serverData = await fetch(`${config.localUrl}/api/reels`, {
            cache: 'no-store',
            method: 'POST',
            body: formdata,
        });
        const data: any = await serverData.json();
        console.log(data);
        console.log({
            title,
            caption,
            video,
        });
    }
    return (
        <>
            <div className="reels-form">
                <div className="author">
                    <img src="ssepcat.png"></img>
                    <p>{config.username}</p>
                </div>
                <div className="reels-name">
                    <input ref={titleRef} placeholder="Title" type="text" />
                </div>
                <div className="reels-caption">
                    <input ref={captionRef} placeholder="caption" type="text" />
                </div>
                <div className="reels-video">
                    <input ref={videoRef} type="file" />
                </div>
                <button onClick={onClick}>submit</button>

            </div>
        </>
    )
}