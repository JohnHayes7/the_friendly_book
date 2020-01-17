import React from 'react'

class SignupContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password:"",
            phoneNumber: ""
        }
    }

    handleUsernameInput = event =>{   
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordInput = event =>{   
        this.setState({
            password: event.target.value
        })
    }

    handlePhoneNumberInput = event =>{
        this.setState({
            phoneNumber: event.target.value
        })
    }

    render(){
        return(
            <div>
                <Signup formData={this.state} handleUsernameInput={this.handleUsernameInput} handlePasswordInput={this.handlePasswordInput}  handlePhoneNumberInput={this.handlePhoneNumberInput} />
            </div>
        )
    }
}

export default SignupContainer