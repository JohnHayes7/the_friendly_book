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
        
        fetch(`http://localhost:3001/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
        .then(showInfo => {
            
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
        console.log("RENDERED")
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