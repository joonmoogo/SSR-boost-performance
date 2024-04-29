"use client"
import '../_styles/modal.scss'
export default function Modal(props:{imageArray:string[]}){
    
    return(
        <div className="modal-container">
            <div className="images">
                {props.imageArray.map((e)=>{
                    return(
                        <img key={e} src={`static/personal_images/${e}`} alt={e}/>
                    )
                })}
                <button>➡️</button>
                <button>⬅️</button>
            </div>
        </div>
    )
}