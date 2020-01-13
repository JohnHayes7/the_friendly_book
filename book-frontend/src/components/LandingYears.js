import React from 'react'

export default class LandingYears extends React.Component{

    parseYears = () => {
        console.log(this.props.years)
        return this.props.years.map(year => {
           return <li>{year}</li>
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