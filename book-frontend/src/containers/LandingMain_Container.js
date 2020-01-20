import React from 'react'
import LandingMain from '../components/LandingMain'
import LandingYears from '../components/LandingYears'

const YT_APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY
const PHISHNET_APIKEY = process.env.REACT_APP_PHISHNET_API_KEY



class LandingMainContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            randomVideos: [],
            history: {
                venue: "Loading...",
                date: "Loading...",
            },
            setlist: {
                set1: [],
                set2: [],
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
            const setOneTitles = []
            const setTwoTitles = []
            const encoreTitles = []
            console.log("Show " + show)
            let setOne = show.sources[0].sets[0].tracks
            let setTwo = show.sources[0].sets[1].tracks
            let encore = show.sources[0].sets[2].tracks

            setOne.map( track => {
                setOneTitles.push(track.title)
            })

            setTwo.map( track => {
                setTwoTitles.push(track.title)
            })

            encore.map( track => {
                encoreTitles.push(track.title)
            })

            console.log("set 1: " + setOneTitles)
            console.log("set 2: " + setTwoTitles)
            console.log("encore: " + encoreTitles)
            
            this.setState({
                setlist: {
                    set1: setOneTitles,
                    set2: setTwoTitles,
                    encore: encoreTitles
                }
            })
        })
    }

    todayInHistory = () => {
        
        fetch('https://api.relisten.net/api/v2/artists/phish/shows/today').then(response => response.json())
        .then(show => {
            console.log(show)
            if(show.length > 0){
                this.setState({
                    history: {
                        venue: show[0].venue.name, 
                        date: show[0].display_date
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