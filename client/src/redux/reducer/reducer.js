import { ALL_GAMES } from "../actions/action-types";

const initialState = {
    videogames: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_GAMES:
            return {
                ...state,
                videogames : [...action.payload]
            }
    
        default:
            return state;
    }
}

export default reducer;