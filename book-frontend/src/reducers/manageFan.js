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
            fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.fan)
            }).then(response => response.json())
            .then(fan => {
                debugger
            })
            
        return state
        
        default:
            return state
    }
}