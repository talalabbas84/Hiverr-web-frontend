import { v4 as uuidv4 } from 'uuid';
import {
  SET_ALERT,
  REMOVE_ALERT,
  GET_NOTIFICATION,
  CLEAR_NOTIFICATION
} from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const setNotification = (msg, timeout = 1500) => dispatch => {
  dispatch({
    type: GET_NOTIFICATION,
    payload: msg
  });
  setTimeout(() => dispatch({ type: CLEAR_NOTIFICATION }), timeout);
};

// export const setError = (msg, timeout = 500) => dispatch => {
//   dispatch({
//     type: GET_NOTIFICATION,
//     payload: msg
//   });
//   setTimeout(() => dispatch({ type: CLEAR_NOTIFICATION }), timeout);
// };
