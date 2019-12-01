import React from 'react'
import style from './SendMessageForm.module.css'

const SendMessageForm = (props) => {
    return (
        <div className={style.div}>
            <input value={props.message} onChange={props.onChange} placeholder="write a message..." type='text'/>
            <button disabled={props.message.length === 0} onClick={props.onClick} >
                <i className={`${style.icon} material-icons`}>send</i>
            </button>
        </div>
    )
}

export default SendMessageForm