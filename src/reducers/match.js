import { GET_MATCHES, CLEAR_MATCH } from '../actions/types';

const initialState = {
  matches: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MATCHES:
      return {
        ...state,

        matches: payload
      };

    case CLEAR_MATCH:
      return {
        ...state,
        matches: []
      };
    default:
      return state;
  }
}
