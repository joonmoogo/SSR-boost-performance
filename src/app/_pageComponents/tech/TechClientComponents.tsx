"use client"

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { techDTO } from "@/types/DTO";
import { getDatasByCount } from "@/app/_util/customFetch";
import TechBox from "@/app/_components/TechBox";
import WriteButton from "@/app/_components/WriteButton";
import { useRouter } from "next/navigation";
import TechWrite from "@/app/_components/TechWrite";
export default function TechClientComponents({ children, viewport }: { children: React.ReactNode; viewport: string }) {
    const [ref, inView] = useInView({
        threshold: 1
    })
    const [count, setCount] = useState<number>(9);
    const [addedDocuments, setAddedDocument] = useState<techDTO[]>([]);
    const [isDocumentsEnd, setIsDocumentsEnd] = useState<boolean>(false);

    const [showModal, setShowModal] = useState<boolean>(false);

    const router = useRouter();

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
            <WriteButton type="tech" modalOpen={() => setShowModal(true)} />
            {showModal ? <TechWrite></TechWrite> : null}
            <div id="loading" style={{ opacity: 0 }} ref={ref}>fetch here</div>
        </>
    )
}