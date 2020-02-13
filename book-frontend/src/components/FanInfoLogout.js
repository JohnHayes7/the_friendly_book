import React from 'react'
import './fanInfoLogout.css'
import { connect } from 'react-redux'
import LoginContainer from '../containers/Log_In_Container'
import {Link} from 'react-router-dom'
import { fetchFan } from '../actions/fetchFan'

class FanInfoLogout extends React.Component {

    displayInfo = () => {
        return(
            this.props.fan.loading ? <h3>Loading...</h3> :(
            <div>
                <h2>Welcome back, <Link to={`/fans/${this.props.fan.username}`}>{this.props.fan.username}</Link></h2>
                You Have {this.props.fan.shows.length} stubs in your hand<br></br>
                <button id="logout-btn" onClick={event => this.logout(event)}> Logout </button>
            </div>
            )
        ) 
    }

    logout = () => {
        localStorage.clear();
        this.props.logout()
   }


    componentDidMount(){
        return localStorage.logged_in ? this.props.fetchFan() : <LoginContainer />  
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
    fetchFan: () => dispatch(fetchFan()),
    logout: FormData => dispatch({type: "LOGOUT_FAN", fan: FormData})
})

export default connect (mapStateToProps, mapDispatchToProps)(FanInfoLogout)