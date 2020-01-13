import React from 'react'
import LogInContainer from '../containers/Log_In_Container'
import LandingMain from '../containers/LandingMain_Container'
import './landing_page.css'

export default class Landing extends React.Component{
    render(){
        return(
            <div id="whole-window">
                <div id="landing-wrapper">
                    <header id="title">The Friendly Book</header>
                    <LogInContainer />
                   
                </div>
                 
                <LandingMain />
            </div>
            
        )
    }
}