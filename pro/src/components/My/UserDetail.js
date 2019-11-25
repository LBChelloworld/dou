import React, { Component } from 'react'
import us from './UserDeatil.module.css'
import * as api from '../../api/getInfo'
import { Switch, BrowserRouter as Router, Route, NavLink, Redirect} from "react-router-dom"
import Myall from './MyDetail/MyAll'
import mycollect from './MyDetail/MyCollect'
import myfans from './MyDetail/MyFans'
import mysee from './MyDetail/MySee'
import active from './Active.css'
export default class UserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {
                uhead: "",
                uname: "",
                uadress: "",
                udesc: ""
            },
            fansNum: "",
            seeNum: ""
        }
    }
    render() {
        return (
            <div>
                <div id={us.content}>
                    
                        <div className={us.person}>
                            <a href="/my" className={us.personImg}>
                                <img src={this.state.obj.uhead} className={us.uhead} />
                            </a>
                            <div className={us.info}>
                                <a href="/my" className={us.nickname}>{this.state.obj.uname}</a>
                                <p className={us.sex}><i className={us.female}></i>{this.state.obj.uaddress}</p>
                                <p className={us.intro}>
                                    <span>{this.state.obj.udesc} </span>
                                    <a className={us.edit} href=""> 修改</a>
                                </p>
                            </div>
                            <div className={us.right}>
                                <div className={us.fav}>
                                    <div className={us.left}>
                                        <a href="/mysee">
                                            <p className={us.count}>{this.state.fansNum}</p>
                                            <p className={us.text}>关注</p>
                                        </a>
                                    </div>
                                    <div className={us.left}>
                                        <a href="/myfans">
                                            <p className={us.count}>{this.state.seeNum}</p>
                                            <p className={us.text}>粉丝</p>
                                        </a>
                                    </div>
                                    <div className={us.left}>
                                        <a href="">
                                            <p className={us.count}>0{}</p>
                                            <p className={us.text}>菜谱</p>
                                        </a>
                                    </div>
                                    <div className={us.left}>
                                        <a href="">
                                            <p className={us.count}>0{}</p>
                                            <p className={us.text}>笔记</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Router>
                        <div className={us.typeHead}>
                            <NavLink to="/myall">概览</NavLink>
                            <NavLink to="/mycollect">收藏</NavLink>
                            <NavLink to="/mysee">关注</NavLink>
                            <NavLink to="/myfans">粉丝</NavLink>
                        </div>
                        <Switch>
                            <Route path="/myall" component={Myall}></Route>
                            <Route path="/mycollect" component={mycollect}></Route>
                            <Route path="/mysee" component={mysee}></Route>
                            <Route path="/myfans" component={myfans}></Route>
                            <Redirect to="/myall"></Redirect>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
    componentDidMount() {
        //获取个人信息
        var uid = localStorage.getItem("uid")
        api.showUser({ uid: uid }).then((data) => {
            this.setState({ obj: { uhead: data.data.data[0].uhead, uname: data.data.data[0].uname, uaddress: data.data.data[0].uaddress, udesc: data.data.data[0].udesc } })
        })

        //关注数
        api.getSeeNum({ uid: uid }).then((data) => {
            this.setState({ fansNum: data.data.data })
        })

        //粉丝数
        api.getFansNum({ uid: uid }).then((data) => {
            this.setState({ seeNum: data.data.data })
        })
    }
}
