export const addFanMemory = (memory) =>{
    // debugger
    return (dispatch) => {
        dispatch({type: 'ADD_MEMORY', memory: memory })
        fetch('http://localhost:3001/memories',{
            method: "post",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memory)
        }).then(response => response.json())
        .then(rxObj => {
            
        })

    }
}