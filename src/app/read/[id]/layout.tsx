"use client"

import { useEffect } from "react";

export default function Layout(props: { children: React.ReactNode; }) {
    
    function fetchToServer() : void{
        fetch('http://localhost:9999/posts').then((res)=>{
            return res.json().then((data)=>{
                console.log(data);
            })
        })
    }

    useEffect(()=>{
        fetchToServer();
    },[])

    /**  Next.js Treat Components as Server Side Component firstly! */

    // If you want to use Client Side API Like UseState or UseEffect hook OR onClick Toggle
    // Write "use client" on the top of CODE

    return (
        <>
            <br></br>
            <>props.children =  {props.children}</>
        </>
    )
}