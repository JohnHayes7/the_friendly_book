import React from 'react';
import Header from './Header'
import './signup.css'

const Signup = props => {
    return (
        <div id="signup-form-container">
            Create a Friendly Book Account:
            <form id="signup-form" onSubmit={event => props.handleSubmit(event)}>
                <label>Username:</label>
                <input type="text" value={props.formData.username} onChange={event => props.handleUsernameInput(event)} /><br></br>
                <label>Email:</label>
                <input type="text" value={props.formData.email} onChange={event => props.handleEmailInput(event)} /><br></br>
                <label>Phone Number:</label>
                <input type="text"  value={props.formData.phoneNumber} onChange={event => props.handlePhoneNumberInput(event)}/><br></br>
                <label>Password:</label>
                <input type={props.formData.hidden ? "password" : "text"} value={props.formData.password} onChange={event => props.handlePasswordInput(event)} /><br></br>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup