import React from 'react'
import Youtube from 'react-youtube'
import Set from './Set'

export default class LandingMain extends React.Component{

    parseSetOneInfo = () => {
        return this.props.setOne.map(song => {
            return<div className="setlist" key={song}> {song} </div>
        })
        
    }

    parseSetTwoInfo = () => {
        if(this.props.setTwo){
            return this.props.setTwo.map(song => {
                return <div className="setlist" key={song}> {song} </div>
            })
        }
    }

    
    parseEncoreInfo = () => {
        if(this.props.encore !== ""){
            return this.props.encore.map(song => {
                return <div className="setlist" key={song}> {song} </div>
                })
            }
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
        return this.props.setOne.length > 0 ? <strong>Set1:</strong> : ""
    }

    displaySetTwo = () => {
        return this.props.setTwo.length > 0 ? <strong>Set2:</strong> : ""
    }

    displayEncore = () => {
        return this.props.encore.length > 0 ? <strong>Encore:</strong> : ""
    }

    formatDisplayDate = () =>{
       let year = this.props.todayInHistory.date.split("-")[0]
       let month = this.props.todayInHistory.date.split("-")[1]
       let day = this.props.todayInHistory.date.split("-")[2]

       return `${month}.${day}.${year}`
    }

    render(){
        const opts = {
            height: '200',
            width: '410'
        }
        
       
        
        return(
                <div id="landingPage-main">
                    <span className="landing-title">Random Phish</span>
                    <div id="landingMain-Vids">
                        <div className="landingPageVid" id="land-vid-1">
                            <Youtube videoId={this.props.randomVideos[0]} opts={opts} />
                        </div>
                        <div className="landingPageVid" id="land-vid-2">
                            <Youtube videoId={this.props.randomVideos[35]} opts={opts} />
                        </div>
                    </div><br></br><br></br>
                    <div id="landing-history">
                    <span className="landing-title">Today In Phish History</span>
                        <div id="history-display">
                            {this.props.todayInHistory.venue}<br></br>
                            {this.props.todayInHistory.location}<br></br>
                            <div className="small-date">{this.formatDisplayDate()}</div>
                            <a target="_blank" href={`https://relisten.net/phish/` + this.formatDateForLink() }>Listen on Relisten</a>
                            <div id="today-setlist">
                                <Set grid="set-no-grid" set={this.displaySetOne} parseSet={this.parseSetOneInfo} />
                                <Set grid="set-no-grid" set={this.displaySetTwo} parseSet={this.parseSetTwoInfo} />
                                {/* <Set set={this.ifSetThree} parseSet={this.parseSetThree} /> */}
                                <Set set={this.displayEncore} parseSet={this.parseEncoreInfo} />
                                
                            </div>
                        </div>
                    </div>
                
                </div>
            
        )
    }

}

