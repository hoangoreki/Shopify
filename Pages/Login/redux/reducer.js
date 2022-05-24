// import { CLEAR_MESSAGE, SET_MESSAGE } from "./actionTypes";
import { LOGIN_FAIL, LOGIN_FAIL_EMAIL, LOGIN_FAIL_PASSWORD, LOGIN_SUCCESS, LOGOUT } from './actionTypes';


const initialState={isLoggedIn: false, user:null, message:null}
export const loginReducer = (state = initialState, action) => {
  const {type,payload}=action;
  switch (type) {
    case LOGIN_SUCCESS:{
      return {
        ...state,
        isLoggedIn: true, 
        user:payload.user,
        message: "Login Success"

      };
    }
    case LOGIN_FAIL_EMAIL:{
      return{
        ...state,
        message: "Wrong Email"
      }
    }
    case LOGIN_FAIL_PASSWORD:{
      return{
        ...state,
        message: "Wrong Password"
      }
    }
    case LOGIN_FAIL:{
      return{
        ...state,
        message: "Login Fail"
      }
    }
    case LOGOUT:{
      return{
        ...state,
        isLoggedIn:false,
        user:payload.user,
        message:'LogOut Suceess'
      }
    }
    default:
      return state;
  }
};
export default loginReducer;
// const initialState = {};
// export default function (state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case SET_MESSAGE:
//       return { message: payload };
//     case CLEAR_MESSAGE:
//       return { message: "" };
//     default:
//       return state;
//   }
// }
