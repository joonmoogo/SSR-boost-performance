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
            }
        };

        if (editor) editor.addEventListener('input', handleInput);
        return () => {
            if (editor) editor.removeEventListener('input', handleInput);
        };
    }, []);

    const wrapHTML = () => {
        const editor = editorRef.current;
        const style = editorStyle
        if (editor) {
            const wrapper = document.createElement('div');
            wrapper.className = "test";
            for (let key in style) {
                if (style.hasOwnProperty(key)) {
                    wrapper.style[key as any] = style[key];
                }
            }
            while (editor.firstChild) {
                wrapper.appendChild(editor.firstChild);
            }

            editor.appendChild(wrapper);
            console.log(editor);
        }
    }

    const changeFont = (e: any): void => {
        const value = e.target.value;

        const makeFont = (name: string) => {
            const selection = window.getSelection();
            if (selection) {
                const range = selection.getRangeAt(0)
                console.log(range);
                const br = document.createElement('br')
                const p = document.createElement(name);

                p.appendChild(br);

                range.deleteContents();
                range.insertNode(p);

                range.setStartAfter(br);
                range.setEndAfter(br);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
        makeFont(value);
    }



    const changeLayout = (e: any): void => {
        const value = e.target.value;

        const normalLayout = {}

        const centerLayout = {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }

        switch (value) {
            case 'B1':
                setEditorStyle(normalLayout)
                break;
            case 'B2':
                setEditorStyle(centerLayout)
                break;
        }
    }




    return (
        <div className="tech-write-page" >
            <div className="tech-write-container">
                <input onChange={(e) => setTitle1(e.target.value)} type="text" placeholder={initialTitle1} className="tech-write-title title1" />
                <input onChange={convertHashTag} type="text" placeholder='태그를 입력하세요. ex) #안녕 #반가워' className="tech-write-title title2" />
                <div className="tech-write-button-group-wrapper">
                    <div className="tech-write-button-group-left">
                        <button className='tech-write-button' value={'h1'} onClick={changeFont}>h1</button>
                        <button className='tech-write-button' value={'h2'} onClick={changeFont}>h2</button>
                        <button className='tech-write-button' value={'h3'} onClick={changeFont}>h3</button>
                        <button className='tech-write-button' value={'h4'} onClick={changeFont}>h4</button>
                        <button className='tech-write-button' value={'h5'} onClick={changeFont}>h5</button>
                        <button className='tech-write-button' value={'h6'} onClick={changeFont}>h6</button>
                    </div>
                    <div className="tech-write-button-group-right">
                        <button className='tech-write-button' value={'B1'} onClick={changeLayout}>B1</button>
                        <button className='tech-write-button' value={'B2'} onClick={changeLayout}>B2</button>
                    </div>
                </div>

                <div ref={editorRef} style={editorStyle} className="tech-write-editor" contentEditable />

                <div className="tech-write-bottom">
                    <div>Please use it correctly</div>
                    <button className='tech-submit-button' onClick={wrapHTML}>submit</button>
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
