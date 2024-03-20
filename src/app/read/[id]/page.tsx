import React from "react";

export default function read1(props: { params: { id: number; }; }){

    return(
        <>parameter = {props.params.id}</>
    )
}