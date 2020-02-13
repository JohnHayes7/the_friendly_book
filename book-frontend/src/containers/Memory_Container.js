import React from 'react'
import MemoryForm from '../components/MemoryForm'
import MemoryDisplay from '../components/MemoryDisplay'
import { connect } from 'react-redux'
import { addFanMemory } from '../actions/memoryActions'
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
        let memory = {
            text: this.state.text,
            fanId: this.props.fan.id,
            showId: this.props.selectedShowId
        }
        this.props.addFanMemory(memory)
        this.closeMemForm()
    }

    closeMemForm = () => {
        this.setState({
            text: ""
        })
        this.props.toggleMemoryDisplay()
    }


    parseFanMemories = () => {
        let fan = this.props.fan 
        let show = this.props.show
        let fanShowMemories = fan.memories.filter(mem => mem.relationships.show.data.id === show.id)
        return fanShowMemories.map(mem => {
            return <div><span className="grey-out" key={mem.id}>You added: </span>{mem.attributes.text}</div>
        })
    }
 
    
    render(){
        return(
            <div>
                {this.props.canAddShow ? <MemoryForm fan={this.props.fan} closeMemForm={this.closeMemForm} text={this.state.text} changeHandler={this.changeHandler} memorySubmit={this.memorySubmit} /> : <MemoryDisplay show={this.props.show} parseFanMemories={this.parseFanMemories} fan={this.props.fan}  />}
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
    addFanMemory: memory => dispatch(addFanMemory(memory)),
    updateMemories: memory => dispatch({type:"UPDATE_FAN", fan: memory})
})

export default connect(mapStateToProps, mapDispatchToProps)(MemoryContainer)