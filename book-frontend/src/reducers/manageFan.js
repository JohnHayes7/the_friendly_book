export default function manageFan(state={
        id: 0,
        name: "",
        username: "",
        shows: []
}, action) {
    switch(action.type){
        case 'LOGIN_FAN':
            return fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.fan)
            }).then(response => response.json())
            .then(fan => {
                console.log(fan)
               return Object.assign({}, state, {
                   id: fan.id,
                   name: fan.name,
                   username: fan.username
               })
            })
           
        
        
        default:
            return state
    }
}