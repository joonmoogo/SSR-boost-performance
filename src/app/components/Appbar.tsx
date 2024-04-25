"use client"

import React from "react";
import config from "../config/config";
import "../styles/appbar.scss"

export default function Appbar() {
    return (
        <div className="appbar">
            <div className="appbar-content">
                {config.name}
            </div>
            <div className="appbar-icon" onClick={()=>{
                window.location.href='/write';
            }}>
                <img src="/ssepcat.png"/>
            </div>
        </div>
    )
}
