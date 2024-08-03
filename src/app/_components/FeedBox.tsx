"use client"
import { ChangeEvent, FormEvent, MouseEvent, MouseEventHandler, TouchEvent, useEffect, useRef, useState } from "react";
import config from "../_config/config";
import { feedDTO } from "@/types/DTO";
import '../_styles/feedBox.scss'
import { deleteOnerFeed } from "../_util/customFetch";
import { timeTune } from "../_util/util";
import Modal from "./Modal";
import SideNav from "./SideNav";
import Image from "next/image";


export default function FeedBox(props: { item: feedDTO, viewport: any }) {

    const slideshow = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [selectedImageArray, setSelectedImageArray] = useState<string[] | null>(null);
    const slideCount = props.item.image_urls.length
    const isMobile = props.viewport === 'mobile' ? true : false

    // IMAGE SLIDESHOW : n * -45
    // ex) slideCount == 2 ? max = -90 
    // ex) slideCount == 3 ? max = -130


    const onClick = (e: MouseEvent) => {
        setSelectedImageArray(props.item.image_urls);
    }

    const onClickBackground = () => {
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


    const icons: any = {
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
    }
    return (
        <>
            {isMobile ?
                /* Mobile UI t*/
                <div className="image-box" role="feed-box">
                    <div className="box-header">
                        <div className="author">
                            <Image loading="lazy" src='/ssepcat.png' width={10} height={10} alt="ssepcat" />
                            <p>{config.username}</p>
                            <p>{timeTune(props.item.created_at)}</p>
                        </div>
                    </div>
                    <div className="box-content">
                        {props.item.content}
                    </div>
                    <div className="box-image"
                        ref={slideshow}
                        style={{
                            transition: 'transform 0.5s'
                        }}
                    >
                        {
                            props.item.image_urls.map((e, index) => {
                                return (
                                    <img
                                        className={
                                            props.item.image_urls.length <= 1 ? "singleImg" : "multiImg"
                                        }
                                        key={index}
                                        loading="lazy"
                                        src={e}
                                        alt="" />
                                )
                            })
                        }
                    </div>
                </div>
                :
                /* Desktop UI */
                <>
                    <div className="image-box" role="feed-box">
                        <div className="box-image"
                            onClick={onClick}
                        >
                            <img src={`${props.item.image_urls[0]}`} />
                        </div>
                        <div className="box-header">
                            <div className="author">
                                <img src="ssepcat.png"></img>
                                <p>{config.username}</p>
                                <p>{timeTune(props.item.created_at)}</p>
                                <p>{props.item.image_urls.length > 1 && icons[props.item.image_urls.length]}</p>
                            </div>
                        </div>
                        <div className="box-content" ref={slideshow}>
                            {props.item.content}
                        </div>
                    </div>
                    {selectedImageArray != null ? <Modal imageArray={selectedImageArray} modalClose={() => { setSelectedImageArray(null) }} /> : null}
                </>
            }

        </>
    )
}
