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
      return  <Redirect to="/" />
       
    }

    displayInfo = () => {
        if(this.props.fanProp.shows){
            return(
                <div>
                    <h2>Welcome back, {this.props.fanProp.username}</h2>
                    You Have {this.props.fanProp.shows.length} stubs in your hand<br></br>
                    <Link onClick={this.logout}> Logout </Link>
                </div>
            ) 
        }else{
            return <div>Loading...</div>
        }
        
    
    }

    render(){
        // if(!localStorage.logged_in){
        //    return <Redirect to={"/"} />
        // }
        return(
            <div id="logout-window">
                {this.displayInfo()}
            </div>
        )
    }
}