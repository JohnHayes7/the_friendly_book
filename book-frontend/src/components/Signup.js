import React from 'react';

const SignUp = () => {
    
    return (
        <div id="signup-form-container">
            <form id="signup-form">
                <label>Username:</label>
                <input type="text" /><br></br>
                <label>Phone Number:</label>
                <input type="text" /><br></br>
                <label>Password:</label>
                <input type="text" /><br></br>
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignUp