import React from 'react'
import { Redirect } from 'react-router-dom'
import Fan from '../components/Fan'

export default function manageFan(state={
    fan:{
        id: 0,
        name: "",
        username: "",
        shows: [],
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
               console.log(fan)
            })
            // debugger
        return state
        
        default:
            return state
    }
}