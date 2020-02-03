import React from 'react'
import './fan_page.css'

const FanPageMain = props => {
    
    return(
        <div id="fan-page-main">
            {props.fanProp.username}
            <div id="fan-show-display">
                {props.displayShows(props.fanProp)}
            </div>
            
        </div>
    )
}

export default FanPageMain