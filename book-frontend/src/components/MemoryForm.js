import React from 'react'

const MemoryForm = props => {
    
    return(
        <div id="memory-form">
          <form onSubmit={event => props.memorySubmit(event)}>
                <label className="grey-out">{props.fan.username} says:</label><br></br>
                <textarea id="memory-text" type="text" value={props.text} onChange={event => props.changeHandler(event)}></textarea>
                
                <input type="submit" />
            </form>
        </div>
    )
}

export default MemoryForm