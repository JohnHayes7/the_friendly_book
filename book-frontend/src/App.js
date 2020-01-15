import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Years from './components/Years'
import Fan from './components/Fan'
import {BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        
        <Route exact path ="/" component={LandingPage} />
        <Route exact path ="/years" component={Years} />
        <Route path ={`/fans/username`} component={Fan} />
      </div>
    </Router>
  );
}

export default App;
