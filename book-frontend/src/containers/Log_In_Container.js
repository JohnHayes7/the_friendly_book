import React from 'react'
import Login from '../components/Login'
import '../components/landing_page.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LogInController extends React.Component{
    constructor(){
        super()
        this.state = {
            hidden: true,
            username: "",
            password:""
        }
    }

    handleUsernameInput = event =>{
        
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordInput = event => {
        
        this.setState({
            password: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()

        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(fanInfo => {
            console.log(fanInfo)
            this.props.login(fanInfo)
            // DATA RETURNED_HOW DO I REDIRECT FAN HOME PAGE?
        })
    }

    

    render(){
        console.log(this.props.fan)
        return(
            <div id="login-window">
                <Login formData={this.state} handleUsernameInput={this.handleUsernameInput} handlePasswordInput={this.handlePasswordInput} submitHandler={this.submitHandler}/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        fan: state.fan
    }
    
}

const mapDispatchToProps = dispatch => ({
    login: FormData => dispatch({type: "LOGIN_FAN", fan: FormData})
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInController)