export const addFanMemory = (memory) =>{
    debugger
    return (dispatch) => {
        // debugger
        fetch('http://localhost:3001/memories',{
            method: "post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memory)
        }).then(response => response.json())
        .then(rxObj => {
            debugger
        dispatch({type: 'ADD_MEMORY', memory: rxObj})
        })
    }
}