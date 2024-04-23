import React from "react";
import '../styles/techBox.css'
import { techDTO } from "@/types/DTO";
import config from "../config/config";
import jsdom from "jsdom";
import Link from "next/link";

export default function TechBox(props: { item: techDTO }) {

    const firstImgSrc = getFirstImg(props.item.content);
    const firstDivContent = getFirstDiv(props.item.content);

    function getFirstImg(content: string): string | null {
        const doc = new jsdom.JSDOM(content);
        const firstImg = doc.window.document.querySelector('img');
        // const parser = new DOMParser();
        // const doc = parser.parseFromString(content, 'text/html')
        // const firstImg = doc.querySelector('img');
        if (firstImg)
            return firstImg.src;
        else
            return null;
    }

    function getFirstDiv(content: string) {
        const doc = new jsdom.JSDOM(content);
        const firstDiv = doc.window.document.querySelector('div');
        // const parser = new DOMParser();
        // const doc = parser.parseFromString(content, 'text/html')
        // const firstDiv = doc.querySelector('div');

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

            <div className="container">
                <Link className="box" href={`/tech${props.item.id}`}>
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
                </Link>
                <div className="box-image">
                    {firstImgSrc && <img src={firstImgSrc} alt="First Image" />}
                </div>
            </div>
        </>
    )
}
