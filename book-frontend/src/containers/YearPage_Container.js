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

        fetch(`https://api.relisten.net/api/v2/artists/phish/years/${this.props.match.params.year}`).then(response => response.json())
        .then(shows => {
            let yearShowsAry = []
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
      return  this.state.shows.map(show => {
            return (
                <div key={show.date}>
                    <h3>{show.date}</h3>
                    {show.venue}
                    {show.location}
                </div>
            )
        })
    }

    // getSetsFromYearShows = () =>{
    //     this.state
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