import React from 'react'
import './fan_page.css'

export default class MemoryEdit extends React.Component {

    constructor(){
        super()
        this.state = {
            text: ""
        }
        this.patchMemory = this.patchMemory.bind(this)
        this.fetchMemory = this.fetchMemory.bind(this)
        this.deleteMemory = this.deleteMemory.bind(this)
    }

    fetchMemory() {
        fetch(`http://localhost:3001/memories/${this.props.match.params.id}`).then(response => response.json())
        .then(memory => {
            // let show = memory.included.find(mem => mem.type === "show")
            this.setState({text: memory.data.attributes.text})
        })
    }

    updateMemory = event => {
        this.setState({
            text: event.target.value
        })
    }

    patchMemory(e)  {
        e.preventDefault()
        fetch(`http://localhost:3001/memories/${this.props.match.params.id}`,{
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json()).then(mem => {
            window.history.back()
        })
    }

    deleteMemory(e){
        e.preventDefault()
        fetch(`http://localhost:3001/memories/${this.props.match.params.id}`, {
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(message => {
            
        })
    }



    componentDidMount(){
        this.fetchMemory()
    }




    render(){
        return(
            <div>
                Edit Comment:
                <form onSubmit={this.patchMemory}>
                    <textarea id="memory-text" type="text" value={this.state.text} onChange={event => this.updateMemory(event)}></textarea><br></br>
                    <input id="submit" type="submit" />
                </form>
                <div id="delete-memory-div" onClick={this.deleteHandler}>
                    Delete Comment
                </div>
            </div>
        )
    }
}