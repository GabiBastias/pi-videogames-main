import axios from 'axios';
import { ALL_GAMES, ALL_GENRES } from './action-types';

export const allGames = () => {
    const response = '/videogames'
    return async (dispatch) => {
        try {
            const { data } = await axios(response);
            return dispatch({
                type: ALL_GAMES,
                payload: data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
}

export const allGenres = () => {
    const response = '/videogames/genres'
    return async (dispatch) => {
        try {
            const { data } = await axios(response);
            return dispatch({
                type: ALL_GENRES,
                payload: data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
}
