import React from "react";
import config from "../config/config";
import { postDTO } from "@/types/postsDTO";
import '../styles/personalBox.css'

export default function PersonalBox(props: { item: postDTO }) {
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
                <img src={`static/personal_images/${props.item.image_url}`} alt="" />
            </div>
        </div>
    )
}
