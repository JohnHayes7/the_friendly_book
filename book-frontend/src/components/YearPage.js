import React from 'react';
// import './year_page.css'

import TicketContainer from '../containers/Ticket_Container';

class YearPage extends React.Component {

    constructor(){
        super()
        this.state={
            style: {
                width: 350
            }
        }
        this.openShow = this.openShow.bind(this)
        this.closeShow = this.closeShow.bind(this)
    }

    componentDidMount(){
        document.addEventListener('click', this.closeShow)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.closeShow)
    }

    openShow(){
        const style = {width: 350};
        this.setState({ style });
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        document.addEventListener("click", this.closeShow)
    }

    closeShow(){
        document.removeEventListener('click', this.closeShow)
        const style = {width: 0};
        this.setState({ style })
        document.body.style.backgroundColor = "#F3F3F3"
    }


    displayShows = () => {
        if(this.props.shows.loaded){
            return  this.props.shows.shows.map(show => {
                return (
                    <div id="ticket-display" key={show.date}>
                        <TicketContainer date={show.date} venue={show.venue} location={show.location} set1={show.set1} set2={show.set2} encore={show.encore} />
                    </div>
                )
            })
        }else{
          return  <div><h1>Loading...</h1></div>
        }
    }

    render(){
        return (
            <div id="#ticket-info">
                <h1>Shows from {this.props.year}</h1>
                <div>{this.displayShows()}</div>
            </div>
        )    
    }

    
}

export default YearPage