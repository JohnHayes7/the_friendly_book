import React from 'react'
import './ticket.css'

const Ticket = props => {
    return(
        <div id="ticket">
            <div id="info">
                <strong>PHISH</strong><br></br>
                {props.date}<br></br>
                <span>{props.venue}, {props.location}</span><br></br>
                                
                {props.set1}
                {props.set2}
                {props.encore}
            </div>
        </div>
    )
}

export default Ticket