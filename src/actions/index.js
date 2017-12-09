/**
  All functions that can be called from a container are defined in this file.
**/

import axios from 'axios';

export const ADD_ACTIVITY_START = "ADD_ACTIVITY_START";
export const addActivityStart = () => {
    return { type: ADD_ACTIVITY_START }
}
export const ADD_ACTIVITY_RESULTS = "ADD_ACTIVITY_RESULTS";
export const addActivityResults = (data) => {
    return { type: ADD_ACTIVITY_RESULTS, data }
}
export const ADD_ACTIVITY_ERROR = "ADD_ACTIVITY_ERROR";
export const addActivityError = (data) => {
    return { type: ADD_ACTIVITY_ERROR, data }
}

export const ADD_ACTIVITY = "ADD_ACTVIITY"
export const addActivity = (name, date, location, imageUrl, link, price, description) => {
    return dispatch => {
        dispatch(addActivityStart());
        axios.put(`/api/activities/add`, {
            data: {
                name: name,
                date: date,
                location: location,
                imageUrl: imageUrl,
                link: link,
                price: price,
                description: description
           }
        })
            .then(res => dispatch(addActivityResults(res.data)))
            .catch(err => dispatch(addActivityError(err)))
    }
}

export const GET_ACTIVITY_START = "GET_ACTIVITY_START";
export const getActivityStart = () => {
    return { type: GET_ACTIVITY_START }
}
export const GET_ACTIVITY_RESULTS = "GET_ACTIVITY_RESULTS";
export const getActivityResults = (data) => {
    return { type: GET_ACTIVITY_RESULTS, data }
}
export const GET_ACTIVITY_ERROR = "GET_ACTIVITY_ERROR";
export const getActivityError = (data) => {
    return { type: GET_ACTIVITY_ERROR, data }
}

export const GET_ACTIVITY = "GET_ACTVIITY"
export const getActivity = (activityId) => {
    return dispatch => {
        dispatch(getActivityStart());
        axios.get(`/api/activities/single`, {
        params: {
          id: activityId
        }
      })
            .then(res => dispatch(getActivityResults(res.data)))
            .catch(err => dispatch(getActivityError(err)))

    }
}

export const SAVE_ACTIVITY_START = "SAVE_ACTIVITY_START";
export const saveActivityStart = () => {
    return { type: SAVE_ACTIVITY_START }
}
export const SAVE_ACTIVITY_RESULTS = "SAVE_ACTIVITY_RESULTS";
export const saveActivityResults = (data) => {
    return { type: SAVE_ACTIVITY_RESULTS, data }
}
export const SAVE_ACTIVITY_ERROR = "SAVE_ACTIVITY_ERROR";
export const saveActivityError = (data) => {
    return { type: SAVE_ACTIVITY_ERROR, data }
}

export const SAVE_ACTIVITY = "SAVE_ACTVIITY"
export const saveActivity = (userId, activityId, tagline) => {
    return dispatch => {
        dispatch(saveActivityStart());
        axios.put(`/api/taglines/save/` + userId + `/` + activityId + `/` + tagline)
            .then(res => dispatch(saveActivityResults(res.data)))
            .catch(err => dispatch(saveActivityError(err)))

    }
}

export const UNSAVE_ACTIVITY_START = "UNSAVE_ACTIVITY_START";
export const unsaveActivityStart = () => {
    return { type: UNSAVE_ACTIVITY_START }
}
export const UNSAVE_ACTIVITY_RESULTS = "UNSAVE_ACTIVITY_RESULTS";
export const unsaveActivityResults = (data) => {
    return { type: UNSAVE_ACTIVITY_RESULTS, data }
}
export const UNSAVE_ACTIVITY_ERROR = "UNSAVE_ACTIVITY_ERROR";
export const unsaveActivityError = (data) => {
    return { type: UNSAVE_ACTIVITY_ERROR, data }
}

export const UNSAVE_ACTIVITY = "UNSAVE_ACTVIITY"
export const unsaveActivity = (userId, activityId) => {
    return dispatch => {
        dispatch(unsaveActivityStart());
        axios.delete(`/api/taglines/unsave/`, {
            params: {
                userId: userId,
                activityId: activityId
            }
        })
            .then(res => dispatch(unsaveActivityResults(res.data)))
            .catch(err => dispatch(unsaveActivityError(err)))

    }
}

export const GET_ACTIVITIES_START = "GET_ACTIVITIES_START";
export const getActivitiesStart = () => {
    return { type: GET_ACTIVITIES_START }
}
export const GET_ACTIVITIES_RESULTS = "GET_ACTIVITIES_RESULTS";
export const getActivitiesResults = (data) => {
    return { type: GET_ACTIVITIES_RESULTS, data }
}
export const GET_ACTIVITIES_ERROR = "GET_ACTIVITIES_ERROR";
export const getActivitiesError = (data) => {
    return { type: GET_ACTIVITIES_ERROR, data }
}

