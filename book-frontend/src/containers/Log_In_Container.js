import React from 'react'
import Login from '../components/Login'
import '../components/landing_page.css'
import { connect } from 'react-redux'

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
        .then(fan => {
            console.log(fan)
            this.props.login(fan)
        })

       
        
    }
    

    render(){
        return(
            <div id="login-window">
                <Login formData={this.state} handleUsernameInput={this.handleUsernameInput} handlePasswordInput={this.handlePasswordInput} submitHandler={this.submitHandler}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        fan: state.fan
    }
}

const mapDispatchToProps = dispatch => ({
    login: FormData => dispatch({type: "LOGIN_FAN", fan: FormData})
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInController)