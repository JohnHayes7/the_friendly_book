import React from 'react'
import { connect } from 'react-redux'
import ShowPage from '../components/ShowPage'

class ShowPageContainer extends React.Component{
    render(){
        return(
            <div>
                Show Page Container
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        show: state
    }
}

export default connect(mapStateToProps)(ShowPageContainer)