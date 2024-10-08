'use client'

import React, { useEffect, useState } from "react";
import config from "../_config/config";
import "../_styles/appbar.scss"
import Link from "next/link";

export default function Appbar({ viewport }: any) {


    let lastScroll = 0;
    const isMobile = viewport === 'mobile'
    const [scrollDown, setScrollDown] = useState<boolean | null>(null);

    useEffect(() => {
        const scrollHandler = () => {

            /* go down */
            if (window.scrollY > lastScroll) {
                setScrollDown(true)
            }

            /* go up */
            else {
                setScrollDown(false);
            }
            lastScroll = window.scrollY;
        }

        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])


    return (
        <div className="appbar" style={{ transform: `translateY(${isMobile && scrollDown ? "-150px" : "0"})`, transition: '0.5s ease' }}>
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
