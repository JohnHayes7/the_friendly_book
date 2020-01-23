import React from 'react'
import { connect } from 'react-redux'
import ShowPage from '../components/ShowPage'

class ShowPageContainer extends React.Component{
    render(){
        
        return(
            <div>
                <ShowPage date={this.props.show.date} venue={this.props.show.venue} location={this.props.show.location} set1={this.props.show.set1} set2={this.props.show.set2} encore={this.props.show.encore} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        show: state
    }
}

export default connect(mapStateToProps)(ShowPageContainer)