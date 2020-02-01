import React from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import './logout.css'

export default class Logout extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         logoutToHome: false
    //     }
    // }

    logout = () => {
        
        // this.setState({logoutToHome: true})
        localStorage.clear()
    }
    render(){
        // const { logoutToHome } = this.state
        // if (logoutToHome){
        //     return <Redirect to={"/"} />
        // }
        // debugger
        return(
            <div id="logout-window">
                <h2>Welcome back, {this.props.fanProp.username}</h2>
                You Have {this.props.fanProp.shows.length} stubs in your hand<br></br>
                <Link onClick={this.logout}> Logout </Link>
            </div>
        )
    }
}