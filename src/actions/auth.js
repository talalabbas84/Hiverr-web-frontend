import React from 'react';
import axios from 'axios';
import { setAlert } from './alert';

import { useHistory, Redirect } from 'react-router-dom';
// import { browserHistory } from 'react-router-dom';
import { setNotification } from './alert';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  EMAIL_VERIFICATION_SUCCESS,
  EMAIL_VERIFICATION_FAIL,
  LOADING_START,
  EMAIL_RESEND_SUCCESS,
  EMAIL_RESEND_FAIL,
  GET_NOTIFICATION
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(
      'https://hiverr-backend.herokuapp.com/api/v1/auth/me'
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({
  name,
  email,
  password,

  dob,
  gender,
  country,
  region,
  city,
  history
}) => async dispatch => {
  // const history = useHistory();
  dispatch({
    type: LOADING_START
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    name,
    email,
    password,

    dob,
    gender,
    country,
    region,
    city
  });

  try {
    const res = await axios.post(
      'https://hiverr-backend.herokuapp.com/api/v1/auth/register',
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    // navigation.navigate('Verification');
    // <Redirect to='/email-verification' />;
    // browserHistory.push('/email-verification');
    history.push('/email-verification');
  } catch (err) {
    // console.log(err.response.data.error.split(','));
    const errors = err.response.data.error.split(',') || ['Network Error!'];

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  dispatch({
    type: LOADING_START
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/v1/auth/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error.split(',');

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger2')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

export const emailVerification = (
  emailVerificationCode,
  history
) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  dispatch({
    type: LOADING_START
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ emailVerificationCode });
  console.log(body);
  try {
    const res = await axios.put('/api/v1/auth/verifyemail', body, config);

    dispatch({
      type: EMAIL_VERIFICATION_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    history.push('/single-photo-upload');
  } catch (err) {
    const errors = err.response.data.error.split(',');

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger2')));
    }

    dispatch({
      type: EMAIL_VERIFICATION_FAIL
    });
  }
};

export const ResendEmailVerification = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  dispatch({
    type: LOADING_START
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      '/api/v1/auth/resendverificationcode',
      null,
      config
    );

    dispatch({
      type: EMAIL_RESEND_SUCCESS,
      payload: res.data,
      message: 'Verification code sent successfully'
    });
    // dispatch(setAlert('Verification code sent successfully', 'success2'));

    dispatch(setNotification('Verification code sent successfully'));

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error.split(',');

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger2')));
    }

    dispatch({
      type: EMAIL_RESEND_FAIL
    });
  }
};
