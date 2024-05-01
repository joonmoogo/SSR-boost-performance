import React, { useEffect, useState } from "react";
import '../_styles/techBox.scss'
import { techDTO } from "@/types/DTO";
import config from "../_config/config";
import jsdom from "jsdom";
import Link from "next/link";

export default function ServerTechBox(props: { item: techDTO, viewport: any }) {

    const firstImgSrc = getFirstImg(props.item.content);
    const firstDivContent = getFirstDiv(props.item.content);
    const isMobile = props.viewport === 'mobile' ? true : false

    function getFirstImg(content: string): string | null {

        const doc = new jsdom.JSDOM(content);
        const firstImg = doc.window.document.querySelector('img');

        if (firstImg)
            return firstImg.src;
        else
            return null;
    }

    function getFirstDiv(content: string) {
        const doc = new jsdom.JSDOM(content);
        const firstDiv = doc.window.document.querySelector('div');

        if (firstDiv)
            if (firstDiv.innerHTML.length > 30) {
                return firstDiv.innerHTML.slice(0, 40) + '...';
            } else {
                return firstDiv.innerHTML;
            }
        else
            return null;
    }

    return (
        <>
            {isMobile
                ?
                /* Mobile UI */
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
                :
                /* Desktop UI */

                <div className="container">
                    <div className="tech-image-box">
                        {firstImgSrc && <img src={firstImgSrc} alt="First Image" />}
                    </div>
                    <div className="tech-text-box">
                        <div id="title">{props.item.title}</div>
                        <div id="description">{firstDivContent}</div>
                        <div>{props.item.created_at}</div>
                    </div>
                    <div className="author">
                        <div>{config.username}</div>
                    </div>
                </div>

            }
        </>
    )
}
