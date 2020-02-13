import React from 'react'
import LogInContainer from '../containers/Log_In_Container'
import LandingMainContainer from '../containers/LandingMain_Container'
import LandingYearsContainer from '../containers/LandingYears_Container'
import Header from './Header'
import './landing_page.css'
import Logout from './Logout'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Landing extends React.Component{
    render(){
        
        if(this.props.fan.loggedIn){
            return <Redirect to={`/fans/${this.props.fan.username}`} />
        }else{
            
            return(
                <div id="whole-window">
                    <div id="landing-wrapper">
                        <Header />
                        {this.props.fan.logged_in ? <Logout /> : <LogInContainer />}
                       
                    </div>
                    <div id="landing-second-line">
                        <LandingMainContainer />
                        <LandingYearsContainer />
                    </div>
                    
                    
                </div>
                
            )
        }
    }
}

const mapStateToProps = state => {
        return {
            fan: state
        }
}

export default connect (mapStateToProps)(Landing)