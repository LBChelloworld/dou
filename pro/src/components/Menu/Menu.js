import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import menu from './Menu.module.css'

import * as getInfo from '../../api/getInfo'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.index = 0;
        this.arr = [];
    }
    componentDidMount() {
        getInfo.pageMenu({page:this.index}).then((data) => {
            // console.log(data.data.data);
            this.setState({
                list: data.data.data
            })
        });

        window.onscroll = ()=>{
            if(window.location.pathname=='/menu'){
                if(document.documentElement.scrollTop > document.documentElement.scrollHeight-1000){
                    this.arr = JSON.parse(JSON.stringify(this.state.list));
                    ++this.index;
                    getInfo.pageMenu({page:this.index}).then((data) => {
                        // console.log(data.data.data);
                        var newArr = this.arr.concat(data.data.data);
                        this.setState({
                            list: newArr
                        })
                    });
                }
            }
        }
    }

    render() {
        return (
            <div className={menu.content}>
                <h2 className={menu.titleHead}>最热</h2>
                <ul className={menu.menuList}>
                    {
                        this.state.list.map((item)=>{
                            return(
                                <li key={item.fid}>
                                    <NavLink to="/foodDetail" className={menu.cover}>
                                        <img src={item.fimg} alt=""/>
                                        <div className={menu.menuInfo}>
                                            <p className={menu.name}>{item.ftitle}</p>
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
