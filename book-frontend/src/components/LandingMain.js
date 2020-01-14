import React from 'react'
import Youtube from 'react-youtube'

export default class LandingMain extends React.Component{

    parseSetInfo = () => {
      return this.props.setlist.set1.map(song => {
           return <span> * {song} </span>
       })
    }
   

    render(){
        

        const opts = {
            height: '200',
            width: '410'
        }
        
       debugger
        
        return(
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
                        <div id="history-display">
                            {console.log(this.props)}
                            {this.props.todayInHistory.venue}<br></br>
                            {this.props.todayInHistory.date}
                            <div id="today-setlist">
                                {this.parseSetInfo()}
                                
                            </div>
                        </div>
                    </div>
                
                </div>
            
        )
    }

}

