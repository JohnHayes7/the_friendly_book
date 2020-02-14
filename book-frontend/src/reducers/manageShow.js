export default function manageShow(state={
    loading: false,
    date: "",
    location: "",
    venue: "",
    set1: [],
    set2: [],
    set3: [],
    encore: []
}, action){
    switch(action.type){

        case 'LOADING_SHOW':

        return{ ...state, loading: true }
           

        case 'ADD_SHOW':
            const show = {
                loading: false,
                date: "",
                location: "",
                venue: "",
                set1: [],
                set2: [],
                set3: [],
                encore: []
            }


        return {...state, show}

        
        default:
            return state
    }
}