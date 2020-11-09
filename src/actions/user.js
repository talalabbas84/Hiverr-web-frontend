import axios from 'axios';
import { setAlert } from './alert';

import {
  PROFILE_PICTURE_FAIL,
  PROFILE_PICTURE_SUCCESS,
  LOADING_START,
  LOADING_STOP,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILURE
} from './types';

import { loadUser } from './auth';
import { setNotification, setErrors } from './alert';
import setAuthToken from '../utils/setAuthToken';

export const profilePictureUpload = (file, history) => async dispatch => {
  dispatch({
    type: LOADING_START
  });
  // const convertedFile = new File([file], 'name.png');

  const bodyFormData = new FormData();
  bodyFormData.append('file', file);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  // const body = JSON.stringify({ file });
  // console.log(body);
  try {
    const res = await axios.put(
      'https://hiverr-backend.herokuapp.com/api/v1/user/multi-photo',

      bodyFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    dispatch({
      type: PROFILE_PICTURE_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    history.push('/encounter');
  } catch (err) {
    const errors = err.response.data.error.split(',');

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger2')));
    }

    dispatch({
      type: PROFILE_PICTURE_FAIL
    });
  }
};

export const multiPictureUpload = file => async dispatch => {
  dispatch({
    type: LOADING_START
  });
  // const convertedFile = new File([file], 'name.png');

  const bodyFormData = new FormData();
  bodyFormData.append('file', file);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  // const body = JSON.stringify({ file });
  // console.log(body);
  try {
    const res = await axios.put(
      'https://hiverr-backend.herokuapp.com/api/v1/user/multi-photo',

      bodyFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    dispatch({
      type: LOADING_STOP
      // payload: res.data
    });

    dispatch(loadUser());
    // history.push('/encounter');
  } catch (err) {
    const errors = err.response.data.error.split(',');

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, 'danger2')));
    }

    dispatch({
      type: LOADING_STOP
      // payload: res.data
    });
  }
};

export const deletePictures = url => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(url);
  dispatch({
    type: LOADING_START
  });

  const body = JSON.stringify({
    url
    // resetPasswordCode,
  });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      'https://hiverr-backend.herokuapp.com/api/v1/user/multi-photo-delete',
      body,
      config
    );

    console.log('hey what is it that youre doing');
    dispatch({
      type: LOADING_STOP
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

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://hiverr-backend.herokuapp.com/api/v1/user'
    );
    console.log(res.data.data);

    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_USER_FAILURE
    });
  }
};
