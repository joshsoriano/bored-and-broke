import { GET_ACTIVITY_RESULTS, GET_ACTIVITY_ERROR } from '../actions';

const initialState = {
    results: ''
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITY_RESULTS:
            return { ...state, results: "Activities: " + action.data }
        case GET_ACTIVITY_ERROR:
            return { ...state, results: "Failed to get activities!  " + action.data }
        default:
            return state
    }
}

export default demo;
