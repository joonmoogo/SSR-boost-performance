"use client"

import Link from "next/link";
import { useEffect, useState } from "react"
import config from "../_config/config";
import "@/app/_styles/sideNav.scss"

export default function SideNav() {

    const [value,setValue]=useState(0)
    const offset = 1.1;

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setValue(window.scrollY / offset)
        })
    },[])

    return (
        <>
            <div className="sidenav" style={{marginTop:`${value}px`}}>
                {config.navItem.map((item) => {
                    <Link href="javascript:void(0)" className="closeButton">close</Link>
                    return (
                        <Link key={item.icon_class} href={item.href}>{item.label}</Link>
                    )
                })}
            </div>
        </>
    )
}