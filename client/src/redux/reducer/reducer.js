import { ALL_GAMES, ALL_GENRES } from "../actions/action-types";

const initialState = {
    videogames: [],
    genres: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_GAMES:
            return {
                ...state,
                videogames: [...action.payload]
            }
        case ALL_GENRES:
            return {
                ...state,
                genres: [...action.payload]
            }
        default:
            return state;
    }
}

export default reducer;