"use client"
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { getPersonalsByCount } from "@/app/_util/customFetch";
import { personalDTO } from "@/types/DTO";
import PersonalBox from "@/app/_components/PersonalBox";

export default function PersonalClientComponents({ children, viewport }: { children: React.ReactNode; viewport: string }) {
    const [ref, inView] = useInView({
        threshold: 1
    })
    const [count, setCount] = useState<number>(9);
    const [addedDocuments, setAddedDocument] = useState<personalDTO[]>([]);
    const [isDocumentsEnd, setIsDocumentsEnd] = useState<boolean>(false);

    useEffect(() => {

        /* infinitescroll api fetch */

        if (inView && isDocumentsEnd === false) {
            getPersonalsByCount('personal', count+1, count + 10).then((data) => {
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
                addedDocuments.map((post: personalDTO, i: number) =>
                    <PersonalBox key={post.id} item={post} viewport={viewport} />
                )
                : null}
            <div id="loading" ref={ref}>.</div>
        </>
    )
}