import React from 'react'
import LogInController from '../controllers/Log_In_Controller'

export default class Login extends React.Component{
    render(){
        return(
            <div>
                <h1>The Friendly Book</h1>
                <LogInController />
            </div>
        )
    }
}