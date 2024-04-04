import config from '../config/config'
import '../styles/techWriteForm.css'

export default function TechWriteForm() {
    return (
        <>
            <div className="tech-form">
                <p>tech</p>
                <div className="author">
                    <img src="ssepcat.png"></img>
                    <p>{config.username}</p>
                </div>
                <div className="form-content">
                    
                </div>
            </div>

        </>
    )
}