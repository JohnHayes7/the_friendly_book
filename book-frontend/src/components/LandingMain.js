import React from 'react'

export default class LandingMain extends React.Component{
    render(){
        return(
            <div id="landingPage-main">
                Random Phish Video
                <div id="landingMain-Vids">
                    <div className="landingPageVid" id="land-vid-1">
                        Video 1
                    </div>
                    <div className="landingPageVid" id="land-vid-2">
                        Video 2
                    </div>
                </div>
            </div>
        )
    }
}