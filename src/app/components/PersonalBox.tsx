"use client"
import { ChangeEvent, FormEvent, TouchEvent, useEffect, useRef, useState } from "react";
import config from "../config/config";
import { personalDTO } from "@/types/DTO";
import '../styles/personalBox.css'
import { deleteOnerPersonal } from "../util/customFetch";


export default function PersonalBox(props: { item: personalDTO }) {

    const slideshow = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const imageArray = props.item.image_url.split(',');
    const slideCount = imageArray.length
    console.log(imageArray);

    // IMAGE SLIDESHOW : n * -45
    // ex) slideCount == 2 ? max = -90 
    // ex) slideCount == 3 ? max = -130

    const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        console.log(e.touches[0].clientX)
        setCurrentValue(e.touches[0].clientX);
    }
    const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        console.log(e.changedTouches[0].clientX)
        if (currentValue > e.changedTouches[0].clientX) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }
    useEffect(() => {
        if(currentSlide ===slideCount+1){
            setCurrentSlide(0);
        }
        else if(currentSlide === -1){
            setCurrentSlide(slideCount-1)
        }

        slideshow.current.style.transform = `translate(${-45 * currentSlide + 1}vw)`
    }, [currentSlide])

    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        // console.log(e.touches[0].clientX)
        // slideshow.current.style.transform = `translate(${0}vw)`;
    }
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
            <div className="box-image"
                ref={slideshow}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onTouchMove={onTouchMove}
                style={{
                    transition: 'transform 0.5s'
                }}
            >
                {imageArray.map((e, index) => {
                    return (
                        <img key={index} src={`static/personal_images/${e}`} alt="" />
                    )
                })}
            </div>
        </div>
    )
}
