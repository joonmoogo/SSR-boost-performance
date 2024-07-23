'use client'
import { useRef, useState } from "react";
import "../_styles/writeModal.scss"
import Image from "next/image";
import config from "../_config/config";
import Loader from "./Loading";
import { compressImage } from "../_util/compressImage";

interface FeedWriteModal {
    modalClose: () => void
}

export default function FeedWriteModal(props: FeedWriteModal): React.ReactNode {

    const [imagesArray, setImagesArray] = useState<any[]>([])
    const [serverImagesArray, setServerImagesArray] = useState<File[]>([]);

    const [loading, isLoading] = useState<boolean>(false);

    const imgRef = useRef<HTMLInputElement>(null)
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

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

    const modalBoxClick = (e: any) => {
        e.stopPropagation();
    }

    const photoButtonClick = (e: any) => {
        e.preventDefault();
        if (imgRef.current) {
            imgRef.current.click();
        }
    }

    const onSubmit = async () => {
        // console.log()
        // console.log(await compressImage(serverImagesArray[0]).then((data)=>data));
        console.log(serverImagesArray)
        const compressionPromises = serverImagesArray.map(file => compressImage(file, 0.7));  
        const compressedImages = (await Promise.all(compressionPromises))
        if (titleRef.current && descriptionRef.current) {
            isLoading(true);
            const title = titleRef.current.value;
            const content = descriptionRef.current.value;
            const image = compressedImages;

            const fetchPromises = image.map(img =>
                fetch(`${config.localUrl}/api/feed?fileName=feed/${title}/${img.name}`, {
                    cache: 'no-store',
                    method: 'POST',
                    body: img,
                }).then(imgServerData => imgServerData.json())
            );

            const results = await Promise.all(fetchPromises);
            console.log(results);

            const serverData = await fetch(`${config.localUrl}/api/feed?title=${title}&content=${content}&imageArray=${encodeURIComponent(JSON.stringify(results))}`, {
                cache: 'no-store',
                method: 'POST',
            }).then((data) => {
                isLoading(false);
                props.modalClose()
                return (data.json())
            }).catch((err) => {
                isLoading(false);
                props.modalClose()
                alert(err)
                return err
            })
            console.log(serverData)
        }
    }



    return (
        <>
            {loading ? <Loader /> : null}
            <div className="write-modal-container" onClick={props.modalClose}>
                <div>Write your feed</div>
                <div className="write-modal-box" id="feed-modal-box" onClick={modalBoxClick}>
                    <div className="username">joonmoogo</div>
                    <input className="title" ref={titleRef} maxLength={10} type="text" placeholder="title" autoFocus></input>
                    <input className="description" ref={descriptionRef} maxLength={20} type="text" placeholder="description" ></input>
                    <div className="button-group">
                        <div className="write-photos" onClick={photoButtonClick}>Photos</div>
                        <input ref={imgRef} type="file" onChange={(e) => {
                            if (e.target.files) {
                                encodeFileToBase64(e.target.files[0]);
                            }
                        }} style={{ display: 'none' }}></input>
                        <div className="write-image-array">
                            {imagesArray.map((e, i) => {
                                return (
                                    <Image width={20} height={20} alt={e} key={e + i} src={e}></Image>
                                )
                            })}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div>
                            choose at least one photo
                        </div>
                        <div className="write-submit" onClick={onSubmit}>Post</div>
                    </div>
                </div>
            </div>
        </>
    )
}