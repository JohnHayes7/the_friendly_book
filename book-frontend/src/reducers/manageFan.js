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
            set3: [],
            encore: []
        }
        
}, action) {
    switch(action.type){
        case 'LOGIN_FAN':
           const loginFan = {
            id: action.fan.data.attributes.id,
            username: action.fan.data.attributes.username,
            email: action.fan.data.attributes.email,
            shows: action.fan.included.filter(attr => attr.type === "show"),
            memories: action.fan.included.filter(attr => attr.type === "memory"),
            loggedIn: localStorage.logged_in
           }  
           debugger
        return Object.assign({}, state, loginFan)

        
        case 'LOGOUT_FAN':
           const logoutFan ={
               loggedIn: localStorage.logged_in
           }
           debugger
        return Object.assign({}, state, logoutFan )

        case 'ADD_SHOW':
           const show = {
               date: action.show.date,
               venue: action.show.venue,
               location: action.show.location,
               set1: action.show.set1,
               set2: action.show.set2,
               set3: action.show.set3,
               encore: action.show.encore
           }
           
           debugger
        return Object.assign({}, state.show, show) 
           
        
        
        default:
            return state
    }
}