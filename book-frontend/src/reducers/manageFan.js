export default function manageFan(state={
        id: 0,
        username: "",
        email: "",
        shows: [],
        memories: [],
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
        return Object.assign({}, state, loginFan)

        case 'UPDATE_FAN':
            debugger
            const memory = {
                text: action.fan.text,
                showId: action.fan.showId
            }
            let memories = [...state.memories, memory]
        return Object.assign({}, state, memories)

        
        case 'LOGOUT_FAN':
           const logoutFan = {
               loggedIn: localStorage.logged_in
           }
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
        return Object.assign({}, state.show, show) 
           

        default:
            return state
    }
}