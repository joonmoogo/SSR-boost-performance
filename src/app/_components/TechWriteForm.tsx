"use client"

import { useRef } from 'react'
import config from '../_config/config'
import '../_styles/techWriteForm.scss'

export default function TechWriteForm() {
    const textareaRef = useRef<any>(null);

    const onClick = async () => {
        const title = getTitle(textareaRef.current.innerHTML);
        const html = stringToHTML(textareaRef.current.innerHTML)
        console.log(html);
        const serverData = await fetch(`${config.localUrl}/api/tech`, {
            cache: 'no-store',
            method: 'POST',
            body:JSON.stringify({title:title,content:html})

        });
        const data: any = await serverData.json();
        console.log(data);
    }

    function stringToHTML(str: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(str, 'text/html');
        return doc.children[0].innerHTML
    }

    function getTitle(str: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(str, 'text/html');
        const body = doc.querySelector('body');
        if(body){
            const htmlString = body.outerHTML;
            if(htmlString){
                const startIndex = htmlString.indexOf('<div>');
                if (startIndex !== -1) {
                    const result = htmlString.substring(6, startIndex);
                    // console.log(result);
                    return result; 
                } 
            }
        }

    }

    return (
        <>
            <div className="tech-form">
                <div className="author">
                    <img src="ssepcat.png"></img>
                    <p>{config.username}</p>
                </div>
                <div className="form-content" ref={textareaRef} contentEditable='true'></div>
                <button onClick={onClick}>submitd</button>
                <button onClick={onClick}>submitd</button>
                <button onClick={onClick}>submitd</button>
                <button onClick={onClick}>submitd</button>
                <button onClick={onClick}>submitd</button>
                <button onClick={onClick}>submitd</button>
                <button onClick={onClick}>submitd</button>
                <button onClick={onClick}>submitd</button>

            </div>
        </>
    )
}

