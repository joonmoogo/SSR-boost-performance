"use client"

import { useRouter } from "next/navigation";
import url from "../config/config";

export default function Form() {

    const router = useRouter();

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const value = ((event.target as HTMLFormElement).input.value);
        const option = {
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({id:'test',value:value})
        }
        fetch(`${url}/posts`,option).then(async(res)=>{
            return res.json().then((result)=>{
                console.log(result);
                
            })
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" name="input" />
            </p>
            <p>
                <button type="submit">submit</button>
            </p>
        </form>
    )
}