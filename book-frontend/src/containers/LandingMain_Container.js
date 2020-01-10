import React from 'react'
import LandingMain from '../components/LandingMain'

class LandingMainContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            randomVideos: []
        }
    }

    getVideos = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=phish&key=${YT_APIKEY}`).then(response => response.json())
        .then(videos => {
            videos.items.shift()
            videos.items.map(video => {
                return this.setState(prevState => ({
                    randomVideos: [...prevState.randomVideos, video.id.videoId ]
                }))
            })
           
        })
    }
    

    componentDidMount(){
        this.getVideos()
    }

    render(){
        return(
            <div id="landingMainContainer">
                <LandingMain randomVideos={this.state.randomVideos}/>
            </div>
        )
    }
}

const YT_APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY


export default LandingMainContainer