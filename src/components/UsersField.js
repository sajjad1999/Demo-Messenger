import React from 'react'
import UserSearch from './UserSearch'
import UsersList from './UsersList'
import styles from './UsersField.module.css'
import {connect} from 'react-redux'

 const UsersField = (props) => {
    return (
        <div className={styles.userFieldBackground}>
            <UserSearch/>
            <UsersList onclicked={props.onclicked}/>
        </div>
    )
 }
 const mapStateToProps = (state) => {
     return {
         show: state.showUsersField
     }
 }

 export default connect(mapStateToProps)(UsersField)