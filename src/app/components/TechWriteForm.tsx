import config from '../config/config'
import '../styles/techWriteForm.css'

export default function TechWriteForm() {
    return (
        <>
            <div className="tech-form">
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