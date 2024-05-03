import React, { useEffect, useState } from "react";
import "../_styles/footer.scss";
import config from "../_config/config";
import { useRouter } from "next/router";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { headers } from "next/headers";
export default function Footer() {
    const headerList = headers();
    const path = headerList.get('x-pathname');
    return (
        <div className="footer">
            {config.navItem.map((item, index) => {
                return (
                    <div className="footer-item" key={index}>
                        <Link className="footer-icon" href={item.href}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                className={item.icon_class}
                                viewBox="0 0 16 16">
                                {item.icon_path.map((d, i) => {
                                    return (
                                        <path key={i} d={d} />
                                    )
                                })}
                            </svg>
                        </Link>
                        <div className="footer-content">
                            <p style={path == `${item.href}` ? { borderBottom: '2px solid white' } : {}}>{item.label}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}