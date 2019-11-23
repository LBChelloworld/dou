import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import cook from './FoodDetail.module.css'

import * as getInfo from '../../api/getInfo'

import { message } from 'antd'

export default class CookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
            collect: '',
            flag: true,
            flag1: true,
            user: {}
        }
    }
    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    componentDidMount() {
        if (this.props.id == undefined) {
            this.refs.mcon.style.marginTop = "-20px";
        }
        var id = this.props.id == undefined ? this.props.location.state.id : this.props.id;
        //获取菜单详情
        getInfo.getMenuDetail({ fid: id }).then((data) => {
            // console.log(data.data.data[0]);
            this.setState({
                list: data.data.data[0],
                collect: data.data.data[0].fcollect
            })
        }).then(() => {
            //展示用户信息
            getInfo.showUser({ uid: this.state.list.uid })
                .then((data) => {
                    this.setState({
                        user: data.data.data[0]
                    })
                    //判断是否关注
                    getInfo.ifSee({ uid: localStorage.getItem("uid"), lid: this.state.user.uid }).then((data) => {
                        if (data.data.data === 1) {
                            this.setState({
                                flag1: !this.state.flag1
                            })
                            this.refs.gz.innerText = "已关注";
                            this.refs.add.style.display = 'none';
                        }
                    })
                })

            var uid = localStorage.getItem("uid");
            //判断是否收藏过
            getInfo.searchCollect({ fid: this.state.list.fid, uid: uid }).then((data) => {
                if (data.data.data === 1) {
                    this.setState({
                        flag: !this.state.flag
                    })
                    this.refs.collect.style.backgroundImage = "url(https://cp1.douguo.com/static/nweb/images/star2.png?1)";
                    this.refs.collect.style.backgroundPosition = "7px 10px";
                    this.refs.collect.innerText = "已收藏";
                }
            });




        })
    }
    collect() {
        this.state.flag = !this.state.flag;
        var uid = localStorage.getItem("uid");
        if (uid != null) {
            if (this.state.flag) {
                this.refs.collect.style.backgroundImage = "url(https://cp1.douguo.com/static/nweb/images/star1.png?1)";
                this.refs.collect.style.backgroundPosition = "15px 10px";
                this.refs.collect.innerText = "收藏";
                this.setState({
                    collect: this.state.collect - 1
                })
                getInfo.cancelCollect({ fid: this.state.list.fid, uid: uid }).then((data) => {
                    message.warning(data.data.msg);
                })
                getInfo.updateCollect({ fid: this.state.list.fid, fcollect: this.state.collect - 1 }).then((data) => {
                    // console.log(data);
                })
            } else {
                this.refs.collect.style.backgroundImage = "url(https://cp1.douguo.com/static/nweb/images/star2.png?1)";
                this.refs.collect.style.backgroundPosition = "7px 10px";
                this.refs.collect.innerText = "已收藏";
                this.setState({
                    collect: this.state.collect + 1
                })
                getInfo.Collect({ fid: this.state.list.fid, uid: uid }).then((data) => {
                    message.success(data.data.msg);
                })
                getInfo.updateCollect({ fid: this.state.list.fid, fcollect: this.state.collect + 1 }).then((data) => {
                    // console.log(data);
                })
            }
        } else {
            message.warning('请先登录');
        }
    }
    gz() {
        var uid = localStorage.getItem("uid");
        if (uid != null) {
            this.state.flag1 = !this.state.flag1;
            if (this.state.flag1) {
                this.refs.gz.innerText = "关注";
                this.refs.add.style.display = 'inline-block';
                getInfo.cancelSee({ lid: this.state.user.uid, uid: uid }).then((data) => {
                    message.success(data.data.msg);
                })
            } else {
                this.refs.gz.innerText = "已关注";
                this.refs.add.style.display = 'none';
                getInfo.See({ lid: this.state.user.uid, uid: uid }).then((data) => {
                    message.success(data.data.msg);
                })
            }
        } else {
            message.warning('请先登录');
        }
    }
    render() {
        return (
            <div className={cook.content} ref="mcon">
                <div id={cook.left}>
                    <div id={cook.banner}>
                        <a href={this.state.list.fimg}>
                            <img src={this.state.list.fimg} />
                        </a>
                    </div>
                    <div className={cook.rinfo}>
                        <h2 className={cook.title}>
                            {this.state.list.ftitle}
                        </h2>
                        <div className={cook.vcnum}>
                            <span>{this.state.list.fview}</span>浏览
                            <span className={cook.collectnum}>{this.state.collect}</span>收藏
                            <div className={cook.operate}>
                                <div ref="collect" className={cook.btnCollect} onClick={() => this.collect()}>
                                    收藏
                                </div>
                            </div>
                        </div>
                        <div className={cook.autInfo}>
                            <NavLink className={cook.authorImg} to={{ pathname: "/userDetail", state: { id: this.state.list.uid } }}>
                                <img src={this.state.user.uhead} alt="" width="30" height="30" />
                            </NavLink>
                            <div className={cook.authorInfo}>
                                <NavLink className={cook.nickname} to={{ pathname: "/userDetail", state: { id: this.state.list.uid } }}>
                                    {this.state.user.uname}
                                </NavLink>
                            </div>
                            <div className={cook.gz} onClick={() => this.gz()}>
                                <span ref="add" className={cook.addicon}>+</span>
                                &nbsp;<span ref="gz">关注</span>
                            </div>
                        </div>
                        <p className={cook.intro}>
                            {this.state.list.fdesc}
                        </p>
                    </div>
                </div>
                <div id={cook.right}>
                    <img src="https://i1.douguo.com//upload/banner/1508322185.png" alt="" />
                </div>
            </div>
        )
    }
}
