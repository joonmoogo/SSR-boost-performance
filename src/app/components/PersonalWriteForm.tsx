import config from "../config/config"
import '../styles/personalWriteForm.css'
export default function PersonalWriteForm() {
    return (
        <>
        <div className="personal-form">
            <p>personal</p>
            <div className="author">
                <img src="ssepcat.png"></img>
                <p>{config.username}</p>
            </div>
            <div className="personal-title">
                <input placeholder="Title" type="text" />
            </div>
            <div className="personal-caption">
                <input placeholder="caption" type="text" />
            </div>
            <div className="personal-images">
                <input type="file"/>
            </div>
        </div>
        </>
    )
}
