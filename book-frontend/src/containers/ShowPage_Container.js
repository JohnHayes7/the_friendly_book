import React from 'react'
import { connect } from 'react-redux'
import ShowPage from '../components/ShowPage'

class ShowPageContainer extends React.Component{
    
    constructor(){
        super()
        this.state = {
            results: {}
        }
    }
   
    
    sendShowToDb = () => {
       fetch(`http://localhost:3001/shows`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.props)
        }).then(response => response.json())
        .then(showInfo => {
            
            console.log(showInfo)
            this.setState({
               results: showInfo
           }) 
        })
        
    }

    searchDate = date => {
        return date.split("-")[2] + '-' + date.split("-")[0] + '-' + date.split("-")[1]

    }


    fetchSongsfromRelisten = () => {
        console.log(this.props)
        fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
            .then(showSets => {
                let rxSets ={
                    set1: [],
                    set2: [],
                    set3: [],
                    encore: []
                } 
                let firstSet = showSets.sources[0].sets[0].tracks
               
                firstSet.map(songTitle => {
                    rxSets.set1.push(songTitle.title)
                })
                
                if(showSets.sources[0].sets[1]){
                    showSets.sources[0].sets[1].tracks.map(song => {
                        rxSets.set2.push(song.title)
                    })
                }
                
                if(showSets.sources[0].sets[2]){
                    showSets.sources[0].sets[2].tracks.map(song => {
                        rxSets.encore.push(song.title)
                    })
                }
                debugger
            })
           
    }

    getShowFromDb = () => {
        let search_id = ""
        if (this.props.show.show){
            search_id = this.props.show.show.id
        }else{
            search_id = this.props.show.id
        }
        // debugger
        fetch(`http://localhost:3001/shows/${search_id}`).then(response => response.json())
        .then(showInfo => {
            if(showInfo.code === 3000){
                this.sendShowToDb()
            }else{
                this.setState({
                    results: showInfo
                })
            }
            console.log(showInfo)
        })
    }


    componentDidMount(){
        this.getShowFromDb()
        this.fetchSongsfromRelisten()
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