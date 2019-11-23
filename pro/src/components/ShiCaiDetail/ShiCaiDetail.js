import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

import detail from './ShiCaiDetail.module.css'
import * as getInfo from '../../api/getInfo'

export default class ShiCaiDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
            arr: [],
            flag: true
        }
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    componentWillReceiveProps(){
        let id = this.props.id == undefined ? this.props.location.state.id : this.props.id;
        getInfo.getFoodDetail({ cid: id }).then((data) => {
            this.setState({
                list: data.data.data[0]
            })
            console.log(this.state.list);
        }).then(() => {
            var title = this.state.list.cname.split("")[0]
            getInfo.Search({ ftitle: title }).then((data) => {
                this.setState({
                    arr: data.data.data
                })
            })
        })
    }
    componentDidMount() {
        console.log( this.props.id);

        if(this.props.location){
            this.refs.dc.style.marginTop = 0;
        }
        let id = this.props.id == undefined ? this.props.location.state.id : this.props.id;
        getInfo.getFoodDetail({ cid: id }).then((data) => {
            this.setState({
                list: data.data.data[0]
            })
        }).then(() => {
            var title = this.state.list.cname.split("")[0]
            getInfo.Search({ ftitle: title }).then((data) => {
                this.setState({
                    arr: data.data.data
                })
            })
        })
    }
    tap() {
        this.refs.one.className = 'active';
        this.refs.two.className = '';
        this.refs.nutrition.style.display = "none";
        this.refs.done.style.display = "block";
    }
    tap2() {
        this.refs.one.className = '';
        this.refs.two.className = 'active';
        this.refs.nutrition.style.display = "block";
        this.refs.done.style.display = "none";
    }
    render() {
        return (
            <div className={detail.content} ref="dc">
                <div className={detail.material}>
                    <div className={detail.materialImg}>
                        <img src={this.state.list.cimg} alt="" />
                    </div>
                    <div className={detail.desMaterial}>
                        <h3>{this.state.list.cname}</h3>
                    </div>
                </div>
                <div className={detail.typeTab}>
                    <div className={detail.typeHead}>
                        <a ref="one" className={detail.active} onClick={() => this.tap()}>做法大全</a>
                        <a ref="two" onClick={() => this.tap2()} >营养功效</a>
                    </div>
                </div>
                <div>
                    <ul ref="done" className={detail.cookList}>
                        {
                            this.state.arr.map((item) => {
                                return (
                                    <li key={item.fid}>
                                        <NavLink to={{ pathname: "/foodDetail", state: { id: item.fid } }}>
                                            <img src={item.fimg} alt="" className={detail.cookImg} />
                                        </NavLink>
                                        <div className={detail.cookInfo}>
                                            <NavLink className={detail.cookname} to={{ pathname: "/foodDetail", state: { id: item.fid } }}>{item.ftitle}</NavLink>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div ref="nutrition" className={detail.description}>
                        <div className={detail.titleHead}>
                            <h3>{this.state.list.cname}介绍</h3>
                        </div>
                        <p>{this.state.list.cdesc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
