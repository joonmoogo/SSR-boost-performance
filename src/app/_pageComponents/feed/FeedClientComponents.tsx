"use client"
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { getDatasByCount } from "@/app/_util/customFetch";
import { feedDTO } from "@/types/DTO";
import FeedBox from "@/app/_components/FeedBox";

export default function FeedClientComponents({ children, viewport }: { children: React.ReactNode; viewport: string }) {
    const [ref, inView] = useInView({
        threshold: 1
    })
    const [count, setCount] = useState<number>(9);
    const [addedDocuments, setAddedDocument] = useState<feedDTO[]>([]);
    const [isDocumentsEnd, setIsDocumentsEnd] = useState<boolean>(false);

    useEffect(() => {

        /* infinitescroll api fetch */

        if (inView && isDocumentsEnd === false) {
            getDatasByCount('feed', count+1, count + 10).then((data) => {
                console.log(data);
                setAddedDocument((prevDocuments) => [...prevDocuments, ...data]);
                if (data.length != 0) {
                    setCount(count + 10);
                } else {
                    setIsDocumentsEnd(true);
                }
            })
        }
    }, [inView])

    return (
        <>
            {children}
            {addedDocuments ?
                addedDocuments.map((post: feedDTO, i: number) =>
                    <FeedBox key={post.id} item={post} viewport={viewport} />
                )
                : null}
            <div id="loading" ref={ref}>.</div>
        </>
    )
}