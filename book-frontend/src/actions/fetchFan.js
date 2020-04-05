export const fetchFan = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_FAN'})
        fetch(`https://thefriendlybook-api.herokuapp.com/fans/${localStorage.user_id}`).then(response => response.json())
        .then(rxData =>{
            dispatch({type: 'LOGIN_FAN', fan: rxData})
        })
    }
}