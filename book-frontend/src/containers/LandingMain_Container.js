import React from 'react'
import LandingMain from '../components/LandingMain'
require('dotenv').config()

const YT_APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY
// const PHISHNET_APIKEY = process.env.REACT_APP_PHISHNET_API_KEY



class LandingMainContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            randomVideos: [],
            history: {
                venue: "Loading...",
                date: "Loading...",
                location: ""
            },
            setlist: {
                set1: [],
                set2: [],
                set3: [],
                encore:[]
            }
        }
    }

    randomizeVideos = () => {
        if(this.state.randomVideos.length > 0){
            const randomizedVideos =  this.state.randomVideos.sort(() => Math.random() - 0.5)
            this.setState({
                randomVideos: randomizedVideos
            })
        }
    }


    getVideos = () => {
        console.log(process.env)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=phish&key=${YT_APIKEY}`).then(response => response.json())
        .then(videos => {
            videos.items.shift()
            videos.items.map(video => {
                return this.setState(prevState => ({
                    randomVideos: [...prevState.randomVideos, video.id.videoId ]
                }))
            })
            this.randomizeVideos()   
        })
    }

    getSetlist = () => {
        fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${this.state.history.date}`).then(response => response.json())
        .then(show => {
            debugger

            let setOne = show.sources[0].sets.find(set => set.name === "Set 1")

            let setTwo = show.sources[0].sets.find(set => set.name === "Set 2")
    
            let setThree = show.sources[0].sets.find(set => set.name === "Set 3")

            let encore = show.sources[0].sets.find(set => set.name === "Encore")
            
            this.setState({
                setlist: {
                    set1: setOne ? setOne.tracks.map(song => song.title) : "",
                    set2: setTwo ? setTwo.tracks.map(song => song.title) : "",
                    set3: setThree ? setThree.tracks.map(song => song.title) : "",
                    encore: encore ? encore.tracks.map(song => song.title) : ""
                }
            })
        })
    }

    todayInHistory = () => {
        
        fetch('https://api.relisten.net/api/v2/artists/phish/shows/today').then(response => response.json())
        .then(shows => {
            debugger
            // I WANT TO RANDOMLY PICK SHOW WHEN THERE IS MORE THAN 1 SHOW ON A GIVEN DATE
            if(shows.length > 0){
                this.setState({
                    history: {
                        venue: shows[0].venue.name, 
                        date: shows[0].display_date,
                        location: shows[0].venue.location
                    }
                })
               this.getSetlist() 
            }else{
               this.setState({
                   history:{
                       venue: "No shows today",
                       date: "Yeah I'm suprised too"
                   }
               })
            }
            
        })
    }

    componentDidMount(){
        this.getVideos()
        this.todayInHistory()
       
    }

    render(){
        return(
            <div id="landingMainContainer">
                <LandingMain randomVideos={this.state.randomVideos} todayInHistory={this.state.history} setOne={this.state.setlist.set1} setTwo={this.state.setlist.set2} encore={this.state.setlist.encore} />
            </div>
        )
    }
}


export default LandingMainContainer