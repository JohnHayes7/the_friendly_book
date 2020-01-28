import React from 'react';
import LandingYearsContainer from '../containers/LandingYears_Container';

const Fan = props => {
    return (
        <div>
            <h2>{props.username}</h2>
            <LandingYearsContainer />
        </div>
    )
}

export default Fan