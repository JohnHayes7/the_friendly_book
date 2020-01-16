import React from 'react'
import './landing_page.css'
import FanpageContainer from '../containers/FanPage_Container'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            hidden: true,
            username: "",
            password:""
        }
    }

    usernameChangeHandler = event => {
        console.log(event.target.value)
        this.setState({
            username: event.target.value
        })
    }

    passwordChangeHandler = event => {
        console.log(event.target.value)
        this.setState({
            password: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.login({username: event.target.elements[0].value, password: event.target.elements[1].value})
        
    }


    render(){
        return(
            <div id="login-form">
                <span id='login-label'>Log In</span>
                <form onSubmit={event => this.submitHandler(event)}> 
                    <label>UserName:</label>
                    <input type="text" value={this.state.username} onChange={event => this.usernameChangeHandler(event)}/><br></br>
                    <label>Password:</label>
                    <input type={this.state.hidden ? "password" : "text"} value={this.state.password} onChange={event => this.passwordChangeHandler(event)}/><br></br>
                    <input type="submit"/>
                </form><br></br>
                <a href="#" >Create a profile</a>
                <FanpageContainer />
            </div>
        )
    }
}