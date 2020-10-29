import {
  PROFILE_PICTURE_FAIL,
  PROFILE_PICTURE_SUCCESS,
  LOADING_START
} from '../actions/types';

// import { useHistory } from 'react-router-dom';

const initialState = {
  loading: false
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
    case LOADING_START:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
