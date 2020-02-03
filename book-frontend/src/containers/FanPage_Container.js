import React from 'react'
import FanPage from '../components/FanPage'
import { connect } from 'react-redux'
import '../components/fan_page.css'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TicketContainer from './Ticket_Container'

class FanPageContainer extends React.Component{

    getFanFromDb = () => {
        // debugger
        fetch(`http://localhost:3001/fans/${localStorage.user_id}`).then(response => response.json())
            .then(fan => {
                
                console.log(fan)
                console.log(this.props)
                this.props.login(fan)
            })
    }

    formatDateForLink = date =>{
        return date.split(".")[2] + "/" + date.split(".")[0] + "/" + date.split(".")[1]

    }

    displayLink = date =>{
         return <Link target="_blank" to={`https://relisten.net/phish/` + this.formatDateForLink(date) }>Listen on Relisten</Link>

    }

    removeFromFanShows = event => {
        debugger
        const fanShowData = {
            fanId: localStorage.user_id,
            showId: event._targetInst.key
        }
        debugger
        fetch(`http://localhost:3001/remove_show_from_fan`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fanShowData)
        }).then(response => response.json())
        .then(rxInfo => {
            this.props.login(rxInfo)
        })
    }

    
 
    fanShowsDisplay = shows =>{
        
        if(shows.length < 1){
            return(
                <h5>You Have No Shows. Add shows to collect stubs</h5>
            )
        }else{
            return(
                <div>
                    {shows.map( show => {
                       return <TicketContainer key={show.id} mediaid={show.id} date={show.attributes.display_date} venue={show.attributes.display_venue} location={show.attributes.display_location} displayLink={this.displayLink} removeFromFanShows={this.removeFromFanShows}  /> 
                    })}
                </div>
            )
        }
    }

    render(){
        
        if(!localStorage.logged_in){
            // alert("Please Login")
           return <Redirect to={"/"} />
        }
        return(
            <div>
                <FanPage fanProp={this.props.fan} getFan={this.getFanFromDb} displayShows={this.fanShowsDisplay} />
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