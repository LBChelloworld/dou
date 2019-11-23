import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ShiCaiDetail from '../components/ShiCaiDetail/ShiCaiDetail';
import Footer from '../components/Footer/Footer';



export default class CaiDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header name="cai"/>
                <ShiCaiDetail id={this.props.location.state.id}></ShiCaiDetail>
                <Footer/>
            </div>
        )
    }
}
