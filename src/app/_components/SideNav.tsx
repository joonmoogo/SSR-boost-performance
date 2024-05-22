"use client"

import Link from "next/link";
import { useEffect, useState } from "react"
import config from "../_config/config";
import "@/app/_styles/sideNav.scss"
import { usePathname } from "next/navigation";


export default function SideNav() {
    const path = usePathname();
    const [value, setValue] = useState(0)
    const offset = 0.999;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setValue(window.scrollY / offset)
        })
    }, [])

    return (
        <>
            <div className="sidenav" style={{ marginTop: `${value}px` }}>
                {config.navItem.map((item) => {
                    return (
                        <Link style={path == `${item.href}` ? { textDecoration: 'underline' } : {}} key={item.icon_class} href={item.href}>{item.label}</Link>
                    )
                })}

                {/* It appear When token is ready */}
                <div >
                    <Link href={''}>{'write'}</Link>
                    <Link style={path == `/admin` ? { textDecoration: 'underline' } : {}} key={'write'} href={'/admin'}>{'admin'}</Link>
                </div>
            </div>
        </>
    )
}