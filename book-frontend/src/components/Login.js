import React from 'react'
import './landing_page.css'

export default class Login extends React.Component{
    render(){
        return(
            <div id="login-form">
                <span id='login-label'>Log In</span>
                <form>
                    <label>UserName:</label>
                    <input type="text"/><br></br>
                    <label>Password:</label>
                    <input type="text"/><br></br>
                    <input type="submit"/>
                    
                </form>
            </div>
        )
    }
}