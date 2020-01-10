import React from 'react'
import LogInContainer from '../containers/Log_In_Container'
import LandingMain from '../containers/LandingMain_Container'

export default class Login extends React.Component{
    render(){
        return(
            <div>
                <h1>The Friendly Book</h1>
                <LogInContainer />
                <LandingMain />
            </div>
        )
    }
}