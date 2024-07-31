'use client'
import '@/app/_styles/techWrite.scss';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function TechWrite() {

    const [title1, setTitle1] = useState<string>();
    const [title2, setTitle2] = useState<Array<string>>();

    const editorRef = useRef<HTMLDivElement>(null)
    const [editorValue, setEditorValue] = useState<any>();

    const convertHashTag = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.split('#').filter(part => part.trim() !== '');
        console.log(value)
        if (value.length > 4) return;
        setTitle2(value)
    }

    useEffect(() => {
        const editor = editorRef.current;

        const handleInput = () => {
            if (editor) {
                console.log(editor.innerHTML);
                setEditorValue(editor.innerHTML)
            }
        };

        if (editor) editor.addEventListener('input', handleInput);
        return () => {
            if (editor) editor.removeEventListener('input', handleInput);
        };
    }, []);



    return (
        <div className="tech-write-page" >
            <div className="tech-write-container">
                <input onChange={(e) => setTitle1(e.target.value)} type="text" placeholder='제목을 입력하세요.' className="tech-write-title title1" />
                <input onChange={convertHashTag} type="text" placeholder='태그를 입력하세요. ex) #안녕 #반가워' className="tech-write-title title2" />
                <div className="tech-write-button-group">
                    <button className='tech-write-button'>h1</button>
                    <button className='tech-write-button'>h2</button>
                    <button className='tech-write-button'>h3</button>
                    <button className='tech-write-button'>h4</button>
                    <button className='tech-write-button'>h5</button>
                    <button className='tech-write-button'>h6</button>
                </div>
                <div ref={editorRef} className="tech-write-editor" contentEditable />

                <div className="tech-write-bottom">
                    <div>Please use it correctly</div>
                    <button className='tech-submit-button'>submit</button>
                </div>

            </div>

            <div className="tech-write-preview">
                <div style={{ textAlign: 'center' }} className='title1'>{title1}</div>
                <div className='title2'>{title2 && title2.map((e, index) => (
                    <span className='hashtag' key={e + index}>{`#${e}`}</span>
                ))}
                </div>
                <div className='editor-preview' dangerouslySetInnerHTML={{ __html: editorValue }} />
            </div>

        </div>
    )
}
