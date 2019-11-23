import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import article from './ArticleContent.module.css'

import * as getInfo from '../../api/getInfo'

export default class ArticleContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        getInfo.getArticle().then((data) => {
            // console.log(data.data.data);
            this.setState({
                list: data.data.data
            })
        });
    }
    render() {
        return (
            <div className={article.wrap}>
                <div className={article.content}>
                    <div><h2 className={article.titleHead}>全部文章</h2></div>
                    <div id={article.left}>
                        <ul>
                            {
                                this.state.list.map((item) => {
                                    return (
                                        <li className={article.article} key={item.tid}>
                                            <div className={article.articleImg}>
                                                <NavLink to="/articleDetail">
                                                    <img src={item.timg} alt={item.ttitle} />
                                                </NavLink>
                                            </div>
                                            <div className={article.articleInfo}>
                                                <NavLink className={article.title} to="/articleDetail">{item.ttitle}</NavLink>
                                                <p className={article.from}>
                                                    来自:{item.tclass}
                                                </p>
                                                <p className={article.createTime}>{item.ttime}</p>
                                                <NavLink className={article.sall} to="/articleDetail">查看全文</NavLink>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div id={article.right}>
                        <div className={article.stit}>
                            <h3>主题站</h3>
                            <ul className={article.themeRight}>
                                <li>
                                    <div className={article.themeImg}>
                                        <NavLink to="/lifetips">
                                            <img src="https://cp1.douguo.com/upload/post/1458900546.jpg" alt="生活小窍门" />
                                        </NavLink>
                                    </div>
                                    <NavLink className={article.themeTitle} to="/lifetips">生活小窍门</NavLink>
                                    <p className={article.content}>分享生活智慧的结晶</p>
                                </li>
                                <li>
                                    <div className={article.themeImg}>
                                        <NavLink to="/lifetips">
                                            <img src="https://cp1.douguo.com/upload/post/1357368720.png" alt="走哪吃哪" />
                                        </NavLink>
                                    </div>
                                    <NavLink className={article.themeTitle} to="/lifetips">走哪吃哪</NavLink>
                                    <p className={article.content}>搜罗世界各地美食，领略全球饮食文化，绘制你的专属美食地图。</p>
                                </li>
                                <li>
                                    <div className={article.themeImg}>
                                        <NavLink to="/lifetips">
                                            <img src="https://cp1.douguo.com/upload/post/1357362275.png" alt="食材密码" />
                                        </NavLink>
                                    </div>
                                    <NavLink className={article.themeTitle} to="/lifetips">食材密码</NavLink>
                                    <p className={article.content}>介绍与食材相关的知识，显微镜下的食材DNA，让我们吃的清楚明白。</p>
                                </li>
                                <li>
                                    <div className={article.themeImg}>
                                        <NavLink to="/lifetips">
                                            <img src="https://cp1.douguo.com/upload/post/1357362330.png" alt="食界大咖秀" />
                                        </NavLink>
                                    </div>
                                    <NavLink className={article.themeTitle} to="/lifetips">食界大咖秀</NavLink>
                                    <p className={article.content}>解读美食达人的修炼秘籍，让我们认识和了解食界大咖是怎样炼成的。</p>
                                </li>
                                <li>
                                    <div className={article.themeImg}>
                                        <NavLink to="/lifetips">
                                            <img src="https://cp1.douguo.com/upload/post/1357362304.png" alt="小白厨艺班" />
                                        </NavLink>
                                    </div>
                                    <NavLink className={article.themeTitle} to="/lifetips">小白厨艺班</NavLink>
                                    <p className={article.content}>美食厨艺培训班，深入浅出传授厨艺，从零开始学做菜，让菜鸟展翅高飞。</p>
                                </li>
                                <li>
                                    <div className={article.themeImg}>
                                        <NavLink to="/lifetips">
                                            <img src="https://cp1.douguo.com/upload/post/1364977560.png" alt="食•记" />
                                        </NavLink>
                                    </div>
                                    <NavLink className={article.themeTitle} to="/lifetips">食•记</NavLink>
                                    <p className={article.content}>记录和吃有关的事情，记录生活点滴，讲述美食情缘，生活因美食而美丽。</p>
                                </li>
                            </ul>
                            <div className={article.submission}>
                                <div className={article.stit}>
                                    <h3>欢迎来稿</h3>
                                </div>
                                <div className={article.container}>
                                    <p>豆果美食主题站提供了一个温暖的平台，如果你是个资深吃货，爱好写作，并且乐于分享，那么我们找的就是你啦！</p>
                                    <p>文章一经录用，奖2000积分！投稿要求：原创文章，语言流畅，思路清晰，主题与“美食”相关，文章至少2000字，图片精美。</p>
                                    <p> 投稿邮箱：bj@douguo.com 我们期待您的来稿（来稿请注明您的豆果ID）。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
