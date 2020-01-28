import React from 'react'
import FanPage from '../components/FanPage'
import { connect } from 'react-redux'

class FanPageContainer extends React.Component{
    
    displayFan = () => {
        if (this.props.fan.username){
            return this.props.fan
        }else{
            this.getFanFromDb()
        }
    }

    getFanFromDb = () => {
        fetch(`http://localhost:3001/fans/${this.props.match.params.username}`).then(response => response.json())
            .then(fan => {
                console.log(fan)
                console.log(this.props)
                
                this.props.fan.username = fan.data.attributes.username
                this.props.fan.email = fan.data.attributes.email
                // this.props.fan.shows = []
                // this.props.fan.memories = []
                // return this.props.fan
            })
    }

    componentDidMount(){
        if(!this.props.fan.username){
            this.getFanFromDb()
        }
    }

    render(){
        debugger
        return(
            <div>
                <FanPage fanData={this.props.fan}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        fan: state
    }
}

export default connect(mapStateToProps)(FanPageContainer)