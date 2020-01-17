import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Years from './components/Years'
import FanPageContainer from './components/FanPage'
import Fan from './components/FanPage'
import Signup from './components/Signup'
import {BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        
        <Route exact path ="/" component={LandingPage} />
        <Route exact path ="/years" component={Years} />
        <Route path ='/fans' component={Fan}  />
        <Route path = '/signup' component={Signup} />
      </div>
    </Router>
  );
}

export default App;
