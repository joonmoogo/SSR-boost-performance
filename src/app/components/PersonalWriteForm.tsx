import { useState } from "react";
import config from "../config/config"
import '../styles/personalWriteForm.css'
export default function PersonalWriteForm() {

    const [imageSrc, setImageSrc] = useState<any>();

    // const dataTransfer = new DataTransfer();

    const encodeFileToBase64 = (fileBlob: any): Promise<void> => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

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
                    <input type="file" multiple onChange={(e) => {
                        if(e.target.files){
                            encodeFileToBase64(e.target.files[0])
                            // console.log(dataTransfer);
                        }
                    }} />
                </div>
                <div className="personal-images-preview">
                    <img src={imageSrc}></img>
                </div>
            </div>
        </>
    )
}
