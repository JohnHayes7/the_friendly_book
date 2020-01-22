import React from 'react'
import YearPage from '../components/YearPage'

const SHOWS = []

export default class YearPageContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            loaded: false,
            shows: []
        }
    }

    getShowsFromYear = () => {
        // THIS WORKS FOR STANDARD 3 SET SHOWS BUT NEED TO ADAPT FOR 3 SET SHOWS, OR USE "SETNAME"
        fetch(`https://api.relisten.net/api/v2/artists/phish/years/${this.props.match.params.year}`).then(response => response.json())
        .then(shows => {
            let yearShowsAry = []
            
           shows.shows.map(show => {
            let setOne = []
            let setTwo = []
            let encore = []
            const newShow = {
                date: "",
                location: "",
                venue: "",
                set1: [],
                set2: [],
                encore: []
            }
               fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${show.display_date}`).then(response => response.json())
               .then(showSets => {
                    let firstSet = showSets.sources[0].sets[0].tracks
                   
                    firstSet.map(songTitle => {
                        newShow.set1.push(songTitle.title)
                    })
                    
                    if(showSets.sources[0].sets[1]){
                        showSets.sources[0].sets[1].tracks.map(song => {
                            newShow.set2.push(song.title)
                        })
                    }
                    
                    if(showSets.sources[0].sets[2]){
                        showSets.sources[0].sets[2].tracks.map(song => {
                            newShow.encore.push(song.title)
                        })
                    }

               })

               newShow.date = show.display_date
               newShow.location = show.venue.location
               newShow.venue = show.venue.name

                // const newShow = {
                //     date: ,
                //     location: show.venue.location,
                //     venue: show.venue.name,
                //     setlist:{
                //         set1: setOne,
                //         set2: setTwo,
                //         encore: encore
                //     }
                // }

                yearShowsAry = [...yearShowsAry, newShow]
            
            })
            this.setState({
                loaded: true,
                shows: yearShowsAry
            })
           console.log(this.state)
           
           if(this.state.loaded){
            
            // ADDS SHOW DATES TO DB
            fetch('http://localhost:3001/shows_dates',{
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state.shows)
            }).then(response => response.json())
            .then(showDates => {
                console.log("Show Dates " + showDates)
            })
        }
        })
    }

    
      
    componentDidMount() {
        this.getShowsFromYear()
    }

    render(){
        
        const year = this.props.match.params.year
       
        return(
            <div>
                <YearPage year={year} shows={this.state} displayShows={this.displayShows}/>
            </div>
        )
    }
}