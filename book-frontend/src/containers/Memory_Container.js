import React from 'react'
import MemoryForm from '../components/MemoryForm'
import MemoryDisplay from '../components/MemoryDisplay'
import '../components/fan_page.css'

export default class MemoryContainer extends React.Component{

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
        this.addMemoryToDb()
    }

    addMemoryToDb = () => {
        let memObj= {
            text: this.state.text,
            fanId: this.props.fanId,
            showId: this.props.showId
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
            this.props.updateFan(rxObj)
        })
    }

    parseFanMemories = (show, fan) => {
        
        let fanShowMemories = fan.memories.filter(mem => mem.relationships.show.data.id === show.id)
        return fanShowMemories.map(mem => {
            return <div><span className="grey-out">You said: </span>{mem.attributes.text}</div>
        })
    }
 


    


    render(){
       
        return(
            <div>
                {this.props.canAddShow ? <MemoryForm fan={this.props.fan} text={this.state.text} changeHandler={this.changeHandler} memorySubmit={this.memorySubmit} /> : <MemoryDisplay show={this.props.show} parseFanMemories={this.parseFanMemories} fan={this.props.fan} />}
            </div>
        )
    }
}