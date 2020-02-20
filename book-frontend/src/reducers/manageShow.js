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
            
        return{ ...state, searchingDb: true, addToDb: false, date: "" }


        case 'FETCHING_SHOW':
            
        return{...state, searchingDb: false, fetching: true}
        
        case 'ADD_FAN_TO_SHOW':
        
        return {
            ...state,
            fans: [...state.fans, action.fanShowData.username]
        }


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
                fans: [],
                memories: []  
            }
            debugger    
        return Object.assign({}, state, show)

        case 'DISPLAY_SHOW_FROM_DB':
            debugger
            const dbShow = {
                
                searchingDb: false,
                fetching: false,
                addToDb: false,
                date: action.show.data.attributes.display_date,
                location: action.show.data.attributes.display_location,
                venue: action.show.data.attributes.display_venue,
                set1: action.show.data.attributes.set1 .split(", "),
                set2: action.show.data.attributes.set2 === "" ? [] : action.show.data.attributes.set2.split(", "),
                set3: action.show.data.attributes.set3 === "" ? [] : action.show.data.attributes.set3.split(", "),
                encore: action.show.data.attributes.set_encore === "" ? [] : action.show.data.attributes.set_encore.split(", "),
                fans: action.show.included.filter(data => data.type === "fan"),
                memories: action.show.included.filter(data => data.type === "memory")
            }
            debugger

        return Object.assign({}, state, dbShow)


        default:
            return state
    }
}