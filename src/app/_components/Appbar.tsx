import React from "react";
import config from "../_config/config";
import "../_styles/appbar.scss"
import Link from "next/link";
import { NextRequest } from "next/server";
import SideNav from "./SideNav";
import { headers } from "next/headers";

export default function Appbar() {

    const headerList = headers();
    const viewport = headerList.get('x-viewport') as string;

    return (
        <div className="appbar">
            <Link className="appbar-content" role="appbar-content" href={'/'}>
                {config.name}
            </Link>
            
            <Link className="appbar-icon" href={'/write'}>
                <img src="/ssepcat.png" />
            </Link>
        </div>
    )
}
