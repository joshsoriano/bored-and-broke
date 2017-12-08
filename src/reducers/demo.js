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
  FIND_OR_CREATE_USER_ERROR,
  UPDATE_TAGLINE_RESULTS,
  UPDATE_TAGLINE_ERROR
} from '../actions';

const initialState = {
    activity: {},
    activities: [],
    is_first_time: null,
    saved_activities: [],
    tagline: "",
    user: {},
    users: [],
    results: ""
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ACTIVITY_RESULTS:
            return { ...state, results: action.data }
        case SAVE_ACTIVITY_ERROR:
            return { ...state, results: action.data }
        case UNSAVE_ACTIVITY_RESULTS:
            return { ...state, results: action.data }
        case UNSAVE_ACTIVITY_ERROR:
            return { ...state, results: action.data }
        case GET_ACTIVITY_RESULTS:
            return { ...state, activity: action.data }
        case GET_ACTIVITY_ERROR:
            return { ...state, activity: action.data }
        case GET_ACTIVITIES_RESULTS:
            return { ...state, activities: action.data }
        case GET_ACTIVITIES_ERROR:
                return { ...state, activities: action.data }
        case GET_SAVED_RESULTS:
                return { ...state, saved_activities: action.data }
        case GET_SAVED_ERROR:
                return { ...state, saved_activities: action.data }
        case GET_USERS_FOR_ACTIVITY_RESULTS:
                return { ...state, users: action.data }
        case GET_USERS_FOR_ACTIVITY_ERROR:
                return { ...state, users: action.data }
        case GET_TAGLINE_RESULTS:
                return { ...state, tagline: action.data }
        case GET_TAGLINE_ERROR:
                return { ...state, tagline: action.data }
        case UPDATE_TAGLINE_RESULTS:
                return { ...state, results: action.data }
        case UPDATE_TAGLINE_ERROR:
                return { ...state, results: action.data }
        case GET_USER_RESULTS:
                return { ...state, user: action.data }
        case GET_USER_ERROR:
                return { ...state, user: action.data }
        case FIND_OR_CREATE_USER_RESULTS:
                // Response is an array --> [{object}, boolean].
                return { ...state, is_first_time: action.data[1] }
        case FIND_OR_CREATE_USER_ERROR:
                return { ...state, is_first_time: action.data }

        default:
            return state
    }
}

export default demo;
