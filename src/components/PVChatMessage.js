import React from 'react' 
import style from './PVChatMessage.module.css'
import moment from 'moment'

const PVChatMessage = (props) => {
    const name = props.authorName === 'You' ? style.ownMessageDiv : style.messageDiv
    const messageName = props.authorName === 'You' ? style.ownMessage : style.message
    return (
        <div className={name}>
            {props.authorName !== 'You' && <span className={style.userInitial}>{props.authorName[0]}</span>}
            <div className={messageName}>    
                <div className={props.authorName === 'You' ? style.ownMessageText : style.messageText}>
                    <p>{props.text}</p>
                </div>
                <div className={props.authorName === 'You' ? style.ownMessageDate : style.messageDate}><div className={style.dateText}>{moment(props.date).format('hh:mm')}</div></div>
            </div>
            {props.authorName === 'You' && <span className={style.userInitial}>{props.authorName[0]}</span>}
        </div>
    )
}

export default PVChatMessage