import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'

export default class SearchContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:decodeURI(this.props.location.search).split("=")[1]
        }
    }
    render() {
        return (
            <div>
                <Header name="cai" se={this.state.name}></Header>
                <Search name={this.state.name}></Search>
                <Footer></Footer>
            </div>
        )
    }
}

