import React from 'react'
import './show_page.css'

class ShowPage extends React.Component{
    render(){

        return(
            <div onClick={this.props.hide} id="show-page">
                {this.props.date}
            </div>
        )
    }
}

export default ShowPage