import React from 'react'
import Ticket from '../components/Ticket'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ShowPage from '../components/ShowPage'



class TicketContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            date: "",
            venue: "",
            location: "",
        }
    }

    clickHandler = event => {
        this.setState({
            clicked: true,
            date: this.props.date,
            location: this.props.location,
            venue: this.props.venue
        })
    }

    dateSlug = (date) => {
        let splitDate = date.split("-")
        return splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0]
    }

    render(){
        if(this.state.clicked){
           return <Redirect to={`/shows/${this.dateSlug(this.props.date)}`} />
        }
        return(
            <div>
                <Ticket  date={this.props.date} location={this.props.location} venue={this.props.venue} clickHandler={event => this.clickHandler(event)}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: Data => dispatch({type: "ADD_SHOW", fan: FormData})
})


export default connect(0, mapDispatchToProps)(TicketContainer)