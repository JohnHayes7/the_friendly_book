import React from 'react'
import Youtube from 'react-youtube'

export default class LandingMain extends React.Component{

    
   

    render(){
        

        const opts = {
            height: '200',
            width: '410'
        }
        
       
        
        return(
            <div id="landing-main-years">
                <div id="landingPage-main">
                    Random Phish
                    <div id="landingMain-Vids">
                        <div className="landingPageVid" id="land-vid-1">
                            <Youtube videoId={this.props.randomVideos[0]} opts={opts} />
                        </div>
                        <div className="landingPageVid" id="land-vid-2">
                            <Youtube videoId={this.props.randomVideos[42]} opts={opts} />
                        </div>
                    </div>
                    <div id="landing-history">
                        Today In Phish History
                    </div>
                
                </div>
                <div id="landing-years">
                        Years
                        {/* {this.parseYears} */}
                </div>

            </div>
            
        )
    }

}

