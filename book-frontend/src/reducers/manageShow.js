export default function manageShow(state={
    searchingDb: false,
    loading: false,
    fetching: false,
    fetched: false,
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

        case 'ADD_SHOW_FROM_RELISTEN':
            let setOneSongs = []
            let setTwoSongs = []
            let setThreeSongs = []
            let encoreSongs = []
            let setOne = action.show.sources[0].sets.find(set => set.name === "Set 1")
            let setTwo = action.show.sources[0].sets.find(set => set.name === "Set 2")
            let setThree = action.show.sources[0].sets.find(set => set.name === "Set 3")
            let encore = action.show.sources[0].sets.find(set => set.name === "encore")

            
            debugger
            const show = {
                searchingDb: false,
                fetching: false,
                fetched: true,
                date: `${action.show.display_date.split("-")[1]}.${action.show.display_date.split("-")[2]}.${action.show.display_date.split("-")[0]}`,
                location: action.show.venue.location,
                venue: action.show.venue.name,
                set1: [],
                set2: [],
                set3: [],
                encore: []
            }
            debugger    


        return {...state, show}


        default:
            return state
    }
}