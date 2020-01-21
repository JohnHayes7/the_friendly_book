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
                    </div>
                )
            })
        }else{
          return  <div><h1>Loading...</h1></div>
        }
    }
      

    // getSetsFromYearShows = () =>{
    //     this.state.shows.map(show => {
    //         fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${show.date}`).then(response => response.json())
    //         .then(rxShow => {
                
    //             const setOneTitles = []
    //             const setTwoTitles = []
    //             const encoreTitles = []
                
    //             let setOne = rxShow.sources[0].sets[0].tracks
    //             let setTwo = rxShow.sources[0].sets[1].tracks
    //             let encore = rxShow.sources[0].sets[2].tracks
                
    //             setOne.map( track => {
    //                 setOneTitles.push(track.title)
    //             })

    //             if(setTwo){
    //                 setTwo.map( track => {
    //                     setTwoTitles.push(track.title)
    //                 })
    //             }

    //             if(encore){
    //                 encore.map( track => {
    //                     encoreTitles.push(track.title)
    //                 })
    //             }
                
    //         })
            
    //     })
        
    // }

    componentDidMount() {
        this.getShowsFromYear()
    }

    render(){
        const year = this.props.match.params.year
       
        return(
            <div>
                <YearPage year={year}/>
                {this.displayShows()}
            </div>
        )
    }
}