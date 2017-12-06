import axios from 'axios';

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
            .then(res => dispatch(getActivityResults(JSON.stringify(res.data))))
            .catch(err => dispatch(getActivityError(err)))

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
            .then(res => dispatch(getActivitiesResults(JSON.stringify(res.data))))
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
            .then(res => dispatch(getSavedResults(JSON.stringify(res.data))))
            .catch(err => dispatch(getSavedError(err)))

    }
}
