import Link from "next/link";
import { useRef } from "react"
import config from "../_config/config";

export default function SideNav() {

    const navRef = useRef(null);

    const openNav = () => {

    }

    const closeNav = () => {

    }
    
    return (
        <>
            <div className="openButton">&#9776; open</div>
            <div className="sidenav" ref={navRef}>
                {config.navItem.map((item) => {
                    <Link href="javascript:void(0)" className="closeButton" onClick={closeNav}>&times;</Link>
                    return (
                        <Link key={item.icon_class} href={item.href}>{item.label}</Link>
                    )
                })}
            </div>
        </>
    )
}