export const GET_ACTIVITIES = "GET_ACTVIITIES"
export const getActivities = (price) => {
    return dispatch => {
        dispatch(getActivitiesStart());
        axios.get(`/api/activities`, {
        params: {
            priceLimit: price
        }
      })
            .then(res => dispatch(getActivitiesResults(res.data)))
            .catch(err => dispatch(getActivitiesError(err)))

    }
}

export const GET_SAVED_START = "GET_SAVED_START";
export const getSavedStart = () => {
    return { type: GET_SAVED_START }
}

export const GET_SAVED_RESULTS = "GET_SAVED_RESULTS";
export const getSavedResults = (data) => {
    return { type: GET_SAVED_RESULTS, data }
}

export const GET_SAVED_ERROR = "GET_SAVED_ERROR";
export const getSavedError = (data) => {
    return { type: GET_SAVED_ERROR, data }
}

export const GET_SAVED = "GET_SAVED";
export const getSaved = (id) => {
    return dispatch => {
        dispatch(getSavedStart());
        axios.get(`/api/activities/saved`, {
          params: {
            userId: id
          }
        })
            .then(res => dispatch(getSavedResults(res.data)))
            .catch(err => dispatch(getSavedError(err)))

    }
}

export const GET_USERS_FOR_ACTIVITY_START = "GET_USERS_FOR_ACTIVITY_START";
export const getUsersForActivityStart = () => {
    return { type: GET_USERS_FOR_ACTIVITY_START }
}

export const GET_USERS_FOR_ACTIVITY_RESULTS = "GET_USERS_FOR_ACTIVITY_RESULTS";
export const getUsersForActivityResults = (data) => {
    return { type: GET_USERS_FOR_ACTIVITY_RESULTS, data }
}

export const GET_USERS_FOR_ACTIVITY_ERROR = "GET_USERS_FOR_ACTIVITY_ERROR";
export const getUsersForActivityError = (data) => {
    return { type: GET_USERS_FOR_ACTIVITY_ERROR, data }
}

export const GET_USERS_FOR_ACTIVITY = "GET_USERS_FOR_ACTIVITY";
export const getUsersForActivity = (id) => {
    return dispatch => {
        dispatch(getUsersForActivityStart());
        axios.get(`/api/taglines/all`, {
          params: {
            activityId: id
          }
        })
            .then(res => dispatch(getUsersForActivityResults(res.data)))
            .catch(err => dispatch(getUsersForActivityError(err)))

    }
}

export const GET_TAGLINE_START = "GET_TAGLINE_START";
export const getTaglineStart = () => {
    return { type: GET_TAGLINE_START }
}

export const GET_TAGLINE_RESULTS = "GET_TAGLINE_RESULTS";
export const getTaglineResults = (data) => {
    return { type: GET_TAGLINE_RESULTS, data }
}

export const GET_TAGLINE_ERROR = "GET_TAGLINE_ERROR";
export const getTaglineError = (data) => {
    return { type: GET_TAGLINE_ERROR, data }
}

export const GET_TAGLINE = "GET_TAGLINE";
export const getTagline = (userId, activityId) => {
    return dispatch => {
        dispatch(getTaglineStart());
        axios.get(`/api/taglines/single`, {
          params: {
            userId: userId,
            activityId: activityId
          }
        })
            .then(res => dispatch(getTaglineResults(res.data)))
            .catch(err => dispatch(getTaglineError(err)))

    }
}

export const GET_USER_START = "GET_USER_START";
export const getUserStart = () => {
    return { type: GET_USER_START }
}

export const GET_USER_RESULTS = "GET_USER_RESULTS";
export const getUserResults = (data) => {
    return { type: GET_USER_RESULTS, data }
}

export const GET_USER_ERROR = "GET_USER_ERROR";
export const getUserError = (data) => {
    return { type: GET_USER_ERROR, data }
}

export const GET_USER = "GET_USER";
export const getUser = (userId) => {
    return dispatch => {
        dispatch(getUserStart());
        axios.get(`/api/users`, {
          params: {
            id: userId
          }
        })
            .then(res => dispatch(getUserResults(res.data)))
            .catch(err => dispatch(getUserError(err)))

    }
}

export const SAVE_USER_SETTINGS_START = "SAVE_USER_SETTINGS_START";
export const saveUserSettingsStart = () => {
    return { type: SAVE_USER_SETTINGS_START }
}

export const SAVE_USER_SETTINGS_RESULTS = "SAVE_USER_SETTINGS_RESULTS";
export const saveUserSettingsResults = (data) => {
    return { type: SAVE_USER_SETTINGS_RESULTS, data }
}

