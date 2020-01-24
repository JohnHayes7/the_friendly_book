import React from 'react'
import { connect } from 'react-redux'
import ShowPage from '../components/ShowPage'

class ShowPageContainer extends React.Component{
    
    sendShowsToDb = () => {
        fetch(`http://localhost:3001/shows`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.props)
        }).then(response => response.json())
        .then(showInfo => {
            console.log(showInfo)
           return <ShowPage showInfo={showInfo} />
           
        })
    }

    componentDidMount(){
        this.sendShowsToDb()
    }

    


    render(){
        
        return(
            <div>
                
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