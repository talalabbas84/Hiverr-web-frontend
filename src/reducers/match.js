import { GET_MATCHES } from '../actions/types';

const initialState = {
  matches: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MATCHES:
      return {
        ...state,
        loading: false,
        matches: payload
      };

    default:
      return state;
  }
}
