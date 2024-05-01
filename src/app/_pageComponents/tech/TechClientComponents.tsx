"use client"

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { techDTO, personalDTO } from "@/types/DTO";
import { getDatasByCount } from "@/app/_util/customFetch";
import TechBox from "@/app/_components/TechBox";
export default function TechClientComponents({ children, viewport }: { children: React.ReactNode; viewport: string }) {
    const [ref, inView] = useInView({
        threshold: 1
    })
    const [count, setCount] = useState<number>(9);
    const [addedDocuments, setAddedDocument] = useState<personalDTO[]>([]);
    const [isDocumentsEnd, setIsDocumentsEnd] = useState<boolean>(false);
    useEffect(() => {

        /* infinitescroll api fetch */

        if (inView && isDocumentsEnd === false) {
            getDatasByCount('tech', count + 1, count + 10).then((data) => {
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
                addedDocuments.map((post: any) =>
                    <TechBox key={post.id} item={post} viewport={viewport} />
                )
                : null}
            <div id="loading" ref={ref}>.</div>
        </>
    )
}