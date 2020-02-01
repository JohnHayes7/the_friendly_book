import React from 'react'
import Youtube from 'react-youtube'

export default class LandingMain extends React.Component{

    parseSetOneInfo = () => {
        return this.props.setOne.map(song => {
            return<span key={song}> * {song} </span>
        })
        
    }

    parseSetTwoInfo = () => {
        if(this.props.setTwo){
            return this.props.setTwo.map(song => {
                return <span key={song}> * {song} </span>
            })
        }
    }

    
    parseEncoreInfo = () => {
        return this.props.encore.map(song => {
             return <span key={song}> * {song} </span>
         })
      }

    formatDateForLink = () => {
        let date = this.props.todayInHistory.date
        let newFormat = ""
        if(date !== "Loading..."){
            newFormat = date.replace("-", "/") 
            newFormat = newFormat.replace("-", "/")  
        }
        return newFormat
    }

    displaySetOne = () => {
        if(this.props.setOne){
           return <strong>Set1:</strong>
        }
    }

    displaySetTwo = () => {
        if(this.props.setTwo){
            return <strong>Set2:</strong>
        }
    }

    displayEncore = () => {
        if(this.props.encore){
            return <strong>Encore:</strong>
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
                    </div><br></br><br></br>
                    <div id="landing-history">
                        Today In Phish History
                        <div id="history-display">
                            {this.props.todayInHistory.venue}<br></br>
                            {this.props.todayInHistory.date}
                            <div id="today-setlist">
                            {this.displaySetOne()}{this.parseSetOneInfo()}<br></br>
                            {this.displaySetTwo()}{this.parseSetTwoInfo()}<br></br>
                            {this.displayEncore()}{this.parseEncoreInfo()}<br></br><br></br>
                            <a target="_blank" href={`https://relisten.net/phish/` + this.formatDateForLink() }>Listen on Relisten</a>
                            </div>
                        </div>
                    </div>
                
                </div>
            
        )
    }

}

