import React from 'react'
import './ticket.css'

const Ticket = props => {
    return(
        <div id="ticket">
            <div id="info" onClick={props.clickHandler}>
                <strong>PHISH</strong><br></br>
                {props.date}<br></br>
                <span>{props.venue}, {props.location}</span><br></br>
                                
            </div>
            {props.displayLink ? props.displayLink(props.date) : ""}<br></br>
                
            {props.addMemoryBtn ? props.addMemoryBtn() : ""}
               
            {props.displayRemove ? props.displayRemove() : ""}
        </div>
    )
}

export default Ticket