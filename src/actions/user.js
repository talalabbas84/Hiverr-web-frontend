import axios from 'axios';
import { setAlert } from './alert';

import {
  PROFILE_PICTURE_FAIL,
  PROFILE_PICTURE_SUCCESS,
  LOADING_START,
  LOADING_STOP,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILURE,
  GET_ACCOUNT,
  CLEAR_USER,
  GET_PEOPLE_NEARBY,
  GET_LIKES,
  GET_VIEWS
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
    const errors = err.response.data.error.split(',') || ['Network Error'];

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
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      'https://hiverr-backend.herokuapp.com/api/v1/user'
      // '/api/v1/user'
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

export const getPeopleNearby = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      'https://hiverr-backend.herokuapp.com/api/v1/user/exceptloggedinuser'
      // '/api/v1/user'
    );
    console.log(res.data.data);

    dispatch({
      type: GET_PEOPLE_NEARBY,
      payload: res.data.data
    });
  } catch (err) {
    // dispatch({
    //   type: GET_ALL_USER_FAILURE
    // });
  }
};

export const getLikes = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      'https://hiverr-backend.herokuapp.com/api/v1/user/likes'
      // '/api/v1/user'
    );
    console.log(res.data.data);

    dispatch({
      type: GET_LIKES,
      payload: res.data.data
    });
  } catch (err) {
    // dispatch({
    //   type: GET_ALL_USER_FAILURE
    // });
  }
};
export const updateUsers = fieldsToUpdate => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(fieldsToUpdate);
  dispatch({
    type: LOADING_START
  });
  const body = JSON.stringify({
    fieldsToUpdate: fieldsToUpdate
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      // 'https://hiverr-backend.herokuapp.com/api/v1/user',
      'https://hiverr-backend.herokuapp.com/api/v1/user/update-details',
      body,
      config
    );

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

export const swipeRight = liked_to => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const body = JSON.stringify({
    liked_to: liked_to
  });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.put(
      'https://hiverr-backend.herokuapp.com/api/v1/match/right',
      body,
      config
    );

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

export const swipeLeft = liked_to => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const body = JSON.stringify({
    liked_to: liked_to
  });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.put(
      'https://hiverr-backend.herokuapp.com/api/v1/match/left',
      body,
      config
    );

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

export const getUser = id => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  dispatch({
    type: LOADING_START
  });

  dispatch({
    type: CLEAR_USER
  });
  const body = JSON.stringify({
    view_to: id
  });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.get(
      `https://hiverr-backend.herokuapp.com/api/v1/user/get-single-user/${id}`
    );
    await axios.post(
      `https://hiverr-backend.herokuapp.com/api/v1/user/view`,
      body,
      config
    );

    dispatch({
      type: LOADING_STOP
    });
    dispatch({
      type: GET_ACCOUNT,
      payload: res.data.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOADING_STOP
    });
    // const errors = err.response.data.error.split(',') || ['Network Error!'];

    // if (errors) {
    //   dispatch(setErrors(errors[0]));
    //   // errors.forEach(error => dispatch(setAlert(error, 'danger')));
    // }
  }
};

export const getViews = id => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  dispatch({
    type: LOADING_START
  });

  try {
    const res = await axios.get(
      `https://hiverr-backend.herokuapp.com/api/v1/user/view`
    );

    dispatch({
      type: LOADING_STOP
    });
    dispatch({
      type: GET_VIEWS,
      payload: res.data.views
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOADING_STOP
    });
    // const errors = err.response.data.error.split(',') || ['Network Error!'];

    // if (errors) {
    //   dispatch(setErrors(errors[0]));
    //   // errors.forEach(error => dispatch(setAlert(error, 'danger')));
    // }
  }
};
