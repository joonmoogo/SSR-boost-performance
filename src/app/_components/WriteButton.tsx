'use client'
import '../_styles/writeButton.scss'

interface WriteButtonProps {
    type?: writeButtonType
    modalOpen: () => void
}

type writeButtonType = 'tech' | 'reels' | 'feed'

export default function WriteButton(props: WriteButtonProps) {

    const renderButtonIcon = () => {
        switch (props.type) {
            case 'tech':
                return '😀'
            case 'reels':
                return '🤓'
            case 'feed':
                return '😁'
            default:
                return '🤷‍♂️'
        }
    }


    return (
        <div className="write-button-wrapper">
            <div className="button" onClick={props.modalOpen}>{renderButtonIcon()}</div>
        </div>
    )
}