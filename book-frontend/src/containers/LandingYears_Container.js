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
    
    // addYearToDb = array =>{
    //     array.map(year => {
    //         // debugger
    //         fetch('http://localhost:3001/years', {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 year: year,
    //                 completed: true
    //             }),
    //             headers: {
    //                 "Content-type": "application/json",
    //                 "Accept": 'application/json',
    //                 'Access-Control-Allow-Origin': '*'
    //             }   
    //         }).then(response => response.json())
    //         .then( year => {
    //             debugger
    //             return year
    //         })
    //     })
    // }

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

