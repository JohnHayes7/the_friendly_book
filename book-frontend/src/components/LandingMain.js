import React from 'react'
import Youtube from 'react-youtube'

export default class LandingMain extends React.Component{

    parseSetOneInfo = () => {
        console.log(this.props.setOne)
        return this.props.setOne.map(song => {
            
            return<span key={song}> * {song} </span>
        })
        
    }

    parseSetTwoInfo = () => {
        console.log("Set 2 " + this.props.setlist.set2)
        return this.props.setlist.set2.map(song => {
            return <span><strong>Set2:</strong> * {song} </span>
        })
    }

    
    parseEncoreInfo = () => {
        console.log("Encore " + this.props.setlist.encore)
        return this.props.setlist.encore.map(song => {
             return <span><strong>Encore:</strong> * {song} </span>
         })
      }

    checkForMusic = () => {
        if(this.props.todayInHistory.venue === "No shows today"){
            return <span></span>
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
                            <strong>Set1:</strong>{this.parseSetOneInfo()}
                            </div>
                        </div>
                    </div>
                
                </div>
            
        )
    }

}

