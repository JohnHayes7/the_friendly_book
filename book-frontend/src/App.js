import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import FanpageContainer from './containers/FanPage_Container'
import SignupContainer from './containers/Signup_Container'
import YearPageContainer from './containers/YearPage_Container'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ShowPageContainer from './containers/ShowPage_Container';
import MemoryEdit from './components/MemoryEdit'


function App() {
  return (
    <Router>
      <div>
        
        <Route exact path ="/" component={LandingPage} />
        <Route path ="/years/:year" component={YearPageContainer} />
        <Route path ='/fans/:username' component={FanpageContainer}  />
        <Route path = '/signup' component={SignupContainer} />
        <Route path = '/shows/:date' component={ShowPageContainer} />
        <Route path = '/memories/:id/edit' component={MemoryEdit} />
      </div>
    </Router>
  );
}

export default App;
