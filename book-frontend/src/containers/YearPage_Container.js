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
          
        //    if(newShow.date && newShow.location && newShow.venue){
        //        
        //    }
        //    console.log(this.state)
        })

        const newShow = {
            
        }
    }

    render(){
        const year = this.props.match.params.year
        // const showsFromYear = {}
       
        return(
            <div>
                <YearPage year={year}/>
                {this.getShowsFromYear()}
            </div>
        )
    }
}