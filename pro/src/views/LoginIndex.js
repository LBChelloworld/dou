import React, { Component } from 'react'
import com from './L_Com.module.css'
import login from './Login.module.css'
import Register from "./Register"
import Login from "./Login"
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import * as api from '../api/getInfo'
export default class LoginIndex extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                
                {/* main展示 */}
                
                    {/* 右侧登录 */}
                    <Router>
                        <div>
                            <Switch>
                                <Route path="/login" component={Login}></Route>
                                <Route path="/register" component={Register}></Route>
                                {/* <Redirect to='/login'></Redirect> */}
                            </Switch>
                        </div>
                    </Router>
               </div >
        )
    }
    
}
