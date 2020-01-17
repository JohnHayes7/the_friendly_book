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
            phone_number: ""
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
            phone_number: event.target.value
        })
    }

    handlePasswordInput = event =>{   
        
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
    
        event.preventDefault()
        fetch("http://localhost:3001/fans", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(newFanInfo => {
            debugger
            console.log(newFanInfo)
        })
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