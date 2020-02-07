import React from 'react'
import LogInContainer from '../containers/Log_In_Container'
import LandingMainContainer from '../containers/LandingMain_Container'
import LandingYearsContainer from '../containers/LandingYears_Container'
import Header from './Header'
import './landing_page.css'
import Logout from './Logout'

export default class Landing extends React.Component{
    render(){
        return(
            <div id="whole-window">
                <div id="landing-wrapper">
                    <Header />
                    {localStorage.logged_in ? <Logout /> : <LogInContainer />}
                   
                </div>
                <div id="landing-second-line">
                    <LandingMainContainer />
                    <LandingYearsContainer />
                </div>
                
                
            </div>
            
        )
    }
}