import React from 'react'
import LandingYears from '../components/LandingYears'



class LandingYearsContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            years:[]
        }
    }
    
    
    getYears = () => {
        fetch('https://api.relisten.net/api/v2/artists/phish/years').then(response => response.json())
        .then(years => {
            years.map(year => {
                return this.setState(prevState => ({
                    years: [...prevState.years, year.year]
                }))
            })
        })
    }

    componentDidMount(){
        this.getYears()
    }



    render(){
        return(
            <div id="landing-years-container">
              <LandingYears years={this.state.years} />
            </div>
        )
    }
}

export default LandingYearsContainer

