import React from 'react'
import './show_page.css'
import { connect } from 'react-redux'

class ShowPage extends React.Component{

    
    render(){

        return(
            <div>
              {this.props.date}
            </div>
        )
    }
}



export default ShowPage