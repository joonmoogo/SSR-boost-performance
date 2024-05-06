"use client"

import React, { useEffect, useState } from "react";
import '../_styles/techBox.scss'
import { techDTO } from "@/types/DTO";
import config from "../_config/config";
import jsdom from "jsdom";
import Link from "next/link";
import { timeTune } from "../_util/util";

export default function TechBox(props: { item: techDTO, viewport: any }) {

    const isMobile = props.viewport === 'mobile' ? true : false
    const imageArray = props.item.image_url.split(',');



    return (
        <>
            {isMobile
                ?
                /* Mobile UI */
                <div className="container">
                    <Link className="box" href={`/tech`}>
                        <div className="tech-box">
                            <div className="box-author">
                                <img src="ssepcat.png"></img>
                                <p>{config.username}</p>
                            </div>
                            <div className="box-title">
                                {props.item.title}
                            </div>
                            <div className="box-header">
                                <div className="box-createdat">
                                    {props.item.created_at}
                                </div>
                            </div>
                            <div className="box-content">
                                <div className="box-description">
                                    {props.item.first_div}
                                </div>
                            </div>
                        </div>
                        <div className="box-image">
                            {imageArray && <img src={`static/tech_images/${imageArray[0]}`} alt="First Image" />}
                        </div>
                    </Link>
                </div>
                :
                /* Desktop UI */

                <div className="container">
                    <div className="tech-image-box">
                        {imageArray && <img src={`static/tech_images/${imageArray[0]}`} alt="First Image" />}
                    </div>
                    <div className="tech-text-box">
                        <div id="title">{props.item.title}</div>
                        <div id="description">{props.item.first_div}</div>
                        <div>{props.item.created_at}</div>
                    </div>
                    <div className="author">
                        <div>by {config.username}</div>
                    </div>
                </div>

            }
        </>
    )
}
