import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Header.module.css'
import {connect} from 'react-redux'

const Header = (props) => {
    
    return (
        <div className={style.div}>
            <div className={style.navbar}>
            <button onClick={props.onclicked} className={style.usersMenu}><i className="material-icons">menu</i></button>
            <NavLink className={style.link} activeClassName={style.activeLink} exact={true} to="/">Group A</NavLink>
            <NavLink className={style.link} activeClassName={style.activeLink} to={"/current-pv"}>Current PV</NavLink>
            <NavLink className={style.link} activeClassName={style.activeLink} to="/info">Info</NavLink>
            </div>
        </div>
    )
}
export default connect()(Header)