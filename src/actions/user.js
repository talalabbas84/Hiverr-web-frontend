import axios from 'axios';
import { setAlert } from './alert';

import {
  PROFILE_PICTURE_FAIL,
  PROFILE_PICTURE_SUCCESS,
  LOADING_START
} from './types';

import { loadUser } from './auth';

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
      'https://hiverr-backend.herokuapp.com/api/v1/user/photo',

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
