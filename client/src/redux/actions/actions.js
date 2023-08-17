import axios from 'axios';
import { ALL_GAMES } from './action-types';

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
            
        }
    }
}

