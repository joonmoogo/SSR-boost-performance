import '@/app/_styles/techWrite.scss';

export default function TechWrite() {
    return (
        <div className="main-page" >
            <div className="tech-write-container">
                <input type="text" placeholder='제목을 입력하세요.' className="tech-write-title title1" />
                <input type="text" placeholder='태그를 입력하세요. ex) #안녕 #반가워' className="tech-write-title title2" />
                <div className="tech-write-button-group">
                    <button className='tech-write-button'>B</button>
                    <button className='tech-write-button'>A</button>
                    <button className='tech-write-button'>P</button>
                    <button className='tech-write-button'>B</button>
                    <button className='tech-write-button'>A</button>
                    <button className='tech-write-button'>M</button>
                </div>
                <div className="tech-write-editor" contentEditable />

                <div className="tech-write-bottom">
                    <div>Please use it correctly</div>
                    <button className='tech-submit-button'>submit</button>
                </div>

            </div>

        </div>
    )
}
