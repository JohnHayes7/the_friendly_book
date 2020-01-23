import React from 'react'
import './show_page.css'
import { connect } from 'react-redux'
import Header from './Header'

class ShowPage extends React.Component{

    parseSetOne = () => {
       return this.props.set1.map(song => {
           return <div>{song}</div>
        })
    }

    parseSetTwo = () => {
        return this.props.set2.map(song => {
            return <div>{song}</div>
        })
    }

    parseEncore = () => {
        return this.props.encore.map(song => {
            return <div>{song}</div>
        })
    }

    ifSetOne = () => {
        if(this.props.set1.length > 0){
            return <div>Set 1:</div>
        }
    }

    ifSetTwo = () => {
        if(this.props.set2.length){
            return <div>Set 2:</div>
        }
    }

    ifEncore = () => {
        if(this.props.encore.length){
            return <div>Encore:</div>
        }
    }


    render(){

        return(
            <div>
                <Header />
                <div id="show-info">
                    {this.props.date}<br></br>
                    {this.props.venue}, {this.props.location}<br></br>
                    <div id="setlist">
                        {this.ifSetOne()}
                        {this.parseSetOne()}
                        {this.ifSetTwo()}
                        {this.parseSetTwo()}
                        {this.ifEncore()}
                        {this.parseEncore()}
                    </div>
                </div>
            </div>
        )
    }
}



export default ShowPage