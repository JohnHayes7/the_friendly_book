import React from 'react'
import FanPage from '../components/FanPage'
import { connect } from 'react-redux'

class FanPageContainer extends React.Component{

    getFanFromDb = () => {
        fetch(`http://localhost:3001/fans/${this.props.match.params.username}`).then(response => response.json())
            .then(fan => {
                console.log(fan)
                console.log(this.props)
                this.props.login(fan)
            })
    }

    componentDidMount(){
        if(!this.props.fan.username){
            this.getFanFromDb()
        }
    }

    render(){
        return(
            <div>
                <FanPage username={this.props.fan.username}/>
            </div>
        )
    }
}

const mapStateToProps = state => {   
    return {
        fan: state
    }
}

const mapDispatchToProps = dispatch => ({
    login: RxData => dispatch({type: "LOGIN_FAN", fan: RxData})
})


export default connect(mapStateToProps, mapDispatchToProps)(FanPageContainer)