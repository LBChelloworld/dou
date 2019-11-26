import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Selected from '../components/Selected/Selected';
import Other from '../components/Other/Other';
import Footer from '../components/Footer/Footer';
import { Carousel } from 'antd';

import './Home.css'
export default class Home extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.location.state.uid);
        this.uid = this.props.location.state == undefined ? null : this.props.location.state.uid;
    }
    onChange(a, b, c) {
        console.log(a, b, c);
    }
    tap() {
        this.refs.img.prev();
    }
    tap1() {
        this.refs.img.next();
    }
    render() {
        return (
            <div>
                <Header name="home" uid={this.uid} props={this.props}></Header>
                {/* 轮播图 */}
                <Carousel autoplay ref="img">
                    <div>
                        <img src="https://i1.douguo.com//upload/banner/1545685906.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="https://cp1.douguo.com/upload/banners/1574133387.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cp1.douguo.com/upload/banners/1574133443.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cp1.douguo.com/upload/banners/1574133543.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cp1.douguo.com/upload/banners/1574133662.jpg" alt="" />
                    </div>
                </Carousel>
                <div className="btn">
                    <div className="pre" onClick={() => this.tap()}>
                        <img src="https://cp1.douguo.com/static/nweb/images/prev.png"  alt=""/>
                    </div>
                    <div className="next" onClick={() => this.tap1()}>
                        <img src="https://cp1.douguo.com/static/nweb/images/next.png" alt="" />
                    </div>
                </div>

                {/* 每日精选 */}
                <Selected></Selected>

                {/* 其他 */}
                <Other></Other>
                <Footer></Footer>
            </div>
        )
    }
}
