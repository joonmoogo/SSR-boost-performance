'use client'
import '../_styles/writeButton.scss'

interface WriteButtonProps {
    type?: string
    modalOpen: () => void
}

const renderButtonIcon = () =>{
    
}


export default function WriteButton(props: WriteButtonProps) {

    return (
        <div className="write-button-wrapper">
            <div className="button" onClick={props.modalOpen}>😀</div>
        </div>
    )
}