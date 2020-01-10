import React from 'react'
import Youtube from 'react-youtube'

export default class LandingMain extends React.Component{
    render(){

        const opts = {
            height: '200',
            width: '410'
        }
        return(
            <div id="landingPage-main">
                Random Phish Video
                <div id="landingMain-Vids">
                    <div className="landingPageVid" id="land-vid-1">
                        <Youtube videoId={this.props.randomVideos[0]} opts={opts} />
                    </div>
                    <div className="landingPageVid" id="land-vid-2">
                        <Youtube videoId={this.props.randomVideos[3]} opts={opts} />
                    </div>
                </div>
            </div>
        )
    }
}