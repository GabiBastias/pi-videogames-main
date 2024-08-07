import { ALL_GAMES, ALL_GENRES, DELETE_DETAIL, FILTER, GET_DETAIL, GET_PLATFORMS, ORDER, SET_PAGE, WORD_NAME } from "../actions/action-types";

const initialState = {
    allGamesList: [],
    videogames: [],
    nameGenres: [],
    platforms: [],
    genres: [],
    detailedGame: {},
    currentPage: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_GAMES:
            return {
                ...state,
                videogames: [...action.payload],
                allGamesList: [...action.payload]
            }
        case ALL_GENRES:
            return {
                ...state,
                genres: [...action.payload]
            }
        case WORD_NAME:
            return {
                ...state,
                videogames: [...action.payload]
            }
        case GET_DETAIL:
            return {
                ...state,
                detailedGame: action.payload
            }
        case DELETE_DETAIL:
            return {
                ...state,
                detailedGame: action.payload
            }
        case SET_PAGE: 
            return {
                ...state,
                currentPage: action.payload
            }
        case GET_PLATFORMS:
            return{
                ...state,
                platforms: action.payload
            }
        case ORDER:
            let orderedVideogames = [...state.videogames];
            if (action.payload === 'Ascendant') {
                orderedVideogames.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name){
                        return -1;
                    }
                    return 0;
                })
            } else if (action.payload === 'Descendant') {
                orderedVideogames.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name){
                        return 1;
                    }
                    return 0;
                })
            } else if (action.payload === 'RatingUp') {
                orderedVideogames.sort((a,b) => b.rating - a.rating);
            } else if (action.payload === 'RatingDown') {
                orderedVideogames.sort((a,b) => a.rating - b.rating);
            } else if (action.payload === 'Default') {
                orderedVideogames = state.allGamesList;
            }
            return {
                ...state,
                videogames: orderedVideogames
            }
        case FILTER:
            const filteredGames = [...state.videogames];
            const allGames = [...state.allGamesList];
            let arrayOfGenres = [];
            if (action.payload.value === true) {
                state.nameGenres.push(action.payload.name);   
                const match = state.genres.find(gen => gen.name === action.payload.name);
                if (match) {
                    arrayOfGenres = filteredGames.filter(game => game.genres.includes(action.payload.name));
                }

            } else if (action.payload.value === false){
                const copyNameGenres = state.nameGenres.filter(gen => gen !== action.payload.name);
                state.nameGenres = copyNameGenres;
                const copyGenres = copyNameGenres.join(", ");
                arrayOfGenres = allGames.filter(game => game.genres.includes(copyGenres));
            }
            
            if (state.nameGenres.length === 0) {
                arrayOfGenres = [...state.allGamesList];
            }
            
            return {
                ...state,
                videogames: arrayOfGenres
            }

            // } else if (action.payload === 'DataBase'){
            //     arrayOfGenres = filteredGames.filter(game => {
            //         return typeof(game.id) === 'string';
            //     })
            // } else if (action.payload === 'API'){
            //     arrayOfGenres = filteredGames.filter(game => {
            //         return typeof(game.id) === 'number';
            //     })
            // } else if (action.payload === 'All') {
            //     arrayOfGenres = state.allGamesList;

        default:
            return state;
    }
}

export default reducer;