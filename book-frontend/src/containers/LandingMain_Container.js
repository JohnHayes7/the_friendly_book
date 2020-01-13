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
                venue: "TBD",
                date: "TBD",

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

    todayInHistory = () => {
        
        fetch('https://api.relisten.net/api/v2/artists/phish/shows/today').then(response => response.json())
        .then(show => {
            console.log(show)
            this.setState({
                history: {
                    venue: show[0].venue.name, 
                    date: show[0].display_date
                }
            })
           
        })
    }


    

    componentDidMount(){
        this.getVideos()
        this.todayInHistory()
       
    }

    render(){
        return(
            <div id="landingMainContainer">
                <LandingMain randomVideos={this.state.randomVideos} todayInHistory={this.state.history} />
            </div>
        )
    }
}


export default LandingMainContainer