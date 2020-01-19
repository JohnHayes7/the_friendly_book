import React from 'react'
import Youtube from 'react-youtube'

export default class LandingMain extends React.Component{

    parseSetOneInfo = () => {
        return this.props.todayInHistory.setlist.set1.map(song => {
            return <span><strong>Set1:</strong> * {song} </span>
        })
        
    }

    parseSetTwoInfo = () => {
            return this.props.todayInHistory.setlist.set2.map(song => {
                return <span><strong>Set2:</strong> * {song} </span>
               })
         
      }

    
    parseEncoreInfo = () => {
        return this.props.todayInHistory.setlist.encore.map(song => {
             return <span><strong>Encore:</strong> * {song} </span>
         })
      }

    checkForMusic = () => {
        if(this.props.todayInHistory.venue === "No shows today"){
            return <span></span>
        }else{
            this.parseSetOneInfo()
            this.parseSetTwoInfo()
            this.parseEncoreInfo()
        }
    }
    
   

    render(){
        

        const opts = {
            height: '200',
            width: '410'
        }
        
       
        
        return(
                <div id="landingPage-main">
                    Random Phish
                    <div id="landingMain-Vids">
                        <div className="landingPageVid" id="land-vid-1">
                            <Youtube videoId={this.props.randomVideos[0]} opts={opts} />
                        </div>
                        <div className="landingPageVid" id="land-vid-2">
                            <Youtube videoId={this.props.randomVideos[35]} opts={opts} />
                        </div>
                    </div>
                    <div id="landing-history">
                        Today In Phish History
                        <div id="history-display">
                            {this.props.todayInHistory.venue}<br></br>
                            {this.props.todayInHistory.date}
                            <div id="today-setlist">
                                
                            </div>
                        </div>
                    </div>
                
                </div>
            
        )
    }

}

