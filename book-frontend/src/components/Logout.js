import React from 'react'
import './logout.css'
import { connect } from 'react-redux'
import LoginContainer from '../containers/Log_In_Container'
import {Link} from 'react-router-dom'

class Logout extends React.Component {

    constructor(){
        super()
        this.state = {
            username: "",
            shows: []
        }
    }

    displayInfo = () => {
        
        return(
            <div>
                <h2>Welcome back, <Link to={`/fans/${this.state.username}`}>{this.state.username}</Link></h2>
                You Have {this.state.shows.length} stubs in your hand<br></br>
                <button id="logout-btn" onClick={event => this.logout(event)}> Logout </button>
            </div>
        ) 
    }

    logout = () => {
        localStorage.clear();
        this.props.logout()
   }

   getFan = () => {

       if(localStorage.logged_in){
 
            fetch(`http://localhost:3001/fans/${localStorage.user_id}`).then(response => response.json())
            .then(rxFan => {
                this.setState({
                    username: rxFan.data.attributes.username,
                    shows: rxFan.included.filter(data => data.type === "show")
                })
            })
        }else{
            return <LoginContainer />
        }   
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

const mapStateToProps = state => {
    
    return {
        fan: state
    } 
}

const mapDispatchToProps = dispatch => ({
    logout: FormData => dispatch({type: "LOGOUT_FAN", fan: FormData})
})

export default connect (mapStateToProps, mapDispatchToProps)(Logout)