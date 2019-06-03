import { API_FETCH, SET_FETCHING, SET_ERROR, SET_RESPONSE } from '../types/API';
import { createAction } from '../../utils';
export const fetchAPI = createAction(API_FETCH);
export const setFetching = createAction(SET_FETCHING);
export const setError = createAction(SET_ERROR);
export const setResponse = createAction(SET_RESPONSE);
