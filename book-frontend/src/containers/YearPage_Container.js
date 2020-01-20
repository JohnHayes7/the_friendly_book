import React from 'react'
import YearPage from '../components/YearPage'

export default class YearPageContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            shows: []
        }
    }

    getShowsFromYear = () => {
        fetch(`https://api.relisten.net/api/v2/artists/phish/years/${this.props.match.params.year}`).then(response => response.json())
        .then(shows => {
            
           shows.shows.map(show => {
                const newShow = {
                    date: show.display_date,
                    location: show.venue.location,
                    venue: show.venue.name,
                    setlist:{
                        set1: [],
                        set2: [],
                        encore: []
                    }
                }
                this.setState(prevState => ({
                    shows: [...prevState.shows, newShow]
                }))
            })
            console.log(this.state)
        })
    }

    getSetsFromYearShows = () =>{
        this.state
    }

    render(){
        const year = this.props.match.params.year
       
        return(
            <div>
                <YearPage year={year}/>
                {this.getShowsFromYear()}
            </div>
        )
    }
}