import React from 'react'
import Ticket from '../components/Ticket'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'
import ShowPage from '../components/ShowPage'



class TicketContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            id: "",
            date: "",
            venue: "",
            location: "",
        }
    }

    displayRemove = () => {
        return <Link mediaid={this.props.mediaId} onClick={this.removeFromFanShows} className="removal" to={"#"}>Remove from your stubs</Link>
    }

    removeFromFanShows = show => {
        debugger
        const fanShowData = {
            fanId: localStorage.user_id,
            showId: show.props.mediaId
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
            debugger
        })
    }



    clickHandler = event => {
        
        this.setState({
            clicked: true,
        })
        this.props.addShow(this.props)
    }

    dateSlug = (date) => {
        let splitDate = date.split("-")
        return splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0]
    }

    render(){
        
        if(this.state.clicked){
           return <Redirect to={`/shows/${this.dateSlug(this.props.date)}`} />
        }
        return(
            <div>
                <Ticket key={this.props.key} date={this.props.date} location={this.props.location} venue={this.props.venue} displayLink={this.props.displayLink} displayRemove={this.displayRemove} clickHandler={event => this.clickHandler(event)} removeFromFanShows={this.props.removeFromFanShows} />
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    addShow: Data => dispatch({type: "ADD_SHOW", show: Data})
})


export default connect(0, mapDispatchToProps)(TicketContainer)