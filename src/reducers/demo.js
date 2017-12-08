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
  GET_USER_ERROR,
  SAVE_ACTIVITY_RESULTS,
  SAVE_ACTIVITY_ERROR,
  UNSAVE_ACTIVITY_RESULTS,
  UNSAVE_ACTIVITY_ERROR,
  FIND_OR_CREATE_USER_RESULTS,
  FIND_OR_CREATE_USER_ERROR
} from '../actions';

const initialState = {
    activities: [],
    first_time: true,
    results: ""
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ACTIVITY_RESULTS:
            return { ...state, results: "Activity: " + action.data }
        case SAVE_ACTIVITY_ERROR:
            return { ...state, results: "Failed to get activity!  " + action.data }
        case UNSAVE_ACTIVITY_RESULTS:
            return { ...state, results: "Activity: " + action.data }
        case UNSAVE_ACTIVITY_ERROR:
            return { ...state, results: "Failed to get activity!  " + action.data }
        case GET_ACTIVITY_RESULTS:
            return { ...state, results: "Activity: " + action.data }
        case GET_ACTIVITY_ERROR:
            return { ...state, results: "Failed to get activity!  " + action.data }
        case GET_ACTIVITIES_RESULTS:
            return { ...state, activities: action.data }
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
        case FIND_OR_CREATE_USER_RESULTS:
                return { ...state, first_time: action.data[1] }
        case FIND_OR_CREATE_USER_ERROR:
                return { ...state, first_time: action.data }

        default:
            return state
    }
}

export default demo;
