import React, { Component } from 'react'
import * as api from '../../api/getInfo'
import An from './Animate.module.css'
export default class Animate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <div className={An.content}>
                <div className={An.left}>
                    <ul>
                        {
                            this.state.list.map((item, i) => {
                                return (
                                    <li key={item.aid} className={An.anime}>

                                        <div className={An.animeImg}>
                                            <img src={item.aimg}></img>
                                        </div>
                                        <h3>{item.atitle}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={An.right}>
                    <h4>小游戏</h4>
                    <div className={An.minigame}>
                        <ul>
                            <li><a href="http://www.4399.com/flash/1923.htm#search3" target="_blank">厨房连连看</a></li>
                            <li><a href="http://www.4399.com/flash/120890.htm#search3" target="_blank">可爱宝贝爱厨房</a></li>
                            <li><a href="http://www.4399.com/flash/60015.htm#search3" target="_blank">厨房清理</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        api.getAnimate().then(data => {
            this.setState({ list: data.data.data })
        })
    }
}
