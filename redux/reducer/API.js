import { API_FETCH, SET_FETCHING, SET_ERROR, SET_RESPONSE } from '../types/API';

export default function API(state = {}, action) {
    switch (action.type) {
        case SET_FETCHING: {
            const { name } = action.payload;
            const _state = { ...state };
            _state[name] = {
                ..._state[name],
                isFetching: true
            }
            return _state;
        }
        case SET_ERROR: {
            const { name, error } = action.payload;
            const _state = { ...state };
            _state[name] = {
                ..._state[name],
                isFetching: false,
                error,
                response: null
            }
            return _state;
        }
        case SET_RESPONSE: {
            const { name, response } = action.payload;
            const _state = { ...state };
            _state[name] = {
                ..._state[name],
                isFetching: false,
                error: null,
                response
            }
            return _state;
        }
        default:
            return state
    }
}