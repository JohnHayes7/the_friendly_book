import React from 'react'
import Ticket from '../components/Ticket'
import ShowPage from '../components/ShowPage'


class TicketContainer extends React.Component{
    constructor(){
        super()
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
          venue: this.props.venue,
          location: this.props.location
      })
    }

    render(){
        if(this.state.clicked === true){
            return <ShowPage date={this.props.date} venue={this.props.venue} location={this.props.location} />
        }
        return(
            <div>
                <Ticket date={this.props.date} venue={this.props.venue} location={this.props.location} clickHandler={this.clickHandler} />
            </div>
        )
    }
}

export default TicketContainer