import { GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from "../constants/userConstants"

export const GetUserReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER:
            return { loading: true }
        case GET_USER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case GET_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}