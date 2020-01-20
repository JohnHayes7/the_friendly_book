import React from 'react'
import Signup from '../components/Signup'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

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
            this.props.login(newFanInfo)
        })
        
    }

    

    render(){
        if(this.props.fan.loggedIn){
           return <Redirect to={`/fans/${this.props.fan.username}`} />
        }
        return(
            <div>
               <Signup formData={this.state} handleUsernameInput={this.handleUsernameInput} handleEmailInput={this.handleEmailInput} handlePhoneNumberInput={this.handlePhoneNumberInput} handlePasswordInput={this.handlePasswordInput} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        fan: state
    }
    
}

const mapDispatchToProps = dispatch => ({
    login: FormData => dispatch({type: "LOGIN_FAN", fan: FormData})
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)