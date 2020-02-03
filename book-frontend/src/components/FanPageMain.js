import React from 'react'
import './fan_page.css'

const FanPageMain = props => {
    debugger
    return(
        <div id="fan-page-main">
            {props.fanProp.username}
            <div id="fan-show-display">
                {props.displayShows(props.fanProp.shows)}
            </div>
            
        </div>
    )
}

export default FanPageMain