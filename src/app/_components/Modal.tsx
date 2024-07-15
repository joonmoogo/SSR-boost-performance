"use client"
import { useEffect, useRef, useState } from 'react'
import '../_styles/modal.scss'
export default function Modal(props: { imageArray: string[], modalClose: any }) {

    const [imageIndex, setImageIndex] = useState(0);
    const length = props.imageArray.length;
    const imageRef = useRef<HTMLImageElement>(null)
    console.log(props.imageArray)

    const rightButtonClick = (e: any) => {
        e.stopPropagation();
        if (imageIndex + 1 < length) setImageIndex(imageIndex + 1)
    }
    const leftButtonClick = (e: any) => {
        e.stopPropagation();

        if (imageIndex - 1 >= 0) setImageIndex(imageIndex - 1)
    }

    const imageClick = (e: any) => {
        e.stopPropagation();
        const image = imageRef.current
        if (image) {
            image.style.scale='1.5'
        }

    }

    return (
        <div className="modal-container" onClick={props.modalClose}>
            <div className="images">
                <button className='right-button' onClick={leftButtonClick}>&#x1F8A6;</button>
                <img className='modal-image' ref={imageRef} src={props.imageArray[imageIndex]} onClick={imageClick}/>
                <button className='left-button' onClick={rightButtonClick}>&#x1F8A5;</button>
            </div>
        </div>
    )
}