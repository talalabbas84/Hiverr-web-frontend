import { combineReducers } from 'redux';

import auth from './auth';
import alert from './alert';
import user from './user';
import match from './match';

export default combineReducers({
  auth,
  alert,
  user,
  match
});