export const SAVE_USER_SETTINGS_ERROR = "SAVE_USER_SETTINGS_ERROR";
export const saveUserSettingsError = (data) => {
    return { type: SAVE_USER_SETTINGS_ERROR, data }
}

export const SAVE_USER_SETTINGS = "SAVE_USER_SETTINGS";
export const saveUserSettings = (bio, userId) => {
    return dispatch => {
        dispatch(saveUserSettingsStart());
        axios.put(`/api/users/saveSettings` + bio + `/` + userId)
            .then(res => dispatch(saveUserSettingsResults(JSON.stringify(res.data))))
            .catch(err => dispatch(saveUserSettingsError(err)))

    }
}



export const REMOVE_USER_START = "REMOVE_USER_START";
export const removeUserStart = () => {
    return { type: REMOVE_USER_START }
}

export const REMOVE_USER_RESULTS = "REMOVE_USER_RESULTS";
export const removeUserResults = (data) => {
    return { type: REMOVE_USER_RESULTS, data }
}

export const REMOVE_USER_ERROR = "REMOVE_USER_ERROR";
export const removeUserError = (data) => {
    return { type: REMOVE_USER_ERROR, data }
}

export const REMOVE_USER = "REMOVE_USER";
export const removeUser = (userId) => {
    return dispatch => {
        dispatch(removeUserStart());
        axios.delete(`/api/users/remove`, {
          params: {
            userId: userId
          }
        })
            .then(res => dispatch(removeUserResults(res.data)))
            .catch(err => dispatch(removeUserError(err)))

    }
}

export const FIND_OR_CREATE_USER_START = "FIND_OR_CREATE_USER_START";
export const findOrCreateUserStart = () => {
    return { type: FIND_OR_CREATE_USER_START }
}

export const FIND_OR_CREATE_USER_RESULTS = "FIND_OR_CREATE_USER_RESULTS";
export const findOrCreateUserResults = (data) => {
    return { type: FIND_OR_CREATE_USER_RESULTS, data }
}

export const FIND_OR_CREATE_USER_ERROR = "FIND_OR_CREATE_USER_ERROR";
export const findOrCreateUserError = (data) => {
    return { type: FIND_OR_CREATE_USER_ERROR, data }
}

export const FIND_OR_CREATE_USER = "FIND_OR_CREATE_USER";
export const findOrCreateUser = (userId, name) => {
    return dispatch => {
        dispatch(findOrCreateUserStart());
        axios.put(`/api/users/find-or-create/` + userId + `/` + name)
            .then(res => dispatch(findOrCreateUserResults(res.data)))
            .catch(err => dispatch(findOrCreateUserError(err)))

    }
}

export const UPDATE_TAGLINE_START = "UPDATE_TAGLINE_START";
export const updateTaglineStart = () => {
    return { type: UPDATE_TAGLINE_START }
}

export const UPDATE_TAGLINE_RESULTS = "UPDATE_TAGLINE_RESULTS";
export const updateTaglineResults = (data) => {
    return { type: UPDATE_TAGLINE_RESULTS, data }
}

export const UPDATE_TAGLINE_ERROR = "UPDATE_TAGLINE_ERROR";
export const updateTaglineError = (data) => {
    return { type: UPDATE_TAGLINE_ERROR, data }
}

export const UPDATE_TAGLINE = "UPDATE_TAGLINE";
export const updateTagline = (userId, activityId, tagline) => {
    return dispatch => {
        dispatch(updateTaglineStart());
        axios.put(`/api/taglines/update/` + userId + `/` + activityId + `/` + tagline)
            .then(res => dispatch(updateTaglineResults(res.data)))
            .catch(err => dispatch(updateTaglineError(err)))

    }
}

export const IS_UPDATE_NEEDED_START = "IS_UPDATE_NEEDED_START";
export const isUpdateNeededStart = () => {
    return { type: IS_UPDATE_NEEDED_START }
}

export const IS_UPDATE_NEEDED_RESULTS = "IS_UPDATE_NEEDED_RESULTS";
export const isUpdateNeededResults = (data) => {
    return { type: IS_UPDATE_NEEDED_RESULTS, data }
}

export const IS_UPDATE_NEEDED_ERROR = "IS_UPDATE_NEEDED_ERROR";
export const isUpdateNeededError = (data) => {
    return { type: IS_UPDATE_NEEDED_ERROR, data }
}

export const IS_UPDATE_NEEDED = "IS_UPDATE_NEEDED";
export const isUpdateNeeded = (userId, activityId, tagline) => {
    return dispatch => {
        dispatch(updateTaglineStart());
        axios.get(`/api/activities/is-update-needed`)
            .then(res => dispatch(isUpdateNeededResults(res.data)))
            .catch(err => dispatch(isUpdateNeededError(err)))

    }
}
