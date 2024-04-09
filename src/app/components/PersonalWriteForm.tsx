import { ChangeEvent, FormEvent,TouchEvent, useEffect, useRef, useState } from "react";
import config from "../config/config"
import '../styles/personalWriteForm.css'
import { useMutation } from "react-query";
export default function PersonalWriteForm() {

    const [current,setCurrent] = useState<number>(0);
    const [imagesArray, setImagesArray] = useState<any[]>([])
    const slideshow = useRef<any>(null);

    const encodeFileToBase64 = (fileBlob: any): Promise<string>|undefined => {
        if(!fileBlob) return undefined
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = (e) => {
                if (reader.result) {
                    const csv: string = reader.result as string;
                    setImagesArray([...imagesArray, csv]);
                    resolve(csv);
                }
            };
        });
    };

    const onTouchStart = (e:TouchEvent<HTMLDivElement>) =>{
        console.log(e.touches[0].clientX);
    }

    const onTouchMove = (e:TouchEvent<HTMLDivElement>) =>{
        console.log(e.touches[0].clientX);
        slideshow.current.style.transform =`translate(${e.touches[0].clientX}vw)`;
    }

    const onTouchEnd = (e:TouchEvent<HTMLDivElement>) =>{
        console.log(e.changedTouches[0].clientX);
        setCurrent(0);
    }

    return (
        <>
            <div className="personal-form">
                <div className="author">
                    <img src="ssepcat.png"></img>
                    <p>{config.username}</p>
                </div>
                <div className="personal-title">
                    <input placeholder="Title" type="text" />
                </div>
                <div className="personal-caption">
                    <input placeholder="caption" type="text" />
                </div>
                <div className="personal-images">
                    <input type="file" onChange={(e) => {
                        if (e.target.files) {
                            encodeFileToBase64(e.target.files[0]);
                        }
                    }} />
                </div>
                <div
                    className="personal-images-preview"
                    ref={slideshow}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {imagesArray.map((e, i) => {
                        return (
                            <img key={i} src={e}></img>
                        )
                    })}
                </div>
                <button>submit</button>
            </div>
        </>
    )
}
