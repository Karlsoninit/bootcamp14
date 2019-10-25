// {
//     Authentication: {
//         user: {},
//         token: null,
//         error: null,
//         isAuthentication: false
//     }
// }
import Type from './AuthenticationType';

import { combineReducers } from 'redux';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      return payload.userData;
    case Type.LOGIN_ERROR:
      return state;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      return payload.token;
    case Type.LOGIN_ERROR:
      return state;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_ERROR:
      return payload;
    case Type.LOGIN_SUCCESS:
      return state;
    default:
      return state;
  }
};

const isAuthentication = (state = false, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  error,
  isAuthentication,
});
