export const fetchFan = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_FAN'})
        fetch(`http://localhost:3001/fans/${localStorage.user_id}`).then(response => response.json())
        .then(rxData =>{
            dispatch({type: 'LOGIN_FAN', fan: rxData})
        })
    }
}