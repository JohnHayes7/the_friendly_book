import React from 'react'
import FanPage from '../components/FanPage'
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class FanPageContainer extends React.Component{

    getFanFromDb = () => {
        // debugger
        fetch(`http://localhost:3001/fans/${localStorage.user_id}`).then(response => response.json())
            .then(fan => {
                
                console.log(fan)
                console.log(this.props)
                this.props.login(fan)
            })
    }

    fanShowsDisplay = fan =>{
        // debugger
        // Shows should be returned just need to display
        if(fan.shows.length < 1){
            return(
                <h4>You Have No Shows. Add shows to collect stubs</h4>
            )
        }else{
            return(
                <div>
                    {fan.shows.map( show => {
                        debugger
                       return <div>-{show.attributes.display_date}<br></br>
                                    {show.attributes.display_venue}<br></br>
                                    {show.attributes.display_location}
                       </div>
                    })}
                </div>
            )
        }
    }

    render(){
        
        if(!localStorage.logged_in){
            // alert("Please Login")
           return <Redirect to={"/"} />
        }
        return(
            <div>
                <FanPage fanProp={this.props.fan} getFan={this.getFanFromDb} displayShows={this.fanShowsDisplay} />
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