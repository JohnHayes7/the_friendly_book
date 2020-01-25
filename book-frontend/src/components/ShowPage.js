import React from 'react'
import './show_page.css'
import { connect } from 'react-redux'
import Header from './Header'
import Login from './Login'

class ShowPage extends React.Component{

    parseSetOne = () => {
        // debugger
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
        return this.props.showInfo.data.attributes.set3.split(", ").map(song => {
            if(song !== ""){
                return <div>{song}</div>
            }   
        })
    }

    parseEncore = () => {
        return this.props.showInfo.data.attributes.set_encore.split(", ").map(song => {
            if(song !== ""){
                return <div>{song}</div>
            }   
        })
    }

    ifSetOne = () => {
        if(this.props.showInfo.data.attributes.set1.length > 0){
            return <div><strong>Set 1:</strong></div>
        }
        this.parseSetOne()
    }

    ifSetTwo = () => {
        if(this.props.showInfo.data.attributes.set2.length){
            return <div><strong>Set 2:</strong></div>
        }
    }
    ifSetThree = () => {
        if(this.props.showInfo.data.attributes.set3.length){
            return <div><strong>Set 3:</strong></div>
        }
    }

    ifEncore = () => {
        if(this.props.showInfo.data.attributes.set_encore.length){
            return <div><strong>Encore:</strong></div>
        }
    }

    ifSets = () => {
        if(this.props.showInfo.data.set1){
            // PICKUP FROM HERE!
            // this.props.getSongs
        }
    }

    displayInfo = () => {
        if(this.props.showInfo.data){
            return(
                <div id="show-info">
                  {this.props.showInfo.included[1].attributes.name}
                  <div id="setlist">
                        {this.ifSetOne()}
                        {this.parseSetOne()}
                        {this.ifSetTwo()}
                        {this.parseSetTwo()}
                        {this.ifEncore()}
                        {this.parseEncore()}
                    </div>
                </div>

                
                
                
            )
        }
       
        
                    
    }


    


    render(){
        // debugger
        return(
            <div>
                <Header />
                {/* <Login /> */}
                {this.displayInfo()}
            </div>
        )
    }
}



export default ShowPage