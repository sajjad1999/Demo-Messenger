import React from 'react'
import styles from './UsersListItem.module.css'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const UsersListItem = (props) => {
    const isCurrent = props.id === props.currentId
    return (
        <NavLink activeClassName={styles.activeLink} className={styles.link} to={'current-pv'}>
        <li className={ !isCurrent ? styles.li : styles.currentLi} onClick={props.onClick}>
            <span className={styles.userInitial}>{props.name[0]}</span>
            <span>{props.name}</span>
        </li>
        </NavLink>
    )
}
const mapStateToProps = (state,props) => {
    return{
        currentId: state.currentChatId
    }
}

export default connect(mapStateToProps)(UsersListItem)