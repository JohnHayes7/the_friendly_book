export default function manageFan(state={
        id: 0,
        username: "",
        email: "",
        shows: [],
        loggedIn: false,
        show: {
            date: "",
            location: "",
            venue: "",
            set1: [],
            set2: [],
            encore: []
        }
        
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

        case 'ADD_SHOW':
           const show = {
               date: action.show.date,
               venue: action.show.venue,
               location: action.show.location,
               set1: action.show.set1,
               set2: action.show.set2,
               encore: action.show.encore
           }
           debugger

        return Object.assign({}, state.show, show) 
           
        
        
        default:
            return state
    }
}