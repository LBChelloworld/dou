import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import LoginIndex from './views/LoginIndex'
import Animate from './components/Animate/Animate';
import Medicine from './components/medicine/Medicine';
import My from './components/My/UserDetail'
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/loginindex' component={LoginIndex}></Route>
          <Route path='/animate' component={Animate}></Route>
          <Route path='/medicine' component={Medicine}></Route>
          <Route path='/my' component={My}></Route>
          <Route path="/myall" component={My}></Route>
          <Route path="/mycollect" component={My}></Route>
          <Route path="/mysee" component={My}></Route>
          <Route path="/myfans" component={My}></Route>
          <Redirect to='/loginindex'></Redirect>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
