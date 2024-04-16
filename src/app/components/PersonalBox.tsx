"use client"
import React from "react";
import config from "../config/config";
import { personalDTO } from "@/types/DTO";
import '../styles/personalBox.css'
import { deleteOnerPersonal } from "../util/customFetch";

export default function PersonalBox(props: { item: personalDTO }) {

    return (
        <div className="image-box">
            <div className="box-header">
                <div className="box-title">
                    {props.item.title}
                </div>
                <div className="box-createdat">
                    {props.item.created_at}
                </div>
            </div>
            <div className="box-content">
                {props.item.content}
            </div>
            <div className="box-image">
                <img onClick={deleteOnerPersonal} src={`static/personal_images/${props.item.image_url}`} alt="" />
            </div>
        </div>
    )
}
