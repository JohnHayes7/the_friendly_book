import React from 'react'

const Ticket = props => {
    return(
        <div id="info">
            Phish<br></br>
            {props.date}<br></br>
            {props.venue}, {props.location}<br></br>
                            
            {props.set1}
            {props.set2}
            {props.encore}
        </div>
    )
}

export default Ticket