import React from 'react'
import './landing_page.css'
import { Link } from 'react-router-dom'


export default class Login extends React.Component{

    render(){
        return(
            <div id="login-form">
                <span id='login-label'>Log In</span>
                <form onSubmit={event => this.props.submitHandler(event)}> 
                    <label>UserName:</label>
                    <input type="text" value={this.props.formData.username} onChange={event => this.props.handleUsernameInput(event)}/><br></br>
                    <label>Password:</label>
                    <input type={this.props.formData.hidden ? "password" : "text"} value={this.props.formData.password} onChange={event => this.props.handlePasswordInput(event)}/><br></br>
                    <input type="submit"/><br></br>
                    <Link to="/signup">Create A Profile</Link>
                </form><br></br>
               
            </div>
        )
    }
}