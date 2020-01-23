import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Fan from './components/FanPage'
import SignupContainer from './containers/Signup_Container'
import YearPageContainer from './containers/YearPage_Container'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ShowPage from './components/ShowPage';


function App() {
  return (
    <Router>
      <div>
        
        <Route exact path ="/" component={LandingPage} />
        <Route path ="/years/:year" component={YearPageContainer} />
        <Route path ='/fans' component={Fan}  />
        <Route path = '/signup' component={SignupContainer} />
        <Route path = '/shows/:date-slug' component={ShowPage} />
      </div>
    </Router>
  );
}

export default App;
