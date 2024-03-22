"use client"

import { useRouter } from "next/navigation";
import url from "../config/config";
import { saveMemos } from "../call/memo";

export default function Form() {

    const router = useRouter();

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        // event.preventDefault();
        const value = ((event.target as HTMLFormElement).input.value);
        saveMemos('test',value);
        router.push('/')
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