import React, { Component } from 'react'
import all from "./MyAll.module.css"
import * as api from '../../../api/getInfo'
import {NavLink} from "react-router-dom"
export default class MyCollect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            flist: [],
        }
    }

    render() {
        return (
            <div>
                <ul className={all.cooklist}>
                    {
                        this.state.flist.map((item) => {
                            return (
                                <li key={item.fid}>
                                    <NavLink className={all.fimg} to={{pathname:"/foodDetail",state:{id:item.fid}}}>
                                        <img src={item.fimg} alt={item.ftitle} />
                                    </NavLink>
                                    <a className={all.ftitle}>
                                        {item.ftitle}
                                    </a>
                                    <p><i className={all.fview}></i><span>{item.fview}</span><i className={all.fcollect}></i><span>{item.fcollect}</span></p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        var uid = localStorage.getItem("uid")
        api.selectCollect({ uid: uid }).then((data) => {
            data.data.data.map((item, i) => {
                this.state.arr.push(item.fid)
            })
        }).then(()=>{
        this.getCollect()
                .then((data) => {
                    this.setState({
                        flist: data
                    })
                })})
    }
    async getCollect() {
        let clist = [];
        for (let i = 0; i < this.state.arr.length; i++) {
            var a = await api.detail({ fid: this.state.arr[i] }).then((data) => {
                clist.push(data.data.data[0])
            })
        }
        return clist;
    }
}
