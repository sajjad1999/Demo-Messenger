import React from 'react'
import style from './SideBarMenu.module.css'

const SideBarMenu = (props) => {
    
    return (
        <div className={style.wideDiv}>
            <div className={style.buttonContainer}><button onClick={props.onclicked}>
            {props.show ? <i class="material-icons">cancel</i> : <i className="material-icons">menu</i>}
            </button></div>
            <div className={style.item}><i class="material-icons">person_pin</i>{props.show && <span>home</span>}</div>
            <div className={style.item}><i class="material-icons">home</i>{props.show && <span>setting</span>}</div>
            <div className={style.item}><i class="material-icons">call</i>{props.show && <span>calls</span>}</div>
        </div>
    )
}

export default SideBarMenu