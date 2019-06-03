
import { API_FETCH, SET_FETCHING, SET_ERROR, SET_RESPONSE } from '../types/API';
import { setFetching, setError, setResponse } from '../actions/API';
const API = store => next => action => {
    // console.log('dispatching', action)
    switch (action.type) {
        case API_FETCH:
            const { url, name } = action.payload;
            store.dispatch(setFetching({ name }))
            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    store.dispatch(setResponse({ name, response: responseJson.results }))
                    // console.log("responseJson",responseJson)
                    return responseJson.results;
                })
                .catch((error) => {
                    store.dispatch(setError({ name, error }))

                    console.error("error>>>>", error);
                });
        // return next(action);
        default:
            return next(action);
    }
    // let result = next(action)
    // console.log('next state', store.getState())
    // return result
}
export default API;
