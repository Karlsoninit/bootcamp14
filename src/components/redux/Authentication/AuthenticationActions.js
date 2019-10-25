import Type from './AuthenticationType';

export const loginStart = () => ({
  type: Type.LOGIN_START,
});

export const loginSuccess = data => ({
  type: Type.LOGIN_SUCCESS,
  payload: data,
});

export const loginError = error => ({
  type: Type.LOGIN_ERROR,
  payload: error,
});
