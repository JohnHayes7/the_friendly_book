import React from 'react';
import LandingYearsContainer from '../containers/LandingYears_Container';
import FanPageMain from './FanPageMain'
import Header from './Header'
import './fan_page.css'
import './landing_page.css'


const Fan = props => {
    if(!props.fanProp.username){
        props.getFan()
    }
    return (
        <div>
            <div id="landing-wrapper">
                <Header />
                {/* CREATE COMPONENT TO GO IN LOGIN SPOT */}
            </div>
            <div id="fan-page">
                <FanPageMain fanProp={props.fanProp} displayShows={props.displayShows} />
                <LandingYearsContainer />
            </div>
        </div>
         )
        
}

export default Fan