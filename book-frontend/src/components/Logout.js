import React from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import './logout.css'

export default class Logout extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         logged_in: localStorage.logged_in
    //     }
    // }

    // logout = () => {
    //     debugger
    //     this.setState({
    //         logged_in: false
    //     })
    //     debugger 
    //     localStorage.clear()
    // }

    displayInfo = () => {
        if(this.props.fanProp.shows){
            return(
                <div>
                    <h2>Welcome back, {this.props.fanProp.username}</h2>
                    You Have {this.props.fanProp.shows.length} stubs in your hand<br></br>
                    <button id="logout-btn" onClick={event => this.props.logout(event)}> Logout </button>
                </div>
            ) 
        }else{
            return <div>Loading...</div>
        }
        
    
    }

    render(){
            return(
                <div id="logout-window">
                    {this.displayInfo()}
                </div>
            )
        
        
    }
}