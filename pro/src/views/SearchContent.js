import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'

export default class SearchContent extends Component {
    constructor(props){
        super(props);
        // console.log(this.props)
        this.state = {
            name:this.props.location.state.name
        }
    }
    render() {
        return (
            <div>
                <Header name="cai" se={this.state.name} props={this.props}></Header>
                <Search name={this.state.name}></Search>
                <Footer></Footer>
            </div>
        )
    }
}

