import React, { Component } from 'react'
import search from './Search.module.css'
import { NavLink } from 'react-router-dom';

import * as getInfo from '../../api/getInfo'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            name: this.props.name,
            arr: [],
            uList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        }
    }
    componentDidMount() {
        getInfo.Search({ ftitle: "" + this.state.name + "" }).then((data) => {
            var arr = data.data.data;
            if (arr.length > 24) {
                arr.splice(0, 24);
            }
            this.setState({
                list: arr
            })
        }).then(() => {
            var uList = [];
            this.state.list.map((item) => {
                // console.log(item.uid);
                uList.push(item.uid)
            })
            this.setState({
                arr: uList
            })

            this.getUser().then((data) => {
                this.setState({
                    uList: data
                })
            })

        });
    }
    async getUser() {
        var uInfo = [];
        for (let i = 0; i < this.state.arr.length; i++) {
            var a = await getInfo.showUser({ uid: this.state.arr[i] })
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
            <div className={search.content}>
                <h2 className={search.head}>
                    "{this.state.name}"的相关菜谱
                </h2>
                <ul className={search.cookList}>
                    {
                        this.state.list.map((item, i) => {
                            return (
                                <li key={item.fid}>
                                    <NavLink to={{ pathname: "/foodDetail", state: { id: item.fid } }}>
                                        <img src={item.fimg} alt="" className={search.cookImg} />
                                    </NavLink>
                                    <div className={search.cookInfo}>
                                        <NavLink className={search.cookname} to={{ pathname: "/foodDetail", state: { id: item.fid } }}>{item.ftitle}</NavLink>
                                        <div className={search.autNum}>
                                            <a className={search.headicon} href="/userDetail">
                                                <img src={this.state.uList[i].uhead} alt={this.state.uList[i].uname} />
                                                <span className={search.uname}>{this.state.uList[i].uname}</span>
                                            </a>
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
