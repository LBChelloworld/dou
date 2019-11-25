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
                {/* 头部展示 */}
                <div className={com.loheader}>
                    <div className={com.htop}>
                        <div className={com.hlogo}><a title="豆果美食" href="/index">豆果美食</a></div>
                    </div>
                </div>

                {/* main展示 */}
                
                    {/* 右侧登录 */}
                    <Router>
                        <div>
                            <Switch>
                                <Route path="/login" component={Login}></Route>
                                <Route path="/register" component={Register}></Route>
                                <Redirect to='/login'></Redirect>
                            </Switch>
                        </div>
                    </Router>
                {/* 底部展示 */}
                <div id={com.footer}>
                    <div className={com.foot}>
                        <div className={com.clink}>
                            <a href="http://www.douguo.com/about.html" rel="nofollow" target="_blank">关于豆果</a> ·
                            <a href="http://www.douguo.com/hr.html" rel="nofollow" target="_blank">在豆果工作</a> ·
                            <a href="http://www.douguo.com/user/feedback" rel="nofollow" target="_blank">意见反馈</a> ·
                            <a href="http://www.douguo.com/links.html" target="_blank">友情链接</a> ·
                            <a href="http://www.douguo.com/allrecipes/" target="_blank">菜谱大全</a> ·
                            <a href="http://www.douguo.com/brand" target="_blank">品牌馆</a>
                        </div>
                    </div>
                    <div className={com.cght}>
                        ©2009-2015 <a href="http://www.douguo.com" target="_blank">北京豆果信息技术有限公司</a> <a href="http://www.miibeian.gov.cn" target="_blank" rel="nofollow">京ICP证111032号</a> 京公网安备11010102001133号 京网文[2014]0774-174号
                    </div>

                </div>
            </div >
        )
    }
    
}
