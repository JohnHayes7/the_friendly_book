import React from 'react';
import Header from './Header'

class Signup extends React.Component {
    render(){
        
        return (
            <div id="signup-form-container">
                Create a Friendly Book Account:
                <form id="signup-form">
                    <label>Username:</label>
                    <input type="text" value={this.props.formData.username} onChange={event => this.props.handleUsernameInput(event)} /><br></br>
                    <label>Email:</label>
                    <input type="text" value={this.props.formData.email} onChange={event => this.props.handleEmailInput(event)} /><br></br>
                    <label>Phone Number:</label>
                    <input type="text"  value={this.props.formData.phoneNumber} onChange={event => this.props.handlePhoneNumberInput(event)}/><br></br>
                    <label>Password:</label>
                    <input type={this.props.formData.hidden ? "password" : "text"} value={this.props.formData.password} onChange={event => this.props.handlePasswordInput(event)} /><br></br>
                    <input type="submit" />
                </form>
            </div>
        )

    }
    
}

export default Signup