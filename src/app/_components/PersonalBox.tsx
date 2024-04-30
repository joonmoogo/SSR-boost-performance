"use client"
import { ChangeEvent, FormEvent, MouseEvent, MouseEventHandler, TouchEvent, useEffect, useRef, useState } from "react";
import config from "../_config/config";
import { personalDTO } from "@/types/DTO";
import '../_styles/personalBox.scss'
import { deleteOnerPersonal } from "../_util/customFetch";
import { timeTune } from "../_util/util";
import Modal from "./Modal";
import SideNav from "./SideNav";


export default function PersonalBox(props: { item: personalDTO, viewport: any }) {

    const slideshow = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [selectedImageArray, setSelectedImageArray] = useState<string[]|null>(null);
    const imageArray = props.item.image_url.split(',');
    const slideCount = imageArray.length
    const isMobile = props.viewport === 'mobile' ? true : false

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
    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        // console.log(e.touches[0].clientX)
        // slideshow.current.style.transform = `translate(${0}vw)`;
    }
    const onClick = (e: MouseEvent) => {
        setSelectedImageArray(imageArray);
    }

    const onClickBackground = () =>{
        setSelectedImageArray(null);
    }
    
    useEffect(() => {
        if (currentSlide === slideCount + 1) {
            setCurrentSlide(0);
        }
        else if (currentSlide === -1) {
            setCurrentSlide(slideCount - 1)
        }

        slideshow.current.style.transform = `translate(${-45 * currentSlide + 1}vw)`
    }, [currentSlide])

    return (
        <>
            {isMobile ?
                /* Mobile UI */
                <div className="image-box">
                    <div className="box-header">
                        <div className="author">
                            <img src="ssepcat.png"></img>
                            <p>{config.username}</p>
                            <p>{timeTune(props.item.created_at)}</p>
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
                        {isMobile ? imageArray.map((e, index) => {
                            return (
                                <img key={index} src={`static/personal_images/${e}`} alt="" />
                            )
                        }) : <img src={`static/personal_images/${imageArray[0]}`}></img>}
                    </div>
                </div>
                :
                /* Desktop UI */
                <>
                    <div className="image-box">
                        <div className="box-image"
                            onClick={onClick}
                        >
                            <img src={`static/personal_images/${imageArray[0]}`} />
                        </div>
                        <div className="box-header">
                            <div className="author">
                                <img src="ssepcat.png"></img>
                                <p>{config.username}</p>
                                <p>{timeTune(props.item.created_at)}</p>
                            </div>
                        </div>
                        <div className="box-content" ref={slideshow}>
                            {props.item.content}
                        </div>
                    </div>
                    {selectedImageArray!=null?<Modal imageArray={selectedImageArray}/>:null}
                </>
            }

        </>
    )
}
