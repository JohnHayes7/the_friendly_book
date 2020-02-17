export default function manageShow(state={
    searchingDb: false,
    loading: false,
    fetching: false,
    date: "",
    location: "",
    venue: "",
    set1: [],
    set2: [],
    set3: [],
    encore: []
}, action){
    switch(action.type){

        case 'SEARCHING_DB':
            debugger
        return{ ...state, searchingDb: true }

        case 'FETCHING_SHOW':
            debugger
        return{...state, fetching: true}           

        case 'ADD_SHOW':
            debugger
            const show = {
                searchingDb: false,
                fetching: false,
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