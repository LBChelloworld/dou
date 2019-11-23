import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import cai from './CaiContent.module.css'
import Cook from '../Cook/Cook'
import ShiCai from '../ShiCai/ShiCai'
import ShiCaiDetail from '../ShiCaiDetail/ShiCaiDetail'
import FoodDetail from '../FoodDetail/FoodDetail'
import Menu from '../Menu/Menu'

import './caiContent.css'

export default class CaiContent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={cai.wrap}>
                <Router>
                    <div id={cai.content}>
                        <div className={cai.typeTab}>
                            <div className={cai.typeHead}>
                                <NavLink to="/cook">精选</NavLink>
                                <NavLink to="/shicai">食材</NavLink>
                                <NavLink to="/menu">菜单</NavLink>
                            </div>
                        </div>
                        <Route path="/cook" component={Cook}></Route>
                        <Route path="/shicai" component={ShiCai}></Route>
                        <Route path="/shicaiDetail" component={ShiCaiDetail}></Route>
                        <Route path="/foodDetail" component={FoodDetail}></Route>
                        <Route path="/menu" component={Menu}></Route>
                        <Redirect to="/cook"></Redirect>
                    </div> 
                </Router>
            </div>
        )
    }
}
