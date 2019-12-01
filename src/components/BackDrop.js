import React from 'react'
import style from './BackDrop.module.css'

const BackDrop = (props) => (
    props.show ? <div onClick={props.onclicked} className={style.div}>{props.children}</div> : null
)

export default BackDrop