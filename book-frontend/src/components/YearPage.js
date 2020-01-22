import React from 'react';
// import './year_page.css'

import TicketContainer from '../containers/Ticket_Container';

class YearPage extends React.Component {


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