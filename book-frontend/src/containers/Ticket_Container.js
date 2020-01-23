import React from 'react'
import Ticket from '../components/Ticket'
import { connect } from 'react-redux'
// import ShowPage from '../components/ShowPage'



class TicketContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            date: "",
            venue: "",
            location: "",
        }
    }

    show(){
        this.setState({visible: true});
    }

    hide(){
        this.setState({visible:false});
    }

    render(){
        return(
            <div>
                <Ticket visible={this.state.visible} show={this.show.bind(this)} hide={this.hide.bind(this)} date={this.props.date} venue={this.props.venue} location={this.props.location} />
            </div>
        )
    }
}


export default TicketContainer