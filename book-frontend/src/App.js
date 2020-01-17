import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Years from './components/Years'
import FanPageContainer from './components/FanPage'
import Fan from './components/FanPage'
import SignupContainer from './containers/Signup_Container'
import {BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        
        <Route exact path ="/" component={LandingPage} />
        <Route exact path ="/years" component={Years} />
        <Route path ='/fans' component={Fan}  />
        <Route path = '/signup' component={SignupContainer} />
      </div>
    </Router>
  );
}

export default App;
