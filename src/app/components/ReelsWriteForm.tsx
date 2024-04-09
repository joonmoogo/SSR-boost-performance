import config from "../config/config"
import "../styles/reelsWriteForm.css"

export default function ReelsWriteForm() {
    return (
        <>
            <div className="reels-form">
                <div className="author">
                    <img src="ssepcat.png"></img>
                    <p>{config.username}</p>
                </div>
                <div className="reels-name">
                    <input placeholder="Title" type="text" />
                </div>
                <div className="reels-caption">
                    <input placeholder="caption" type="text" />
                </div>
                <div className="reels-video">
                    <input type="file" />
                </div>
                <button>submit</button>

            </div>
        </>
    )
}