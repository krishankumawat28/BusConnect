import { createSlice } from "@reduxjs/toolkit";


const intitalValues = {
  _id : "",
    Ownername : "",
    numbers : "",
    departurePoint : "",
    mobile : "",
    startPoint : "",
    departureTime : "",
    startingTime : "",
    status : "" ,
    stops : "",
    startLat:"",
    startLng:"",
    departureLat:"",
    departureLng:""
}

 const busSlice = createSlice({
    name : 'bus' ,
    initialState : intitalValues ,
    reducers : {
           setBusDetails : (state,action) =>{
            state._id = action.payload?._id
            state.Ownername  = action.payload?.Ownername
            state.numbers = action.payload?.numbers
            state.departure = action.payload?.departure
            state.mobile = action.payload?.mobile
            state.startPoint = action.payload?.startPoint
            state.departureTime = action.payload?.departureTime
            state.startingTime = action.payload?.startingTime
            state.status = action.payload?.status
            state.stops = action.payload?.stops
            state.startLat = action.payload?.startLat
            state.startLng = action.payload?.startLng
            state.departureLat = action.payload?.departureLat
            state.departureLng = action.payload?.departureLng
            
        },
    }
})

export const {setBusDetails} = busSlice.actions ;
export default busSlice.reducer ;