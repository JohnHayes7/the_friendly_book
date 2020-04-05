import React from 'react'
import Login from '../components/Login'
import '../components/landing_page.css'
import { connect } from 'react-redux'

class LogInContainer extends React.Component{
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

        fetch('https://thefriendlybook-api.herokuapp.com/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(fanInfo => {
            if(fanInfo.error){
                alert(fanInfo.error)
            }else{
                localStorage.setItem("logged_in", 'true')
                localStorage.setItem("user_id", fanInfo.data.id)
                localStorage.setItem("username", fanInfo.data.attributes.username)
                localStorage.setItem("shows", [])
                this.props.login(fanInfo)
            }   
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
    
    return {
        fan: state
    } 
}

const mapDispatchToProps = dispatch => ({
    login: FormData => dispatch({type: "LOGIN_FAN", fan: FormData})
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer)