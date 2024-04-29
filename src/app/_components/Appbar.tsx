"use client"

import React from "react";
import config from "../_config/config";
import "../_styles/appbar.scss"
import Link from "next/link";
import { NextRequest } from "next/server";
import SideNav from "./SideNav";

export default function Appbar() {
    
    return (
        <div className="appbar">
            <SideNav/>
            <div className="appbar-content">
                {config.name}
            </div>
            <Link className="appbar-icon" href={'/write'}>
                <img src="/ssepcat.png"/>
            </Link>
        </div>
    )
}
