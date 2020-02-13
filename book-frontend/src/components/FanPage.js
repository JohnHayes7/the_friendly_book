import React from 'react';
import LandingYearsContainer from '../containers/LandingYears_Container';
import FanPageMain from './FanPageMain'
import Header from './Header'
import FanInfoLogout from './FanInfoLogout'
import './fan_page.css'
import './landing_page.css'


const Fan = props => {

    return (
        <div>
            <div id="landing-wrapper">
                <Header />
               <FanInfoLogout />
            </div>
            {props.fanProp.loading ? <h3>Loading....</h3> : (<div id="fan-page">
                <FanPageMain fanProp={props.fanProp} displayShows={props.displayShows} />
                {props.memoryDisplay}
                <LandingYearsContainer />
                </div>)}
        </div>
         )
        
}

export default Fan