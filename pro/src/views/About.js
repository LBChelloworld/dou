import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';


export default class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }

    render() {
        return (
            <div>
                <h2>About</h2>
                {
                    this.state.list.map((item)=>{
                        return (
                            // <div key={item.pid}>
                            //     <NavLink to={"/detail/"+item.pid}>{item.pname}</NavLink>
                            // </div>
                            <div key={item.pid}>
                                <NavLink to={{pathname:"/detail",state:{id:item.pid}}}>{item.pname}</NavLink>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount(){
        axios({
            url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
            params:{uid:19802}
        }).then((data)=>{
            this.setState({
                list:data.data.data
            })
        })
    }
}
