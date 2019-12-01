import React, {useState, useRef, useEffect} from 'react'
import PVChatMessage from './PVChatMessage'
import {connect} from 'react-redux'
import {addPVMessage} from '../redux/actions'
import uuid from 'uuid'
import moment from 'moment'
import style from './CurrentChat.module.css'
import SendMessageForm from './SendMessageForm'

const CurrentChat = (props) => {
    const [message, setMessage] = useState('')
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    })
    
    const onInputChange  = (e) => {
        let message = e.target.value
        setMessage(message)
    }
    const onSendButton = () => {
        props.dispatch(addPVMessage(props.id,{ author: props.author ,text: message,id: uuid(), date: moment()}))
        setMessage('')
    }
    let chat = null 
    if(props.messages.length === 0){
        chat = <div className={style.noChat}><p>No Chat Yet ...</p></div>
    }else{
        chat = props.messages.map(message => <PVChatMessage date={message.date} authorName={message.author} key={message.id} text={message.text}/>)
    }
    return(
        <div id='id1' className={style.chatBackground}>
            <div ref={ref} className={style.chatScreen}>
            {props.messages.length !== 0 && <div className={style.firstDate}>{moment(props.messages[0].date).format('MMMM d')}</div>}
                {chat}
            </div>
            <SendMessageForm message={message} onClick={onSendButton} onChange={onInputChange} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        messages: state.users.find(user => user.id === state.currentChatId).pvChats,
        id: state.users.find(user => user.id === state.currentChatId).id,
        author: state.profile.userName

    }
}

export default connect(mapStateToProps)(CurrentChat)