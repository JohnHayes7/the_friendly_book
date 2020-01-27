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
   
    // parseSetThree = () => {
    //     return this.props.showInfo.data.attributes.set3.split(", ").map(song => {
    //         if(song !== ""){
    //             return <div>{song}</div>
    //         }   
    //     })
    // }

    parseEncore = () => {
        return this.props.showInfo.data.attributes.set_encore.split(", ").map(song => {
            if(song !== ""){
                return <div>{song}</div>
            }   
        })
    }

    setOne = () => {
        debugger
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

    displayInfo = () => {
        if(this.props.showInfo.data){
            return(
                <div id="show-info">
                  {this.props.showInfo.included[1].attributes.name}
                  <div id="setlist">
                        {this.setOne()}
                        {this.parseSetOne()}
                        {this.ifSetTwo()}
                        {this.parseSetTwo()}
                        {/* {this.ifSetThree()}
                        {this.parseSetThree()} */}
                        {this.ifEncore()}
                        {this.parseEncore()} 
                    </div>
                </div>

                
                
                
            )
        }             
    }

    // componentDidMount(){
    //     if(!this.setOne()){
    //         this.props.getSongs()
    //     }
    // }
    


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