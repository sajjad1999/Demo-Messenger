import React from 'react'
import {connect} from 'react-redux'
import {addFilterWord} from '../redux/actions'
import styles from './UserSearch.module.css'

const UserSearch = (props) => {
    const onInputChange = (e) => {
        props.dispatch(addFilterWord(e.target.value))
    }
    return (
        <div className={styles.inputDiv}>
            <div className={styles.inputContainer}>
                <input value={props.filterWord} placeholder="search ..." type="text" onChange={onInputChange}/>
                <i class="material-icons">search</i>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        filterWord: state.filterWord
    }
}

export default connect(mapStateToProps)(UserSearch)