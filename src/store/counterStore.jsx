import {createSlice} from '@reduxjs/toolkit';

const initialState = {counter:0}
console.log(initialState)

const counterSlice = createSlice({
    name:'counter',
    initialState:initialState,
    reducers : {
     increase(state, action){
         state.counter = state.counter+ action.payload ;
     },
     increment(state){
         state.counter++;
     },
     decrement(state){
         state.counter--;
     },
    },
 })
 export const counterActions = counterSlice.actions;
 export default counterSlice.reducer ;