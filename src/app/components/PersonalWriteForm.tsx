import { useEffect, useState } from "react";
import config from "../config/config"
import '../styles/personalWriteForm.css'
export default function PersonalWriteForm() {

    const [imagesArray, setImagesArray] = useState<any[]>([])

    // const dataTransfer = new DataTransfer();

    const encodeFileToBase64 = (fileBlob: any): Promise<string> => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = (e) => {
                if(reader.result){
                    const csv: string = reader.result as string;
                    setImagesArray([...imagesArray, csv]);
                    resolve(csv);
                }
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
                    <input type="file" onChange={(e) => {
                        if (e.target.files) {
                            encodeFileToBase64(e.target.files[0]).then((data)=>{
                                console.log(data);
                            })
                        }
                    }} />
                </div>
                <div className="personal-images-preview">
                    {imagesArray.map((e,i)=>{
                        return(
                            <img key={i} src={e}></img>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
