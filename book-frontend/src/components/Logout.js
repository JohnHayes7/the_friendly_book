import React from 'react'
import './logout.css'

export default class Logout extends React.Component {

    constructor(){
        super()
        this.state = {
            username: "",
            shows: []
        }
    }

    // logout = () => {
    //     debugger
    //     this.setState({
    //         logged_in: false
    //     })
    //     debugger 
    //     localStorage.clear()
    // }

    

    displayInfo = () => {
        
        return(
            <div>
                <h2>Welcome back, {this.state.username}</h2>
                You Have {this.state.shows.length} stubs in your hand<br></br>
                <button id="logout-btn" onClick={event => this.logout(event)}> Logout </button>
            </div>
        ) 
    }

    logout = () => {
        localStorage.clear()
       this.setState({
           logged_in: localStorage.user_id
       })
   }

   getFan = () => {
       fetch(`http://localhost:3001/fans/${localStorage.user_id}`).then(response => response.json())
       .then(rxFan => {
           this.setState({
               username: rxFan.data.attributes.username,
               shows: rxFan.included.filter(data => data.type === "show")
           })
       })
   }

    





    componentWillMount(){
        this.getFan()
    }

    render(){
            return(
                <div id="logout-window">
                    {this.displayInfo()}
                </div>
            )
        
        
    }
}