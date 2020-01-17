import React from 'react';
import Header from './Header'

const Signup = (props) => {
    return (
        <div id="signup-form-container">
            {/* <Header /> */}
            <form id="signup-form">
                <label>Username:</label>
                <input type="text" /><br></br>
                <label>Phone Number:</label>
                <input type="text"  /><br></br>
                <label>Password:</label>
                <input type="text"  /><br></br>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup