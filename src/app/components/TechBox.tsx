"use client"
import React from "react";
import '../styles/techBox.css'
export default function TechBox(props:{item:techDTO}) {
    
    function getFirstImg(content:string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        const firstImg = doc.querySelector('img');
        if (firstImg)
            return firstImg.src;
        else
            return null;
    }

    function getFirstDiv(content:string){
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        const firstDiv = doc.querySelector('div');
        if (firstDiv)
            if(firstDiv.innerHTML.length>30){
                return firstDiv.innerHTML.slice(0,40) + '...';
            }else{
                return firstDiv.innerHTML;
            }  
        else
            return null;
    }

    console.log(getFirstImg(props.item.content))

    return (
        <>
            <div className="box">
                <div className="tech-box">
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
                            {getFirstDiv(props.item.content)}
                        </div>
                    </div>
                </div>
                {/* <img src="wetcat.png" /> */}
                {getFirstImg(props.item.content)?<img src={getFirstImg(props.item.content)}></img>:null}
            </div>
        </>
    )
}
