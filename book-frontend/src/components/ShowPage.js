import React from 'react'
import './show_page.css'
import Header from './Header'
import LandingYearsContainer from '../containers/LandingYears_Container'
import Set from './Set'
import {Link} from 'react-router-dom'
import Logout from './Logout'
import Log_In_Container from '../containers/Log_In_Container'
// import {getFanFromDb} from '../containers/FanPageContainer'

class ShowPage extends React.Component{

    parseSetOne = () => {
       return this.props.showInfo.data.attributes.set1.split(", ").map(song => {
            if(song !== ""){
                return <div>{song}</div>
            }   
        })
    }

    parseSetTwo = () => {
        return this.props.showInfo.data.attributes.set2.split(", ").map(song => {
            if(song !== ""){
                return <div>{song}</div>
            }   
        })
    }
   
    // parseSetThree = () => {
    //     return this.props.showInfo.data.attributes.set3.split(", ").map(song => {
    //         if(song !== ""){
    //             return <div>{song}</div>
    //         }   
    //     })
    // }

    parseEncore = () => {
        if(this.props.showInfo.data.attributes.set_encore){
            return this.props.showInfo.data.attributes.set_encore.split(", ").map(song => {
                if(song !== ""){
                    return <div>{song}</div>
                }   
            })
        }
        
    }

    setOne = () => {
        if(this.props.showInfo.data.attributes.set1.length > 0){
            return <div><strong>Set 1:</strong></div>
        }
    }

    ifSetTwo = () => {
        if(this.props.showInfo.data.attributes.set2){
            return  <div><strong>Set 2:</strong></div>
        }
    }
    // ifSetThree = () => {
    //     if(this.props.showInfo.data.attributes.set3){
    //         return <div><strong>Set 3:</strong></div>
    //     }
    // }

    ifEncore = () => {
        if(this.props.showInfo.data.attributes.set_encore){
            return <div><strong>Encore:</strong></div>
        }
    }

    ifLoggedInAddLink = () => {
        if(localStorage.logged_in){
            return <Link value="link"onClick={event => this.props.addFanToShow(event)}>Add To My Shows</Link>
        }else{
            return <h4>Login or<Link to="/signup">Signup</Link>to add this show to your collection.</h4>
        }
    }

    

    displayInfo = () => {
        if(this.props.showInfo.data){
            
            return(
                <div id="show-info">
                  <strong className="show-name-date">{this.props.showInfo.data.attributes.display_date}</strong><br></br>
                  <strong className="show-name-date">{this.props.showInfo.data.attributes.display_venue}-{this.props.showInfo.data.attributes.display_location}</strong>
                  <div id="setlist">
                     
                        <Set set={this.setOne} parseSet={this.parseSetOne} />
                        <Set set={this.ifSetTwo} parseSet={this.parseSetTwo} />
                        <Set set={this.ifEncore} parseSet={this.parseEncore} />
                        {this.ifLoggedInAddLink()}<br></br>
                        <ul>{localStorage.logged_in ? "Fans:" : ""}<br></br>
                            {this.displayFans(this)}    
                        </ul>
                      <div>
                        {/* {this.ifSetThree()}
                        {this.parseSetThree()} */}                          
                      </div>
                    </div>
                    Memories:
                    {this.getShowMemories(this)}
                </div>

                
                
                
            )
        }             
    }

    getShowMemories = show => {
        debugger
        fetch(`http://localhost:3001/shows/${this.searchDate(this.props.match.params.date)}`).then(response => response.json())
        .then(rxShow => {
            debugger
        })
    }

    parseMemories = (show) => { 
        debugger
    }

    displayFans = show => {
      let fans = show.props.showInfo.included.filter(attr => attr.type === "fan")
      return fans.map(fan => {
          
          return <Link key={fan.id} to={`/fans/${fan.attributes.username}`}>{fan.attributes.username}</Link>

      })
    }

    loginOrLogout = () => {
        if(localStorage.logged_in){
            return <Log_In_Container />
        }
    }

    

    render(){
        return(
            <div>
                <div id="landing-wrapper">
                    <Header />
                    {/* {localStorage.logged_in ? <Logout /> : <Log_In_Container />} */}
                </div>
                <div id="second-line">
                    {this.displayInfo()}
                    <LandingYearsContainer />
                </div>
                
            </div>
        )
    }
}



export default ShowPage