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
               fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${show.display_date}`).then(response => response.json())
               .then(showSets => {
                    let firstSet = showSets.sources[0].sets[0].tracks
                    firstSet.map(songTitle => {
                        setOne.push(songTitle.title)
                    })
                    
                    if(showSets.sources[0].sets[1]){
                        showSets.sources[0].sets[1].tracks.map(song => {
                            setTwo.push(song.title)
                        })
                    }
                    
                    if(showSets.sources[0].sets[2]){
                        showSets.sources[0].sets[2].tracks.map(song => {
                            encore.push(song.title)
                        })
                    }

               })
                const newShow = {
                    date: show.display_date,
                    location: show.venue.location,
                    venue: show.venue.name,
                    setlist:{
                        set1: setOne,
                        set2: setTwo,
                        encore: encore
                    }
                }
                yearShowsAry = [...yearShowsAry, newShow]
            })
            this.setState({
                loaded: true,
                shows: yearShowsAry
            })
           
           console.log(this.state)
          
        })
    }

    displayShows = () => {
        if(this.state.loaded){
            return  this.state.shows.map(show => {
                return (
                    <div key={show.date}>
                        <h3>{show.date}</h3>
                        {show.venue}<br></br>
                        {show.location}
                        {show.setlist.set1}
                        {show.setlist.set2}
                        {show.setlist.encore}
                    </div>
                )
            })
        }else{
          return  <div><h1>Loading...</h1></div>
        }
    }
      
    componentDidMount() {
        this.getShowsFromYear()
    }

    render(){
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

            // IS THIS WHERE I SHOULD PERSIST VENUE, CITY AND STATE?




        }
        const year = this.props.match.params.year
       
        return(
            <div>
                <YearPage year={year} displayShows={this.displayShows}/>
            </div>
        )
    }
}