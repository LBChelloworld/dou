import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

import LoginIndex from './views/LoginIndex'
import Animate from './components/Animate/Animate';
import Medicine from './components/medicine/Medicine';
import './App.css';
function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path='/loginindex' component={LoginIndex}></Route>
        <Route path='/animate' component={Animate}></Route>
        <Route path='/medicine' component={Medicine}></Route>
        <Redirect to='/loginindex'></Redirect>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
