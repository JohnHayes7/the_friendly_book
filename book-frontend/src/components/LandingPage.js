import React from 'react'
import LogInContainer from '../containers/Log_In_Container'
import LandingMainContainer from '../containers/LandingMain_Container'
import LandingYearsContainer from '../containers/LandingYears_Container'
import './landing_page.css'

export default class Landing extends React.Component{
    render(){
        return(
            <div id="whole-window">
                <div id="landing-wrapper">
                    <header id="title">The Friendly Book</header>
                    <LogInContainer />
                   
                </div>
                <div id="landing-second-line">
                    <LandingMainContainer />
                    <LandingYearsContainer />
                </div>
                
                
            </div>
            
        )
    }
}