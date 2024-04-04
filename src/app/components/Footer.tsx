"use client"
import React, { useEffect, useState } from "react";
import "../styles/footer.css";
import config from "../config/config";
import { useRouter } from "next/router";
import { useParams, usePathname } from "next/navigation";

export default function Footer() {
    const path = usePathname();
    return (
        <div className="footer">
            {config.navItem.map((item, index) => {
                return (
                    <div className="footer-item" key={index}>
                        <div className="footer-icon" onClick={() => {
                            window.location.href=item.href;
                        }}>
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
                        </div>
                        <div  className="footer-content">
                            <p style={path==`${item.href}`?{borderBottom:'2px solid white'}:{}}>{item.label}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}