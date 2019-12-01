import React, {useState} from 'react';
import Router from './router/Router';
import {connect} from 'react-redux'
import SideBarMenu from './components/SideBarMenu';
import style from './App.module.css'


const App = (props) => {

  const [show,setShow] = useState(false)
  let className = !show ? style.wideMenu : style.smallMenu
  return (
    <div className={style.div} >
      <div className={style.router}>
      <Router/>
      </div>
      <div  className={className}>
      <SideBarMenu show={show} onclicked={() => setShow(!show)}/>
      </div>
      
      
    </div>
  )
}

export default connect()(App);
