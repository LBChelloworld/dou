import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './views/Home'
import Cai from './views/Cai'
import Article from './views/Article'
import CaiDetail from './views/CaiDetail'
import CookDetail from './views/CookDetail'
import SearchContent from './views/SearchContent'
import LoginIndex from './views/LoginIndex'
import Animate from './components/Animate/Animate';
import Medicine from './components/medicine/Medicine';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/cai" component={Cai}></Route>

            <Route path="/cook" component={Cai}></Route>
            <Route path="/shicai" component={Cai}></Route>
            {/* <Route path="/shicaiDetail" component={Cai}></Route> */}
            {/* <Route path="/foodDetail" component={Cai}></Route> */}
            <Route path="/menu" component={Cai}></Route>

            <Route path="/article" component={Article}></Route>
            <Route path="/shicaiDetail" component={CaiDetail}></Route>
            <Route path="/foodDetail" component={CookDetail}></Route>
            <Route path="/search" component={SearchContent}></Route>

            <Route path='/login' component={LoginIndex}></Route>
            <Route path='/animate' component={Animate}></Route>
            <Route path='/medicine' component={Medicine}></Route>

            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </Router>
    </div>
  )
}




export default App;
