export default function manageShow(state={
    searchingDb: false,
    loading: false,
    fetching: false,
    addToDb: false,
    date: "",
    location: "",
    venue: "",
    set1: [],
    set2: [],
    set3: [],
    encore: [],
    fans: [],
    memories: []
}, action){
    switch(action.type){

        case 'SEARCHING_DB':
            debugger
        return{ ...state, searchingDb: true }

        case 'FETCHING_SHOW':
            debugger
        return{...state, searchingDb: false, fetching: true}           

        case 'ADD_SHOW_FROM_RELISTEN':
    
            let setOne = action.show.sources[0].sets.find(set => set.name === "Set 1")
            let setTwo = action.show.sources[0].sets.find(set => set.name === "Set 2")
            let setThree = action.show.sources[0].sets.find(set => set.name === "Set 3")
            let setEncore = action.show.sources[0].sets.find(set => set.name === "encore")


            
            debugger
            const show = {
                searchingDb: false,
                fetching: false,
                addToDb: true,
                date: `${action.show.display_date.split("-")[1]}.${action.show.display_date.split("-")[2]}.${action.show.display_date.split("-")[0]}`,
                location: action.show.venue.location,
                venue: action.show.venue.name,
                set1: setOne.tracks.map(track => track.title),
                set2: setTwo ? setTwo.tracks.map(track => track.title) : [],
                set3: setThree ? setThree.tracks.map(track => track.title) : [],
                encore: setEncore ? setEncore.tracks.map(track => track.title) : [],
                fans: []
                
            }
            debugger    


        return Object.assign({}, state, show)


        default:
            return state
    }
}