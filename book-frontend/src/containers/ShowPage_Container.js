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
        
        fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
            .then(showSets => {
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
                        this.props.encore.push(song.title)
                    })
                }

                this.addShowToDb()
            })     
    }

    // updateShowSetsInDb = show => {
    //     fetch(`http://localhost:3001/shows/${show.data.id}`,{
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(show)
    //     }).then(response => response.json())
    //     .then(updatedShow => {
    //         this.setState({
    //             results: updatedShow
    //         })
    //     })
    // }

    getShowFromDb = () => {
        debugger
        fetch(`http://localhost:3001/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
        .then(showInfo => {
            
            if(showInfo.code === 3000){
                debugger
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


    componentDidMount(){
        if(!this.state.loadedShow){
            this.getShowFromDb()
        }
       
        // this.fetchSongsfromRelisten()
        // this.sendShowToDb()
    }

    


    render(){
        return(
            <div>
                <ShowPage showInfo={this.state.results} getSongs={this.fetchSongsfromRelisten} />
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