import React from 'react'
import { connect } from 'react-redux'
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
        debugger
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
        debugger
        fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
            .then(showSets => {
                debugger
                console.log("FETCHED SHOW FROM RELISTEN")
                console.log(this.props)
                
                if(!this.props.show.show){
                    
                    this.props.show.date = showSets.display_date
                    this.props.show.location = showSets.venue.location
                    this.props.show.venue = showSets.venue.name
                    let firstSet = showSets.sources[0].sets[0].tracks
                    debugger
                    firstSet.map(songTitle => {
                        this.props.show.set1.push(songTitle.title)
                    })
                    debugger
                    if(showSets.sources[0].sets[1]){
                        showSets.sources[0].sets[1].tracks.map(song => {
                            this.props.show.set2.push(song.title)
                        })
                    }
                    
                    if(showSets.sources[0].sets[2]){
                        showSets.sources[0].sets[2].tracks.map(song => {
                            this.props.show.encore.push(song.title)
                        })
                    }
                    
                }else{
                    this.props.show.show.date = showSets.display_date
                    this.props.show.show.location = showSets.venue.location
                    this.props.show.show.venue = showSets.venue.name
                    let firstSet = showSets.sources[0].sets[0].tracks
               
                    firstSet.map(songTitle => {
                        this.props.show.show.set1.push(songTitle.title)
                    })
                    
                    if(showSets.sources[0].sets[1]){
                        showSets.sources[0].sets[1].tracks.map(song => {
                            this.props.show.show.set2.push(song.title)
                        })
                    }
                    
                    if(showSets.sources[0].sets[2]){
                        showSets.sources[0].sets[2].tracks.map(song => {
                            this.props.show.show.encore.push(song.title)
                        })
                    }
                }
                this.addShowToDb() 
            })     
    }


    getShowFromDb = () => {
        debugger
        fetch(`http://localhost:3001/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
        .then(showInfo => {
            debugger
            if(showInfo.code === 3000){
                console.log(showInfo)
                this.fetchShowfromRelisten()
            }else{
                console.log(showInfo)
                this.setState({
                    loadedShow: true,
                    results: showInfo
                })
            }
        })
    }

    addFanToShow = event => {
        debugger
    }


    componentDidMount(){
        console.log("MOUNTED")
        this.getShowFromDb()
    }

    


    render(){
        console.log("RENDERED")
        return(
            <div>
                <ShowPage showInfo={this.state.results} getSongs={this.fetchSongsfromRelisten} addFanToShow={this.addFanToShow} />
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