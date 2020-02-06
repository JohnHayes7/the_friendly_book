import React from 'react'
import YearPage from '../components/YearPage'



export default class YearPageContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            loaded: false,
            shows: []
        }
    }

    getShowsFromYear = () => {
        fetch(`https://api.relisten.net/api/v2/artists/phish/years/${this.props.match.params.year}`).then(response => response.json())
        .then(shows => {
            let yearShowsAry = []
            debugger
           shows.shows.map(show => {
            const newShow = {
                date: "", 
                location: "",
                venue: "",
                set1: [],
                set2: [],
                set3: [],
                encore: []
            }
               fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${show.display_date}`).then(response => response.json())
               .then(showSets => {
                    // debugger
                    let sets = showSets.sources[0].sets
                    let firstSet = sets.find(set => set.name === "Set 1" ) || null
                    let secondSet = sets.find(set => set.name === "Set 2") || null
                    let thirdSet = sets.find(set => set.name === "Set 3") || null
                    let encore = sets.find(set => set.name === "Encore") || null
                  
                   
                    if(firstSet){
                        firstSet.tracks.map(song => {
                            newShow.set1.push(song.title)
                        })
                    }
                   
                   
                    
                    if(secondSet){
                        secondSet.tracks.map(song => {
                            newShow.set2.push(song.title)
                        })
                    }

                    if(thirdSet){
                        thirdSet.tracks.map(song => {
                            newShow.set3.push(song.title)
                        } )
                    }
                    
                    if(encore){
                        encore.tracks.map(song => {
                            newShow.encore.push(song.title)
                        })
                    }
                    
               })
              
                newShow.date = show.display_date
                newShow.location = show.venue.location
                newShow.venue = show.venue.name

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