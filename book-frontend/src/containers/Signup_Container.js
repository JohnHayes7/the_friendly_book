import React from 'react'
import Signup from '../components/Signup'

class SignupContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            hidden: true,
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
               <Signup formData={this.state} handleUsernameInput={this.handleUsernameInput} handlePhoneNumberInput={this.handlePhoneNumberInput} handlePasswordInput={this.handlePasswordInput} />
            </div>
        )
    }
}

export default SignupContainer