import React from 'react'

const Set = props => {


    return(
        <div className="set"> 
            {props.set()}
            {props.parseSet()}
        </div>
    )
}

export default Set