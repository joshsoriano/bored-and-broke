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
        axios.get(`/api/activities/id`, {
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
export const getActivities = () => {
    return dispatch => {
        dispatch(getActivitiesStart());
        axios.get(`/api/activities`)
            .then(res => dispatch(getActivitiesResults(JSON.stringify(res.data))))
            .catch(err => dispatch(getActivitiesError(err)))

    }
}

export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
export const expressTestStart = () => {
    return { type: EXPRESS_TEST_START }
}

export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
export const expressTestResults = (data) => {
    return { type: EXPRESS_TEST_RESULTS, data }
}

export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
export const expressTestError = (data) => {
    return { type: EXPRESS_TEST_ERROR, data }
}

export const EXPRESS_TEST = "EXPRESS_TEST";
export const expressTest = () => {
    return dispatch => {
        dispatch(expressTestStart());
        axios.get(`/api/express-test`)
            .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(expressTestError(err)))

    }
}
