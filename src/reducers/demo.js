import {
  GET_ACTIVITY_RESULTS,
  GET_ACTIVITY_ERROR,
  GET_ACTIVITIES_RESULTS,
  GET_ACTIVITIES_ERROR,
  GET_SAVED_ERROR,
  GET_SAVED_RESULTS,
  GET_USERS_FOR_ACTIVITY_RESULTS,
  GET_USERS_FOR_ACTIVITY_ERROR,
  GET_TAGLINE_RESULTS,
  GET_TAGLINE_ERROR,
  GET_USER_RESULTS,
  GET_USER_ERROR
} from '../actions';

const initialState = {
    activities: []
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVITY_RESULTS:
            return { ...state, results: "Activity: " + action.data }
        case GET_ACTIVITY_ERROR:
            return { ...state, results: "Failed to get activity!  " + action.data }
        case GET_ACTIVITIES_RESULTS:
<<<<<<< HEAD
                return { ...state, results: action.data }
=======
            return { ...state, activities: action.data }
>>>>>>> cf84b35aa459a71d614ae1d7b0ea6df3012741c4
        case GET_ACTIVITIES_ERROR:
                return { ...state, results: "Failed to get activities!  " + action.data }
        case GET_SAVED_RESULTS:
                return { ...state, results: "Activities: " + action.data }
        case GET_SAVED_ERROR:
                return { ...state, results: "Failed to get activities!  " + action.data }
        case GET_USERS_FOR_ACTIVITY_RESULTS:
                return { ...state, results: "Users: " + action.data }
        case GET_USERS_FOR_ACTIVITY_ERROR:
                return { ...state, results: "Failed to get users!  " + action.data }
        case GET_TAGLINE_RESULTS:
                return { ...state, results: "Tagline: " + action.data }
        case GET_TAGLINE_ERROR:
                return { ...state, results: "Failed to get tagline!  " + action.data }
        case GET_USER_RESULTS:
                return { ...state, results: "User: " + action.data }
        case GET_USER_ERROR:
                return { ...state, results: "Failed to get user!  " + action.data }
        default:
            return state
    }
}

export default demo;
