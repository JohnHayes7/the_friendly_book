import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Years from './components/Years'
import FanPageContainer from './components/FanPage'
import {BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        
        <Route exact path ="/" component={LandingPage} />
        <Route exact path ="/years" component={Years} />
        <Route path ='/fans' render={routerProps => <FanPageContainer {...routerProps}/>}  />
      </div>
    </Router>
  );
}

export default App;
