import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  EMAIL_RESEND_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  EMAIL_VERIFICATION_FAIL,
  EMAIL_VERIFICATION_SUCCESS,
  RESET_PASSWORD_ERROR,
  LOADING_START,
  GET_NOTIFICATION,
  CLEAR_NOTIFICATION,
  EMAIL_RESEND_FAIL,
  RESET_PASSWORD_CODE_SUCCESS,
  CLEAR_ERRORS,
  GET_ERRORS,
  CLEAR_AUTH
} from '../actions/types';

// import { useHistory } from 'react-router-dom';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  isVerified: null,
  notification: '',
  error: ''
};

export default function (state = initialState, action) {
  // const history = useHistory();
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,

        isAuthenticated: true,
        loading: false,
        user: payload
      };

    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,

        errors: []
      };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        loading: false
      };
    case EMAIL_RESEND_FAIL:
      return {
        ...state,
        loading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      // localStorage.removeItem('token');
      return {
        ...state,
        // token: null,
        isAuthenticated: false,
        loading: false
      };
    case REGISTER_FAIL:
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    case EMAIL_VERIFICATION_SUCCESS:
      return {
        ...state,
        ...payload,
        isVerified: true,
        loading: false
      };
    case EMAIL_RESEND_SUCCESS: {
      return {
        ...state,
        loading: false
        // errors: payload,
      };
    }
    case GET_NOTIFICATION:
      return {
        ...state,
        loading: false,
        notification: payload
      };
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        loading: false,
        notification: ''
      };
    case GET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: ''
      };
    case CLEAR_AUTH:
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        isAuthenticated: null,
        loading: false,
        user: null,
        isVerified: null,
        notification: '',
        error: ''
      };
    case EMAIL_VERIFICATION_FAIL:
      return {
        ...state,
        ...payload,
        isVerified: false,
        loading: false
      };
    case LOADING_START:
      return {
        ...state,
        loading: true
      };
    case RESET_PASSWORD_CODE_SUCCESS: {
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        // user: payload,
        token: payload.token,
        loading: false
      };
    }
    default:
      return state;
  }
}
