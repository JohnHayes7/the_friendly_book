import React from 'react'
import FanPage from '../components/FanPage'
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router'

class FanPageContainer extends React.Component{

    getFanFromDb = () => {
        fetch(`http://localhost:3001/fans/${this.props.match.params.username}`).then(response => response.json())
            .then(fan => {
                console.log(fan)
                console.log(this.props)
                this.props.login(fan)
            })
    }

    // isLoggedIn = () => {
    //    return !!localStorage
    // }

    // loginStatus = () => {
    //     axios.get('http://localhost:3001/logged_in', 
    //    {withCredentials: true})
    //     .then(response => {
    //         debugger
    //       if (response.data.logged_in) {
    //         this.handleLogin(response)
    //       } else {
    //         this.handleLogout()
    //       }
    //     })
    //     .catch(error => console.log('api errors:', error))
    //   } 

    componentDidMount(){
        // this.loginStatus()
    }

    


    render(){
        // if(!!localStorage){
        //    return <Redirect to={"/"} />
        // }
        return(
            <div>
                <FanPage username={this.props.fan.username} />
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
    login: RxData => dispatch({type: "LOGIN_FAN", fan: RxData})
})


export default connect(mapStateToProps, mapDispatchToProps)(FanPageContainer)