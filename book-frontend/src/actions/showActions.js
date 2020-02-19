export const getShowFromDb = (date) =>{
    debugger
    return (dispatch) => {
        dispatch({type: 'SEARCHING_DB'})
        fetch(`http://localhost:3001/shows/${date}`).then(response => response.json())
        .then(rxShow =>{
            debugger
            if(rxShow.code === 3000){
                debugger
                // DISPATCH A FETCHING SHOW TYPE TO REDUX
                dispatch({type: 'FETCHING_SHOW'})
            }else{
                debugger
                dispatch({type: 'DISPLAY_SHOW_FROM_DB', show: rxShow})
                // DISPATCH AN ADD SHOW TYPE TO REDUX
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
                    dispatch({type: 'ADD_SHOW_FROM_RELISTEN', show: showSets})
                    fetch(`http://localhost:3001/shows`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(showSets)
                    }).then(response => response.json()).
                    then(addedShow => {  
                    })
                }
            })   
    }
}

export const addShowToDb = (show) => {
    return (dispatch) => {
        
    }
}