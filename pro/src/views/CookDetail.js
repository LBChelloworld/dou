import React, { Component } from 'react';
import Header from '../components/Header/Header';
import FoodDetail from '../components/FoodDetail/FoodDetail';
import Footer from '../components/Footer/Footer';



export default class CaiDetail extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        // console.log(this.props.location.state.id);
    }
    render() {
        return (
            <div>
                <Header name="cai" props={this.props}/>
                <FoodDetail id={this.props.location.state.id}></FoodDetail>
                <Footer/>
            </div>
        )
    }
}
