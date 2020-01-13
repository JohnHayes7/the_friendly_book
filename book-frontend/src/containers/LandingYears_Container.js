import React from 'react'
import LandingYears from '../components/LandingYears'

const yearsAry = []

class LandingYearsContainer extends React.Component{
    
    
    getYears = () => {
        
        fetch('https://api.relisten.net/api/v2/artists/phish/years').then(response => response.json())
        .then(years => {
            years.map(year => {
                yearsAry.push(year.year) 
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
            <div>
                <LandingYears years={yearsAry}/>
            </div>
        )
    }
}

export default LandingYearsContainer

