import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import selected from './Selected.module.css'

import * as getInfo from '../../api/getInfo'

export default class Selected extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{}],
            arr: [],
            uList: [{}]
        }
    }
    componentDidMount() {
        getInfo.getMenu().then((data) => {
            this.setState({
                list: data.data.data.splice(6,24)
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

            this.getUser().then((data)=>{
                this.setState({
                    uList: data
                })
                console.log();
            })
            
        });
    }
    async getUser() {
        var uInfo = [];
        for (let i = 0; i < this.state.arr.length; i++) {
           var a = await  getInfo.showUser({ uid: this.state.arr[i] })
                .then((data) => {
                    uInfo.push(data.data.data[0]);
                })
            if(a!=undefined){
                uInfo.push(a[0]);
            } 
        }
        return uInfo;
    }
    render() {
        return (
            <div id={selected.content}>
                <h2 className={selected.title}>每日精选菜谱
                    <NavLink className={selected.more} to="/cai">
                        更多&nbsp;
                        <img src="https://cp1.douguo.com/static/nweb/images/more2.png?1" alt="" />
                    </NavLink>
                </h2>
                <ul className={selected.recipeList}>
                    {
                        this.state.uList.map((item,i) => {
                            return (
                                <li className={selected.item} key={i}>
                                    <NavLink to={{pathname:"/foodDetail",state:{id:this.state.list[i].fid}}} className={selected.cover}>
                                        <img src={this.state.list[i].fimg} alt="" />
                                    </NavLink>
                                    <div>
                                        <NavLink to={{pathname:"/foodDetail",state:{id:item.fid}}} className={selected.name}>
                                            {this.state.list[i].ftitle}
                                        </NavLink>
                                        <p className={selected.author}>
                                            by&nbsp;&nbsp;
                                            <NavLink to={{ pathname: "/userDetail", query: { id: item.uid } }} className={selected.textLips}>
                                                {item.uname}
                                            </NavLink>
                                            {/* <a className={selected.proicon} href="/user/prodesc" target="_blank">
                                                <img className={selected.proimg} src="https://i1.douguo.com/upload/note/d/a/a/da84247847aebe48d9dd0fcdac88862a.png" alt="" />
                                            </a> */}
                                        </p>
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
