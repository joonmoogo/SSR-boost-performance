"use client"
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { getPersonalsByCount } from "@/app/util/customFetch";
import { personalDTO } from "@/types/DTO";
import PersonalBox from "@/app/components/PersonalBox";

export default function PersonalClientComponents({ children }: { children: React.ReactNode }) {

    const [ref, inView] = useInView({
        threshold: 1
    })
    const [count, setCount] = useState<number>(0);
    const [addedDocuments, setAddedDocument] = useState<personalDTO[]>([]);
    const [isDocumentsEnd, setIsDocumentsEnd] = useState<boolean>(false);

    useEffect(() => {
        if (inView && isDocumentsEnd === false) {
            getPersonalsByCount('personal', count, count + 10).then((data) => {
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
        <div >
            {children}
            {addedDocuments ?
                addedDocuments.map((post: personalDTO, index: number) =>
                    <div className="main-page">
                        <PersonalBox key={index} item={post} />
                    </div>
                )
                : null}
            <div id="loading" ref={ref}>.</div>
        </div>
    )
}