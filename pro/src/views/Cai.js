import React, { Component } from 'react';
import Header from '../components/Header/Header';
import CaiContent from '../components/CaiContent/CaiContent';
import Footer from '../components/Footer/Footer';



export default class Cai extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    render() {
        return (
            <div>
                <Header name="cai" />
                <CaiContent></CaiContent>
                <Footer />
            </div>
        )
    }
}
