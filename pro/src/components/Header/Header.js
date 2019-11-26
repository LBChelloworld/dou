import React, { Component } from 'react'
import header from './Header.module.css'
import { NavLink } from 'react-router-dom';

import "./header.css"

import * as getInfo from '../../api/getInfo'

export default class Header extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            one: [],
            two: [],
            three: [],
            four: [],
            uhead: '',
        }
    }
    componentDidMount() {
        if (this.props.se != undefined) {
            this.refs.txt.value = this.props.se;
        }
        switch (this.props.name) {
            case "home":
                for (let i = 0; i < document.getElementById("nav").children.length; i++) {
                    document.getElementById("nav").children[i].className = '';
                }
                document.getElementById("nav").children[0].className = 'act';
                break;
            case "cai":
                for (let i = 0; i < document.getElementById("nav").children.length; i++) {
                    document.getElementById("nav").children[i].className = '';
                }
                document.getElementById("nav").children[1].className = 'act';
                this.refs.down.style.background = "url(https://cp1.douguo.com/static/nweb/images/share-more.png)";
                break;
            case "article":
                for (let i = 0; i < document.getElementById("nav").children.length; i++) {
                    document.getElementById("nav").children[i].className = '';
                }
                document.getElementById("nav").children[2].className = 'act';
                break;
            case "me":
                for (let i = 0; i < document.getElementById("nav").children.length; i++) {
                    document.getElementById("nav").children[i].className = '';
                }
                document.getElementById("nav").children[4].className = 'act';
                break;
            case "an":
                for (let i = 0; i < document.getElementById("nav").children.length; i++) {
                    document.getElementById("nav").children[i].className = '';
                }
                document.getElementById("nav").children[3].className = 'act';
                break;
            default:
                break;
        }
        getInfo.getClass().then((data) => {
            this.setState({
                one: data.data.data.splice(55, 7),
                two: data.data.data.splice(55, 7),
                three: data.data.data.splice(74, 7),
                four: data.data.data.splice(193, 7),
            })
        })
        if (this.props.uid == null && localStorage.getItem("uid")==null) {
            this.refs.uhead.style.display = 'none';
            this.refs.login.style.display = 'block';
        } else {
            var uid = this.props.uid == null ? localStorage.getItem("uid") : this.props.uid;
            getInfo.showUser({ uid:uid}).then((data) => {
                this.setState({
                    uhead: data.data.data[0].uhead
                })
            })
            this.refs.uhead.style.display = 'block';
            this.refs.login.style.display = 'none';
        }

    }
    hover() {
        this.refs.down.style.background = "url(https://cp1.douguo.com/static/nweb/images/share-more.png)";
        this.refs.ctip.style.display = "block";
    }
    leave() {
        if (this.props.name !== 'cai') {
            this.refs.down.style.background = "url(https://cp1.douguo.com/static/nweb/images/more1-1.png)";
        }
        this.refs.ctip.style.display = "none";
    }
    enter() {
        this.refs.ctip.style.display = "block";
    }
    out() {
        this.refs.ctip.style.display = "none";
    }
    search() {
        // window.location.href = encodeURI('/search?name=' + this.refs.txt.value);
        this.props.props.history.push({pathname:"/search",state:{name:this.refs.txt.value}})
    }
    close(){
        if (this.props.name !== 'cai') {
            this.refs.down.style.background = "url(https://cp1.douguo.com/static/nweb/images/more1-1.png)";
        }
        this.refs.ctip.style.display = "none";
    }
    over(){
        if(localStorage.getItem("uid")!=null){
            this.refs.myedit.style.display = "block";
        }
    }
    exit(){
        this.refs.myedit.style.display = "none";
    }
    loginOut(){
        localStorage.removeItem("uid");
    }
    render() {
        return (
            <div id={header.header}>
                <div className={header.header_container}>
                    <h1 className={header.logo}>
                        <img src="https://cp1.douguo.com/static/nweb/images/logo3.png" alt="" />
                    </h1>
                    <ul className={header.nav} id="nav">
                        <li className={header.act}>
                            <NavLink to="/home">首页</NavLink>
                        </li>
                        <li onMouseOver={() => this.hover()} onMouseOut={() => this.leave()}>
                            <NavLink to="/cai">菜谱<span ref="down" className={header.naw}></span></NavLink>
                            <div ref="ctip" onMouseOver={() => this.enter()} onMouseOut={() => this.out()} className={header.ctip}>
                                <span className={header.arwwj}> </span>
                                <div className={header.ctab}>
                                    <NavLink to="/caipu">
                                        <img src="https://cp1.douguo.com/static/nweb/images/jx3.png" alt="" /> 精选
                                    </NavLink>
                                    <NavLink to="/caidan">
                                        <img src="https://cp1.douguo.com/static/nweb/images/menu3.png" alt="" /> 菜单
                                    </NavLink>
                                </div>
                                <div className={header.cblok}>
                                    <div className={header.citem}>
                                        <span>肉类</span>
                                        <div className={header.imublo} onClick={()=>this.close()}>
                                            {
                                                this.state.one.map((item) => {
                                                    return (
                                                        <NavLink to={{ pathname: "/shicaiDetail", state: { id: item.cid } }} key={item.cid}>
                                                            {item.cname}
                                                        </NavLink>
                                                    )
                                                })
                                            }
                                            <NavLink className={header.imore} to="/shicai">
                                                <span>更多</span>
                                                <img src="https://cp1.douguo.com/static/nweb/images/more2.png" alt="" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className={header.citem}>
                                        <span>鲜果</span>
                                        <div className={header.imublo} onClick={()=>this.close()}>
                                            {
                                                this.state.two.map((item) => {
                                                    return (
                                                        <NavLink to={{ pathname: "/shicaiDetail", state: { id: item.cid } }} key={item.cid}>
                                                            {item.cname}
                                                        </NavLink>
                                                    )
                                                })
                                            }

                                            <NavLink className={header.imore} to="/shicai">
                                                <span>更多</span>
                                                <img src="https://cp1.douguo.com/static/nweb/images/more2.png" alt="" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className={header.citem}>
                                        <span>蔬菜</span>
                                        <div className={header.imublo} onClick={()=>this.close()}>
                                            {
                                                this.state.three.map((item) => {
                                                    return (
                                                        <NavLink to={{ pathname: "/shicaiDetail", state: { id: item.cid } }} key={item.cid}>
                                                            {item.cname}
                                                        </NavLink>
                                                    )
                                                })
                                            }
                                            <NavLink className={header.imore} to="/shicai">
                                                <span>更多</span>
                                                <img src="https://cp1.douguo.com/static/nweb/images/more2.png" alt="" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className={header.citem}>
                                        <span>豆类</span>
                                        <div className={header.imublo} onClick={()=>this.close()}>
                                            {
                                                this.state.four.map((item) => {
                                                    return (
                                                        <NavLink to={{ pathname: "/shicaiDetail", state: { id: item.cid } }} key={item.cid}>
                                                            {item.cname}
                                                        </NavLink>
                                                    )
                                                })
                                            }
                                            <NavLink className={header.imore} to="/shicai">
                                                <span>更多</span>
                                                <img src="https://cp1.douguo.com/static/nweb/images/more2.png" alt="" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className={header.cmore}>
                                    <NavLink to="/fenlei" >查看全部分类
                                        <img src="https://cp1.douguo.com/static/nweb/images/more2.png" alt="" />
                                    </NavLink>
                                </div>

                            </div>
                        </li>
                        <li>
                            <NavLink to="/article">主题站</NavLink>
                        </li>
                        <li>
                            <NavLink to="/animate">动漫</NavLink>
                        </li>
                        <li>
                            <NavLink to="/medicine">药品</NavLink>
                        </li>
                    </ul>
                    <div className={header.search}>
                        <input type="text" ref="txt" className={header.sput} placeholder="搜索菜谱、菜单、食材、用户" />
                        <input type="submit" value="" className={header.lib} onClick={() => this.search()}></input>
                    </div>
                    <div className={header.release}>
                        <span className={header.reBtn}>发布</span>
                    </div>
                    <div className={header.myinfo} onMouseOver={()=>{this.over()}} onMouseOut={()=>{this.exit()}}>
                        <div ref="login">
                            <NavLink className={header.login} to="/login"> 登录 </NavLink>
                            |
                            <NavLink className={header.register} to="/register"> 注册 </NavLink>
                        </div>

                        <NavLink className={header.headicon} ref="uhead" to="/my">
                            <img src={this.state.uhead} alt="" />
                        </NavLink>
                        <div className={header.myedit} ref="myedit">
                            <span className={header.arwwj}> </span>
                            <NavLink to="/message">消息提醒</NavLink>
                            <NavLink to="/mycollect">我的收藏</NavLink>
                            <NavLink to="/recipe">草稿箱</NavLink>
                            <NavLink to="/setting">账号设置</NavLink>
                            <NavLink to="/" onClick={()=>this.loginOut()}>退出</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
