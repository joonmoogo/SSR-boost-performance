import React from "react";
import config from "../config/config";
import "../styles/appbar.css"

export default function Appbar() {
    return (
        <div className="appbar">
            <div className="appbar-icon">
                {/* <img src="/ssepcat.png"></img> */}
            </div>
            <div className="appbar-content">
                {config.name}
            </div>
        </div>
    )
}
