import React from 'react'
import FanPage from '../components/FanPage'
import { connect } from 'react-redux'
import '../components/fan_page.css'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TicketContainer from './Ticket_Container'
import MemoryContainer from './Memory_Container'
import {fetchFan} from '../actions/fetchFan'

class FanPageContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            showMemoryDiv: false,
            showMemoryFanId: "",
            showMemoryShowId: ""
        }
    }

    formatDateForLink = date =>{
        return date.split(".")[2] + "/" + date.split(".")[0] + "/" + date.split(".")[1]

    }

    displayLink = date =>{
         return <Link target="_blank" to={`https://relisten.net/phish/` + this.formatDateForLink(date) }>Listen on Relisten</Link>

    }

    removeFromFanShows = event => {
        event.preventDefault()
        const fanShowData = {
            fanId: localStorage.user_id,
            showId: event._targetInst.key
        }
        
        fetch(`http://localhost:3001/remove_show_from_fan`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fanShowData)
        }).then(response => response.json())
        .then(rxInfo => {
            this.props.login(rxInfo)
        })
    }

    addMemoryBtn = () => {
        return(
            <div id="add-memory" onClick={event => this.addMemoryHandler(event)}>Add Memory</div>
        )
    }

    addMemoryHandler = event =>{
        event.preventDefault()
        this.setState({
            
                showMemoryDiv: true,
                showMemoryFanId: localStorage.user_id,
                showMemoryShowId: event._targetInst.sibling.key

        })        
    }

    toggleMemoryDisplay = () => {
        this.setState(prevState => ({
            showMemoryDiv: !prevState.showMemoryDiv
        }))
    }

    memoryAddDisplay = show => {
        return <MemoryContainer show={show} canAddShow={this.state.showMemoryDiv} updateFan={this.props.login} fan={this.props.fan} fanId={this.state.showMemoryFanId} selectedShowId={this.state.showMemoryShowId} toggleMemoryDisplay={this.toggleMemoryDisplay} /> 
    }
 
    fanShowsDisplay = shows =>{
        debugger
        if(shows){
            if(shows.length < 1){
                return(
                    <h5>You Have No Shows. Add shows to collect stubs</h5>
                )
            }else{
                return(
                    <div>
                        {shows.map( show => {
                           return(
                                <div key={show.id} id="ticket-mem">
                                    <TicketContainer key={show.id} mediaid={show.id} date={show.attributes.display_date} venue={show.attributes.display_venue} location={show.attributes.display_location} displayLink={this.displayLink} removeFromFanShows={this.removeFromFanShows} addMemoryBtn={this.addMemoryBtn} /> 
                                    {this.memoryAddDisplay(show)}
                                </div>
                            ) 
                        })}
                    </div>
                )
            }
        }else{
            return <h5>You'll Never Get Out Of This Maze</h5>
        } 
    }

    componentDidMount(){
        this.props.fetchFan()
        // this.getFanFromDb()
        
    }

    render(){
        debugger
        if(!localStorage.logged_in){
           return <Redirect to={"/"} />
        }else{
            return(
                <div>
                    <FanPage fanProp={this.props.fan}  displayShows={this.fanShowsDisplay} canAddMemory={this.state.canAddMemory} />
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {   
    debugger
    return {
        fan: state
    }
}

const mapDispatchToProps = dispatch => ({
    fetchFan: () => dispatch(fetchFan()),
    login: RxData => dispatch({type: "LOGIN_FAN", fan: RxData})
})
                                    


export default connect(mapStateToProps, mapDispatchToProps)(FanPageContainer)