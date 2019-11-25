import React, { Component } from 'react'
import all from "./MyAll.module.css"
import { message} from 'antd';
import * as api from '../../../api/getInfo'
export default class MyFans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            slist:[{}],
            sfans:[],
            flag:[]
        }
        
    }
    tap(i,lid){
        var flag1=this.state.flag
        var uid=localStorage.getItem("uid")
        if(flag1[i]==true){
            flag1[i]=!flag1[i];
            api.cancelSee({uid:uid,lid:lid}).then((data)=>{
                message.warning(data.data.msg);
            })
        }else{
            flag1[i]=!flag1[i];
            api.See({uid:uid,lid:lid}).then((data)=>{
                message.success(data.data.msg); 
            })
        }
        this.setState({flag:flag1})
    }
    render() {
        return (
            <div>
                <ul className={all.seelist}>
                    {
                        this.state.slist.map((item,i) => {
                            return (
                                <li key={i}>
                                    <div className={all.uleft}>
                                        <a className={all.uimg}>
                                            <img src={item.uhead} />
                                        </a>
                                        <a onClick={()=>this.tap(i,item.uid)} className={all.ubtn}>{this.state.flag[i]?"已关注":"+ 关注"}</a>
                                    </div>
                                    <div className={all.uright}>
                                        <h3>{item.uname}</h3>
                                        <p className={all.sdesc}>{item.udesc?item.udesc:"暂无个人介绍"}</p>
                                        <p>粉丝:{this.state.sfans[i]}</p>
                                        
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        var uid=localStorage.getItem("uid")
        api.selectFans({uid:uid}).then((data)=>{
            data.data.data.map((item,i)=>{
                this.state.arr.push(item.uid)
            })
        }).then(()=>{
            this.getseesty().then((data)=>{
                this.setState({slist:data})
            })
            this.getseefans().then((data)=>{
                this.setState({sfans:data})
            })
            this.getif().then((data)=>{
            })
        })
    }
    async getseefans(){
        var sfans=[]
        for(let i=0;i<this.state.arr.length;i++){
            await api.getFansNum({uid:this.state.arr[i]}).then((data)=>{
                sfans.push(data.data.data)
            })
        }
        return sfans
    }
    async getseesty(){
        var slist=[]
        for(let i=0;i<this.state.arr.length;i++){
            await api.showUser({uid:this.state.arr[i]}).then((data)=>{
                slist.push(data.data.data[0])
            })
        }
        return slist
    }
    async getif(){
        var uid=localStorage.getItem("uid")
        for(var i=0;i<this.state.arr.length;i++){
            await api.ifSee({uid:uid,lid:this.state.arr[i]}).then((data)=>{
                this.state.flag.push(data.data.data)
            })
        }
        console.log(this.state.flag)
    }
}
