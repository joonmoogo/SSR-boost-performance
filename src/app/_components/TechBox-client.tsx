"use client"
import React, { useEffect, useState } from "react";
import '../_styles/techBox.scss'
import { techDTO } from "@/types/DTO";
import config from "../_config/config";
import jsdom from "jsdom";
import Link from "next/link";

export default function ClientTechBox(props: { item: techDTO, viewport: any }) {

    const [firstImgSrc, setFirstImgSrc] = useState<string|null>(null);
    const [firstDivContent, setFirstDivContent] = useState<string|null>(null);

    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(props.item.content, 'text/html');

        const firstImg = doc.querySelector('img');
        if (firstImg)
            setFirstImgSrc(firstImg.src);

        const firstDiv = doc.querySelector('div');
        if (firstDiv) {
            if (firstDiv.innerHTML.length > 30) {
                setFirstDivContent(firstDiv.innerHTML.slice(0, 40) + '...');
            } else {
                setFirstDivContent(firstDiv.innerHTML);
            }
        }
    }, [props.item.content]);


    return (
        <>
            <div className="container">
                <Link className="box" href={`/tech`}>
                    <div className="tech-box">
                        <div className="box-author">
                            <img src="ssepcat.png"></img>
                            <p>{config.username}</p>
                        </div>
                        <div className="box-title">
                            {props.item.title}
                        </div>
                        <div className="box-header">
                            <div className="box-createdat">
                                {props.item.created_at}
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="box-description">
                                {firstDivContent}
                            </div>
                        </div>
                    </div>
                    <div className="box-image">
                        {firstImgSrc && <img src={firstImgSrc} alt="First Image" />}
                    </div>
                </Link>
            </div>
        </>
    )
}
