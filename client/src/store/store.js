import {configureStore} from '@reduxjs/toolkit' ;
import userReducer from '../store/UserSlice' ;
import busReducer from '../store/BusSlice' ;

export const store = configureStore({
      reducer: {
    user : userReducer,
    bus : busReducer,
  },
})