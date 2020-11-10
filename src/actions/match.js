import axios from 'axios';
import { setAlert } from './alert';

import {
  PROFILE_PICTURE_FAIL,
  PROFILE_PICTURE_SUCCESS,
  LOADING_START,
  LOADING_STOP,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILURE,
  GET_MATCHES
} from './types';

import { loadUser } from './auth';
import { setNotification, setErrors } from './alert';
import setAuthToken from '../utils/setAuthToken';

export const matched = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/match/matched');

    dispatch({
      type: LOADING_STOP
    });
    dispatch({
      type: GET_MATCHES,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOADING_STOP
    });
    const errors = err.response.data.error.split(',') || ['Network Error!'];

    if (errors) {
      dispatch(setErrors(errors[0]));
      // errors.forEach(error => dispatch(setAlert(error, 'danger')));
    }
  }
};
