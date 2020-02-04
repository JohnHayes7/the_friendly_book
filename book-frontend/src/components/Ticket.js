import React from 'react'
import './ticket.css'

const Ticket = props => {
    debugger
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
                
                {props.addMemoryToShow ? props.addMemoryToShow() : ""}
               
                {props.displayRemove ? props.displayRemove() : ""}
                
            </div>
        </div>
    )
}

export default Ticket