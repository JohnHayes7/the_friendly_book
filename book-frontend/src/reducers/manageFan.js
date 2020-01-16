export default function manageFan(state={
        id: 0,
        username: "",
        shows: []
}, action) {
    switch(action.type){
        case 'LOGIN_FAN':
           const fan = {
            id: action.fan.data.attributes.id,
            username: action.fan.data.attributes.username,
           }
        return Object.assign({}, state, fan)
           
        
        
        default:
            return state
    }
}