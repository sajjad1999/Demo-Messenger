import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GroupChat from '../components/GroupChat'
import CurrentChat from '../components/CurrentChat'
import Info from '../components/Info'
import Header from '../components/Header'
import style from './Router.module.css'
import UsersField from '../components/UsersField'
import {connect} from 'react-redux'
import BackDrop from '../components/BackDrop'

class Router extends React.Component{
        state = {
            show: false
        }
    render(){
    return (
    <div>
        <BrowserRouter>
            <Header onclicked={() => this.setState((preState) => ({...preState,show: !preState.show}))}/>
            <BackDrop onclicked={() => this.setState({show: false})} show={this.state.show}/>
            <div className='row' style={{marginLeft: '0',marginRight: '0'}}>
            <div className={this.state.show ? style.usersField + ' ' + style.open : style.usersField + ' ' + style.close} >
                <UsersField onclicked={() => this.setState({show: false})}/>
            </div>
            <div className={style.chat} style={{padding: '0',margin: '0'}}>
            <Switch>
                <Route path="/current-pv" component={CurrentChat}/>
                <Route path="/" component={GroupChat} exact={true} />
                <Route path="/info" component={Info} />
            </Switch>
            </div>
            </div>
        </BrowserRouter>
    </div>
)}}
export default connect()(Router)