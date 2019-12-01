import React, {useState, useRef, useEffect} from 'react'
import {connect } from 'react-redux'
import PVChatMessage from './PVChatMessage'
import {addGroupChat} from '../redux/actions'
import uuid from 'uuid'
import moment from 'moment'
import SendMessageForm from './SendMessageForm'
import style from './CurrentChat.module.css'

const GroupChat = (props) => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    })

    const [message, setMessage] = useState('')
    
    const onInputChange  = (e) => {
        let message = e.target.value
        setMessage(message)
    }
    const onSendButton = () => {
        props.dispatch(addGroupChat({text: message,id: uuid(),authorName: props.author, date: moment()}))
        setMessage('')
    }
    return(
        <div className={style.chatBackground}>
            <div ref={ref} className={style.chatScreen}>
            <div className={style.firstDate}>{moment(props.messages[0].date).format('MMMM d')}</div>
                {props.messages.map(message => <PVChatMessage authorName={message.authorName} key={message.id} text={message.text} />)}
            </div>
            <SendMessageForm message={message} onClick={onSendButton} onChange={onInputChange} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return{
        messages: state.groupChats,
        author: state.profile.userName
    }
}

export default connect(mapStateToProps)(GroupChat)