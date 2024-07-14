
import React from "react";
import config from "../_config/config";
import "../_styles/appbar.scss"
import Link from "next/link";

export default function Appbar() {

    
    return (
        <div className="appbar">
            <Link className="appbar-content" role="appbar-content" href={'/'}>
                {config.name}
            </Link>
{/*             
            <Link className="appbar-icon" href={'/write'}>
                <img src="/ssepcat.png" />
            </Link> */}
        </div>
    )
}
