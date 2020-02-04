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


    render(){
        return(
            <div>
                <MemoryForm fan={this.props.fan} text={this.state.text} changeHandler={this.changeHandler} memorySubmit={this.props.memorySubmit} />
            </div>
        )
    }
}