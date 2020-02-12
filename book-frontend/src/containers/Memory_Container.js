import React from 'react'
import MemoryForm from '../components/MemoryForm'
import MemoryDisplay from '../components/MemoryDisplay'
import { connect } from 'react-redux'
import '../components/fan_page.css'

class MemoryContainer extends React.Component{
    
    constructor(){
        super()
        this.state = {
            text: "",
        }
    }

    changeHandler = event => {
        event.preventDefault()
        this.setState({
            text: event.target.value
        })
    }

    memorySubmit = event => {
        event.preventDefault()
        // this.notifyUser()
        this.sendToRedux()
        this.addMemoryToDb()
        this.setState({
            text: ""
        })
    }

    notifyUser = () => {
        debugger
        let memObj= {
            text: this.state.text,
            fanId: this.props.fanId,
            showId: this.props.selectedShowId
        }
        alert(`You have added ${memObj.text}`)
    }

    addMemoryToDb = () => {
        let memObj= {
            text: this.state.text,
            fanId: this.props.fanId,
            showId: this.props.selectedShowId
        }

        fetch('http://localhost:3001/memories',{
            method: "post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memObj)
        }).then(response => response.json())
        .then(rxObj => {
            this.props.toggleMemoryDisplay()
        })
    }

    sendToRedux = () =>{
        let memory = {
            text: this.state.text,
            showId: this.props.selectedShowId
        }
        this.props.updateMemories(memory)
    }

    parseFanMemories = (show, fan) => { 
        
        let fanShowMemories = fan.memories.filter(mem => mem.relationships.show.data.id === show.id)
        debugger
        return fanShowMemories.map(mem => {
            debugger
            return <div><span className="grey-out">You added: </span>{mem.attributes.text}</div>
        })
    }
 
    
    render(){
        return(
            <div>
                {this.props.canAddShow ? <MemoryForm fan={this.props.fan} text={this.state.text} changeHandler={this.changeHandler} memorySubmit={this.memorySubmit} /> : <MemoryDisplay show={this.props.show} parseFanMemories={this.parseFanMemories} fan={this.props.fan}  />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        fan: state
    }
}

const mapDispatchToProps = dispatch => ({
    updateMemories: memory => dispatch({type:"UPDATE_FAN", fan: memory})
})

export default connect(mapStateToProps, mapDispatchToProps)(MemoryContainer)