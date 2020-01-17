import React from 'react'
import Signup from '../components/Signup'

class SignupContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            hidden: true,
            username: "",
            email: "",
            password:"",
            phoneNumber: ""
        }
    }

    handleUsernameInput = event =>{ 
       
        this.setState({
            username: event.target.value
        })
    }

    handleEmailInput = event => {
        console.log(this.state.email)
        this.setState({
            email: event.target.value
        })
    }

    handlePhoneNumberInput = event =>{
       
        this.setState({
            phoneNumber: event.target.value
        })
    }

    handlePasswordInput = event =>{   
        
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

    }

    

    render(){
        return(
            <div>
               <Signup formData={this.state} handleUsernameInput={this.handleUsernameInput} handleEmailInput={this.handleEmailInput} handlePhoneNumberInput={this.handlePhoneNumberInput} handlePasswordInput={this.handlePasswordInput} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default SignupContainer