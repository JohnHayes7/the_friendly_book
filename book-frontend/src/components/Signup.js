import React from 'react';
import Header from './Header'

class Signup extends React.Component {
    render(){
        debugger
        return (
            <div id="signup-form-container">
                {/* <Header /> */}
                <form id="signup-form">
                    <label>Username:</label>
                    <input type="text" value={this.props.formData.username} /><br></br>
                    <label>Phone Number:</label>
                    <input type="text"  value={this.props.formData.phoneNumber}/><br></br>
                    <label>Password:</label>
                    <input type={this.props.formData.hidden ? "password" : "text"} value={this.props.formData.password} /><br></br>
                    <input type="submit" />
                </form>
            </div>
        )

    }
    
}

export default Signup