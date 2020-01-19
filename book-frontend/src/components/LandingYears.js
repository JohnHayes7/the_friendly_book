import React from 'react'

export default class LandingYears extends React.Component{

    parseYears = () => {
        return this.props.years.map(year => {
           return <li key={year}>{year}</li>
        })
    }
    
    render(){
        return(
            <div id="landing-years-display">
                Select a year to view shows:
                <ul>
                    {this.parseYears()}
                </ul>
               
            </div>
        )
    }
}