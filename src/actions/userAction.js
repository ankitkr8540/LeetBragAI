import api from '../Api'; // adjust the path as necessary
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from '../constants/userConstants'

export const getUserInfo = (username) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_USER
        })

        const { data } = await api.get(`/${username}`)

        dispatch({
            type: GET_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        dispatch({
            type: GET_USER_FAIL,
            payload: message,
        })
    }
}