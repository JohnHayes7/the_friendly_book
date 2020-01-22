import React from 'react'
import Ticket from '../components/Ticket'


class TicketContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            date: "",
            venue: "",
            location: "",
        }
    }

    render(){
        return(
            <div onClick={show => this.clickHandler(show)} >
                <Ticket date={this.props.date} venue={this.props.venue} location={this.props.location}/>
            </div>
        )
    }
}

export default TicketContainer