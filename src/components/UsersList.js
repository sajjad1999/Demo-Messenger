import React from 'react'
import {connect} from 'react-redux'
import getFilteredUsers from '../redux/filteredUsers'
import UsersListItem from './UsersListItem'
import {addCurrentChatId ,addFilterWord} from '../redux/actions'
import styles from './UsersList.module.css'


const UsersList = (props) => {
    const onClick = (id) => {
        props.dispatch(addCurrentChatId(id))
        props.onclicked()
        props.dispatch(addFilterWord(''))
    }

    return(
        <ul className={styles.ul}>
            {props.users.map(user => <UsersListItem key={user.id} id={user.id} name={user.name} onClick={() => {onClick(user.id)}} />)}
        </ul>
    )
}

const mapStateToProps = (state, props) => {
    return {
        users: getFilteredUsers(state.users, state.filterWord)
    }
}

export default connect(mapStateToProps)(UsersList)