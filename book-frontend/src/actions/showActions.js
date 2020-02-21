export const getShowFromDb = (date) =>{
    debugger
    return (dispatch) => {
        dispatch({type: 'SEARCHING_DB'})
        fetch(`http://localhost:3001/shows/${date}`).then(response => response.json())
        .then(rxShow =>{
            // debugger
            if(rxShow.code === 3000){
                debugger
                dispatch({type: 'FETCHING_SHOW'})
            }else{
                debugger
                dispatch({type: 'DISPLAY_SHOW_FROM_DB', show: rxShow})
            }
        })
    }
}

export const fetchShowFromRelisten = (date) => {
    debugger
    return (dispatch) =>{
        fetch(`https://api.relisten.net/api/v2/artists/phish/shows/${date}`).then(response => response.json())
            .then(showSets => {
                debugger
                if(showSets.error_code !== 404){
                    // dispatch({type: 'ADD_SHOW_FROM_RELISTEN', show: showSets})
                    fetch(`http://localhost:3001/shows`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(showSets)
                    }).then(response => response.json()).
                    then(addedShow => { 
                        debugger 
                        dispatch({type: 'DISPLAY_SHOW_FROM_DB', show: addedShow})
                    })
                }
            })   
    }
}

export const addFanToShow = (fanShowData) => {
    return (dispatch) => {
        dispatch({type: 'ADD_FAN_TO_SHOW', fanShowData})
        fetch(`http://localhost:3001/add_fan_to_show`,{
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fanShowData)
        }).then(response => response.json())
        .then(rxShow => {
           
        })
    }
}