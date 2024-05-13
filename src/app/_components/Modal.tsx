"use client"
import { useEffect, useState } from 'react'
import '../_styles/modal.scss'
export default function Modal(props: { imageArray: string[] }) {

    const [imageIndex, setImageIndex] = useState(0);
    const length = props.imageArray.length;

    const rightButtonClick = () => { if (imageIndex + 1 < length) setImageIndex(imageIndex + 1) }
    const leftButtonClick = () => { if (imageIndex - 1 >= 0) setImageIndex(imageIndex - 1) }

    return (
        <div className="modal-container">
            <div className="images">
                <img src={`static/personal_images/${props.imageArray[imageIndex]}`} />
                <button className='left-button' onClick={rightButtonClick}>&#x1F8A5;</button>
                <button className='right-button' onClick={leftButtonClick}>&#x1F8A6;</button>
            </div>
        </div>
    )
}