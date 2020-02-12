import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ShowPage from '../components/ShowPage'

class ShowPageContainer extends React.Component{
    
    constructor(){
        super()
        this.state = {
            loadedShow: false,
            results: {}
        }
    }
   
    
    addShowToDb = () => {
       fetch(`http://localhost:3001/shows`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.props.show)
        }).then(response => response.json())
        .then(showInfo => {   
            console.log(showInfo)
            this.setState({
                loadedShow: true,
                results: showInfo
           }) 
        })  
    }

    searchDate = date => {
        return date.split("-")[2] + '-' + date.split("-")[0] + '-' + date.split("-")[1]
    }


    fetchShowfromRelisten = () => {
        fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
            .then(showSets => {
                debugger
                this.parseShowFromRelisten(showSets)
            })     
    }

    parseShowFromRelisten = showSets => {
        if(showSets.error_code === 404){
            alert(`Show from ${this.props.match.params.date} could not be found.  Please check the date and date format. Date must be formatted 'mm-dd-yyyy'`)
            window.history.back()
        }else{
            this.props.show.date = showSets.display_date
            this.props.show.location = showSets.venue.location
            this.props.show.venue = showSets.venue.name
            let firstSet = showSets.sources[0].sets.find(set => set.name === "Set 1")
            let secondSet = showSets.sources[0].sets.find(set => set.name === "Set 2")
            let thirdSet = showSets.sources[0].sets.find(set => set.name === "Set 3")
            let encore = showSets.sources[0].sets.find(set => set.name === "Encore")

        if(!this.props.show.show){
            if(firstSet && firstSet.tracks.length === 0){
                firstSet.tracks.map(songTitle => {
                    this.props.show.set1.push(songTitle.title)
                })
            }
            
            if(secondSet && secondSet.tracks.length === 0){
                secondSet.tracks.map(song => {
                    this.props.show.set2.push(song.title)
                })
            }
            
            if(thirdSet && thirdSet.tracks.length === 0){
                thirdSet.tracks.map(song => {
                    this.props.show.set3.push(song.title)
                })
            }
            
            if(encore && encore.tracks.length === 0 ){
                encore.tracks.map(song => {
                    this.props.show.encore.push(song.title)
                })
            }

        }else{

            if(firstSet && firstSet.tracks.length === 0){
                firstSet.tracks.map(songTitle => {
                    this.props.show.show.set1.push(songTitle.title)
                })
            }
            

            if(secondSet && secondSet.tracks.length === 0){
                secondSet.tracks.map(song => {
                    this.props.show.show.set2.push(song.title)
                })
            }

            if(thirdSet && thirdSet.tracks.length === 0){
                debugger
                thirdSet.tracks.map(song => {
                    this.props.show.show.set3.push(song.title)
                })
            }
            
            if(encore && encore.tracks.length === 0){
                encore.tracks.map(song => {
                    this.props.show.show.encore.push(song.title)
                })
            }
        }
        this.addShowToDb() 
        }
    }


    getShowFromDb = () => {
        fetch(`http://localhost:3001/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
        .then(showInfo => {
            if(showInfo.code === 3000){
                this.fetchShowfromRelisten()
            }else{ 
                this.setState({
                    loadedShow: true,
                    results: showInfo
                })
            }
        })
    }

    addFanToShow = event => {
        const fanShowData = {
            month: event.target.pathname.split("/")[2].split("-")[0],
            day: event.target.pathname.split("/")[2].split("-")[1],
            year: event.target.pathname.split("/")[2].split("-")[2],
            fanId: localStorage.user_id
        }
        
        fetch(`http://localhost:3001/add_fan_to_show`,{
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fanShowData)
        }).then(response => response.json())
        .then(rxShow => {
           this.setState({loadedShow: true, results: rxShow})
        })
        
    }

    componentDidMount(){
        console.log("MOUNTED")
        this.getShowFromDb()
    }
    
    render(){
        return(
            <div>
                <ShowPage showInfo={this.state.results} getSongs={this.fetchSongsfromRelisten} addFanToShow={this.addFanToShow} displayFans={this.displayFans} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        show: state
    }
}

export default connect(mapStateToProps)(ShowPageContainer)