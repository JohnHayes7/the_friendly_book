import React from 'react'
import './ticket.css'
import Rodal from 'rodal'
import ShowPage from "./ShowPage"

const Ticket = props => {
    return(
        <div onClick={props.show} id="ticket">
            <div id="info">
                <strong>PHISH</strong><br></br>
                {props.date}<br></br>
                <span>{props.venue}, {props.location}</span><br></br>
                                
                {props.set1}
                {props.set2}
                {props.encore}
            </div>
            {/* <Rodal visible={props.visible} onClose={props.hide} enterAnimation={"slideLeft"} exitAnimation={"slideRight"}>
                <div id="pop-up-page">
                    <ShowPage hide={props.hide} date={props.date} width={600} height={400}/>
                </div>
            </Rodal> */}
        </div>
    )
}

export default Ticket