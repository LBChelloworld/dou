import React, { Component } from 'react'
import Header from '../components/Header/Header';
import ArticleContent from '../components/ArticleContent/ArticleContent';
import Footer from '../components/Footer/Footer';
export default class Article extends Component {
    render() {
        return (
            <div>
                <Header name="article"></Header>
                <ArticleContent></ArticleContent>
                <Footer></Footer>
            </div>
        )
    }
}
