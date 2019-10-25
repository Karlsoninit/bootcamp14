import axios from 'axios';
import { loginStart, loginSuccess, loginError } from './AuthenticationActions';

export const login = loginFormInfo => dispatch => {
  dispatch(loginStart());
  console.log(loginFormInfo);
  axios
    .post('https://dash-ads.goit.co.ua/api/v1/auth/login', loginFormInfo)
    .then(data => {
      console.log(data);
      dispatch(loginSuccess(data.data));
    })
    .catch(error => dispatch(loginError(error)));
};
