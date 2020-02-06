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

    constructor(){
        super()
        this.state = {
            logged_in: localStorage.logged_in
        }
    }
    

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
   
    parseSetThree = () => {
        debugger
        return this.props.showInfo.data.attributes.set3.split(", ").map(song => {
            if(song !== ""){
                return <div>{song}</div>
            }   
        })
    }

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
    ifSetThree = () => {
        if(this.props.showInfo.data.attributes.set3){
            return <div><strong>Set 3:</strong></div>
        }
    }

    ifEncore = () => {
        if(this.props.showInfo.data.attributes.set_encore){
            return <div><strong>Encore:</strong></div>
        }
    }

    ifLoggedInAddLink = () => {
        if(localStorage.logged_in){
            return <span id="add-show-link"><Link value="link"onClick={event => this.props.addFanToShow(event)}>Add To My Shows</Link></span>
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
                        <Set set={this.ifSetThree} parseSet={this.parseSetThree} />
                        <Set set={this.ifEncore} parseSet={this.parseEncore} />
                        {this.ifLoggedInAddLink()}<br></br>
                        <ul>{localStorage.logged_in ? "Fans:" : ""}<br></br>
                            {localStorage.logged_in ? this.displayFans(this) : ""}    
                        </ul>
                      <div>
                                               
                      </div>
                    </div>
                    <div id="memories-div">
                        <span id="mem-title">Memories:</span>
                        {this.parseMemories()}
                    </div>
                </div> 
            )
        }             
    }
    
    parseMemories = () => {
        let memories = this.props.showInfo.included.filter(element => element.type === "memory")
        let fans = this.props.showInfo.included.filter(element => element.type === "fan")
        if(memories.length > 0){
            return memories.map(mem => {
                let fanObj = {}
                if(mem.relationships.fan.data){
                    fanObj = fans.find(fan => fan.id === mem.relationships.fan.data.id)
                return <div className="fan-mem">{fanObj.attributes.username}: <div className="mem-text"> {mem.attributes.text}{fanObj.id === localStorage.user_id ?<span className="edit-mem"><Link to={`/memories/${mem.id}/edit`}> edit</Link></span> : ""}</div></div>
                }
                
            })
        }else{
            return <div>No Memories Yet.  Be the first!</div>
        }
    }


    displayFans = show => {
      let fans = show.props.showInfo.included.filter(attr => attr.type === "fan")
      return fans.map(fan => {
          
          return <Link key={fan.id} to={`/fans/${fan.attributes.username}`}>{fan.attributes.username}</Link>

      })
    }


    // loginOrLogout = () => {
        
    //     if(localStorage.logged_in){
    //         return <Log_In_Container />
    //     }
    // }

    render(){
       
        return(
            <div>
                <div id="landing-wrapper">
                    <Header />
                    {localStorage.logged_in ? <Logout /> : <Log_In_Container />}
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