import React from 'react'
import Login from '../components/Login'
import '../components/landing_page.css'

class LogInController extends React.Component{

    constructor(){
        super()
        this.state = {
            name: "",
            password:""
        }
    }

    render(){
        return(
            <div id="login-window">
                <Login />
            </div>
        )
    }
}

export default LogInController