import React from 'react'
import './ticket.css'

const Ticket = props => {
    return(
        <div onClick={props.clickHandler} id="ticket">
            <div id="info">
                <strong>PHISH</strong><br></br>
                {props.date}<br></br>
                <span>{props.venue}, {props.location}</span><br></br>
                                
                {props.set1}
                {props.set2}
                {props.encore}

                {props.displayLink ? props.displayLink(props.date) : ""}<br></br>
                
                <div key={props.key} onClick={event => props.removeFromFanShows(event)}>
                    {props.displayRemove ? props.displayRemove() : ""}
                </div>
                
            </div>
        </div>
    )
}

export default Ticket