import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import food from './ShiCai.module.css'

import * as getInfo from '../../api/getInfo'

export default class ShiCai extends Component {
    constructor(props){
        super(props);
        this.state = {
            a:[],
            b:[],
            c:[],
            d:[],
            e:[],
            f:[],
            g:[],
            h:[],
            i:[],
            j:[],
            k:[],
            l:[],
            m:[],
            n:[],
            o:[],
            p:[],
            q:[],
            r:[],
            s:[],
            t:[],
            u:[],
            v:[],
            w:[],
            x:[],
            y:[],
            z:[],
            aa:[],
            bb:[],
            cc:[],
            dd:[]
        }
    }
    componentDidMount(){
        getInfo.getClass().then((data)=>{
            this.setState({
                //肉
                a:data.data.data.splice(0,10),
                b:data.data.data.splice(0,9),
                c:data.data.data.splice(0,10),
                d:data.data.data.splice(0,10),
                e:data.data.data.splice(0,10),
                f:data.data.data.splice(0,6),
                g:data.data.data.splice(0,7),
                //水果
                h:data.data.data.splice(0,10),
                i:data.data.data.splice(0,6),
                j:data.data.data.splice(0,10),
                //蔬菜
                k:data.data.data.splice(0,10),
                l:data.data.data.splice(0,10),
                m:data.data.data.splice(0,10),
                n:data.data.data.splice(0,7),
                //鱼
                o:data.data.data.splice(0,10),
                p:data.data.data.splice(0,9),
                q:data.data.data.splice(0,10),
                r:data.data.data.splice(0,10),
                s:data.data.data.splice(0,10),
                //米
                t:data.data.data.splice(0,10),
                u:data.data.data.splice(0,10),
                v:data.data.data.splice(0,10),
                w:data.data.data.splice(0,5),
                //奶
                x:data.data.data.splice(0,5),
                y:data.data.data.splice(0,10),
                z:data.data.data.splice(0,9),
                //香辛料
                aa:data.data.data.splice(0,10),
                bb:data.data.data.splice(0,4),
                cc:data.data.data.splice(0,7),
                dd:data.data.data.splice(0,5),

            })
            // console.log(this.state.b);
        })
    }
    render() {
        return (
            <div className={food.content}>
                <div className={food.meat}>
                    <h2 className={food.titleHead}>肉类(全部)</h2>
                    <div className={food.type}>
                        <h4>猪</h4>
                        <ul>
                            {
                                this.state.a.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>牛</h4>
                        <ul>
                            {
                                this.state.b.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>羊</h4>
                        <ul>
                            {
                                this.state.c.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>鸡</h4>
                        <ul>
                            {
                                this.state.d.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>鸭</h4>
                        <ul>
                            {
                                this.state.e.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>其他肉类</h4>
                        <ul>
                            {
                                this.state.f.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>制品</h4>
                        <ul>
                            {
                                this.state.g.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={food.fruit}>
                    <h2 className={food.titleHead}>水果、花茶、坚果(全部)</h2>
                    <div className={food.type}>
                        <h4>鲜果</h4>
                        <ul>
                            {
                                this.state.h.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>花</h4>
                        <ul>
                            {
                                this.state.i.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>坚果、干果类</h4>
                        <ul>
                            {
                                this.state.j.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
               </div>
                <div className={food.vegetable}>
                    <h2 className={food.titleHead}>蔬菜、菌藻、药食(全部)</h2>
                    <div className={food.type}>
                        <h4>蔬菜类</h4>
                        <ul>
                            {
                                this.state.k.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>菌藻类</h4>
                        <ul>
                            {
                                this.state.l.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>药材类</h4>
                        <ul>
                            {
                                this.state.m.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>酸菜、腌菜类</h4>
                        <ul>
                            {
                                this.state.n.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
               </div>
                <div className={food.fish}>
                        <h2 className={food.titleHead}>鱼虾蟹贝等水产(全部)</h2>
                        <div className={food.type}>
                            <h4>虾</h4>
                            <ul>
                                {
                                    this.state.o.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>蟹</h4>
                            <ul>
                                {
                                    this.state.p.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>贝</h4>
                            <ul>
                                {
                                    this.state.q.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>鱼</h4>
                            <ul>
                                {
                                    this.state.r.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>其他</h4>
                            <ul>
                                {
                                    this.state.s.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                </div>
                <div className={food.rice}>
                        <h2 className={food.titleHead}>谷类(全部)</h2>
                        <div className={food.type}>
                            <h4>米</h4>
                            <ul>
                                {
                                    this.state.t.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>面</h4>
                            <ul>
                                {
                                    this.state.u.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>杂粮</h4>
                            <ul>
                                {
                                    this.state.v.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>淀粉类</h4>
                            <ul>
                                {
                                    this.state.w.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                </div>
                    
                <div className={food.milk}>
                        <h2 className={food.titleHead}>豆乳蛋类及制品(全部)</h2>
                        <div className={food.type}>
                            <h4>乳及其制品</h4>
                            <ul>
                                {
                                    this.state.x.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>豆及其制品</h4>
                            <ul>
                                {
                                    this.state.y.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={food.type}>
                            <h4>蛋及其制品</h4>
                            <ul>
                                {
                                    this.state.z.map((item)=>{
                                        return(
                                            <li key={item.cid}>
                                                <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                    <img src={item.cimg}  alt=""/>
                                                    <h5>{item.cname}</h5>
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                </div>

                <div className={food.rice}>
                    <h2 className={food.titleHead}>调味品(全部)</h2>
                    <div className={food.type}>
                        <h4>香辛料</h4>
                        <ul>
                            {
                                this.state.aa.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>酱</h4>
                        <ul>
                            {
                                this.state.bb.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>油</h4>
                        <ul>
                            {
                                this.state.cc.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={food.type}>
                        <h4>糖</h4>
                        <ul>
                            {
                                this.state.dd.map((item)=>{
                                    return(
                                        <li key={item.cid}>
                                            <NavLink to={{pathname:"/shicaiDetail",state:{id:item.cid}}}>
                                                <img src={item.cimg}  alt=""/>
                                                <h5>{item.cname}</h5>
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
