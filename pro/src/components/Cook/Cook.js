import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cook from './Cook.module.css'

import * as getInfo from '../../api/getInfo'

export default class Cook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            // arr: [],//用户id
            uList: [] //用户信息
        }
        this.page = 0;
        this.arr = [];//存放菜单数据
        this.uList = [];//存放用户id
        this.uarr = [];//存放用户数据
        this.flag = true;
    }
    componentDidMount() {
        var uList = [];
        for (let i = 0; i < 24; i++) {
            uList.push({});
        }
        this.setState({
            uList: uList
        })
        getInfo.pageMenu({ page: this.page }).then((data) => {
            this.setState({
                list: data.data.data
            })
        }).then(() => {
            this.state.list.map((item) => {
                this.uList.push(item.uid)
            })
            this.getUser().then((data) => {
                this.setState({
                    uList: data
                })
            })
            
        });
        window.onscroll = () => {
            if (window.location.pathname == '/cook' && this.flag) {
                if (document.documentElement.scrollTop > document.documentElement.scrollHeight - 1000) {
                    this.arr = JSON.parse(JSON.stringify(this.state.list));
                    this.uarr = JSON.parse(JSON.stringify(this.state.uList));
                    ++this.page;
                    var uList = [];
                    var uarr = JSON.parse(JSON.stringify(this.uarr));
                    for (let i = 0; i < 24; i++) {
                        uList.push({});
                    }
                    var a = uarr.concat(uList);
                    this.setState({
                        uList: a
                    })
                    getInfo.pageMenu({ page: this.page }).then((data) => {
                        if(data.data.data.length===24){
                            var newArr = this.arr.concat(data.data.data);
                            this.setState({
                                list: newArr
                            })
                            // console.log(this.state.list.length);
                        }else{
                            this.flag = false;
                        }
                        
                    }).then(() => {
                        this.state.list.map((item) => {
                            this.uList.push(item.uid)
                        })
                        this.getUser().then((data) => {
                            var newUarr = this.uarr.concat(data)
                            this.setState({
                                uList: newUarr
                            })
                        })
                    })
                    console.log(this.state.uList)
                }
            }

        }

    }
    async getUser() {
        var uInfo = [];
        for (let i = 0; i < this.uList.length; i++) {
            var a = await getInfo.showUser({ uid: this.uList[i] })
                .then((data) => {
                    uInfo.push(data.data.data[0]);
                })
            if (a != undefined) {
                uInfo.push(a[0]);
            }
        }
        return uInfo;
    }
    render() {
        return (
            <div>
                <h2 className={cook.title}>精选推荐菜谱</h2>
                <ul id={cook.jxlist}>
                    {
                        this.state.list.map((item, i) => {
                            return (
                                <li className={cook.item} key={item.fid}>
                                    <NavLink className={cook.cover} to={{ pathname: "/foodDetail", state: { id: item.fid } }}>
                                        <img src={item.fimg} alt="" />
                                    </NavLink>
                                    <div className={cook.relative}>
                                        <NavLink className={cook.cookname} to={{ pathname: "/foodDetail", state: { id: item.fid } }}>
                                            {item.ftitle}
                                        </NavLink>
                                        <div className={cook.pinfo}>
                                            <NavLink to="/userDetail" className={cook.author}>
                                                <img src={this.state.uList[i].uhead} alt="" />
                                                &nbsp;&nbsp;&nbsp;{this.state.uList[i].uname}
                                            </NavLink>
                                            <p className={cook.viewColl}>
                                                <span className={cook.view}>
                                                    {item.fview}
                                                </span>
                                                <span className={cook.collect}>
                                                    {item.fcollect}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
