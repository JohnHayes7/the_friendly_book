import React from 'react'
import './landing_page.css'

export default class Login extends React.Component{

    constructor(){
        super()
        this.state = {
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

    render(){
        return(
            <div id="login-form">
                <span id='login-label'>Log In</span>
                <form>
                    <label>UserName:</label>
                    <input type="text" value={this.state.username} onChange={event => this.usernameChangeHandler(event)}/><br></br>
                    <label>Password:</label>
                    <input type="text" value={this.state.password} onChange={event => this.passwordChangeHandler(event)}/><br></br>
                    <input type="submit"/>
                </form><br></br>
                <a href="#" >Create a profile</a>
            </div>
        )
    }
}