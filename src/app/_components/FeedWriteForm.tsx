import { ChangeEvent, FormEvent, TouchEvent, useEffect, useRef, useState } from "react";
import config from "../_config/config"
import '../_styles/feedWriteForm.scss'
import { useMutation } from "react-query";
export default function FeedWriteForm() {

    const [current, setCurrent] = useState<number>(0);
    const [imagesArray, setImagesArray] = useState<any[]>([])
    const [serverImagesArray,setServerImagesArray] = useState<File[]>([]);
    
    const slideshow = useRef<any>(null);
    const imgRef = useRef<any>(null);
    const titleRef = useRef<any>(null);
    const contentRef = useRef<any>(null);
    

    const encodeFileToBase64 = (fileBlob: any): Promise<string> | undefined => {
        if (!fileBlob) return undefined
        console.log(fileBlob);
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = (e) => {
                if (reader.result) {
                    const csv: string = reader.result as string;
                    setImagesArray([...imagesArray, csv]);
                    setServerImagesArray([...serverImagesArray, fileBlob]);
                    resolve(csv);
                }
            };
        });
    };

    const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        console.log(e.touches[0].clientX);
    }

    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        console.log(e.touches[0].clientX);
        slideshow.current.style.transform = `translate(${e.touches[0].clientX}vw)`;
    }

    const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        console.log(e.changedTouches[0].clientX);
    }

    const onSubmit = async () => {
        const title = titleRef.current.value;
        const content = contentRef.current.value;
        const image = serverImagesArray;
        
        const formdata = new FormData();
        formdata.append('title',title);
        formdata.append('content',content);
        for(let i=0; i<image.length; i++){
            formdata.append('images',image[i]);
        }

        const serverData = await fetch(`${config.localUrl}/api/personal`, {
            cache: 'no-store',
            method: 'POST',
            body:formdata,
        });
        const data: any = await serverData.json();
        console.log(data);
        console.log({
            title,
            content,
            image,
        });
    }


    return (
        <>
            <div className="personal-form">
                <div className="author">
                    <img src="ssepcat.png"></img>
                    <p>{config.username}</p>
                </div>
                <div className="personal-title">
                    <input ref={titleRef} placeholder="Title" type="text" />
                </div>
                <div className="personal-caption">
                    <input ref={contentRef} placeholder="caption" type="text" />
                </div>
                <div className="personal-images">
                    <input ref={imgRef} type="file" onChange={(e) => {
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
                <button  onClick={onSubmit}>submit</button>
                <button  onClick={onSubmit}>submit</button>
                <button  onClick={onSubmit}>submit</button>
                <button  onClick={onSubmit}>submit</button>
                <button  onClick={onSubmit}>submit</button>
                <button  onClick={onSubmit}>submit</button>
                <button  onClick={onSubmit}>submit</button>
                <button  onClick={onSubmit}>submit</button>
            </div >
        </>
    )
}
