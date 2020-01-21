import React from 'react';

const Years = props => {
    
    return (
        <div>
            <h1>Shows from {props.year}</h1>
            <div>{props.displayShows()}</div>
        </div>
    )
}

export default Years