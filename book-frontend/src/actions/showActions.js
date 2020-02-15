export const getShowFromDb = (date) =>{
    // debugger
    return (dispatch) => {
        dispatch({type: 'LOADING_SHOW'})
        fetch(`http://localhost:3001/shows/${date}`).then(response => response.json())
        .then(rxShow =>{
            debugger
        })
    }
}