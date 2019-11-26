import React, { Component } from 'react'
import com from './L_Com.module.css'
import login from './Login.module.css'
import { NavLink } from 'react-router-dom'
import * as api from '../api/getInfo'
import { message} from 'antd';
import 'antd/dist/antd.css'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag1: false,
            flag2: false,
            flag3: false,
            str: "",
            ...this.initState()
        }
    }

    getRandom(max, min, num) {          //生成 1 个或者多个随机数，如果为多个则存放在数组中
        const asciiNum = ~~(Math.random() * (max - min + 1) + min)
        if (!Boolean(num)) {
            return asciiNum
        }
        const arr = []
        for (let i = 0; i < num; i++) {
            arr.push(this.getRandom(max, min))
        }
        return arr
    }

    initState() {                      //随机出四个 字母或者数字在 state 初始化
        return {
            data: this.getRandom(109, 48, 4),
            rotate: this.getRandom(75, -75, 4),
            fz: this.getRandom(18, 22, 4),
            color: [this.getRandom(100, 255, 3), this.getRandom(100, 255, 4), this.getRandom(100, 255, 3), this.getRandom(100, 255, 3)]
        }
    }
    yan() {
        this.state.flag2 = true
        if (this.refs.nameValue.value == "") {
            return;
        } else if ((/^[1]([3-9])[0-9]{9}$/.test(this.refs.nameValue.value))) {
            document.getElementById("captcha").style.visibility = "visible";
        } else {
            return;
        }
    }
    name() {
        if (this.refs.nameValue.value == "") {
            this.state.flag1 = false
            return;
        }
        if (!(/^[1]([3-9])[0-9]{9}$/.test(this.refs.nameValue.value))) {
            this.refs.err1.style.display = "block"
            this.state.flag1 = false
        } else {
            this.refs.err1.style.display = "none"
            this.state.flag1 = true
        }
    }
    ma() {
        this.state.str = this.refs.four.children[0].innerText
        this.state.str += this.refs.four.children[1].innerText
        this.state.str += this.refs.four.children[2].innerText
        this.state.str += this.refs.four.children[3].innerText
        if (this.refs.yan.value == "") {
            return
        }
        else if (this.refs.yan.value.toUpperCase() == this.state.str.toUpperCase()) {
            document.getElementsByClassName("erryan")[0].style.display = "none"
            this.state.flag3 = true
        }
        else {
            document.getElementsByClassName("erryan")[0].style.display = "inline-block"
            this.state.flag3 = false
        }
    }
    login() {
        if (this.state.flag1 && this.state.flag2 && this.state.flag3) {
            let unum = this.refs.nameValue.value
            let upwd = this.refs.pwd.value
            api.getlogin({ unum: unum, upwd: upwd }).then((data) => {
                if(data.data.code=="200"){
                    message.success('登陆成功');
                    // window.location.href="/home"
                    console.log(this.props);
                    this.props.history.push({pathname:"/home",state:{uid:data.data.result[0].uid}});
                    localStorage.setItem("uid",data.data.result[0].uid)
                }else {
                    message.error('用户名或密码错误');
                }
            })
        }else{
            message.warning("错误信息无法登陆");
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

                <div id={login.main}>
                    {/* 左侧图片 */}
                    <div className={login.bgsi}>
                        <div className={login.shic}><img src="https://passport.douguo.com/public/img/web/sinin.png" alt="豆果美食" /></div>
                    </div>
                    <div className={login.silo}>
                        <div className={login.wizh1}>
                            <h2>登录</h2>
                            <span>
                                <NavLink to="/register">去注册 ></NavLink>
                            </span>
                        </div>
                        {/* 登录板 */}
                        <div className={login.logone}>
                            <div className={com.iput}>
                                <input id={login.username} placeholder="请输入手机号" type="text" className={com.dlsi} ref="nameValue" onBlur={() => this.name()} />
                                <div className={com.focus_text} ref="err1">请输入正确的手机号</div>
                            </div>

                            <div className={com.iput} onFocus={() => this.yan()}>
                                <input id={login.password} placeholder="请输入密码" type="password" className={com.dlsi} ref="pwd" />
                            </div>
                            {/* 验证码 */}
                            <div id="captcha" className={com.tymm}
                                // 移入移出 -换一张
                                onBlur={() => this.ma()}
                                onMouseEnter={() => this.setState({ refresh: true })}
                                onMouseLeave={() => { this.setState({ refresh: false }) }}
                            >
                                <input id={com.code} className={com.yzma} type="text" placeholder="请输入验证码" ref="yan" />
                                <div id={com.bgi}
                                    onClick={() => {
                                        this.setState({ ...this.initState(), refresh: false })
                                        return false;
                                    }}
                                    ref="four"
                                >
                                    {/* 4位验证码展示 */}
                                    {this.state.data.map((v, i) =>
                                        <div
                                            key={i}
                                            className={com.itemStr}
                                            style={{
                                                transform: `rotate(${this.state.rotate[i]}deg)`,
                                                fontSize: `${this.state.fz[i]}px`,
                                                color: `rgb(${this.state.color[i].toString()})`
                                            }}
                                        >
                                            {String.fromCharCode(v > 57 && v < 84 ? v + 7 : (v < 57 ? v : v + 13))}
                                        </div>
                                    )}
                                </div>
                                {/* 换一张点击功能 */}
                                {this.state.refresh ?
                                    <div className={com.see}
                                        onClick={() => {
                                            this.setState({ ...this.initState(), refresh: false })
                                        }}
                                    > 换一张</div> : null}
                            </div>
                            <div className={com.forg}>
                                <a href="/forget">忘记密码 &gt;</a>
                                <span id={com.erryan} className="erryan">验证码错误</span>
                            </div>
                            <div className={com.mtsu}>
                                <button id="login" className={com.btnrlo} onClick={() => this.login()}>登录</button>
                            </div>
                            <div className={com.otth}>
                                <h3>使用社交账号登录豆果美食</h3>
                                <ul id="ds">
                                    <li>
                                        <a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=217921&scope=all&state=a31b69c8a28046ae962aebc75b701722&redirect_uri=http%3A%2F%2Fpassport.douguo.com%2Foauth%2FsetAccessToken%3Ftype%3Dtx%26ref%3D"><i className={com.ic_txzh}></i>腾讯账号</a>
                                        <a href="https://api.weibo.com/oauth2/authorize?client_id=1065121832&scope=all&state=91a6a647350d35ca587ad4f1742f5151&redirect_uri=http%3A%2F%2Fpassport.douguo.com%2Foauth%2FsetAccessToken%3Ftype%3Dsina%26ref%3D" className={com.ml36}><i className={com.ic_xlwb}></i>新浪微博</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
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
            
            </div>
        )
    }
}
