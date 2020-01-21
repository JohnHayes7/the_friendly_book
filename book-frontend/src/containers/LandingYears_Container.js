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
            // fetch('http://localhost:3001/years', {
            //         method: "post",
            //         headers: {
            //             "Content-Type": "application/json"
            //         },
            //         body: JSON.stringify(years)
            //     }).then(response => response.json())
            //     .then( year => {
            //         console.log(year)
            //     })
            
            years.map(year => {
                return this.setState(prevState => ({
                    years: [...prevState.years, year.year]
                }))
            })
        })
    }

    // addYearsToDb = () => {
    //     fetch("http://localhost:3001/years", {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(this.state.years)
    //     }).then(response => response.json())
    //     .then(year => {
    //         console.log(year)
    //     })
    // }

    componentDidMount(){
        this.getYears()
        // this.addYearsToDb()
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

