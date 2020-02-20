import React from 'react'
import { connect } from 'react-redux'
import ShowPage from '../components/ShowPage'
import { getShowFromDb } from '../actions/showActions'
import { fetchShowFromRelisten } from '../actions/showActions'
import { addFanToShow } from '../actions/showActions'


class ShowPageContainer extends React.Component{
    
    constructor(){
        super()
        this.state = {
            loadedShow: false,
            results: {}
        }
    }
   
    searchDate = () => this.formatSearchDate(this.props.match.params.date)

    formatSearchDate = date => {
        return date.split("-")[2] + '-' + date.split("-")[0] + '-' + date.split("-")[1]
    }

    clickHandler = event => {
       
        const fanShowData = {
            month: event.currentTarget.baseURI.split("/")[4].split("-")[0],
            day: event.currentTarget.baseURI.split("/")[4].split("-")[1],
            year: event.currentTarget.baseURI.split("/")[4].split("-")[2],
            fanId: localStorage.user_id,
            username: this.props.redux.fan.username
        }
        this.props.addFanToShow(fanShowData)
    }

    componentDidMount(){
        this.props.getShowFromDb(this.searchDate())
    }
    

    render(){
        if(this.props.redux.show.fetching){
            this.props.fetchShowFromRelisten(this.searchDate())
        }
        return(
            <div>
                <ShowPage showInfo={this.props.redux.show} getSongs={this.fetchSongsfromRelisten} clickHandler={this.clickHandler} displayFans={this.displayFans} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getShowFromDb: date => dispatch(getShowFromDb(date)),
    fetchShowFromRelisten: date => dispatch(fetchShowFromRelisten(date)),
    addFanToShow: (fanShowData) => dispatch(addFanToShow(fanShowData))
   
})

const mapStateToProps = state => {
    return {
        redux: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPageContainer)