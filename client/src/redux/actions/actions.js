import axios from 'axios';
import { ALL_GAMES, ALL_GENRES, DELETE_DETAIL, FILTER, GET_DETAIL, ORDER, SET_PAGE, WORD_NAME } from './action-types';

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
          return { error: error.message };
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
            return { error: error.message };
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

export const filterGames = (filter) => {
    return {
        type: FILTER,
        payload: filter
    }
}
