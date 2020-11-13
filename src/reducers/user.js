import {
  PROFILE_PICTURE_FAIL,
  PROFILE_PICTURE_SUCCESS,
  LOADING_START,
  LOADING_STOP,
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_SUCCESS,
  CLEAR_PROFILE,
  GET_ACCOUNT,
  CLEAR_USER,
  GET_PEOPLE_NEARBY,
  GET_LIKES,
  GET_VIEWS
} from '../actions/types';

// import { useHistory } from 'react-router-dom';

const initialState = {
  loading: false,
  users: [],
  error: '',
  profile: {},
  peopleNearby: [],
  likes: [],
  views: []
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
    case GET_VIEWS:
      return {
        ...state,
        loading: false,
        views: payload
      };
    case GET_LIKES:
      return {
        ...state,
        loading: false,
        likes: payload
      };
    case GET_PEOPLE_NEARBY:
      return {
        ...state,
        loading: false,
        peopleNearby: payload
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
    case CLEAR_USER:
      return {
        ...state,
        loading: false,
        user: {}
      };
    case GET_ACCOUNT:
      return {
        ...state,
        loading: false,
        profile: payload
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        loading: false,
        users: [],
        error: ''
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
