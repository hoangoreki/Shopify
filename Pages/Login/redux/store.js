import{loginReducer} from './reducer'
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  
  reducer: loginReducer,
  
})
export default store;
