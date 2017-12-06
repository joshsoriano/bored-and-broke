import {
  GET_ACTIVITY_RESULTS,
  GET_ACTIVITY_ERROR,
  GET_ACTIVITIES_RESULTS,
  GET_ACTIVITIES_ERROR,
  GET_SAVED_ERROR,
  GET_SAVED_RESULTS
} from '../actions';

const initialState = {
    results: ''
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITY_RESULTS:
            return { ...state, results: "Activity: " + action.data }
        case GET_ACTIVITY_ERROR:
            return { ...state, results: "Failed to get activity!  " + action.data }
        case GET_ACTIVITIES_RESULTS:
                return { ...state, results: "Activities: " + action.data }
        case GET_ACTIVITIES_ERROR:
                return { ...state, results: "Failed to get activities!  " + action.data }
        case GET_SAVED_RESULTS:
                return { ...state, results: "Activities: " + action.data }
        case GET_SAVED_ERROR:
                return { ...state, results: "Failed to get activities!  " + action.data }
        default:
            return state
    }
}

export default demo;
