import React from "react";

export default async function read1(props: { params: { id: number; }; }) {

    const serverData = await fetch(`http://localhost:9999/posts`);
    const posts = await serverData.json();
    const post = posts[props.params.id]
    console.log(post)

    return (
        <>
            <br></br>
            <>
            <div>{post?post.title:null}</div>
            </>
            parameter = {props.params.id}
        </>
    )
}