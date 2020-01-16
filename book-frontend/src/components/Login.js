import React from 'react'
import './landing_page.css'
import FanpageContainer from '../containers/FanPage_Container'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component{

    

    // usernameChangeHandler = event => {
    //     console.log(event.target.value)
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // passwordChangeHandler = event => {
    //     console.log(event.target.value)
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    // submitHandler = event => {
    //     event.preventDefault()
    //     this.props.login({username: event.target.elements[0].value, password: event.target.elements[1].value})
        
    // }


    render(){
        return(
            <div id="login-form">
                <span id='login-label'>Log In</span>
                <form onSubmit={event => this.props.submitHandler(event)}> 
                    <label>UserName:</label>
                    <input type="text" value={this.props.formData.username} onChange={event => this.props.handleUsernameInput(event)}/><br></br>
                    <label>Password:</label>
                    <input type={this.props.formData.hidden ? "password" : "text"} value={this.props.formData.password} onChange={event => this.props.handlePasswordInput(event)}/><br></br>
                    <input type="submit"/>
                </form><br></br>
                <a href="#" >Create a profile</a>
            </div>
        )
    }
}