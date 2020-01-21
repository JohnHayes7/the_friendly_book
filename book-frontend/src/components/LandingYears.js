import React from 'react'
import { Link } from 'react-router-dom'

export default class LandingYears extends React.Component{

    parseYears = () => {
        return this.props.years.map(year => {
           return <li key={year}><Link to={`/years/${year}`}>{year}</Link></li>
        })
    }

    addYearsToDb = () => {
        
    }
    
    render(){
        return(
            <div id="landing-years-display">
                View Shows By Year:
                {/* STYLEIZE BULLETS IN THIS LIST */}
                <ul>
                    {this.parseYears()}
                </ul>
               
            </div>
        )
    }
}