import React from 'react'
import Login from '../components/Login'
import '../components/landing_page.css'
import { connect } from 'react-redux'

class LogInController extends React.Component{

    

    render(){
        return(
            <div id="login-window">
                <Login login={this.props.login}/>
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