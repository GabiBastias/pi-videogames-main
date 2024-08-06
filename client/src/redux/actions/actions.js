import axios from 'axios';
import { ALL_GAMES, ALL_GENRES, DELETE_DETAIL, FILTER, GET_DETAIL, GET_PLATFORMS, ORDER, SET_PAGE, WORD_NAME } from './action-types';

// Games
export const allGames = () => {
    const response = '/videogames';
    return async (dispatch) => {
        try {
            const { data } = await axios(response);
            return dispatch({
                type: ALL_GAMES,
                payload: data
            })
        } catch (error) {
            return { error: error.message };
        }
    }
}

export const wordName = (word) => {
    const response = `/videogames?name=${word}`;
    return async (dispatch) => {
        try {
            const { data } = await axios(response);
            return dispatch({
                type: WORD_NAME,
                payload: data
            })
        } catch (error) {
            alert("Game not found or didn't exist")
        }
    }
}

export const postGame = (game) => {
    const response = '/videogames/create';
    return async () => {
        try {
            await axios.post(response, game)
            .then(response => {
                if (response.status === 200) {
                    alert('Game created');                
                }
            })
        } catch (error) {
            alert("Failed to create game, please check the data.");
            return { error: error.message}
        }
    }
}

export const getPlatforms = () => {
    const response = '/videogames/platforms';
    return async (dispatch) => {
        try {
            const { data } = await axios(response)
            return dispatch ({
                type: GET_PLATFORMS,
                payload: data
            })
        } catch (error) {
            return { error: error.message }
        }
    }
}

// Genres
export const allGenres = () => {
    const response = '/videogames/genres';
    return async (dispatch) => {
        try {
            const { data } = await axios(response);
            return dispatch({
                type: ALL_GENRES,
                payload: data
            })
        } catch (error) {
            return { error: error.message };
        }
    }
}

// Detail
export const getDetail = (id) => {
    const response = `/videogames/detail/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios (response);
            return dispatch({
                type: GET_DETAIL,
                payload: data
            })
        } catch (error) {
            return { error: error.message }
        }
    }
}

export const deleteDetail = () => {
    return {
        type: DELETE_DETAIL,
        payload: {}
    }
}

// Paginated
export const setPage = (pageNumber) => {
    return{
        type: SET_PAGE,
        payload: pageNumber
    }
}

// Order & Filter
export const orderGames = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const filterGames = (filter, value) => {
    return {
        type: FILTER,
        payload: ({filter, value})
    }
}
