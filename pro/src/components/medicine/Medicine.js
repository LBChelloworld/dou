import React, { Component } from 'react'
import med from './Medicine.module.css'
import * as api from '../../api/getInfo'
export default class Medicine extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div>
                <div id={med.content}>
                    <ul className={med.goodsList}>
                        {
                            this.state.list.map((item,i)=>{
                                return(
                                    <li className={med.goods} key={item.mid}>
                                        <a className={med.imgbox}>
                                            <img src={item.mimg}/>
                                        </a>
                                        <a>
                                            <h3>{item.mtitle}</h3>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        api.getmedicine().then((data)=>{
            this.setState({list:data.data.data})
        })
    }
}
