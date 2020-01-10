import React from 'react'
import LogInContainer from '../containers/Log_In_Container'
import LandingMain from '../containers/LandingMain_Container'
import './landing_page.css'

export default class Login extends React.Component{
    render(){
        return(
            <div id="landing-wrapper">
                <header id="title">The Friendly Book</header>
                <LogInContainer />
                {/* <LandingMain /> */}
            </div>
        )
    }
}