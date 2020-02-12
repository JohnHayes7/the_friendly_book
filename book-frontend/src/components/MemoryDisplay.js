import React from 'react'
import './fan_page.css'

const MemoryDisplay = props =>{
    debugger
    return(
        <div id="memories-display-div">
            Memories:
            {props.parseFanMemories(props.show, props.fan)}
        </div>
    )
}

export default MemoryDisplay