import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {counter:0, showcounter:true }
console.log(initialCounterState)

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers : {
     increment(state){
         state.counter++;
     },
     decrement(state){
         state.counter--;
     },
     toggle(state){
        state.showcounter = !state.showcounter
     }
    },
 })
 export const counterActions = counterSlice.actions;
 export default counterSlice.reducer ;