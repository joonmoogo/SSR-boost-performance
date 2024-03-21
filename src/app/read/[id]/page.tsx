import url from "@/app/config/config";
import React from "react";

export default async function read1(props: { params: { id: string; }; }) {
    console.log(props.params.id)
    const serverData = await fetch(`${url}/posts`,{cache:'no-cache'});
    const posts = await serverData.json();
    console.log(posts)
    const post = posts.find((e:{id:string,value:string})=>{e.value === props.params.id})
    console.log(post)

    return (
        <>
            <br></br>
            <>
            {/* <div>{post?post.value:null}</div> */}
            </>
            parameter = {props.params.id}
        </>
    )
}