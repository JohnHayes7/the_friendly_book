import React from 'react'
import FanPage from '../components/FanPage'
import { connect } from 'react-redux'

class FanPageContainer extends React.Component{
    render(){
        return(
            <div>
                <FanPage />
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        fan: state
    }
}

export default connect(mapStateToProps)(FanPageContainer)