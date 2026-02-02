import { createSlice } from "@reduxjs/toolkit";

const intitalValues = {
  _id : "",
    name : "",
    email : "",
    BusNo : "",
    mobile : "",
    verify_email : "",
    last_login_date : "",
    role : "",
}

 const userSlice = createSlice({
    name : 'user' ,
    initialState : intitalValues ,
    reducers : {
           setUserDetails : (state,action) =>{
            state._id = action.payload?._id
            state.name  = action.payload?.name
            state.email = action.payload?.email
            state.BusNo = action.payload?.BusNo
            state.mobile = action.payload?.mobile
            state.verify_email = action.payload?.verify_email
            state.last_login_date = action.payload?.last_login_date
            state.role = action.payload?.role
        },
    }
})

export const {setUserDetails} = userSlice.actions ;
export default userSlice.reducer ;