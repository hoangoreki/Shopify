

import { Alert } from 'react-native'; // to show alerts in app
import { LOGIN_SUCCESS, LOGOUT,LOGIN_FAIL, LOGIN_FAIL_EMAIL, LOGIN_FAIL_PASSWORD } from './actionTypes';

export function loginSuccess(email,password,message){
  let data={
    email,
    password
  }
  return {
    type: LOGIN_SUCCESS,
    payload: {user:data},
    message
  }
}
export function loginfailpassword(message){
  return{
    type: LOGIN_FAIL_PASSWORD,
    message 
  }
}
export function loginfailemail(message){
  return{
    type: LOGIN_FAIL_EMAIL,
    message 
  }
}
export function loginfail(message){
  return{
    type: LOGIN_FAIL,
    message 
  }
}
export function logout(email, password){
  let data={
    email,
    password
  }
  return {
    type: LOGOUT,
    payload: {user:data}
   
  };
}
 

// export const login = (loginInput) => {
//   const { username, password } = loginInput;
//   return (dispatch) => {  
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: "Login Success"
//     });
//   };
// };
// export const login = (username, password) => (dispatch) => {
//     return AuthService.login(username, password).then(
//       (data) => {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: { user: data },
//         });
//         return Promise.resolve();
//       },
//       (error) => {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();
//         dispatch({
//           type: LOGIN_FAIL,
//         });
//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         });
//         return Promise.reject();
//       }
//     );
//   };
//   export const logout = () => (dispatch) => {
//     AuthService.logout();
//     dispatch({
//       type: LOGOUT,
//     });
