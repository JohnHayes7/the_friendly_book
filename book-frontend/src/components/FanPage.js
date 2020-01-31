import React from 'react';
import LandingYearsContainer from '../containers/LandingYears_Container';
import FanPageMain from './FanPageMain'

const Fan = props => {
    if(!props.fanProp.username){
        props.getFan()
    }
    return (
        <div>
            <h2>{props.fanProp.username}</h2>
            <FanPageMain fanProp={props.fanProp} />
            <LandingYearsContainer />
        </div>
    )
}

export default Fan