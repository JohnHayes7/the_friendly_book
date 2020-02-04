import React from 'react'
import MemoryForm from '../components/MemoryForm'

export default class MemoryContainer extends React.Component{

    constructor(){
        super()
        this.state = {
            text: ""
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
            debugger
        })
    }

    


    render(){
       
        return(
            <div>
                <MemoryForm fan={this.props.fan} text={this.state.text} changeHandler={this.changeHandler} memorySubmit={this.memorySubmit} />
            </div>
        )
    }
}