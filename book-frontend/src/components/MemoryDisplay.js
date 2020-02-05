import React from 'react'


const MemoryDisplay = props =>{
    debugger
    return(
        <div>
            {props.parseFanMemories(props.show, props.fan)}
        </div>
    )
}

export default MemoryDisplay