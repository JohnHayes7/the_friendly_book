import React from 'react'

const Set = props => {


    return(
        <div className={props.grid}> 
            {props.set()}
            {props.parseSet()}
        </div>
    )
}

export default Set