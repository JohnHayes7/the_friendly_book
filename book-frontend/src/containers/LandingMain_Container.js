import React from 'react'
import LandingMain from '../components/LandingMain'
import LandingYears from '../components/LandingYears'

const YT_APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY
const PHISHNET_APIKEY = process.env.REACT_APP_PHISHNET_API_KEY

const yearsAry = []

class LandingMainContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            randomVideos: []
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

    // getTodaySetlist = () => {
    //     fetch(`https://api.phish.net/v3/setlists/tiph?apikey=${PHISHNET_APIKEY}`,{
    //         headers:{
    //             'Access-Control-Allow-Origin':'*'
    //         }
    //     }).then(response => response.json())
    //     .then(today => {
           
    //     })
    // }

    getYears = () => {
        
        fetch('https://api.relisten.net/api/v2/artists/phish/years').then(response => response.json())
        .then(years => {
            years.map(year => {
                yearsAry.push(year.year) 
            })
        })
    }

    // addYearToDb = array =>{
    //     array.map(year => {
    //         // debugger
    //         fetch('http://localhost:3001/years', {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 year: year,
    //                 completed: true
    //             }),
    //             headers: {
    //                 "Content-type": "application/json",
    //                 "Accept": 'application/json',
    //                 'Access-Control-Allow-Origin': '*'
    //             }   
    //         }).then(response => response.json())
    //         .then( year => {
    //             debugger
    //             return year
    //         })
    //     })
    // }

    componentDidMount(){
        this.getVideos()
        // this.getTodaySetlist()
        this.getYears()
    }

    render(){
        return(
            <div id="landingMainContainer">
                <LandingMain randomVideos={this.state.randomVideos} />
                <LandingYears years={yearsAry}/>
            </div>
        )
    }
}


export default LandingMainContainer