import React, { Component } from 'react'
import footer from './Footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <div id={footer.footer}>
                <div className={footer.dginfo}>
                    <div className={footer.dgintro}>
                        <div className={footer.logo}>
                            <img className={footer.wb100} src="https://i1.douguo.com//static/nweb/images/logo3.png" alt=""/>
                        </div>
                        <div className={footer.datainfo}>
                            <h1>豆果美食，中文没事菜谱分享网站。</h1>
                            <p>
                                <span>1,000,000</span>道菜谱，
                                <span>15,625,000</span>条美食日记，
                                <span>50,000,000</span>美食达人，每天都有新分享。
                            </p>
                        </div>
                        <div className={footer.threbl}>
                            <h3>扫描二维码，下载豆果手机应用:</h3>
                            <ul>
                                <li>
                                    <img src="https://cp1.douguo.com//static/nweb/images/qrcode.png" alt=""/>
                                    豆果美食
                                </li>
                                <li>
                                    <img src="https://cp1.douguo.com//static/nweb/images/xcx.jpg" alt=""/>
                                    微信扫一扫
                                </li>
                                <li>
                                    <img src="https://i1.douguo.com//upload/banner/1545662154.jpg" alt=""/>
                                    豆果公众号
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={footer.foot}>
                    <div className={footer.clink}>
                        <span>关于豆果·</span>
                        <span>在豆果工作·</span>
                        <span>意见反馈·</span>
                        <span>友情链接·</span>
                        <span>菜谱大全</span>
                    </div>
                    <div className={footer.cght}>
                        &copy;2009-2018
                        <span>北京豆果信息技术有限公司</span>
                        <span>京ICP证111032号</span>
                        <span>
                            <img src="https://i1.douguo.com//upload/banner/1564469142.png" alt=""/>
                            京公网安备  11010502038268号
                        </span>
                        <span>
                            <img src="https://i1.douguo.com//upload/banner/1522057799.png" alt=""/>
                            京网文【2017】6954-770号
                        </span>
                        食品流通许可证SP1101061510252413
                        <span className={footer.tv}>广播电视节目制作经营许可证（京）字第11624号</span>
                    </div>
                </div>
            </div>
        )
    }
}
