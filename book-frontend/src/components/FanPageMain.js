import React from 'react'
import './fan_page.css'

const FanPageMain = props => {
    // debugger
    return props.fanProp.fan.loading ? "Loading...." : (
        <div id="fan-page-main">
            {props.fanProp.fan.username}
            <div id="fan-show-display">
                {props.displayShows(props.fanProp.fan.shows)}
            </div>
            
        </div>
    )
}

export default FanPageMain