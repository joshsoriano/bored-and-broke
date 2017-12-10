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
  UPDATE_TAGLINE_ERROR,
  ADD_ACTIVITY_RESULTS,
  ADD_ACTIVITY_ERROR,
  IS_UPDATE_NEEDED_RESULTS,
  IS_UPDATE_NEEDED_ERROR,
  REMOVE_USER_RESULTS,
  REMOVE_USER_ERROR,
  SAVE_USER_SETTINGS_RESULTS,
  SAVE_USER_SETTINGS_ERROR
} from '../actions';

const initialState = {
    activity: "",
    activities: [],
    is_first_time: null,
    saved_activities: [],
    tagline: "",
    user: {},
    users: [],
    results: "",
    is_update_needed: null,
    settings: "",
    ready_to_redirect: false,
    removed_from_db: false
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACTIVITY_RESULTS:
            return { ...state, results: action.data }
        case ADD_ACTIVITY_ERROR:
            return { ...state, results: JSON.stringify(action.data) }
        case SAVE_ACTIVITY_RESULTS:
            return { ...state, results: action.data }
        case SAVE_ACTIVITY_ERROR:
            return { ...state, results: JSON.stringify(action.data) }
        case UNSAVE_ACTIVITY_RESULTS:
            return { ...state, results: action.data }
        case UNSAVE_ACTIVITY_ERROR:
            return { ...state, results: JSON.stringify(action.data) }
        case GET_ACTIVITY_RESULTS:
            return { ...state, activity: action.data }
        case GET_ACTIVITY_ERROR:
            return { ...state, activity: JSON.stringify(action.data) }
        case GET_ACTIVITIES_RESULTS:
            return { ...state, activities: action.data }
        case GET_ACTIVITIES_ERROR:
                return { ...state, activities: JSON.stringify(action.data) }
        case GET_SAVED_RESULTS:
                return { ...state, saved_activities: action.data }
        case GET_SAVED_ERROR:
                return { ...state, saved_activities: JSON.stringify(action.data) }
        case GET_USERS_FOR_ACTIVITY_RESULTS:
                return { ...state, users: action.data }
        case GET_USERS_FOR_ACTIVITY_ERROR:
                return { ...state, users: JSON.stringify(action.data) }
        case GET_TAGLINE_RESULTS:
                return { ...state, tagline: action.data.tag }
        case GET_TAGLINE_ERROR:
                return { ...state, tagline: JSON.stringify(action.data) }
        case UPDATE_TAGLINE_RESULTS:
                return { ...state, results: action.data }
        case UPDATE_TAGLINE_ERROR:
                return { ...state, results: JSON.stringify(action.data) }
        case GET_USER_RESULTS:
                return { ...state, user: action.data }
        case GET_USER_ERROR:
                return { ...state, user: JSON.stringify(action.data) }
        case REMOVE_USER_RESULTS:
                return { ...state, removed_from_db: true }
        case REMOVE_USER_ERROR:
                return { ...state, results: JSON.stringify(action.data) }
        case FIND_OR_CREATE_USER_RESULTS:
                // This action.data is an array --> [{object}, boolean].
                return { ...state, is_first_time: action.data[1] }
        case FIND_OR_CREATE_USER_ERROR:
                return { ...state, is_first_time: JSON.stringify(action.data) }
        case IS_UPDATE_NEEDED_RESULTS:
                return { ...state, is_update_needed: action.data.is_update_needed }
        case IS_UPDATE_NEEDED_ERROR:
                return { ...state, is_updated_needed: JSON.stringify(action.data) }
        case SAVE_USER_SETTINGS_RESULTS:
                return { ...state, settings: JSON.stringify(action.data) }
        case SAVE_USER_SETTINGS_ERROR:
                return { ...state, settings: JSON.stringify(action.data) }

        default:
            return state
    }
}

export default demo;
