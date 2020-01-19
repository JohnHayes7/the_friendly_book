export default function manageFan(state={
        id: 0,
        username: "",
        email: "",
        shows: [],
        loggedIn: false
}, action) {
    switch(action.type){
        case 'LOGIN_FAN':

           const fan = {
            id: action.fan.data.attributes.id,
            username: action.fan.data.attributes.username,
            email: action.fan.data.attributes.email,
            loggedIn: true
           }
           
        return Object.assign({}, state, fan)
           
        
        
        default:
            return state
    }
}