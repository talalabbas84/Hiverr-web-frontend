import {
  PROFILE_PICTURE_FAIL,
  PROFILE_PICTURE_SUCCESS,
  LOADING_START,
  LOADING_STOP,
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_SUCCESS
} from '../actions/types';

// import { useHistory } from 'react-router-dom';

const initialState = {
  loading: false,
  users: [],
  error: ''
};

export default function (state = initialState, action) {
  // const history = useHistory();
  const { type, payload } = action;

  switch (type) {
    case PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case PROFILE_PICTURE_FAIL:
      return {
        ...state,
        loading: false
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload
      };
    case GET_ALL_USER_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: payload
      };
    // case LOADING_START:
    //   return {
    //     ...state,
    //     loading: true
    //   };

    default:
      return state;
  }
}
