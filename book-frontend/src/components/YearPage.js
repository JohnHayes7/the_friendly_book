import React from 'react';
import './year_page.css'
import Ticket from './Ticket'

class YearPage extends React.Component {
    displayShows = () => {
        if(this.props.shows.loaded){
            return  this.props.shows.shows.map(show => {
                return (
                    <div id="ticket-info" key={show.date}>
                        <Ticket date={show.date} venue={show.venue} location={show.location} set1={show.set1} set2={show.set2} encore={show.encore} />
                        {/* <div id="info">
                            Phish<br></br>
                            {show.date}<br></br>
                            {show.venue}, {show.location}<br></br>
                            
                            {show.set1}
                            {show.set2}
                            {show.encore}
                        </div> */}
                    </div>
                )
            })
        }else{
          return  <div><h1>Loading...</h1></div>
        }
    }

    render(){
        debugger
        return (
            <div id="#ticket-info">
                <h1>Shows from {this.props.year}</h1>
                <div>{this.displayShows()}</div>
            </div>
        )    
    }

    
}

export default YearPage