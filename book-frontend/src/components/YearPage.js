import React from 'react';
import './year_page.css'

const Years = props => {
    
    return (
        <div>
            <h1>Shows from {props.year}</h1>
            <div>{props.displayShows()}</div>
        </div>
    )
}

export default Years