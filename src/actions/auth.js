import React from 'react';
import axios from 'axios';
import { setAlert } from './alert';

import { useHistory, Redirect } from 'react-router-dom';
// import { browserHistory } from 'react-router-dom';
import { setNotification, setErrors } from './alert';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_AUTH,
  CLEAR_PROFILE,
  EMAIL_VERIFICATION_SUCCESS,
  EMAIL_VERIFICATION_FAIL,
  LOADING_START,
  EMAIL_RESEND_SUCCESS,
  EMAIL_RESEND_FAIL,
  GET_NOTIFICATION,
  LOADING_STOP,
  CLEAR_PROFILES,
  RESET_PASSWORD_CODE_SUCCESS
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
    const res = await axios.post(
      'https://hiverr-backend.herokuapp.com/api/v1/auth/login',
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error.split(',') || ['Network Error!'];

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger')));
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
    const res = await axios.put(
      'https://hiverr-backend.herokuapp.com/api/v1/auth/verifyemail',
      body,
      config
    );

    dispatch({
      type: EMAIL_VERIFICATION_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    history.push('/single-photo-upload');
  } catch (err) {
    const errors = err.response.data.error.split(',') || ['Network Error!'];

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger')));
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
      'https://hiverr-backend.herokuapp.com/api/v1/auth/resendverificationcode',
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
    const errors = err.response.data.error.split(',') || ['Network Error!'];

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger')));
    }

    dispatch({
      type: EMAIL_RESEND_FAIL
    });
  }
};

export const ResendResetPasswordVerification = email => async dispatch => {
  // alert('coming here');
  // setAuthToken(await readData());
  //

  try {
    dispatch({
      type: LOADING_START
    });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ email });
    console.log(body);
    const res = await axios.put(
      'https://hiverr-backend.herokuapp.com/api/v1/auth/resendresetcode',
      // 'http://192.168.0.110:5000/api/v1/auth/resendresetcode',
      body,
      config
    );

    console.log(res.data);

    // dispatch({
    //   type: EMAIL_RESEND_SUCCESS,
    //   payload: res.data,
    //   message: 'Verification code sent successfully',
    // });
    // alert('Reset Verification code sent successfully');
    dispatch(setNotification('Verification code sent successfully'));
  } catch (err) {
    const errors = err.response.data.error.split(',') || ['Network Error!'];

    if (errors) {
      dispatch(setErrors(errors[0]));
    }

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error, 'danger2')));
    // }

    // alert(errors);

    // dispatch({
    //   type: EMAIL_RESEND_FAIL,
    //   errors: errors,
    // });
    // setTimeout(() => dispatch({type: EMPTY_ERROR}), 5000);
  }
};

export const forgotPassword = email => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  dispatch({
    type: LOADING_START
  });

  const body = JSON.stringify({
    email
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      'https://hiverr-backend.herokuapp.com/api/v1/auth/forgotpassword',
      body,
      config
    );

    dispatch({
      type: LOADING_STOP
    });
    // alert('Reset Password Verification sent successfully');
    dispatch(setNotification('Verification code sent successfully'));
  } catch (err) {
    dispatch({
      type: LOADING_STOP
    });
    const errors = err.response.data.error.split(',') || ['Network Error!'];
    console.log(errors);
    if (errors) {
      // errors.forEach(error => dispatch(setErrors(error)));
      dispatch(setErrors(errors[0]));
    }
  }
};

export const ResetPasswordAfterValidCode = (
  newPassword,
  history
) => async dispatch => {
  // alert(email);

  // alert('dsddsdsa');
  // console.log()

  // setAuthToken(await readData());
  dispatch({
    type: LOADING_START
  });

  const body = JSON.stringify({
    newPassword
    // resetPasswordCode,
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      'https://hiverr-backend.herokuapp.com/api/v1/auth/updatepasswordaftercode',
      body,
      config
    );

    // dispatch({
    //   type: EMAIL_RESEND_SUCCESS,
    //   payload: res.data,
    //   message: 'Verification code sent successfully',
    // });
    // alert('Password changed successfully');
    dispatch({
      type: LOADING_STOP
    });

    // dispatch({ type: CLEAR_PROFILE });
    // dispatch({ type: LOGOUT });
    // dispatch({ type: CLEAR_PROFILES });
    dispatch({
      type: CLEAR_AUTH
    });
    delete axios.defaults.headers.common['authorization'];

    // console.log(res.data, 'dasdsdadsadsa');
    // navigation.navigate('Login');
    history.push('/login');
    // alert('Password changed successfully. Please Login again');

    // dispatch({
    //   type: SAVING_EMAIL,
    //   payload: email,
    // });
    // navigation.navigate('ForgetPasswordVerification');

    // console.log(res.data, 'isssa resenddddddddddd verification');

    // dispatch(setAlert('Verification code sent successfully', 'success2'));

    // dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOADING_STOP
    });
    const errors = err.response.data.error.split(',') || ['Network Error!'];

    if (errors) {
      dispatch(setErrors(errors[0]));
      // errors.forEach(error => dispatch(setAlert(error, 'danger')));
    }
    // dispatch({
    //   type: RESET_PASSWORD_ERROR,
    //   errors: 'Email could not be send. Please try again later.',
    // });
    // setTimeout(() => dispatch({type: EMPTY_ERROR}), 5000);
  }
};

export const validateForgotPassword = (
  resetPasswordCode,
  email,
  history
) => async dispatch => {
  // setAuthToken(readData());
  dispatch({
    type: LOADING_START
  });

  const body = JSON.stringify({
    email,
    resetPasswordCode
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      'https://hiverr-backend.herokuapp.com/api/v1/auth/verifyresetcode',
      body,
      config
    );

    // dispatch({
    //   type: EMAIL_RESEND_SUCCESS,
    //   payload: res.data,
    //   message: 'Verification code sent successfully',
    // });
    // alert('Password changed successfully');
    // dispatch({
    //   type: LOADING_STOP,
    // });

    dispatch({
      type: RESET_PASSWORD_CODE_SUCCESS,
      payload: res.data
    });

    // console.log(res.data, 'dasdsdadsadsa');
    // navigation.navigate('ForgetPasswordNext');
    history.push('/forget-password-verification');
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
