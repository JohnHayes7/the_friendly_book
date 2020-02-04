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
        
        if(this.props.mediaid){
            return <div key={this.props.mediaid} onClick={this.props.removeFromFanShows} className="removal">X Remove from your stubs</div>
        }else{
           return null
        }
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