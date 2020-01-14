export default function manageFan(state={
    fan:{
        id: 0,
        name: "",
        username: "",
        password: "",
        shows: [],
        memories: []
    }
    
}, action) {
    switch(action.type){
        case 'LOGIN_FAN':
            
        return state
        
        default:
            return state
    }
}