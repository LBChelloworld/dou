import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import other from './Other.module.css'

import * as getInfo from '../../api/getInfo'
import { message } from 'antd'


export default class Other extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [], //分类
            article: '', //文章显示
            arList: [],//文章列表
            fList: [], //菜单列表
            animate: [],//动漫列表
            vip: [],//达人列表
            uArr:[],//存放用户ID
            fans:[] //存放粉丝数
        }
    }

    componentDidMount() {
        //获取食材
        var arr = [];
        var list = [];
        for (let i = 0; i < 12; i++) {
            arr.push(parseInt(Math.random() * 250));
        }
        //分类
        getInfo.getClass().then((data) => {
            // console.log(data.data.data);
            for (let i = 0; i < 12; i++) {
                list.push(data.data.data[arr[i]]);
            }
            // console.log(list);
            this.setState({
                list: list
            })
        })

        //文章
        getInfo.getArticle().then((data) => {
            this.setState({
                article: data.data.data[0],
                arList: data.data.data.splice(1)
            })
            // console.log(this.state.arList);
        })

        //菜单
        getInfo.getMenu().then((data) => {
            console.log(data.data.data.length);
            this.setState({
                fList: data.data.data
            })
        });

        //动漫
        getInfo.getAnimate().then((data) => {
            this.setState({
                animate: data.data.data.splice(0, 5)
            })
            // console.log(this.state.animate);
        })

        //达人
        getInfo.showVip().then((data) => {
            this.setState({
                vip: data.data.data
            })
        }).then(()=>{
            var uArr = [];
            this.state.vip.map((item)=>{
                uArr.push(item.uid);
            });
            this.setState({
                uArr,
            });

            this.getFans().then((data)=>{
                this.setState({
                    fans: data
                })
            });
        })
    }
    async getFans() {
        var Fans = [];
        for (let i = 0; i < this.state.uArr.length; i++) {
           var a = await  getInfo.getFans({ uid: this.state.uArr[i] })
                .then((data) => {
                    Fans.push(data.data.data);
                })
        }
        return Fans;
    }
    render() {
        return (
            <div className={other.content}>
                <div id={other.left}>
                    {/* 食材 */}
                    <div className={other.food}>
                        <h2 className={other.title}>热门食材</h2>
                        <ul className={other.materialList}>
                            {
                                this.state.list.map((item, i) => {
                                    return (
                                        <li className={other.item} key={i}>
                                            <NavLink to={{ pathname: "/shicaiDetail", state: { id: item.cid } }}>
                                                <img src={item.cimg} alt="" />
                                                {item.cname}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* 文章 */}
                    <div className={other.article}>
                        <h2 className={other.title}>精彩主题文章</h2>
                        <div className={other.hotArticle}>
                            <NavLink to={{ pathname: "/article", state: { id: this.state.article.tid } }}>
                                <img src={this.state.article.timg} className={other.cover} alt="" />
                            </NavLink>
                            <div className={other.info}>
                                <NavLink className={other.name} to={{ pathname: "/article", state: { id: this.state.article.tid } }}>
                                    {this.state.article.ttitle}
                                </NavLink>
                                <p className={other.sourAuth}>
                                    <span className={other.source}>来自：食界大咖秀</span>
                                    作者:<NavLink to={{ pathname: "/userDetail", state: { id: this.state.article.ttitle } }}>少油少盐</NavLink>
                                </p>
                            </div>
                        </div>
                        <ul className={other.alist}>
                            {
                                this.state.arList.map((item) => {
                                    return (
                                        <li className={other.arr} key={item.tid}>
                                            <strong>·</strong>
                                            <NavLink to={{ pathname: "/article", state: { id: this.state.article.tid } }}>
                                                &nbsp;{item.ttitle}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div id={other.right}>
                    {/* 达人 */}
                    <div className={other.person}>
                        <h2 className={other.title}>
                            豆果达人
                            <NavLink className={other.more} to="/userVip">
                                更多
                                <img src="https://cp1.douguo.com/static/nweb/images//more2.png?1" alt="" />
                            </NavLink>
                        </h2>
                        <ul className={other.drList}>
                            {
                                this.state.vip.map((item,i) => {
                                    return (
                                        <li key={item.uid}>
                                            <NavLink className={other.headicon} to="/userDetail">
                                                <img className={other.br} src={item.uhead} height="46" width="46" alt="颖涵的快厨房" />
                                            </NavLink>
                                            <div className={other.info}>
                                                <div>
                                                    <NavLink className={other.nickname} to="/userDetail">
                                                        {item.uname}
                                                    </NavLink>
                                                    {/* <NavLink className={other.proicon} to="/user/prodesc">
                                                        <img className={other.proimg} src="https://i1.douguo.com/upload/note/d/a/a/da84247847aebe48d9dd0fcdac88862a.png" alt="" />
                                                    </NavLink> */}
                                                </div>
                                                <p className={other.fans}>{this.state.fans[i]}粉丝</p>
                                            </div>
                                            <div className={other.gz}>
                                                <span className={other.addicon}>+</span>
                                                &nbsp;<span>关注</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* 漫画 */}
                    <div className={other.cartoon}>
                        <h2 className={other.title}>漫画</h2>
                        <ul className={other.dmList}>
                            {
                                this.state.animate.map((item) => {
                                    return (
                                        <li key={item.aid}>
                                            <strong>·</strong>
                                            <NavLink to={{ pathname: "/cartoon", state: { id: item.aid } }}>
                                                {item.atitle}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
