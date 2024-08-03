'use client'
import '@/app/_styles/techWrite.scss';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function TechWrite() {


    const initialTitle1 = "제목을 입력하세요."
    const [title1, setTitle1] = useState<string>(initialTitle1);
    const initialTitle2 = ["안녕", "반가워"]
    const [title2, setTitle2] = useState<Array<string>>(initialTitle2);

    const editorRef = useRef<HTMLDivElement>(null)
    const [editorValue, setEditorValue] = useState<any>();

    const [editorStyle, setEditorStyle] = useState<any>({})

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
                setEditorValue(editor.innerHTML)
                console.log(editor.childNodes)
            }
        };

        if (editor) editor.addEventListener('input', handleInput);
        return () => {
            if (editor) editor.removeEventListener('input', handleInput);
        };
    }, []);


    const toggleRightButtons = (e: any) => {
        const value = e.target.value;

        if (value === 'B1') {
            setEditorStyle({})
            return;
        }

        if (value === 'B2') {
            setEditorStyle({
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            })
            return;
        }

    }




    return (
        <div className="tech-write-page" >
            <div className="tech-write-container">
                <input onChange={(e) => setTitle1(e.target.value)} type="text" placeholder={initialTitle1} className="tech-write-title title1" />
                <input onChange={convertHashTag} type="text" placeholder='태그를 입력하세요. ex) #안녕 #반가워' className="tech-write-title title2" />
                <div className="tech-write-button-group-wrapper">
                    <div className="tech-write-button-group-left">
                        <button className='tech-write-button'>h1</button>
                        <button className='tech-write-button'>h2</button>
                        <button className='tech-write-button'>h3</button>
                        <button className='tech-write-button'>h4</button>
                        <button className='tech-write-button'>h5</button>
                        <button className='tech-write-button'>h6</button>
                    </div>
                    <div className="tech-write-button-group-right">
                        <button className='tech-write-button' value={'B1'} onClick={toggleRightButtons}>B1</button>
                        <button className='tech-write-button' value={'B2'} onClick={toggleRightButtons}>B2</button>
                    </div>
                </div>

                <div ref={editorRef} style={editorStyle} className="tech-write-editor" contentEditable />

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
                <div
                    className='editor-preview'
                    style={editorStyle}
                    dangerouslySetInnerHTML={{ __html: editorValue }} />
            </div>

        </div>
    )
}
