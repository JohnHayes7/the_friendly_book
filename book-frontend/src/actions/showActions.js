export const getShowFromDb = (date) =>{
    debugger
    return (dispatch) => {
        dispatch({type: 'SEARCHING_DB'})
        fetch(`http://localhost:3001/shows/${date}`).then(response => response.json())
        .then(rxShow =>{
            if(rxShow.code === 3000){
                // DISPATCH A FETCHING SHOW TYPE TO REDUX
                dispatch({type: 'FETCHING_SHOW'})
            }else{
                // DISPATCH AN ADD SHOW TYPE TO REDUX
            }

            debugger
        })
    }
}