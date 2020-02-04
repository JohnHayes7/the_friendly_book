import React from 'react';
import LandingYearsContainer from '../containers/LandingYears_Container';
import FanPageMain from './FanPageMain'
import Header from './Header'
import Logout from './Logout'
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
               <Logout fanProp={props.fanProp} logout={props.logout} />
            </div>
            <div id="fan-page">
                <FanPageMain fanProp={props.fanProp} displayShows={props.displayShows} />
                {props.memoryDisplay}
                <LandingYearsContainer />
            </div>
        </div>
         )
        
}

export default Fan