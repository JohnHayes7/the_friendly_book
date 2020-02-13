import React from 'react'
import './fan_page.css'

const MemoryDisplay = props =>{
    
    return(
        <div id="memories-display-div">
            Memories:
            {props.parseFanMemories()}
        </div>
    )
}

export default MemoryDisplay