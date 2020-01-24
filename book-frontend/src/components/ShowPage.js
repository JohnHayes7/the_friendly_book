import React from 'react'
import './show_page.css'
import { connect } from 'react-redux'
import Header from './Header'
import Login from './Login'

class ShowPage extends React.Component{

    parseSetOne = () => {
       return this.props.showInfo.data.attributes.set1.map(song => {
           return <div>{song}</div>
        })
    }

    parseSetTwo = () => {
        return this.props.showInfo.data.attributes.set2.map(song => {
            return <div>{song}</div>
        })
    }

    parseEncore = () => {
        return this.props.showInfo.data.attributes.set_encore.map(song => {
            return <div>{song}</div>
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
            return <div><stong>Set 2:</stong></div>
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

    displayInfo = () => {
        
    }


    // componentDidMount(){
    //     this.displayInfo()
    // }


    render(){
        debugger
        return(
            <div>
                <Header />
                {/* <Login /> */}
                <div id="show-info">
                    {/* {this.props.showInfo.included[1].attributes.name}<br></br> */}
                    {/* {this.props.venue}, {this.props.location}<br></br> */}
                    <div id="setlist">
                        {this.ifSetOne()}
                        {/* {this.parseSetOne()}
                        {this.ifSetTwo()}
                        {this.parseSetTwo()}
                        {this.ifEncore()}
                        {this.parseEncore()} */}
                    </div>
                </div>
            </div>
        )
    }
}



export default ShowPage