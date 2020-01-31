import React from 'react'
import './fan_page.css'

const FanPageMain = props => {
    
    return(
        <div id="fan-page-main">
            {props.fanProp.username}
            {props.displayShows(props.fanProp)}
        </div>
    )
}

export default FanPageMain